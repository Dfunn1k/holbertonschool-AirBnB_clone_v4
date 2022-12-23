$(window).on('load', function () {
  const showAmenities = {};

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
});
