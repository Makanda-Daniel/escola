let btmenu = document.getElementById("btmenu")
let acao = document.querySelector(".acao")
let menu = document.getElementById("menu")
 btmenu.addEventListener("click", function (){

    if(menu.style.display=="none") {
        menu.style.display="block"
    } else {
        menu.style.display="none"
    }

 })


  function clicar () {
    alert("Faça login na sua conta, para ter acesso a todas as funcionalidades")
  }