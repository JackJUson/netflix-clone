import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction == "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0.5 sm:space-y-2 sm:h-40 lg:h-60">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5]
      transition duration-300 hover:text-white md:text-2xl lg:text-3xl"
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto 
          h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 
          ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-1 sm:space-x-3 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail movie={movie} key={movie.id} />
          ))}
        </div>
            
        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto 
          h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 
          `}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
