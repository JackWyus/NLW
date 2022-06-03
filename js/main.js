/*Função responsável por selecionar o elemento html e adicionar a class de nome 'scroll' para que possa ser adicionado no css as devidas propriedades*/          
 /*A função vai verificar se 'scrollY' é maior que zero, se sim, ela vai adicionar a classList 'scroll' no html, se não, ela remove a classList 'scroll' - scrollY vai retornar(number) a posição da scroll no eixo y*/
function onScroll(){
    if(scrollY > 0){
        document.querySelector('#navigation').classList.add('scroll')  
    }
    else{
        document.querySelector('#navigation').classList.remove('scroll')  
    }
}
    
// Menu funções 

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
}).reveal("#home, #home img, #home .stats, #services, #services header, #services .card, #services .circute-icon, #about, #about header,#about p,#about img");