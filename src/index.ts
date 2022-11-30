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

// function getObservationByCode(client: Client, code: string) {
//   return client.request<Observation>(`Observation?code=${code}`)
// }

type TimedObservationQuantity = {
  value: number;
  unit: string;
  time: dateTime
}

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

FHIR.oauth2.ready().then(client => {
  document.getElementById("launch_link")?.remove()
  const ptId = client.patient.id;
  console.log(ptId)

  client.patient.read().then(pt => updatePatientName(getPatientName(pt)))

  Promise.all([
    client.patient.request<Bundle<Observation>>('Observation?code=29463-7'),
    client.patient.request<Bundle<Observation>>('Observation?code=8302-2')
  ]).then(([weights, heights]) => {
    populateListFromValues('wt_list', weights)
    populateListFromValues('ht_list', heights)
  })

})
