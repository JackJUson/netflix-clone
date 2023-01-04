import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
}

function Table({ products }: Props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>Monthly price</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Table