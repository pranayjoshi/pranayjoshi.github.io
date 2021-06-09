(async () => {
  const proj = document.querySelector("#projects_list");
  proj.insertAdjacentHTML('afterbegin', await Proj());
})();
async function Proj() {
  const j_data = await fetch('./proj.json');
  const proj_data = await j_data.json();
  let proj = "";

  proj_data.forEach(vars => {
    const {proj_name,description,long_desc, proj_img,git,lang,id} = vars;
    proj += `
    
      <div class="project ">
          <img src="./assets/img/proj/${proj_img}.webp" alt="logo ${proj_img}" data-toggle="modal" data-target="#portfolioModal${id}">
          <div class="data text-secondary">
            <h2>${proj_name}</h2>
            <h3>${description}</h3>
            <h4>${lang.map(lang => `${lang}`).join('')}</h4>
          </div>
          <a class="btn btn-outline-light btn-social mx-1" href="${git}"><i class="fab fa-fw fa-github fa-2x" style="color:black" ></i></a>
          </div>
          `;
        var load_more = `<div class="portfolio-modal modal fade" id="portfolioModal${id}" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal1Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary mb-0">${proj_name}</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Image--><img class="img-fluid rounded mb-5" src="./assets/img/proj/${proj_img}.webp" alt="${proj_name}"/>
                                <!-- Portfolio Modal - Text-->
                                <p class="mb-5">${long_desc}</p>
                                <a href="${git}" ><i class="fab fa-fw fa-github fa-2x text-secondary" style='font-size:40px;'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>`
        proj += `${load_more}`
  });
  proj += `<div class="project-last"></div>`
  return proj;
}