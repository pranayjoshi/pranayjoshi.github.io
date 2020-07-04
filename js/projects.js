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
        preview,
        github,
        tech
      } = project;
  
      projects += `
        <div class="project">
          <img src=".assets/img/${image}.png" alt="logo ${image}">
          <div class="data_box">
            <h2>${name}</h2>
            <h3>${desc}</h3>
            <h4>${tech.map(tech => `${tech}`).join(', ')}</h4>
          </div>
          <div class="preview_box">
          `;
      if (preview != "") {
        projects += `<a href="${preview}" id="preview_button">Preview</a>`;
      }
      if (github != "") {
        projects += `<a href="${github}">GitHub<i class="fab fa-github"></i></a>`;
      }
      projects += "</div></div>";
    });
  
    return projects;
  }