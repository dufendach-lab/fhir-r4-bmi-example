import FHIR from "fhirclient";

FHIR.oauth2.ready().then(client => {
  document.getElementById("launch_link")?.remove()

  console.log(client.state.clientId)
})
