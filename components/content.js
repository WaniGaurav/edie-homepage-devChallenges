// navbar scrolling padding
const navigation = document.querySelector(".navBar")

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);


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


let workContainer = document.querySelector(".work-gallary")
// let seeContainer = document.querySelector(".img-container4")
let counter = 1;

let workCreate = ()=>{
    workData.map((postData)=>{
        // let a = Object.getOwnPropertySymbols(postData);
        // console.log(a.length);
        let divtag = document.createElement("div")
        divtag.classList.add("img-container", `img-container${counter}`);
        divtag.innerHTML =`<img class="work-images" src="./images/works/${postData.imageName}" alt="">
        <p class="workTech">${postData.techName}</p>
        <p class="workHeadline">${postData.workHeadline}</p>`;
        workContainer.appendChild(divtag);
        counter++;
    })
    
        // let innerdivtag = document.createElement("div")
        // innerdivtag.classList.add("seemoreDiv");
        // innerdivtag.innerHTML = `<span class="see-more">see more</span><span class="arrow-right material-symbols-outlined">trending_flat</span>`
        // workContainer.appendChild(innerdivtag)
    
}

workCreate();