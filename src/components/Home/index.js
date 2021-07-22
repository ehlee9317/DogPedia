import React, { useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import { API_BASE_URL } from "../../constants";
import "./style.css";

const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchBreed, setSearchBreed] = useState("");

  const getBreed = useCallback(() => {
    fetch(`${API_BASE_URL}breeds/list`)
    .then((response) => response.json())
    .then((data) => {
      setBreeds(breeds.concat(data.message))
    })
    .catch((error) => {
      console.log("Error fetching breed list");
    })
  }, [breeds, setBreeds]);

  useEffect(() => {
    getBreed();
  }, []);

  return (
    <div className="home">
      <h1>List of Dog Breeds</h1>

      <div className="home__container">
        <p>Type a dog breed in the search bar below and click a breed to see beautiful pictures of dogs!</p>
        <input
          type="text"
          placeholder="Search..."
          onChange={event => {
            setSearchBreed(event.target.value)
          }}
        />

        {breeds.filter((breed) => {
          if(searchBreed === "") {
            return breed;
          } else if(breed.toLowerCase().includes(searchBreed.toLowerCase())) {
            return breed;
          }
        }).map((breed, key) => {
          return (
            <div className="home__breedsList" key={key}>
              <Link className="home__breeds" to={`/breed/${breed}`}>{breed}</Link>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default Home;
