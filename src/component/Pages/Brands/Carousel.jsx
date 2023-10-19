const Carousel = () => {
  return (
    <div>
      <div>
        <div className="carousel w-full h-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/qmTj7V5/Rent-a-Car-Professional-Web-Banner-Design-1024x576.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/CMSyxwd/Auto-Company-Ad-Banner-Design-1024x576.jpg
              https://i.ibb.co/qmTj7V5/Rent-a-Car-Professional-Web-Banner-Design-1024x576.jpg
              https://i.ibb.co/gZr1zBL/car-rental-automotive-facebook-cover-template-106176-2483.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/gZr1zBL/car-rental-automotive-facebook-cover-template-106176-2483.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
