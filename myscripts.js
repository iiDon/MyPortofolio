let menu = false;
let nav = document.getElementById("nav");

// tools items
const tools = [
  {
    class: "devicon-html5-plain colored",
    name: "HTML5",
  },
  {
    class: "devicon-css3-plain colored",
    name: "CSS3",
  },
  {
    class: "devicon-tailwindcss-plain colored",
    name: "TAILWIND",
  },
  {
    class: "devicon-bootstrap-plain colored",
    name: "BOOTSTRAP",
  },
  {
    class: "devicon-javascript-plain colored",
    name: "JAVASCRIPT",
  },
  {
    class: "devicon-typescript-plain colored",
    name: "TYPESCRIPT",
  },
  {
    class: "devicon-react-original colored",
    name: "REACT JS",
  },
  {
    class: "devicon-nextjs-original-wordmark",
    name: "Next JS",
  },
  {
    class: "devicon-redux-original colored",
    name: "REDUX",
  },
  {
    class: "devicon-nodejs-plain colored",
    name: "NODEJS",
  },
  {
    class: "devicon-express-original-wordmark",
    name: "EXPRESS",
  },
  {
    class: "devicon-mongodb-plain-wordmark colored",
    name: "MONGODB",
  },
  {
    class: "devicon-postgresql-plain-wordmark colored",
    name: "Postgresql",
  },
  {
    class: "devicon-npm-original-wordmark colored",
    name: "NPM",
  },
  {
    class: "devicon-wordpress-plain-wordmark",
    name: "WORDPRESS",
  },
  {
    class: "devicon-graphql-plain colored",
    name: "GRAPHQL",
  },
  {
    class: "devicon-git-plain colored",
    name: "GIT",
  },
  {
    class: "devicon-github-original",
    name: "GITHUB",
  },
  {
    class: "devicon-java-plain colored",
    name: "JAVA",
  },
  {
    class: "devicon-mysql-plain colored",
    name: "MYSQL",
  },
  {
    class: "devicon-xd-plain colored",
    name: "ADOBE XD",
  },
];

// menu items
const items = [
  {
    name: "HOME",
    route: "#",
  },
  {
    name: "ABOUT",
    route: "#about",
  },
  {
    name: "TOOLS USAGE",
    route: "#tools",
  },
  {
    name: "PROJECTS",
    route: "#projects",
  },
];

// navbar items
document.getElementById("nav").innerHTML = items
  .map(
    (item) =>
      `
    <li class="${
      menu ? "block" : "hidden"
    } md:block px-4 md:py-auto py-2 hover:text-white"><a href="${item.route}">${
        item.name
      }</a></li>
    `
  )
  .join("");

//   ========================================================

// About section
const aboutItems = [
  {
    icon: "phone-landscape-outline",
    title: "Responsive",
    content:
      "You will have modern completely responsive design for all devices",
  },
  {
    icon: "car-outline",
    title: "Fast",
    content: "I will finish your website in short time and high quality",
  },
  {
    icon: "expand-outline",
    title: "Creative",
    content: "You will get a modern and creative design",
  },
  {
    icon: "color-palette-outline",
    title: "Animated",
    content:
      "Now animation is very importtant to draw the attention to the user",
  },
];

// About mapping
document.getElementById("about-items").innerHTML = aboutItems
  .map(
    (item) =>
      `
        <label
        class="block p-8 border border-gray-800 shadow-xl transition rounded-xl hover:shadow-[#00a6fb] hover:shadow-sm hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <span class="block m-auto sm:m-[0px] w-10 h-10 text-[#00a6fb] "><ion-icon size="large" name="${item.icon}"></ion-icon></span>

        <h3 class="mt-4 text-xl font-bold text-white text-center sm:text-left">${item.title}</h3>

        <p class="mt-1 text-sm text-gray-300 text-center sm:text-left">${item.content}</p>
      </label>
        `
  )
  .join("");

