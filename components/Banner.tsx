import { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from "../constants/baseUrl";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          fill
          style={{objectFit:"cover"}}
        />
      </div>
    </div>
  );
}
export default Banner;
