auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  // const displayName = signupForm["login-name"].value;

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
          console.log(currentUser, "session");
        })
        .catch(function (error) {
          console.log(error);
        });
      let currentUser = sessionStorage.setItem(
        "user",
        firebase.auth().currentUser
      );
      const RegNum = document.querySelector("#login-regnum");

      let regNum = RegNum.value;
      console.log(regNum);
      let regNumSession = sessionStorage.setItem("regnum", regNum);
      // console.log(cred.user);
      location.href = "student-edit-account.html";
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