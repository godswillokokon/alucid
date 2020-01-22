

const doctorsDetails = document.querySelector(".doctors");
const setupContent = data => {
  let html = "";
  data.forEach(data => {
    let id = data.id;
    let Hrole = data.data().role;
    let Hname = data.data().username;
    let Hemail = data.data().email;

    const div = `
    <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="body text-center">
                            <div class="chart easy-pie-chart-1" data-percent="37"> <span><img src="http://www.wrraptheme.com/templates/lucid/hospital/assets/images/logo-icon.svg"" data-toggle="tooltip" data-placement="top" title="Dr. Avatar" alt="user" class="rounded-circle"/></span> </div>
                            git
                            <small>${Hrole}</small>
                            <ul class="social-links list-unstyled">
                                <li><a title="facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a></li>
                                <li><a title="twitter" href="javascript:void(0);"><i class="fa fa-twitter"></i></a></li>
                                <li><a title="instagram" href="javascript:void(0);"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            <a href="mailto:${Hemail}">${Hemail}</a>
                        </div>
                    </div>
                </div>
    `;
    html += div;
  });
  doctorsDetails.innerHTML = html;
};
let level = sessionStorage.getItem("userLevel");
db.collection("users")
  //.orderBy("courseLevel", "asc")
  // .where("courseLevel", "<=", level)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(setupContent, 2000)
// setupContent();
