var menuToggler = ref('menu-list');
var me = ref('me');
var menu = ref('menu');
var header = ref('header');
var menuListItems;

var knowMore = ref('know-more');
var letsConnect = ref('let-connect');

var screen3 = 768;    // screen width variable as in _theme.scss file in 'px'





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

function headerMenuWork(){
  menuListItems = refAll('#menu li a');
  for(let i=0;i<menuListItems.length - 1;i++){
    click(menuListItems[i], function(e){
      menuHide();
      let offsetTop = document.querySelector(menuListItems[i].getAttribute('href')).offsetTop;
      if(window.innerWidth >= 768){
        offsetTop = offsetTop - 70;
      }
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

function setToScroll(){
  // console.log('dsae');
  if(document.documentElement.scrollTop > me.offsetTop){
    me.classList.add('scrollset');
  }else{
    me.classList.remove('scrollset');
  }
}

function stickRef(){
  if(window.innerWidth < 768) {
    return;
  }
  window.addEventListener('scroll', setToScroll());
  
}


click(menuToggler, function(e){
  if (menu.classList.contains('show')){
    menuHide();
  }else{
    menuShow();
  }
});

click(header, function(e){
  if(header != (e.target || e.srcElement)){
    return;
  }
  
  menuHide();

})

click(knowMore, function(e){
  // console.log('hello');
  let offsetTop = ref('services').offsetTop;
  if(window.innerWidth >= 768){
    offsetTop = offsetTop - 70;
  }
  scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
});

click(letsConnect, function(e){
  let offsetTop = ref('contact').offsetTop;
  if(window.innerWidth >= 768){
    offsetTop = offsetTop - 70;
  }
  scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
});

click(me, function(e){
  let offsetTop = document.body.offsetTop;
  scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
})

headerMenuWork();

window.addEventListener('scroll', function(e){
  if(window.innerWidth < 768){
    return;
  }
  stickRef();
})

window.onresize = function(){

  if(window.innerWidth < 768){
    me.classList.remove('scrollset');
  }
  
}