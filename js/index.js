const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
const middleImg = document.getElementById("middle-img");
const anchorEl = document.querySelectorAll("a");
const  h1Cta = document.querySelector("h1");
const btn = document.querySelector("button");
const allH4 = document.querySelectorAll(".text-content h4");
const allP = document.querySelectorAll(".text-content p");
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
const footerP = document.querySelector("footer p");

//images
ctaImg.src = siteContent["cta"]["img-src"];
middleImg.src = siteContent["main-content"]["middle-img-src"];

// header a 
anchorEl[0].textContent = siteContent["nav"]["nav-item-1"];
anchorEl[1].textContent = siteContent["nav"]["nav-item-2"];
anchorEl[2].textContent = siteContent["nav"]["nav-item-3"];
anchorEl[3].textContent = siteContent["nav"]["nav-item-4"];
anchorEl[4].textContent = siteContent["nav"]["nav-item-5"];
anchorEl[5].textContent = siteContent["nav"]["nav-item-6"];


// cta
h1Cta.textContent = siteContent["cta"]["h1"];
btn.textContent = siteContent["cta"]["button"];


//mainContent
allH4[0].textContent= siteContent["main-content"]["features-h4"];
allH4[1].textContent = siteContent['main-content']['about-h4'];
allH4[2].textContent= siteContent["main-content"]["services-h4"];
allH4[3].textContent= siteContent["main-content"]["product-h4"];
allH4[4].textContent= siteContent["main-content"]["vision-h4"];

allP[0].textContent= siteContent["main-content"]["features-content"];
allP[1].textContent = siteContent['main-content']['about-content'];
allP[2].textContent= siteContent["main-content"]["services-content"];
allP[3].textContent= siteContent["main-content"]["product-content"];
allP[4].textContent= siteContent["main-content"]["vision-content"];


//contact
contactH4.textContent= siteContent['contact']['contact-h4'];
contactP[0].textContent= siteContent['contact']['address'];
contactP[1].textContent= siteContent['contact']['phone'];
contactP[2].textContent= siteContent['contact']['email'];

//footer
footerP.textContent = siteContent['footer']['copyright'];


//color green
anchorEl[0].style.color = 'green';
anchorEl[1].style.color = 'green';
anchorEl[2].style.color = 'green';
anchorEl[3].style.color = 'green';
anchorEl[4].style.color = 'green';
anchorEl[5].style.color = 'green';

//append
const contactNewP =  document.createElement("p");
contactNewP.textContent = "www.greatideas.com"
const  editContact = document.querySelector('.contact');
editContact.append(contactNewP);

//prepend
const footerNewA = document.createElement('a');
footerNewA.textContent = "Click here to go back to the top";
footerNewA.setAttribute('href', '#logo-img');
footerNewA.style.textDecoration = "none";
footerNewA.style.color = "black";
const footer = document.querySelector('footer');
footer.prepend(footerNewA);