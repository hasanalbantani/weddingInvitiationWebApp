function openMenu(){
  var x = document.querySelector('.link');
  // x.style.display = 'none';
  if(x){
    x.classList.add('overlay');
  }else{
    x.classList.remove('overlay');
  }
}