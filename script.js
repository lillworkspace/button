d3.csv("button_collection.csv", function(data) {
	for (var i = 0; i < data.length; i++){
		var item = data[i];
		if (item.inch == 1){
			$("#buttons").append('<div class="button button--1"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 1.25) {
			$("#buttons").append('<div class="button button--125"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 1.5) {
			$("#buttons").append('<div class="button button--15"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 1.75) {
			$("#buttons").append('<div class="button button--175"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 2) {
			$("#buttons").append('<div class="button button--200"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 2.25) {
			$("#buttons").append('<div class="button button--225"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 2.5) {
			$("#buttons").append('<div class="button button--250"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 2.75) {
			$("#buttons").append('<div class="button button--225"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 3.5) {
			$("#buttons").append('<div class="button button--350"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else if (item.inch == 'auto') {
			$("#buttons").append('<div class="button button--auto"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"><div class="overlay"><div class="text">'+ item.description + " " + item.month + " " + item.year + '</div></a></div>')
		} else {
			$("#buttons").append('<div class="button"><img src="buttons/' + item.filename +'.gif" alt="' + item.filename + '"></a></div>');
		}
	}   
});