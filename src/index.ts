import FHIR from "fhirclient";
import {Patient} from "fhir/r4";

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

FHIR.oauth2.ready().then(client => {
  document.getElementById("launch_link")?.remove()

  client.patient.read().then(pt => updatePatientName(getPatientName(pt)))
})
