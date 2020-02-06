

let currentUserID = sessionStorage.getItem("id");


let currentUserRole = sessionStorage.getItem("role");


let currentUserEmail = sessionStorage.getItem("email");


let currentUserName = sessionStorage.getItem("name");



if (!currentUserName) {
  location.href = "./page-login.html";
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

