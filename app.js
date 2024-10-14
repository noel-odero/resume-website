const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links");




navToggle.addEventListener('click', function() {
    links.classList.toggle("show-links");
} );




// Project data array
const projects = [
    {
      id: 1,
      name: 'Counter',
      img: './project1.png',
      desc: 'This is a simple counter web application that allows users to increase, decrease, or reset a displayed value.',
      link: "https://noel-odero.github.io/Counter/"
    },
    {
      id: 2,
      name: 'Reviews',
      img: './project2.png',
      desc: 'This project is a carousel of reviews with a button that generates random reviews.',
      link: "https://noel-odero.github.io/Reviews/"

    },
    {
      id: 3,
      name: 'Modal',
      img: './project4.png',
      desc: 'This project demonstrates a basic implementation of a modal in a web page.',
      modal: "https://noel-odero.github.io/Modal/"
    },
    {
      id: 4,
      name: 'FAQ',
      img: './project5.png',
      desc: 'This project creates a frequently asked questions page for educating users about a business.',
      link: "https://noel-odero.github.io/FAQ-page/"
    }
  ];

  // Select elements
  const img = document.getElementById('project-img');
  const projectName = document.getElementById('project-name');
  const projectDesc = document.getElementById('project-desc');
  const projectLink = document.getElementById('project-link');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  // Set starting project
  let currentProject = 0;

  // Load initial project
  window.addEventListener('DOMContentLoaded', function () {
    showProject(currentProject);
  });

  // Show project based on index
  function showProject(index) {
    const project = projects[index];
    img.src = project.img;
    projectName.textContent = project.name;
    projectDesc.textContent = project.desc;
    projectLink.href = project.link;
  }

  // Show next project
  nextBtn.addEventListener('click', function () {
    currentProject++;
    if (currentProject > projects.length - 1) {
      currentProject = 0;
    }
    showProject(currentProject);
  });

  // Show previous project
  prevBtn.addEventListener('click', function () {
    currentProject--;
    if (currentProject < 0) {
      currentProject = projects.length - 1;
    }
    showProject(currentProject);
  });

  // Show random project
  randomBtn.addEventListener('click', function () {
    currentProject = Math.floor(Math.random() * projects.length);
    showProject(currentProject);
  });
