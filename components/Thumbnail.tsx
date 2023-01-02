import Image from "next/image";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  // movie: Movie | DocumentData;
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition 
    duration-300 ease-out sm:hover:scale-[103%] md:h-36 md:min-w-[260px]
    lg:h-52 lg:min-w-[380px]"
    onClick={() => {
      setCurrentMovie(movie);
      setShowModal(true);
    }}>
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
