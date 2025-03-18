function Carousel(){
    return(
        <div id="carouselExample" class="carousel slide" style={{width: 500}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://preview.redd.it/homer-uchiha-v0-zh5brm4usx2e1.jpg?width=640&crop=smart&auto=webp&s=664be3d31ba1f9ae7821b7b7a6f44a31a946a164" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://noticias.coches.com/wp-content/uploads/2016/07/captura-coche-banana-2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/b8/b4/cb/b8b4cbd796b1ab6a410480142af12529.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;