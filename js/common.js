function ref(id){
  return document.getElementById(id);
}

function refAll(q){
  return document.querySelectorAll(q);
}

function click(ref, cb){
  ref.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    cb(e);
    
    
  });
}