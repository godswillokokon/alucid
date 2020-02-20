auth.onAuthStateChanged(user => {
  if (user) {
    let currentUser = firebase.auth().currentUser.email;
    sessionStorage.setItem("user", currentUser);
    let currentUserSession = sessionStorage.getItem("user");

    console.log(currentUserSession);

    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
// signup
const signupForm = document.querySelector(".form-auth-small");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const username = signupForm["signup-name"].value;
  const role = signupForm["signup-role"].value;
  //signup user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (idToken) {
          // console.log(idToken);
          // Send token to your backend via HTTPS
          // setupUI(cred);
          let currentUsers = firebase.auth().currentUser;
          let currentUserID = sessionStorage.setItem(
            "id",
            currentUsers.l
          );


          return db
            .collection("users")
            .doc(cred.user.email)
            .set({
              username,
              email,
              role
            });
        })
        .catch(function (error) {
          console.log(error);
        });

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
    console.log("user is logged out");
    let currentUser = sessionStorage.removeItem("user");
    let regNumSession = sessionStorage.removeItem("regnum");
    // location.href = "index.html";
  });
  console.log("am logging out");
}
