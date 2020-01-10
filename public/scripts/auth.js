

let currentUserID = sessionStorage.getItem("id");
console.log(currentUserID, "id");

let currentUserRole = sessionStorage.getItem("role");
console.log(currentUserRole, "role");

let currentUserEmail = sessionStorage.getItem("email");
console.log(currentUserEmail, "email");

let currentUserName = sessionStorage.getItem("name");
console.log(currentUserName, "name");


if (!currentUserID) {
  location.href = "./index.html";
  console.log("not logged in from auth");
} else {



  console.log("user logged in from auth");
}




function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    console.log("user is logged out");
    let currentUserID = sessionStorage.removeItem("user");
    let regNumSession = sessionStorage.removeItem("regnum");
    let userLevel = sessionStorage.removeItem("userLevel");

    location.href = "./page-login.html";
  });
  console.log("am logging out");
}

