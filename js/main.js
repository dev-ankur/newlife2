var menuToggler = ref('menu-list');

var menu = ref('menu');
var header = ref('header');
var menuListItems;

click(menuToggler, function(e){
  if (menu.classList.contains('show')){
    menuHide();
  }else{
    menuShow();
  }
});



function menuShow(){
  menu.classList.add('show');
  header.classList.add('back-shadow');
  menuToggler.children[0].style.transform = 'rotate(45deg)';
  menuToggler.children[0].style.top = '11px';
  menuToggler.children[1].style.transform = 'rotate(-45deg)';
  menuToggler.children[2].style.display = 'none';
  menuListItems = refAll('#menu li a');
  for(let i=0;i<menuListItems.length - 1;i++){
    click(menuListItems[i], function(e){
      menuHide();
      const offsetTop = document.querySelector(menuListItems[i].getAttribute('href')).offsetTop;
      scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    });
  }
}

function menuHide(){
  menu.classList.remove('show');
  header.classList.remove('back-shadow');
  menuToggler.children[0].style.transform = 'rotate(0deg)';
  menuToggler.children[0].style.top = '0px';
  menuToggler.children[1].style.transform = 'rotate(0deg)';
  menuToggler.children[2].style.display = 'inline-block';
}

click(header, function(e){
  if(header != (e.target || e.srcElement)){
    return;
  }
  
  menuHide();

})