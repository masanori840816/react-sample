import "./IndexPage.css";
import { useEffect, useState } from "react";

export function IndexPage(): JSX.Element {

  const [pictureUrls, setPictureUrls] = useState([]);
  const [pictureIndex, setPictureIndex] = useState(0);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_APP_URL}/pointclouds`, {
      mode: "cors",
      method: "GET"
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
    fetch(`${import.meta.env.VITE_SERVER_APP_URL}/picturelist`, {
      mode: "cors",
      method: "GET"
    }).then(res => res.json())
    .then(res => setPictureUrls(JSON.parse(JSON.stringify(res))))
    .catch(err => console.error(err));
  }, []);
  const prevPictureEvent = () => {
    setPictureIndex((pictureIndex - 1 + pictureUrls.length) % pictureUrls.length);
  }
  const nextPictureEvent = () => {
    setPictureIndex((pictureIndex + 1) % pictureUrls.length);
  }
  return <div className="main_page_area">
    
    <button id="prev" onClick={prevPictureEvent}>Previous</button>
        <button id="next" onClick={nextPictureEvent}>Next</button>
        <div className="container">
          <div className="slides" style={{ transform: `translateX(-${pictureIndex * 100}%)` }}>
            {pictureUrls.map((url) => (
              <img src={url} alt={url} key={url} className="slide-image" ></img>
            ))}
          </div>
        </div>
    </div>;
}

export default IndexPage;