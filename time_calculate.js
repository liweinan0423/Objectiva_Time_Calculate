el = document.createElement('script');
el.src = 'http://code.jquery.com/jquery-1.10.2.min.js';
el.onload = calculate_time

document.body.appendChild(el);


function calculate_time() {
	var sum = 0;
	
	$("#myLogList_dgLogList tr.Header0").append('<td>Day Total</td><td>Week Total</td><td>Week Remaining</td>')
	
	$($("#myLogList_dgLogList tr.Text0").get().reverse()).each(function() {
		var date = new Date($($(this).children('td')[0]).text());
		var login_time = new Date($($(this).children('td')[1]).text());
		var logout_time = new Date($($(this).children('td')[2]).text());
		
		
		if (date.getDay() == 1) {
				sum = 0;
		}
		
		if (!isNaN(login_time) && !isNaN(logout_time)) {
			var working_time = (logout_time - login_time) / 1000 / 60 / 60 - 1

			$(this).append('<td>' + working_time.toPrecision(3) + '</td>')
			sum += working_time;
			$(this).append('<td>' + sum.toPrecision(3) + '</td>');
			$(this).append('<td>' + (40 - sum).toPrecision(3) + '</td>');
			
			
			 
		} else {
			$(this).append('<td></td><td></td><td></td>');
		}
		
	})
}




