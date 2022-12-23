$(window).on('load', function() {
  const showAmenities = {};
  $('.popover input').change(function(event){
    const evento = event.target
    const nameAmenitie = evento.getAttribute('data-name')
    const idAmenitie = evento.getAttribute('data-id')

    if (evento.checked){
      showAmenities[idAmenitie] = nameAmenitie
    } else{
      const idx = showAmenities.indexOf(nameAmenitie)
      showAmenities.splice(idx, 1)
      console.log("me desmarco")
    }
    
    if (showAmenities.length > 0){
      const concatAmenities = showAmenities.join(', ')
      if (concatAmenities.length > 40){
        $('.amenities h4').text(concatAmenities.substring(0, 40 -3) + "...")
      } else {
        $('.amenities h4').text(concatAmenities)
      }
    }
    
    console.log(showAmenities)
});})