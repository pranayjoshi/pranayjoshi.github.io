(async () => {
  const projects = document.querySelector("#projects_list");
  projects.insertAdjacentHTML('afterbegin', await getProjects());
})();

async function getProjects() {
  const json = await fetch('./projects.json');
  const projects_data = await json.json();
  let projects = "";

  projects_data.forEach(project => {
    const {
      name,
      desc,
      image,
      github,
      tech
    } = project;

    projects += `
      <div class="project">
          <img src="./assets/img/proj/${image}.png" alt="logo ${image}">
          <div class="data_box">
            <h2>${name}</h2>
            <h3>${desc}</h3>
            <h4>${tech.map(tech => `${tech}`).join(', ')}</h4>
          </div>
          <div class="preview_box">
            <a href="${github}"><i class="fab fa-fw fa-github" ></i></a>
          </div>
          `;
    if (github != "") {
        projects += `<a a class="btn btn-outline-light btn-social mx-1" href="${github}"><i class="fab fa-fw fa-github fa-2x" ></i></a>`;
    }
    projects += "</div>";
  });

  return projects;
}
