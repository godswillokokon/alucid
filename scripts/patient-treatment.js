// let maill = window.location.search.split("?")[1];
// console.log(maill);
// let pat = sessionStorage.getItem("pat");
// console.log(pat)
let pat = window.location.search.split("?")[1];

console.log(pat)
db
  .collection("drugs")
  .orderBy("dateTreated", "asc")
  .where("Patientemail", "==", pat)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      PsetupContentt(data);
    },
    err => {
      console.log(err);
    }
  );

const allTreatedT = document.querySelector(".allTreatedT");
const PsetupContentt = data => {
  let html = "";
  data.forEach(data => {

    let Tid = data.id;
    let Tfname = data.data().Patientname;
    let Tdname = data.data().drugName;
    let Temail = data.data().Patientemail;
    let Tdose = data.data().dosage;
    let Tpharm = data.data().Pharm;
    let Tdoc = data.data().Doc;
    let treated = data.data().dateTreated;

    console.log("Temail");


    const div = `

 <tr>
                                            <td>${Tfname}</td>
                                            
                                            <td><span class="text-info">${Tdname}</span></td>
                                            <td>${Temail}</td>
                                            <td>${Tdose}</td>
                                            
                                            <td>
                                            ${treated}
                                            </td>
                                            <td>${Tdoc}</td>
                                        </tr>
    `;
    html += div;
  });
  allTreatedT.innerHTML = html;


};




