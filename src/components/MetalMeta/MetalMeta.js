import React, { useState } from 'react'
import data from '../../metal.js';
import BandDetails from '../BandDetails/BandDetails';
import './MetalMeta.css';



function MetalMeta() {
  const [ query, setQuery ] = useState('')
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
    <form>
    <h2>Metal Bands 🤘: {bandcount}</h2>
    <input
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
    />
    <button type="submit">Submit</button>
            </form>
      { spaces }
    </div>
  )
}

export default MetalMeta