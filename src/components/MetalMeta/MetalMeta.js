import React from 'react';
import data from './metal.json';

function MetalMeta() {

  const spaces = data.map(( {  }, i) => {
    return (
      <CharaDetails
        id={i}
        key={key} // The title could be a key
        name={name}
        title={title}
        img={img}
        quote={quote}
        weapontype={weapontype}
        difficulty={difficulty}
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