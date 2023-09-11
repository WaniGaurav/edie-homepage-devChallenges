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