const addPatients = document.querySelector(".addPatients");

addPatients.addEventListener("submit", e => {
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let sex = document.getElementById("sex").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let dateCreated = document.getElementById("dateCreated").value;
  let description = document.getElementById("description").value;

  return db
    .collection("patients")
    .doc()
    .set({
      lname,
      fname,
      dateCreated,
      mobile,
      sex,
      age,
      email,
      description
    })
    .catch(err => {
      console.error(err);
    });
});

