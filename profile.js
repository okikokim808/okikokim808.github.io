console.log("All good under the hood")
var quote1 = "<p>Francisco is extremely confident, hard working, and dependable. His great communication skills and professionalism makes him fun to work with. Overall he’s a great colleague to have! <br> -Raj Mahal</p>";
var quote2 = "<p>Francisco has hair <br> -Justin Castillo</p>";
var quote3 = "<p>Francisco is extremely confident, hard working, and dependable. His great communication skills and professionalism makes him fun to work with. Overall he’s a great colleague to have! <br> -Raj Mahal</p>";

var quotes = [quote1, quote2, quote3];
var counter = 0;

function showQuote(){
    $('.quotes').fadeTo(2000, 0, function(){
        this.innerHTML=quotes[counter];
        counter = ++counter % quotes.length;
        $(this).fadeTo(2000, 1, showQuote);
    });
    // $('#quotes').fadeIn(2000);
    // $('#quotes').delay(2000);
    // $('#quotes').fadeOut(2000);
}
showQuote();