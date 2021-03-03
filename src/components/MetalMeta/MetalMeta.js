import React from 'react';
import data from '../../metal.json';
import BandDetails from '../BandDetails/BandDetails';
import './MetalMeta.css';


function MetalMeta() {
  const bandcount = JSON.parse(JSON.stringify(data)).length
  const spaces = data.map(( { band_name, fans, formed, origin, split, style }, i) => {
    return (
      <BandDetails
        id={i}
        key={band_name}
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
    <div className="MetalMeta">
    <h2>Metal Bands 🤘: {bandcount}</h2>
      { spaces }
    </div>
  )
}

export default MetalMeta