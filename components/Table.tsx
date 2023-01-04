import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
}

function Table({ products }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td key={product.id} className="tableDataPrice">
              A${product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
