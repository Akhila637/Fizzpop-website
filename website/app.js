function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150) {
        navbar.classList.remove('bgColor'); 
    } else {
        navbar.classList.add('bgColor');
    }
  }
  
  window.addEventListener('scroll',changeBg)

const scriptURL = 'https://script.google.com/macros/s/AKfycbx1JmuQ8fojKoz_8TLyZuLV58Hpzs9bI4U0c786NOZkwQEgoyhWVz7B0QiLi4JKTrp3/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("message")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Sign Up Successfully";
            setTimeout(function(){
                msg.innerHTML = "";
            },3000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });

