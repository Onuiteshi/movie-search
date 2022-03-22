import axios from "axios";
import React, { useState } from "react";
import styles from "../../styles/Movie.module.css";
import Slider from "react-slick";
import Image from "next/image";

const Movie = () => {
  const [movie, setMovie] = useState("");
  const [respo, setRes] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    className: "center",
    swipeToSlide: true,
  };

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      await axios
        .get(`http://www.omdbapi.com/?apikey=9ae9b020&s=${movie}`)
        .then((res) => {
          console.log(res);
          setRes(res.data.Search);
        });
    }
  };

  console.log(respo);

  return (
    <div className={styles.movie}>
      <div>
        <div className="container">
          <label className="form-label">Search</label>
          <input
            type="search"
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            className="form-control w-100"
            id="search"
          />
        </div>
        <div className="mt-5 container pe-0">
          <Slider {...settings}>
            {respo.map((movie) => {
              return (
                <div
                  key={movie.imdbID}
                  className={`${styles.card}  card text-center `}
                >
                  <Image
                    className={styles.picture}
                    src={movie.Poster}
                    alt="Logo"
                    layout="fill"
                  />
                  <div className="card-body">
                    <div className={styles.title}>
                      <h3>{movie.Title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Movie;
