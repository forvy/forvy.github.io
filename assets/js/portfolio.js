const portfolioProjects = [
  {
    image: "assets/img/work1.jpg",
    description:
      "Consulting, designing, and creating a website for company profile and products information using HTML, PHP, MySQL, jQuery.",
    url: "#",
  },
  {
    image: "assets/img/work2.jpg",
    description:
      "Inventory control and calculate the net amount of any remaining annual income/profits for student cooperation (using VB 2010, MySQL).",
    url: "#",
  },
  {
    image: "assets/img/work3.jpg",
    description:
      "Developed a GIS for mapping milk supply production (using HTML, CSS, PHP, MySQL, jQuery, and Google Maps API).",
    url: "http://sigksaep.gearhostpreview.com/",
  },
  {
    image: "assets/img/work4.jpg",
    description:
      "Integrate existing RESTful and GraphQL APIs into responsive, accessible, and performant application interfaces using Angular, SCSS, with Jasmine, Jest, and Cypress for testing.",
    url: "#",
  },
  {
    image: "assets/img/work5.jpg",
    description:
      "Designed and implemented enterprise microservices and internal applications driving more than $33M monthly transaction volume.",
    url: "#",
  },
  {
    image: "assets/img/work6.jpg",
    description:
      "Integrate REST APIs for diagnose module and implemented odontogram using Angular, NodeJs and MySQL.",
    url: "#",
  },
  {
    image: "assets/img/work7.jpg",
    description:
      "Integrate OpenAI to respond to user input with custom prompts using React and NextJs.",
    url: "#",
  },
  {
    image: "assets/img/work8.jpg",
    description:
      "Developed XML parser visualization and editing tools using React and NextJs.",
    url: "#",
  },
  {
    image: "assets/img/work9.jpg",
    description:
      "Developed a realtime chat app using React, NextJs, Socket.io, and MongoDB.",
    url: "#",
  },
  {
    image: "assets/img/work10.jpg",
    description:
      "Developed learning platform with mindmap tools and preview features using Vue 3.",
    url: "#",
  },
  {
    image: "assets/img/work11.png",
    description:
      "Maintain and implement new pages for company website using WordPress and WooCommerce.",
    url: "#",
  },
  {
    image: "assets/img/work12.png",
    description:
      "Developed company demo website using Vue, Plotly, Vis.js, and Gradio.",
    url: "#",
  },
  {
    image: "assets/img/work13.png",
    description:
      "Designed and developed education platform using Vue 3 and TailwindCSS.",
    url: "#",
  },
  {
    image: "assets/img/work14.png",
    description:
      "Designed and developed survey application using Vue 3 and TailwindCSS.",
    url: "#",
  },
  {
    image: "assets/img/work15.jpg",
    description:
      "Led development and integration of education platform using React, .NET, Azure, and CosmosDB.",
    url: "#",
  },
  {
    image: "assets/img/work16.png",
    description:
      "Designed and developed command center dashboard for water monitoring application using Angular 21, Tailwind CSS, Leaflet.js, with Vitest and Playwright for testing.",
    url: "#",
  },
];

function renderPortfolio() {
  const container = document.getElementById("portfolio-container");

  container.innerHTML = portfolioProjects
    .map(
      (project) => `
        <div class="portfolio__img">
          <img
            src="${project.image}"
            alt="Portfolio Project"
            loading="lazy"
          />

          <div class="portfolio__link">
            <a
              href="${project.url}"
              class="portfolio__link-name"
              target="_blank"
              rel="noopener noreferrer"
            >
              ${project.description}
            </a>
          </div>
        </div>
      `
    )
    .join("");
}

renderPortfolio();