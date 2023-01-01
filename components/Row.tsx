import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Movie } from "../typings"

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  return (
    <div className="h-40 space-y-1 md:space-y-2">
      <h2>{title}</h2>
      <div className="relative md:-ml-2">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto 
        h-9 w-9 cursor-pointer" />

        <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto 
        h-9 w-9 cursor-pointer" />
      </div>
    </div>
  )
}
export default Row