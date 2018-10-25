console.log("All good under the hood")
var quote1 = "<p>Francisco is extremely confident, hard working, and dependable. His great communication skills and professionalism makes him fun to work with. Overall he’s a great colleague to have! <br> -Raj Mahal</p>";
var quote2 = "<p>Francisco has hair <br> -Justin Castillo</p>";
var quote3 = "<p>Francisco demonstrated his ability to learn coding concept quickly in class. Exposed to coding since high school through TEALS. Able to manage heavily loaded General Assembly boot camp, and a part time job at jamba juice. <br> -Yi Liu</p>";

var quotes = [quote1, quote2, quote3];
var counter = 0;

function showQuote(){
    $('.quotes').fadeTo(5000, 0, function(){
        this.innerHTML=quotes[counter];
        counter = ++counter % quotes.length;
        $(this).fadeTo(5000, 1, showQuote);
    });
    // $('#quotes').fadeIn(2000);
    // $('#quotes').delay(2000);
    // $('#quotes').fadeOut(2000);
}
showQuote();

function scrollToSection(e) {
    e.preventDefault();
    var div = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: div.offset().top
    }, 800);
  }
  $('[data-scroll]').on('click', scrollToSection);

(() => {
  const form = document.querySelector('form');
  const formResponse = document.querySelector('js-form-response');

  form.onsubmit = e => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        form.reset();
        formResponse.innerHTML = 'Thanks for the message. I’ll be in touch shortly.';
      } else {
        // The form submission failed
        formResponse.innerHTML = 'Something went wrong';
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };
})();
