

const allTreated = document.querySelector(".allTreated");
const PsetupContent = data => {
  let html = "";
  data.forEach(data => {

    let Tid = data.id;
    let Tfname = data.data().Tname;
    let Tdname = data.data().Tdrugname;
    let Temail = data.data().Temail;
    let Tdose = data.data().Tdosage;
    let Tpharm = data.data().Pharm;
    let Tdoc = data.data().Doctor;



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
  allTreated.innerHTML = html;
};

db.collection("treatments")
  //.orderBy("dateCreated", "asc")
  // .where("courseLevel", "<=", level)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      PsetupContent(data);
    },
    err => {
      console.log(err);
    }
  );

