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

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    contentType: 'application/json',
    success: function (data) {
      for (const j of data) {
        $('section.places').append(`
          <article>
            <div class="title_box">
              <h2>${j.name}</h2>
              <div class="price_by_night">${j.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">${j.max_guest} Guest${j.max_guest != 1}s${endif}</div>
              <div class="number_rooms">${j.number_rooms} Bedroom${j.number_rooms != 1}s${endif}</div>
              <div class="number_bathrooms">${j.number_bathrooms} Bathroom${j.number_bathrooms != 1}s${endif}</div>
            </div>
          </article>`);}
      }
    })
});
