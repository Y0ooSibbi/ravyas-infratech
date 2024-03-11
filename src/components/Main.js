import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='main'>
        <div className='left-column'>
        <div>
      <h1>Ravyas <span>InfraTech</span></h1>
      <h3>specialized in connecting clients with <span>top-notch service</span></h3>
      <p>I have aroudn woi wa;o agoiwoi woigewoijweio joiw joijfwiofeoiw jiow <br></br>joioi jio joi ojiow  iowfweiofweio fewio <br></br>oifwe hweoi boiwe b</p>
      <div className='btn'>
            <button type='buttton' className='primary-btn'>Learn More</button>
            <button type='button'>Watch Video</button>
        </div>
    </div>
        </div>
        <div className='right-column'>
            <img src='https://assets.materialup.com/uploads/0d595e7d-9dd9-447d-96ef-d6a35176a9c6/preview.gif'></img>
        </div>

    </div>
  )
}
