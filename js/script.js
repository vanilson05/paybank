
/*==================== CALCULADORA DO CDI ====================*/ 
let MoneyInvestment = document.querySelector('.money-investment').innerText;
let TimeInvestment = document.querySelector('.time-investment').innerText;

const buttonMinusMoney = document.querySelector('.button-minus-money');
const buttonPlusMoney = document.querySelector('.button-plus-money');
const buttonMinusTime = document.querySelector('.button-minus-time');
const buttonPlusTime = document.querySelector('.button-plus-time');

buttonMinusMoney.addEventListener('click', () => {
  if(MoneyInvestment <= 200){
    MoneyInvestment = parseFloat(MoneyInvestment);
  }else{
    MoneyInvestment = parseFloat(MoneyInvestment) - 200;
  }

  //MoneyInvestment = parseFloat(MoneyInvestment) - 200;
  console.log(MoneyInvestment);
  document.querySelector(".money-investment").innerText = MoneyInvestment;
  
  const taxa = 1.0794/100;
  let result = MoneyInvestment * Math.pow(  (1 + taxa), TimeInvestment );
  console.log('resultado:' + result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

  let valorFinal = result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.querySelector(".result-investment").innerText = valorFinal;

});

buttonPlusMoney.addEventListener('click', () => {
  MoneyInvestment = parseFloat(MoneyInvestment)  + 200;
  console.log(MoneyInvestment);
  document.querySelector(".money-investment").innerText = MoneyInvestment;
  
  const taxa = 1.0794/100;
  let result = MoneyInvestment * Math.pow(  (1 + taxa), TimeInvestment );
  console.log('resultado:' + result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

  let valorFinal = result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.querySelector(".result-investment").innerText = valorFinal;
});

buttonMinusTime.addEventListener('click', () => {
  if(TimeInvestment <= 1){
    TimeInvestment = parseFloat(TimeInvestment);
  }else{
    TimeInvestment = parseFloat(TimeInvestment)  - 1;
  }

  //TimeInvestment = parseFloat(TimeInvestment)  - 1;
  console.log(TimeInvestment);
  document.querySelector(".time-investment").innerText = TimeInvestment;
  
  const taxa = 1.0794/100;
  let result = MoneyInvestment * Math.pow(  (1 + taxa), TimeInvestment );
  console.log('resultado:' + result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

  let valorFinal = result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  document.querySelector(".result-investment").innerText = valorFinal;
});

buttonPlusTime.addEventListener('click', () => {
  TimeInvestment = parseFloat(TimeInvestment) + 1;
  console.log(TimeInvestment);
  document.querySelector(".time-investment").innerText = TimeInvestment;
  
  const taxa = 1.0794/100;
  let result = MoneyInvestment * Math.pow(  (1 + taxa), TimeInvestment );
  console.log('resultado:' + result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

  let valorFinal = result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.querySelector(".result-investment").innerText = valorFinal;
  
});

  
  const taxa = 1.0794/100;
  
  let result = MoneyInvestment * Math.pow(  (1 + taxa), TimeInvestment );
  console.log('resultado:' + result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

  let valorFinal = result.toFixed(2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  document.querySelector(".result-investment").innerText = valorFinal;









/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
  const nav = document.querySelector('header');
  const linksMenu = document.querySelectorAll('.link-menu');

  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 1000) nav.classList.add('active-header'); else nav.classList.remove('active-header');

  linksMenu.forEach((item) => {
    if(this.scrollY >= 1000) item.classList.add('link-black'); else item.classList.remove('link-black');
  })

}
window.addEventListener('scroll', scrollHeader)


/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    
    button.addEventListener('click', () => {
        //button.classList.remove('accordion-button-active');

        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion-button-active');

        if(button.classList.contains('accordion-button-active')){
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        else{
          accordionContent.style.maxHeight = 0;
        }
    });
    
});


/*============ ICON CLICKS ==============*/

const icons = document.querySelectorAll('.icon-click');
const textsClicks = document.querySelectorAll('.text-click');

const imgPaybank = document.querySelectorAll('.img-paybank');
const arrayIcons = Array.from(icons); // transformando Nodelist em Array

textsClicks.forEach((item) => {
  // Zerando a opacidade de todos os elementos no inicio do loop
  item.style.opacity = '0';
})

var index = 0;

const functionResetIcons = (element) => {
  /*=====================================*/
  /*=========== ÍCONES ==============*/
  /*=====================================*/
  console.log('teste');

  // Zerar e tirar a classe ativa em todos
  arrayIcons.forEach((item) => {
    item.classList.remove('bg-icon-active');
  });

  // Adiciona a classe somente no elemente clicado!
  element.classList.add('bg-icon-active');
}

const functionResetImages = (index) => {

  // Zera e deixa todos os textos opacos
  imgPaybank.forEach((item) => {
    item.style.opacity = '0';
  })

  // Mudando as imagens
  if(index == 0){
    imgPaybank[index].style.opacity = '1';
  }
  else if(index == 1){
    imgPaybank[index].style.opacity = '1';
  }
  else if(index == 2){
    imgPaybank[index].style.opacity = '1';
  }
  else if(index == 3){
    imgPaybank[index].style.opacity = '1';
  }
}


const functionResetTexts = (index) => {
  textsClicks.forEach((item) => {
    item.style.opacity = '0';
  })

  // Mudando os textos
  if(index == 0){
    textsClicks[index].style.opacity = '1';
  }
  else if(index == 1){
    textsClicks[index].style.opacity = '1';
  }
  else if(index == 2){
    textsClicks[index].style.opacity = '1';
  }
  else if(index == 3){
    textsClicks[index].style.opacity = '1';
  }
}

/*=====================================*/
/*=========== DISPARAR POR CLIQUE ==============*/
/*=====================================*/
arrayIcons.forEach((element, index) => {

  element.addEventListener('click', () => {
      
    functionResetIcons(element);
      
    functionResetImages(index);
      
    functionResetTexts(index);

  })
  
});

/*=====================================*/
/*========= IR TROCANDO SOZINHO ========*/
/*=====================================*/
const functionChangeSlider = (index) => {
  functionResetIcons(arrayIcons[index]);
      
  functionResetImages(index);
    
  functionResetTexts(index);
}

let i = 0;
setInterval(() => {
  functionChangeSlider(i);
  i++;

  if(i == 3) i = 0;
}, 4000)

  



/*

arrayIcons.forEach((element, index) => {
  
  element.addEventListener('click', () => {
    console.log('clicou no item: ' + index);


    // Zerar e tirar a classe ativa em todos
    arrayIcons.forEach((item) => {
      item.classList.remove('bg-icon-active');
    });

    // Adiciona a classe somente no elemente clicado!
    element.classList.add('bg-icon-active');


    // Zera e deixa todos os textos opacos
    imgPaybank.forEach((item) => {
      item.style.opacity = '0';
    })

    // Mudando as imagens
    if(index == 0){
      imgPaybank[index].style.opacity = '1';
    }
    else if(index == 1){
      imgPaybank[index].style.opacity = '1';
    }
    else if(index == 2){
      imgPaybank[index].style.opacity = '1';
    }
    else if(index == 3){
      imgPaybank[index].style.opacity = '1';
    }

    textsClicks.forEach((item) => {
      item.style.opacity = '0';
    })

    // Mudando os textos
    if(index == 0){
      textsClicks[index].style.opacity = '1';
    }
    else if(index == 1){

      textsClicks[index].style.opacity = '1';
    }
    else if(index == 2){

      textsClicks[index].style.opacity = '1';
    }
    else if(index == 3){

      textsClicks[index].style.opacity = '1';
    }
  })

});

*/



/*============ VALIDAR FORMULÁRIO ==============*/
/*
// Puxando os elementos do formulário
const formCapture = document.querySelector("#form-capture");
const btnSubmit = document.querySelector("#btn-submit");
const inputName = document.querySelector("#fullname");
const inputEmail = document.querySelector("#email");
const labelErrorName = document.querySelector(".label-error-name");
const labelErrorEmail = document.querySelector(".label-error-email");

// Função pra validar e-mail
btnSubmit.addEventListener('click', () => {

  let statusEmail = false;
  let statusName = false;

  if(inputName.value.length < 2){
    console.log("O nome tem menos de 2 caracteres");

    inputName.classList.add('border-error');
    inputName.classList.remove('border-success');

    labelErrorName.classList.add('label-active');
    statusName = false;
  }
  else{
    inputName.classList.add('border-success');
    inputName.classList.remove('border-error');
    labelErrorName.classList.remove('label-active');
    statusName = true;
  }

  
  if(inputEmail.value == "" || 
        !inputEmail.value.includes('@') || 
        !inputEmail.value.includes('.')){
    inputEmail.classList.add('border-error');
    inputEmail.classList.remove('border-success');
    labelErrorEmail.classList.add('label-active');
    statusEmail = false;
  }
  else{
    inputEmail.classList.add('border-success');
    inputEmail.classList.remove('border-error');
    labelErrorEmail.classList.remove('label-active');
    statusEmail = true;
  }

  if(statusName && statusEmail){
    console.log('forms enviado');
    formCapture.submit();
  }

});
*/


//var textWrapper = document.querySelector('.letters');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-h1'>$&</span>");   


/*--=========== GSAP SCROLLTRIGGER ============- */


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    var tl1 = gsap.timeline();
    
    tl1
    .to('.screen-loading', {
      duration: 2,
      opacity: 0, 
      delay: 5,
      //filter: 'blur(10px)',
      //y: "-10%",
      ease: "power4.out",
    })
    .from(".hero div", {
      duration: 3, 
      opacity: 0, 
      y: 200,
      stagger:{each: 0.1},
      ease: "power4.out",
    }, '-=1.5')


    gsap.from(".card-1-scrub",{
      x: -30,
      rotate: '10deg',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '.card-1-scrub',
        start: 'center 70%',
        end: 'center 35%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from(".card-2-scrub",{
      x: 30,
      rotate: '-10deg',
      ease: "power1.out",
      scrollTrigger:{
        trigger: '.card-1-scrub',
        start: 'center 70%',
        end: 'center 35%',
        scrub: 2,
        //markers: true,
      }
    });



    // LOADING AO SCROLL NAS SEÇÕES
    gsap.from("#section-1 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-1',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });


    gsap.from("#section-2 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-2',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-3 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-3',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-4 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-4',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-5 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-5',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-6 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-6',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-7 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-7',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-8 > div",{
      y: 200,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-8',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    
    
});

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});


