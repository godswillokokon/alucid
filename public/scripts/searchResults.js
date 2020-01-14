const TPname = document.querySelector(".TPname");
const TPdrugname = document.querySelector(".TPdrugname");
const TPemail = document.querySelector(".TPemail");
const TPdate = document.querySelector(".TPdate");
const TPdosage = document.querySelector(".TPdosage");
const TPinfo = document.querySelector(".TPinfo");
const TPpatientID = document.querySelector(".TPpatientID");
const TPdoc = document.querySelector(".TPdoc");
let UserTARGET = sessionStorage.getItem("target");


let id = window.location.search.split("?")[1];
db.collection("drugs")
  .doc(id)
  .get()
  .then(doc => {

    PatientID = doc.data().PatientID;
    Patientemail = doc.data().Patientemail;

    Patientname = doc.data().Patientname;
    dateTreated = doc.data().dateTreated;
    dosage = doc.data().dosage;
    drugName = doc.data().drugName;
    info = doc.data().info;
    Doc = doc.data().Doc;

    const htmlPname = `
      ${Patientname}
      `;
    TPname.innerHTML = htmlPname;

    const htmlemail = `
        ${Patientemail}
      `;
    TPemail.innerHTML = htmlemail;

    const htmlID = `
      ${PatientID}
      `;
    TPpatientID.innerHTML = htmlID;

    const htmldrugname = `
       ${drugName}
      `;
    TPdrugname.innerHTML = htmldrugname;

    const htmlDoc = `
       ${Doc}
      `;
    TPdoc.innerHTML = htmlDoc;

    const htmlDate = `
     ${dateTreated}
      `;
    TPdate.innerHTML = htmlDate;

    const htmlDose = `
        ${dosage}
      `;
    TPdosage.innerHTML = htmlDose;

    const htmlInfo = `
        ${info}
      `;
    TPinfo.innerHTML = htmlInfo;




  })
  .catch(err => {
    console.error(err);
  });
