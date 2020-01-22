const allDrugs = document.querySelector(".allDrugs");
const PsetupContentD = data => {
  let html = "";
  data.forEach(data => {
    let Pid = data.id;
    let Doc = data.data().Doc;
    let PatientID = data.data().PatientID;
    let Patientemail = data.data().Patientemail;
    let Patientname = data.data().Patientname;
    let dateTreated = data.data().dateTreated;
    let dosage = data.data().dosage;
    let drugName = data.data().drugName;
    let info = data.data().info;



    const div = `

                                          <tr>
                                           
                                            
                                           
                                            <td>${PatientID}</td>

                                            <td>
                                            ${Patientname}
                                            </td>
                                            <td>${Patientemail}</td>
                                        
                                             <td><span class="text-info">${Doc}</span></td>
                                            <td>${dateTreated}</td>
                                            <td>${dosage}</td>
                                            <td>${drugName}</td>
                                        </tr>
    `;
    html += div;
  });
  allDrugs.innerHTML = html;
};

db.collection("drugs")
  .orderBy("Patientname", "asc")
  // .where("courseLevel", "<=", level)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      PsetupContentD(data);
    },
    err => {
      console.log(err);
    }
  );

