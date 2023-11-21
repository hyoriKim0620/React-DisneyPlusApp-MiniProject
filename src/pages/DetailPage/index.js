import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  // { movieId } => let movieId = useParams().movieId; 를 줄여서 쓴 것
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      console.log("response.data : ", response.data);
      setMovie(response.data);
    }

    fetchData();
  }, [movieId]);

  if (!movie) return null;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="img"
      />
    </section>
  );
};

export default DetailPage;
