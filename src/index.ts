import FHIR from "fhirclient";

FHIR.oauth2.ready().then(client => {
  console.log(client.state.clientId)
})
