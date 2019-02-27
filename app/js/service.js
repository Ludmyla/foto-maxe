(function() {
	var recordsCount = 10;
	var loadMoreIndex = 1;

	$.get('/json/get-dates.json').then(function(response) {
		var table = generateTable(response, 0);
		$('#dynamicTable').html(table);
	});

	$('#loadMore').click(function() {
		$.get('/json/get-dates.json').then(function(response) {
			var table = $('#dynamicTable').html();
			table += generateTable(response, loadMoreIndex * recordsCount);
			loadMoreIndex += 1;
			$('#dynamicTable').html(table);
		});
	});

	$('tbody').on('click','.fa-times', function() {
		var index = this.id.replace( /^\D+/g, '');
		var element = $('#row' + index);
		element.html('');
	});

	function generateTable(data, startFrom) {
		var result = '';
		var counter = 0;

		var status = data.status ? 'Актуально ' : 'Закрыто ';
		$.each(data.data, function(index, item) {
			counter += 1;
			if (counter > startFrom && counter <= startFrom + recordsCount) {
			    result += '<tr id="row' + index + '"><td>'+ index + '</td>';
			    result += '<td>'+ item.id + '</td>';
			    result += '<td> <img src="'+ item.image + '"/>' + '<span>' + item.name + '</span>' + '</td>';
			    result += '<td>'+ status + item.count_available + '</td>';
			    result += '<td>'+ 'от '+ item.min_age + ' до ' + item.max_age + '</td>';
			    result += '<td>'+ new Date(item.date).toLocaleString() + '</td>';
			    result += '<td>'+ item.country + '</td>';
			    result += '<td>'+ item.city + '</td>';
			    result += '<td>'+ item.description + '</td>';
			    result += '<td><i class="fa fa-times" id="remove' + index +' "></i></tr>'
			}
		});

		return result;
	}



});