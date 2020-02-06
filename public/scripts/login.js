let empty = null
let currentUserRole = sessionStorage.setItem(
  "role",
  empty
);

let currentUserName = sessionStorage.setItem(
  "name",
  empty
);
let currentUserEmail = sessionStorage.setItem(
  "mail",
  empty
);
console.log("emptyn", currentUserEmail);
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
//login
const loginForm = document.querySelector(".form-auth-small");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["signin-email"].value;
  const password = loginForm["signin-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (idToken) {
          // Send token to your backend via HTTPS
          let currentUsers = firebase.auth().currentUser;
          console.log(currentUsers, "user");

          console.log(idToken, "token");
          db.collection("users")

            .where("email", "==", email)
            .onSnapshot(
              doc => {
                let data = doc.docs;
                data.forEach(data => {
                  let id = data.id;
                  let actualData = data.data()
                  let email = data.data().email;
                  let role = data.data().role;
                  console.log(role, "role")
                  let username = data.data().username;

                  let currentUserRole = sessionStorage.setItem(
                    "role",
                    role
                  );

                  let currentUserName = sessionStorage.setItem(
                    "name",
                    username
                  );
                  let currentUserEmail = sessionStorage.setItem(
                    "mail",
                    email
                  );
                  let currentUserID = sessionStorage.setItem(
                    "id",
                    currentUsers.l
                  );
                  let currentUser = sessionStorage.setItem(
                    "user",
                    firebase.auth().currentUser
                  );


                });


              },
              err => {
                console.log(err);
                alert("Err :", err)
              });





        })
        .catch(function (error) {
          console.log(error);
          alert("Err :", error)
        });


      setTimeout(function () {
        location.href = "./index.html";
      }, 5000);


    })
    .catch(err => {
      alert("Err :", err.code)
      console.log(err);

    });
});

function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    let currentUser = sessionStorage.removeItem("user");
    console.log("user is logging out");
    // location.href = "index.html";
  });
  // console.log("am logging out");
}
