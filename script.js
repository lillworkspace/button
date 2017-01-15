d3.csv("button_collection.csv", function(data) {
	for (var i = 0; i < data.length; i++){
		var item = data[i];
		$("#buttons").append('<div class="button_container"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>');
	}   
});
