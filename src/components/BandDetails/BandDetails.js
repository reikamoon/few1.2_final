import React from 'react'
import data from '../../metal.json';
import './BandDetails.css';
import LikeButton from '../LikeButton/LikeButton';

function BandDetails(props) {
  const { band_name, fans, formed, origin, split, style } = props
   return (
    <div className="BandDetails">
      <h1>{band_name}</h1>
      <div>Formed: {formed} - Split: {split}</div>
      <h3>Style: {style}</h3>
      <h3>From: {origin}</h3>
      <h3>Fans: {fans}</h3>
      Likes:
    <LikeButton />
    </div>
  )
}

export default BandDetails