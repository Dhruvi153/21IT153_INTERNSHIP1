import "./header.css";
// import Carousel from 'react-bootstrap/Carousel';
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
// integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
// crossorigin="anonymous"></link>


export default function Header() {
  // function DarkVariantExample() {
  return (
    <div>
      <div className="me">
         <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter">BLOGGER</h3>
          </div>
        </div>
         </div>
         <div className="jenil">
        <span>Publish your passions</span>
        <div className="message">
          <div className="word1">,your way</div>
          <div className="word2">Create unique</div>
          <div className="word3">And beautiful.</div>
        </div>
       </div>
      </div>
      <div className="header">
        <div className="headerTitles">
          {/* <span className="headerTitleSm">React & Node</span> */}
          {/* <span className="headerTitleLg">Blog</span> */}
        </div>
      </div>
      {/* <img
        className="headerImg"
        src=" https://wallpaperaccess.com/full/1143629.jpg "
        // src="https://images.hdqwalls.com/download/tree-sun-aesthetic-dawn-landscape-panorama-si-5120x2880.jpg"
        // src="https://cdn.wallpapersafari.com/62/21/j7xBMI.jpg"
        alt=""
      /> */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://wallpapercave.com/wp/wp3105346.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperaccess.com/full/799794.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://wallpaperaccess.com/full/38594.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="http://getwallpapers.com/wallpaper/full/4/6/e/52496.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://mobimg.b-cdn.net/v3/fetch/32/32e1ecbeaf91f0a8366a1a3834135827.jpeg" className="d-block w-100" alt="..." />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

  // export default DarkVariantExample;
//}