//   ========================================================

// close menu
const closeMenu = () => {
  openMenu();
};

// open and close menu
document.getElementById(
  "menu-icon"
).innerHTML = `<ion-icon class="" size="large" id="menu-tap" name=${
  menu ? "close-circle-outline" : "menu-outline"
}></ion-icon>`;

const openMenu = () => {
  menu = !menu;

  document.getElementById(
    "menu-icon"
  ).innerHTML = `<ion-icon size="large" id="menu-tap" name=${
    menu ? "close-circle-outline" : "menu-outline"
  }></ion-icon>`;

  document.getElementById("nav").innerHTML = items
    .map(
      (item, index) =>
        `
    <a href="${item.route}" onClick="closeMenu()" class=" transition ease-out">
    <li class="${
      menu ? "block" : "hidden"
    } transition ease-out md:block px-4 border-b-[0.5px] ${
          index === items.length - 1 ? "border-b-0" : ""
        }  border-gray-600 cursor-pointer  md:py-auto py-2 md:border-0 md:mt-0 hover:text-white">${
          item.name
        }</li>
      </a>
    `
    )
    .join("");
};

//   ========================================================

// Tools Usage
document.getElementById("my-tools").innerHTML = tools
  .map(
    (tool) => `
    
    <div class="mt-4 group ">
      <label class="group-hover:block group-hover:absolute  bg-white hidden w-fit px-3  rounded ">${tool.name}</label>
      <i class="${tool.class} md:text-[72px] text-[60px] text-white "></i>
    </div>
`
  )
  .join("");

//   ========================================================

// counter
const countEl = document.getElementById("count");
const updateVisitCount = () => {
  fetch(
    "https://api.countapi.xyz/update/sultan-alsaif.netlify.app/kfsd3rkfd-83042j-kd43rk-kcgke4-kfe53lskdswfw/?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
};

const proj = document.getElementById("proj");
const projects = [
  {
    name: "My Food",
    desc: "My Food is a landing page for a food app.",
    link: "https://www.myfood-app.com/",
  },
  {
    name: "Faculty Evaluatio",
    desc: "Faculty Evaluation is an application that helps the students to evaluate the faculty in honest way",
    link: "https://front-end-faculty.vercel.app/login",
  },
  {
    name: "Questions Bank",
    desc: "Questions Bank is an application that helps the faculty to add questions and back to them later",
    link: "https://questions-bank-jade.vercel.app/dashboard",
  },
  {
    name: "Quran Students System",
    desc: "Quran Students System is an application that helps the students to learn the quran and track their progress",
    link: "https://students-quran-system.vercel.app/",
  },
  {
    name: "Human Resources",
    desc: "Human Resources is an application that helps the compamy to recruit new employees",
    link: "https://hr-jade.vercel.app/auth/login",
  },
  {
    name: "Eid Card",
    desc: "Eid Card is an application that helps the employees to get eid card and send it to their friends",
    link: "https://eid-card-ten.vercel.app/",
  },
  {
    name: "Golden Concept",
    desc: "Golden Concept is a landing page for a company",
    link: "https://golden-concept.vercel.app/",
  },
];

proj.innerHTML = projects
  .map(
    (project) => `
        <div ">
          <div
            class="bg-gray-800 h-56 shadow-lg rounded-lg px-4 py-6 m-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <p class="text-sm text-gray-200 flex items-center">
                <span class="font-bold text-xl mb-2">${project.name}</span>
              </p>
              <div class="text-white text-base">
                <p>${project.desc}</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <a class="text-blue-200 hover:text-gray-400" href="${project.link}"
                  >Project Link</a
                >
              </div>
            </div>
          </div>
        </div>
`
  )
  .join("");

// <img
//   class="rounded border-4 my-8 h-[200px] w-[400px]"
//   src="${project.img}"
//   alt=""
// />;
updateVisitCount();
