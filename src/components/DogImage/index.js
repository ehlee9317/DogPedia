import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../constants";
import './style.css';

const DogImage = () => {
  const { breedName } = useParams();
  const [imgUrls, setImgUrls] = useState([]);
  const breedNameUpper = breedName.toUpperCase();

  useEffect(() => {
    fetch(`${API_BASE_URL}breed/${breedName}/images/random/4`)
      .then((response) => response.json())
      .then((data) => {
        setImgUrls(data.message);
      })
      .catch((error) => {
        console.log("Error fetching image");
      });
  }, [breedName]);

  return (
    <div className="dogImage">
      <h1 className="dogImage__title">PICTURES OF {breedNameUpper}</h1>
      <div className="dogImage__imgContainer">
        {imgUrls.map((image, idx) => {
          return(
            <img className="dogImage__img" alt='dog' src={image} key={idx}/>
            )
        })}
      </div>
    </div>
  );
};

export default DogImage;
