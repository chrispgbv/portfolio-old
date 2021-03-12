import "./page4.scss";
import SlideShow from "./slideShow.js"

function Page4() {
  return (
    <div className="page4">
      <div className="block">
        <div className="placeholder">
          <h2> My Artwork</h2>
          <div className="carousel">
            <SlideShow /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
