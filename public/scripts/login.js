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
                  let username = data.data().username;
                  console.log(data.data().username, "bvb");

                  let currentUserRole = sessionStorage.setItem(
                    "role",
                    data.data().role
                  );
                  let currentUserName = sessionStorage.setItem(
                    "name",
                    data.data().username
                  );
                  let currentUserEmail = sessionStorage.setItem(
                    "mail",
                    data.data().email
                  );


                });


              },
              err => {
                console.log(err);
              }
            );

          let currentUserID = sessionStorage.setItem(
            "id",
            currentUsers.l
          );


        })
        .catch(function (error) {
          console.log(error);
        });
      let currentUser = sessionStorage.setItem(
        "user",
        firebase.auth().currentUser
      );


      location.href = "./index.html";
    })
    .catch(err => {
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
