const treatment = document.querySelector(".treatment");

treatment.addEventListener("click", e => {
  e.preventDefault();

  let Tname = document.querySelector(".TPname").innerHTML;
  let Tdrugname = document.querySelector(".TPdrugname").innerHTML;
  let Temail = document.querySelector(".TPemail").innerHTML;
  let Tdate = document.querySelector(".TPdate").innerHTML;
  let Tdosage = document.querySelector(".TPdosage").innerHTML;
  let Tinfo = document.querySelector(".TPinfo").innerHTML;
  let TdrugID = sessionStorage.getItem("target");
  let Doctor = document.querySelector(".TPdoc").innerHTML;
  let TpatientID = document.querySelector(".TPpatientID").innerHTML;
  let Pharm = sessionStorage.getItem("name");




  return db
    .collection("treatments")
    .doc()
    .set({
      Tname,
      Tdrugname,
      Temail,
      Tdate,
      Tdosage,
      Tinfo,
      TdrugID,
      TpatientID,
      Pharm,
      Doctor
    }, alert("Success"))
    .catch(err => {
      console.error(err);
    });

});

