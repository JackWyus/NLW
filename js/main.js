
window.addEventListener('scroll', onScroll)
onScroll()



/*Função responsável por selecionar o elemento html e adicionar a class de nome 'scroll' para que possa ser adicionado no css as devidas propriedades*/          
 /*A função vai verificar se 'scrollY' é maior que zero, se sim, ela vai adicionar a classList 'scroll' no html, se não, ela remove a classList 'scroll' - scrollY vai retornar(number) a posição da scroll no eixo y*/



/*A Function onScroll possui a função de gerenciar as outras Function que possuem relação com a Scrolly do navegador*/
    function onScroll(){
        showNavOnScroll();
        showBackToTopButtonOnScroll();
        activateMenuAtCurrentSection(home);
        activateMenuAtCurrentSection(services);
        activateMenuAtCurrentSection(about);
        activateMenuAtCurrentSection(contact);


    }

    function activateMenuAtCurrentSection(section) {
        const targetLine = scrollY + innerHeight / 2
      
        // verificar se a seção passou da linha
        // quais dados vou precisar?
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
      
        // verificar se a base está abaixo da linha alvo
      
        const sectionEndsAt = sectionTop + sectionHeight
        const sectionEndPassedTargetline = sectionEndsAt <= targetLine
      
        // limites da seção
        const sectionBoundaries =
          sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
      
        const sectionId = section.getAttribute('id')
        const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
      
        menuElement.classList.remove('active')
        if (sectionBoundaries) {
          menuElement.classList.add('active')
        }
      }

























/*A Function showNavOnScroll possui a responsabilidade de mostrar o menu expandido ao movimentar o scrolly */
    function showNavOnScroll(){
        if(scrollY > 0){
            document.querySelector('#navigation').classList.add('scroll')  
        }
        else{
            document.querySelector('#navigation').classList.remove('scroll')  
        }
    }

/*A Function showBackToTopButtonOnScroll possui a responsabilidade de mostrar o ícone do botão para subir para o ínicio da página*/
    function showBackToTopButtonOnScroll(){
        if(scrollY > 400){
            document.querySelector('#backToTopButton').classList.add('show')  
        }
        else{
            document.querySelector('#backToTopButton').classList.remove('show')  
        }
    
    }
    
//Function Menu expandido ao clikar

function openMenu(){
  document.querySelector('body').classList.add('menu-expanded')
}

function closeMenu(){
    document.querySelector('body').classList.remove('menu-expanded')
}



/* ScrollReveal lib*/

ScrollReveal({
    origin: 'top',  //Ele vai começar a agir com a biblioteca no top - de cima para baixo
    distance: '30px',
    duration: 700,
}).reveal("#home, #home img, #home .stats, #services, #services header, #services .card, #services .circute-icon, #about, #about header,#about p,#about img, #contact,#contact p, #contact h2,#contact ul,#contact a");

/* Com innerHeight você obtém a altura da ViewPort*/