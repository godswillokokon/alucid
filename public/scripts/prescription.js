const prescribe = document.querySelector(".prescribe");


prescribe.addEventListener("submit", e => {
  e.preventDefault();

  let drugName = document.getElementById("drugName").value;
  let dosage = document.getElementById("dosage").value;
  let dateTreated = document.getElementById("dateTreated").value;
  let info = document.getElementById("info").value;

  let Patientname = sessionStorage.getItem("currentPatientname");
  let Patientemail = sessionStorage.getItem("currentPatientemail");
  let PatientID = sessionStorage.getItem("currentPatientID");

  let Doc = sessionStorage.getItem("name");

  return db
    .collection("drugs")
    .doc()
    .set({
      drugName,
      dosage,
      dateTreated,
      info,
      Patientname,
      Patientemail,
      PatientID,
      Doc
    })
    .catch(err => {
      console.error(err);
    });



});

