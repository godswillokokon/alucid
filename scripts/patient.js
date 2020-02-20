const Pfullname = document.querySelector(".fullname");
const PdateCreated = document.querySelector(".dateCreated");
const Pemail = document.querySelector(".email");
const Pmobile = document.querySelector(".mobile");
const Psex = document.querySelector(".sex");
const Preport = document.querySelector(".report");
const Page = document.querySelector(".age");


let drugName = document.getElementById("drugName");
let dosage = document.getElementById("dosage");
let dateTreated = document.getElementById("dateTreated");
let info = document.getElementById("info");


let id = window.location.search.split("?")[1];
db.collection("patients")
  .doc(id)
  .get()
  .then(doc => {

    lname = doc.data().lname;
    fname = doc.data().fname;
    let names = fname + " " + lname;
    dateCreated = doc.data().dateCreated;
    mobile = doc.data().mobile;
    sex = doc.data().sex;
    age = doc.data().age;
    email = doc.data().email;
    description = doc.data().description;

    let currentPatientname = sessionStorage.setItem(
      "currentPatientname",
      names
    );
    let currentPatientemail = sessionStorage.setItem(
      "currentPatientemail",
      email
    );
    let currentPatientID = sessionStorage.setItem(
      "currentPatientID",
      id
    );


    const htmlPname = `
         <h4 class="m-t-10 text-light">${names}</h4>
      `;
    Pfullname.innerHTML = htmlPname;

    const htmlPdate = `
     ${dateCreated}
      `;
    PdateCreated.innerHTML = htmlPdate;

    const htmlPemail = `
      ${email}
      `;
    Pemail.innerHTML = htmlPemail;

    const htmlPmobile = `
      ${mobile}
      `;
    Pmobile.innerHTML = htmlPmobile;

    const htmlPage = `
        ${age}
      `;
    Page.innerHTML = htmlPage;

    const htmlPsex = `
       ${sex}
      `;
    Psex.innerHTML = htmlPsex;

    const htmlPreport = `
        <div>${description}</div>
      `;
    Preport.innerHTML = htmlPreport;


  })
  .catch(err => {
    console.error(err);
  });
