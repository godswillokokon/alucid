const showToken = document.querySelector(".prescribe");


showToken.addEventListener("submit", e => {

  const show = document.querySelector(".token");
  const PsetupContent = data => {
    let html = "";
    data.forEach(data => {
      let token = data.id;
      let mail = data.Patientemail

      const div = `
        <form id="navbar-search" class="navbar-form search-form ">
                                            <input class="form-control" value="${token}" placeholder="Copy token here..." type="text">
                                                <a href="mailto:${token}?Subject=TOKEN" target="_top  class="btn btn-default"><i class="icon-pencil"></i>Send</a>
                                    
                                        </form>
    `;
      html += div;
    });
    show.innerHTML = html;
  };

  db.collection("drugs")
    .orderBy("dateTreated", "asc")
    // .where("courseLevel", "<=", level)
    .limit(1)
    .onSnapshot(
      doc => {
        let data = doc.docs;
        PsetupContent(data);
      },
      err => {
        console.log(err);
      }
    );

});

