const btn = document.getElementById('menue-btn');
const overlay = document.getElementById('overlay');
const menue = document.getElementById('mobile_menue');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay_show');
  document.body.classList.toggle('stop_scroll');
  menue.classList.toggle('show_menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  }else if(scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp(){
  counters.forEach((counter) =>{
    counter.innerText = '0';

    const updateCounter = () =>{
      // Get count target
      const target = +counter.getAttribute('data_target');

      // Get current count value
      const c = +counter.innerText;

      // create increament
      const increament = target / 100;

      // If counter is less that the target, add increament
      if(c < target){
        // Round Up and set value
        counter.innerText = `${Math.ceil(c + increament)}`;

        setTimeout(updateCounter, 30)
      }else{
        counter.innerText = target;
      }
    }

    updateCounter();
  })
}


function reset(){
  counters.forEach((counter) =>counter.innerHTML = '0');
}