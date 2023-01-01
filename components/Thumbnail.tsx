import Image from "next/image";
import { Movie } from "../typings";

interface Props {
  // movie: Movie | DocumentData;
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition 
    duration-300 ease-out sm:hover:scale-[103%] md:h-36 md:min-w-[260px]
    lg:h-52 lg:min-w-[380px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
        className="md:rounded object-cover rounded-md"
        fill
      />
    </div>
  );
}
export default Thumbnail;
