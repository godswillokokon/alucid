// let maill = window.location.search.split("?")[1];
// console.log(maill);
let pat = sessionStorage.getItem("pat");
db
  .collection("treatments")
  //.where("Temail", "==", pat)
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
    let Tfname = data.data().Tname;
    let Tdname = data.data().Tdrugname;
    let Temail = data.data().Temail;
    let Tdose = data.data().Tdosage;
    let Tpharm = data.data().Pharm;
    let Tdoc = data.data().Doctor;

    console.log("Temail");


    const div = `

 <tr>
                                            <td>${Tfname}</td>
                                            
                                            <td><span class="text-info">${Tdname}</span></td>
                                            <td>${Temail}</td>
                                            <td>${Tdose}</td>
                                            
                                            <td>
                                            ${Tpharm}
                                            </td>
                                            <td>${Tdoc}</td>
                                        </tr>
    `;
    html += div;
  });
  allTreatedT.innerHTML = html;


};




