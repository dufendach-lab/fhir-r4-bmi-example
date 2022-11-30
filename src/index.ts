import FHIR from "fhirclient";
import {Bundle, Observation, Patient} from "fhir/r4";
import {fhirclient} from "fhirclient/lib/types";
import dateTime = fhirclient.FHIR.dateTime;

/**
 * Extract names from FHIR Patient object
 * @param pt FHIR patient
 * @return string with list of names or "Name not found"
 */
function getPatientName(pt: Patient) {
  if (pt.name) {
    const names = pt.name.map(name => `${name.given?.join(" ")} ${name.family}`)
    return names.join(" / ")
  }

  return "Name not found"
}

/**
 * Update the 'pt_name' document to the text of 'name'
 *
 * @param name string containing the patient name(s)
 */
function updatePatientName(name: string) {
  const el = document.getElementById('pt_name');

  if (el) {
    el.innerHTML = name;
  }
}

////////////////////////// Weight List /////////////////////////////

/**
 * Stores the value, unit, and time of a quantity Observation
 */
type TimedObservationQuantity = {
  value: number;
  unit: string;
  time: dateTime
}

/**
 * Create a list of TimedObservationQuantity quantities from a FHIR bundle
 *
 * @param bundle FHIR Observation bundle
 * @param {boolean=} [sort] Whether or not to sort list. Sorts if left blank
 */
function getValuesFromBundle(bundle: Bundle<Observation>, sort = true) {
  const values: TimedObservationQuantity[] = [];
  const entries = bundle.entry;

  if (entries) {
    entries.forEach(el => {
      const res = el.resource;
      if (res?.effectiveDateTime && res.valueQuantity) {
        const val = res.valueQuantity;
        if (!val.value || !val.unit) return;

        if (val) values.push({
          value: val.value,
          unit: val.unit,
          time: res.effectiveDateTime
        })
      }
    })

    if (sort) {
      values.sort((a, b) => (a.time < b.time ? -1 : 1))
    }
  }

  return values;
}

/**
 * Populate a given elementID with the results from a bundle
 *
 * @param elementId
 * @param res
 */
function populateListFromValues(elementId: string, res: Bundle<Observation>) {
  const listElement = document.getElementById(elementId);
  if (!listElement) return Promise.reject(`Element '${elementId}' not found`);

  const values = getValuesFromBundle(res);

  if (values.length === 0) {
    listElement.innerHTML = 'No values found';
  } else {
    listElement.innerHTML = '';
    values.forEach(val => listElement.innerHTML += `<li>${val?.value} ${val?.unit}</li>`)
  }

  return Promise.resolve(values)
}

/**
 * Calculate a BMI from a given wt and ht
 * @param values values including a weight in kg, ht in meters
 */
function calculateBMI(values: {wt: number, ht: number}) {
  return values.wt / Math.pow(values.ht, 2)
}

FHIR.oauth2.ready().then(client => {
  document.getElementById("launch_link")?.remove()
  const ptId = client.patient.id;
  console.log(ptId)

  // Update patient name
  client.patient.read().then(pt => updatePatientName(getPatientName(pt)))

  // Obtain list of patient weight and heights, update BMI when both bundles have data
  Promise.all([
    client.patient
      .request<Bundle<Observation>>('Observation?code=29463-7')
      .then(weights => populateListFromValues('wt_list', weights)),
    client.patient
      .request<Bundle<Observation>>('Observation?code=8302-2')
      .then(heights => populateListFromValues('ht_list', heights))
  ]).then(([weights, heights]) => {
    const bmiEl = document.getElementById('bmi');
    if (bmiEl && weights.length > 0 && heights.length > 0) {
      bmiEl.innerHTML = calculateBMI({
        wt: weights[weights.length - 1].value,
        ht: heights[heights.length - 1].value / 100
      }).toFixed(2)
    }
  })
})
