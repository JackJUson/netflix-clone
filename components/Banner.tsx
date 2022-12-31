import Image from "next/image"
import { Movie } from "../typings"

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  return (
    <div>
      {/* <div>
        <Image></Image>
      </div> */}
    </div>
  )
}
export default Banner