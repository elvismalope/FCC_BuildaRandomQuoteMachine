
var oQuote;
function getNewQoute() {
	console.log("getNewQoute");
	$.getJSON("https://talaikis.com/api/quotes/random/", function(json){
		console.log("UpdateUI");
		oQuote = json;
		$("#quoteContent").html(json.quote);
		$("#quoteAuthor").html("- " + json.author);

		$('#tweetButton iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button fa fa-twitter')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', '/')
        .attr('data-text', '"' + json.quote + '" ' + json.author)
        .attr('data-size', 'large');
	  console.log("Recreating tweet");
    $('#tweetButton').append(tweetBtn);
    twttr.widgets.load();
	});
}

$(document).ready(function(){
	$("#newQuoteButton").on("click", getNewQoute);
})
