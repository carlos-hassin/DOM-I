const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Shop",
    "nav-item-8": "Invest",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
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

let navBar = document.getElementsByTagName('a');
navBar[0].textContent = siteContent.nav["nav-item-1"];
navBar[1].textContent = siteContent.nav["nav-item-2"];
navBar[2].textContent = siteContent.nav["nav-item-3"];
navBar[3].textContent = siteContent.nav["nav-item-4"];
navBar[4].textContent = siteContent.nav["nav-item-5"];
navBar[5].textContent = siteContent.nav["nav-item-6"];
navBar[0].style.color = 'green';
navBar[1].style.color = 'green';
navBar[2].style.color = 'green';
navBar[3].style.color = 'green';
navBar[4].style.color = 'green';
navBar[5].style.color = 'green';

const wholeNav = document.querySelector('nav');
const shopLink = document.createElement('a');
const investLink = document.createElement('a');
shopLink.textContent ='Shop';
investLink.textContent = 'Invest';
shopLink.style.color = 'green';
investLink.style.color = 'green';
wholeNav.appendChild(shopLink);
wholeNav.prepend(investLink);

let cta_title = document.querySelector('.cta h1');
cta_title.innerHTML = siteContent.cta['h1'];

let cta_button = document.querySelector('.cta button');
cta_button.textContent = siteContent.cta['button'];

let cta_img = document.querySelector('#cta-img');
cta_img.setAttribute('src', siteContent.cta['img-src']);


let text_content_h4 = document.getElementsByTagName('h4');
text_content_h4[0].textContent = siteContent["main-content"]["features-h4"];
text_content_h4[1].textContent = siteContent["main-content"]["about-h4"];
text_content_h4[2].textContent = siteContent["main-content"]["services-h4"];
text_content_h4[3].textContent = siteContent["main-content"]["product-h4"];
text_content_h4[4].textContent = siteContent["main-content"]["vision-h4"];

let text_content_p = document.querySelectorAll('.text-content p');
text_content_p[0].textContent = siteContent["main-content"]["features-content"];
text_content_p[1].textContent = siteContent["main-content"]["about-content"];
text_content_p[2].textContent = siteContent["main-content"]["services-content"];
text_content_p[3].textContent = siteContent["main-content"]["product-content"];
text_content_p[4].textContent = siteContent["main-content"]["vision-content"];

let middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent['main-content']["middle-img-src"]);

let contact_h4 = document.querySelectorAll('.contact h4');
contact_h4[0].textContent = siteContent['contact']['contact-h4'];

let contact_text = document.querySelectorAll('.contact p');
contact_text[0].innerHTML = siteContent['contact']['address'];
contact_text[1].textContent = siteContent['contact']['phone'];
contact_text[2].textContent = siteContent['contact']['email'];

let copyright_content = document.querySelector('footer p')
copyright_content.textContent = siteContent.footer.copyright;



