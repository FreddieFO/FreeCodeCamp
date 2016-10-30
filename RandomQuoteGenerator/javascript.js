$(document).ready(function () {

	var author;
	var msg;

	$("#getQuote").on("click", function(){
		$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){ 

			author = json.author;
			msg = json.quote;

			$("#quoteDisplay").html(msg);
			$("#authorDisplay").html(author);  

		});

	});

	$("#tweetLink").on("click", function(){

		$(this).attr({ href: "https://twitter.com/intent/tweet?text=" + msg + " - " + author, target: "_blank" });

	});

});

