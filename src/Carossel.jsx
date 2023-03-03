import React from 'react'

function Carossel() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide carossel " data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active ">
        <img className="d-block w-100 "  src="./imagem/contaimg2.png" alt="Primeiro Slide"/>
      </div>
      <div className="carousel-item ">
        <img className="d-block w-100 "  src="./imagem/agenda.jpg" alt="Segundo Slide"/>
      </div>
      <div className="carousel-item ">
        <img className="d-block w-100 "  src="./imagem/2.png"/>
      </div>
    </div>
  </div>
  )
  }
  export default Carossel