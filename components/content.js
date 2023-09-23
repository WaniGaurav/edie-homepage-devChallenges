// navbar scrolling padding
const navigation = document.querySelector(".navBar")

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
  );
  
// navbar scrolling padding end

let a = true;
let btn = document.getElementById("btn-chng-mode");
btn.innerHTML="Change Mode";
btn.addEventListener('click', function(e) {
        if (a) {
            darkMode()
            a = false;
        }
        else{
            lightMode()
            a = true;
        }
    }
)

// Dark mode

let darkMode = ()=>{
    document.body.style.backgroundColor = "black";
    document.documentElement.style.setProperty("--clr-primary","#eee",);
    document.documentElement.style.setProperty("--clr-second","#eee");
    document.documentElement.style.setProperty("--clr-third","#310089");
}

// Dark mode End

// Light mode

let lightMode = ()=>{
    document.body.style.backgroundColor = "#fff";
    document.documentElement.style.setProperty("--clr-primary","#333333");
    document.documentElement.style.setProperty("--clr-second","#4F4F4F");
    document.documentElement.style.setProperty("--clr-third","#828282");
}

// Light mode End

let cardData = [
    {
        symbolsClass:'sharp',
        symbols:'edit',
        serviceName:'UI/UX Design',
        serviceNameDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
        bgColor:'#2D9CDB'
    },
    {
        symbolsClass:'rounded',
        symbols:'code',
        serviceName:'Front End',
        serviceNameDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
        bgColor:'#27AE60'
    },
    {
        symbolsClass:'rounded',
        symbols:'storage',
        serviceName:'Back End',
        serviceNameDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
        bgColor:'#EB5757'
    }
];


let workData = [
    {
        imageName:'smarthome.jpg',
        techName:'Full stack application',
        workHeadline:'Smart home dashboard'
    },
    {
        imageName:'onboard.png',
        techName:'UX/UI design',
        workHeadline:'Onboard application'
    },
    {
        imageName:'booking.png',
        techName:'Mobile application',
        workHeadline:'Booking system'
    },
    {
        imageName:'juice-product.png',
        techName:'Front End application',
        workHeadline:'Juice product homepage'
    }
    
];

let clientInfo = [
    {
        classname:"team-Info-Heading",
        content:"Meet the team",
    },
    {
        classname:"team-Info-Description",
        content:"We are chilled and a laidback team",
    },
    {
        classname:"team-Info-AboutUs",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
];

let teamPic = [
    {
        src:"./images/person3.png",
        alt:"member1",
        classname:"teamImage",
    },
    {
        src:"./images/person1.png",
        alt:"member2",
        classname:"teamImage",
    },
    {
        src:"./images/person2.png",
        alt:"member3",
        classname:"teamImage",
    }
];

// Services section
let cartContainer = document.querySelector(".cart-grid");

let cartCreate = () => {
    cardData.map((postData)=>{
        let divtag = document.createElement("div")
        divtag.classList.add("service-cards");
        divtag.innerHTML = `<div class="card-symbol-background flexClass" style="background-color: ${postData.bgColor};"><span class="symbol-design material-symbols-${postData.symbolsClass}">${postData.symbols}</span>
        </div>
        <p class="service-name">${postData.serviceName}</p>
        <p class="service-name-desc">
        ${postData.serviceNameDesc}
        </p><button type="submit" class="service-start">Get started</button>`
        cartContainer.appendChild(divtag)
    })
}

cartCreate();
// Services section end


// Our-works section
let workContainer = document.querySelector(".work-gallary")
let counter = 1;

let workCreate = ()=>{
    workData.map((postData)=>{
        let divtag = document.createElement("div")
        divtag.classList.add("img-container", `img-container${counter}`);
        divtag.innerHTML =`<img loading="lazy" class="work-images" src="./images/works/${postData.imageName}" alt="">
        <p class="workTech">${postData.techName}</p>
        <p class="workHeadline">${postData.workHeadline}</p>`;
        workContainer.appendChild(divtag);
        counter++;
    }) 
}

workCreate();
// Our-works section end

// Clients section
let clientContainer = document.querySelector(".teamInfo")
let teamPicContainer = document.querySelector(".teamPicture")


let clientInfoCreate = () => {
    clientInfo.map((postData)=>{
        let spantag = document.createElement("span")
        spantag.classList.add(`${postData.classname}`);
        spantag.innerHTML = `${postData.content}`;
        clientContainer.appendChild(spantag);
    })
}

let teamPicCreate = () =>{
    let counter = 1;
    teamPic.map((postData)=>{
        let imgtag = document.createElement("img")
        imgtag.classList.add(`${postData.classname}`,`${postData.classname}${counter}`);
        imgtag.loading = "lazy";
        imgtag.src = `${postData.src}`;
        imgtag.alt = `${postData.alt}`;
        teamPicContainer.appendChild(imgtag);
        counter++;
    })
}

clientInfoCreate();
teamPicCreate();
// Clients section end