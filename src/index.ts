import FHIR from "fhirclient";
import {Bundle, Observation, Patient, Quantity} from "fhir/r4";

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

function getValuesFromBundle(bundle: Bundle<Observation>) {
  const values: Quantity[] = [];

  if (!bundle.entry) {
    return values;
  }

  bundle.entry.forEach(el => {
    const val = el.resource?.valueQuantity;
    if (val) values.push(val)
  })
  return values;
}

function populateListFromValues(elementId: string, res: Bundle<Observation>) {
  const listElement = document.getElementById(elementId);
  if (!listElement) return;

  const values = getValuesFromBundle(res);

  if (values.length === 0) {
    listElement.innerHTML = 'No values found';
  } else {
    listElement.innerHTML = '';
    values.forEach(val => listElement.innerHTML += `<li>${val?.value} ${val?.unit}</li>`)
  }
}

FHIR.oauth2.ready().then(client => {
  document.getElementById("launch_link")?.remove()
  const ptId = client.patient.id;
  console.log(ptId)

  client.patient.read().then(pt => updatePatientName(getPatientName(pt)))

  client.patient
    .request<Bundle<Observation>>('Observation?code=29463-7') // note use of back-tick
    .then(res => populateListFromValues('wt_list', res))

  client.patient
    .request<Bundle<Observation>>('Observation?code=8302-2') // note use of back-tick
    .then(res => populateListFromValues('ht_list', res))
})
