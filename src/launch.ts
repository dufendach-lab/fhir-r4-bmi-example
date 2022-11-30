import FHIR from "fhirclient";

FHIR.oauth2.authorize({
  clientId: 'my_fhir_web_app',
  fhirServiceUrl: 'https://r4.smarthealthit.org',
  redirectUri: "index.html",
  patientId: "a85b31e5-8f0c-480d-9e81-67408608dd7a",
})
