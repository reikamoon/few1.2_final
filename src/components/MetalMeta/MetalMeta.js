import React from 'react';
import data from '../../metal.json';
import BandDetails from '../BandDetails/BandDetails'


function MetalMeta() {

  const spaces = data.map(( { band_name, fans, formed, origin, split, style }, i) => {
    return (
      <BandDetails
        id={i}
        band_name={band_name}
        fans={fans}
        formed={formed}
        origin={origin}
        split={split}
        style={style}
      />
    )
  })

  return (
    <div className="CastList">
      { spaces }
    </div>
  )
}

export default MetalMeta