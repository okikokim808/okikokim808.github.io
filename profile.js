console.log("All good under the hood")
var quote1 = "Francisco is extremely confident, hard working, and dependable. His great communication skills and professionalism makes him fun to work with. Overall he’s a great colleague to have!";
var quote2 = "Francisco is extremely confident, hard working, and dependable. His great communication skills and professionalism makes him fun to work with. Overall he’s a great colleague to have!";
var quote3 = "Francisco is extremely confident, hard working, and dependable. His great communication skills and professionalism makes him fun to work with. Overall he’s a great colleague to have!";

var quotes = [quote1, quote2, quote3];

var p = $('.quotes');
var index = 0;
function showNextQuote(){
    index++;
    p.text(quotes[index % 3]);
    p.fadeIn(500).delay(500).fadeOut(500, showNextQuote());
}
showNextQuote();
