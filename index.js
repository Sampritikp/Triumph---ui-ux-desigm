let slide = document.querySelectorAll(".slider");
let card = document.querySelectorAll(".crd");
let connectBtn = document.getElementById("connect");
let count=0;


let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let slides = document.querySelectorAll('.sliders img');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }
    
    slides[slideIndex - 1].style.display = 'block';
    
    setTimeout(carousel, 2000); 
}



function triumph()
{
    slide.forEach(function(curVal){
        curVal.style.transform='translateX(-${count*100}%)'
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    triumph()
},2000)

card.forEach(function(curCard) {
    curCard.addEventListener("click", function() {
        document.querySelectorAll(".container").forEach(function(container) {
            container.innerHTML = "";
        });

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML = `
            <h1> Challenge </h1>
            <p>12 Weeks</p>
            <img src="${curCard.firstElementChild.src}">
        `;

        document.querySelector("body").appendChild(div);
        console.log(curCard.firstElementChild);
        console.log(document.querySelector("body"));
    });
});

connectBtn.addEventListener("click", function() {
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let passInput = document.getElementById("pass");

    let name = nameInput.value;
    let email = emailInput.value;
    let pass = passInput.value;

    if (email === "" || pass === "" || name === "") {
        alert("Please Enter Details");
    } else {
        alert("Thanks For Connecting");
    }
});

document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

    