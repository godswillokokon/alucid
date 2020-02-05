
const TPname = document.querySelector(".TPname");
const TPdrugname = document.querySelector(".TPdrugname");
const TPemail = document.querySelector(".TPemail");
const TPdate = document.querySelector(".TPdate");
const TPdosage = document.querySelector(".TPdosage");
const TPinfo = document.querySelector(".TPinfo");
const TPpatientID = document.querySelector(".TPpatientID");
const TPdoc = document.querySelector(".TPdoc");
let pat = sessionStorage.getItem("pat");

const allPatients = document.querySelector(".patients");
const PsetupContent = data => {
  let html = "";
  data.forEach(data => {
    let Pid = data.id;
    let Pfname = data.data().fname;
    let Plname = data.data().lname;
    let Pemail = data.data().email;
    let Pdate = data.data().dateCreated;
    let Pmobile = data.data().mobile;
    let Psex = data.data().sex;
    let Page = data.data().age;
    let Pdescription = data.data().description;

    const div = `
        <tr>
         <td><span class="list-icon"><img class="patients-img" src="http://www.wrraptheme.com/templates/lucid/hospital/assets/images/logo-icon.svg" alt=""></span></td>
         <td><span class="list-name">${Pid}</span></td>
         <td>${Pfname} ${Plname}</td>
         <td>${Page}</td>
         <td>${Pemail}</td>
         <td>${Pmobile}</td>
         <td>${Pdate}</td>
         <td><a href="./patient-profile.html?${Pid}" ><button type="button" class="btn btn-danger"><i class="fa fa-medkit"></i> </button> </a></td>
       </tr>
    `;
    html += div;
  });
  allPatients.innerHTML = html;
};

db.collection("patients")
  .orderBy("dateCreated", "asc")
  .where("fname", "==", pat)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      PsetupContent(data);
    },
    err => {
      console.log(err);
    }
  );

