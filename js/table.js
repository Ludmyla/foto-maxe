$(function() {
	var recordsCount = 10;
	var loadMoreIndex = 1;
	var eventId;
	var json;

	$.get('json/get-dates.json').then(function(response) {
		var table = generateTable(response, 0);
		json = response;
		$('#dynamicTable').html(table);
	});

	$('#loadMore').click(function() {
		$.get('json/get-dates.json').then(function(response) {
			var table = $('#dynamicTable').html();
			table += generateTable(response, loadMoreIndex * recordsCount);
			loadMoreIndex += 1;
			$('#dynamicTable').html(table);
		});
	});

	$('tbody').on('click','.fa-times', function() {
		$('#delete').modal();
		eventId = $(this).parent().parent()[0].id;
	});

	$('body').on('click', '#submitDelete', function() {
		$('#' + eventId).remove();
	});

	$('tbody').on('click','.fa-pencil', function() {
		$('#edit').modal();
		eventId = $(this).parent().parent()[0].id;
		var editable = json.data[eventId.replace(/[^\d.]/g, '')];
		$('#name').val(editable.name);
		$('#id').val(editable.id);
		$('#count_available').val(editable.count_available);
		$('#min_age').val(editable.min_age);
		$('#max_age').val(editable.max_age);
		$('#date').val(editable.date);
		$('#country').val(editable.country);
		$('#city').val(editable.city);
		$('#description').val(editable.description);
		$('#status').prop('checked', json.status);
	});

	$('body').on('click', '#submitEdit', function() {
		var index = eventId.replace(/[^\d.]/g, '');
		var status = $('#status').prop('checked') ? 'Доступно ' : 'Закрыто ';

		json.data[index].name = $('#name').val();
		json.data[index].id = $('#id').val();
		json.data[index].count_available = $('#count_available').val();
		json.data[index].min_age = $('#min_age').val();
		json.data[index].max_age = $('#max_age').val();
		json.data[index].date = $('#date').val();
		json.data[index].country = $('#country').val();
		json.data[index].city = $('#city').val();
		json.data[index].description = $('#description').val();

		html = generateRow(json.data[index], index, true);
		$('#' + eventId).html(html);
	});

	function generateTable(data, startFrom) {
		var result = '';
		var counter = 0;

		var status = data.status ? 'Доступно ' : 'Закрыто ';
		$.each(data.data, function(index, item) {
			counter += 1;
			if (counter > startFrom && counter <= startFrom + recordsCount) {
				result += generateRow(item, index);
			}
		});

		return result;
	}

	function generateRow(item, index, isSoloRow) {
	    var row = '<td>'+ index + '</td>';
	    row += '<td>'+ item.id + '</td>';
	    row += '<td> <img src="'+ item.image + '"/>' + '<span>' + item.name + '</span>' + '</td>';
	    row += '<td class="nowrap">'+ status + item.count_available + '</td>';
	    row += '<td class="nowrap">'+ 'от '+ item.min_age + ' до ' + item.max_age + '</td>';
	    row += '<td>'+ new Date(item.date).toLocaleString() + '</td>';
	    row += '<td>'+ item.country + ', ' + item.city  + '</td>';
	    row += '<td>'+ item.description + '</td>';
	    row += '<td><i class="fa fa-times"></i><i class="fa fa-pencil"></i>';
	    if (!isSoloRow) {
	    	row = '<tr id="row' + index + '">' + row + '</tr>';
	    }
	    return row;
	}



});