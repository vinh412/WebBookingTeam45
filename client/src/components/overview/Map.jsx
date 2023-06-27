import React from 'react'

function Map({latitude, longitude}) {
    function convertToDms(dd, isLng) {
        var dir = dd < 0
          ? isLng ? 'W' : 'S'
          : isLng ? 'E' : 'N';
      
        var absDd = Math.abs(dd);
        var deg = absDd | 0;
        var frac = absDd - deg;
        var min = (frac * 60) | 0;
        var sec = frac * 3600 - min * 60;
        // Round it to 2 decimal points.
        sec = Math.round(sec * 100) / 100;
        return deg + "°" + min + "'" + sec + '"' + dir;
      }
    const handleClick = () => {
        window.open(`https://www.google.com/maps/place/${convertToDms(latitude,0)}+${convertToDms(longitude,1)}/@${latitude},${longitude}`);
    }
  return (
    <div className='card' onClick={handleClick}>
        <img src='https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg'/>
    </div>
  )
}

export default Map