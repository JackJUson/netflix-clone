import { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from "../constants/baseUrl";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div
      className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] 
    lg:justify-end lg:pb-12"
    >
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h1 className="text-2xl font-bold text-shadow-xl md:text-4xl lg:mr-4 lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p
        className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl 
      lg:py-4 lg:text-2xl"
      >
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black lg:mr-3">
          <FaPlay className="h-4 w-4 text-black md:h-5 md:w-5 lg:h-6 lg:w-6" />
          Play
        </button>
        <button
          className="bannerButton bg-[grey]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info{" "}
          <InformationCircleIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
        </button>
      </div>
    </div>
  );
}
export default Banner;
