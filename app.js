function openMenu(){
  var x = document.querySelector('.link');
  // x.style.display = 'none';
  if(x){
    x.style.display = 'block';
    x.classList.add('overlay');
    // x.style.width = '250px';
  }
}
function closeMenu(){
  var x = document.querySelector('.link');
  if(x){
    x.style.display = 'none';
    x.classList.remove('overlay');
  }
}

