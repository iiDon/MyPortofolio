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
    class: "devicon-react-original colored",
    name: "REACT JS",
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
    route: "#home",
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
  {
    name: "CONTACT",
    route: "#contact",
  },
];

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
    content: "I will finish the site in short time and high quality",
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

// open and close menu
//
document.getElementById(
  "menu-icon"
).innerHTML = `<ion-icon class="" size="large" id="menu-tap" name=${
  menu ? "close-circle-outline" : "menu-outline"
}></ion-icon>`;

const openMenu = () => {
  !menu ? nav.classList.add("border") : nav.classList.remove("border");

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
    <a href="${item.route}">
    <li class="${
      menu ? "block" : "hidden"
    } md:block px-4 border-b-[0.5px] border-gray-600 cursor-pointer transition duration-150 transform md:py-auto py-2 md:border-0 md:mt-0 hover:text-white">${
          item.name
        }</li>
      </a>
    `
    )
    .join("");

  console.log(menu);
};

// =================================

// Tools Usage
document.getElementById("my-tools").innerHTML = tools
  .map(
    (tool) => `
    
    <div class="mt-4 group duration-300 ease-out transform">
        <label class="group-hover:block  relative bg-white hidden w-fit px-3  rounded m-auto  mb-2 ">${tool.name}</label>
        <i class="${tool.class} p-4 md:text-[72px] text-[60px]"></i>
    </div>
`
  )
  .join("");
