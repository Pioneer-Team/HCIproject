

jQuery.get('data.xml', function(data) {

   $('#wifi').val($(data).find('record').text());
});
