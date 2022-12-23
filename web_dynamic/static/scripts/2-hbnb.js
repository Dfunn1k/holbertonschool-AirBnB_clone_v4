$(window).on('load', function () {
  const showAmenities = {};
  // this will listen each event
  $('.popover input').change(function (event) {
    const evento = event.target;
    const idAmenitie = evento.getAttribute('data-id');
    const nameAmenitie = evento.getAttribute('data-name');

    if (evento.checked) {
      showAmenities[idAmenitie] = nameAmenitie;
    } else {
      delete showAmenities[idAmenitie];
    }

    const listAmenities = Object.values(showAmenities);

    if (listAmenities.length > 0) {
      const concatAmenities = listAmenities.join(', ');
      if (concatAmenities.length > 40) {
        $('.amenities h4').text(concatAmenities.substring(0, 40 - 3) + '...');
      } else {
        $('.amenities h4').text(concatAmenities);
      }
    } else {
      $('.amenities h4').html('&nbsp;');
    }
  });

  // This will check if the statuscode is OK or not
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (data, status) {
      console.log(data.status);
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
});
