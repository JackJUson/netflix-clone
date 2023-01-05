import { DocumentData } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Movie } from '../typings'

function useList() {
  const [list, setList] = useState<Movie[] | DocumentData>([]);

  return (
    <div>useList</div>
  )
}
export default useList