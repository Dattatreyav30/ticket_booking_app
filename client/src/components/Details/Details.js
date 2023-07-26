import { useContext } from "react";
import DetailsContext from "../../store/context-details";
import "./Details.css"; // Import the CSS file

const Details = () => {
  const detailsCtx = useContext(DetailsContext);

  let totalAmount = detailsCtx.details.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div className="table">
      <h3>Selection details</h3>
      <table>
        <thead>
          <tr>
            <th>Seat No</th>
            <th>Seat Price</th>
          </tr>
        </thead>
        <tbody>
          {detailsCtx.details.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Total Amount</td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <button className="table-button">Book</button>
    </div>
  );
};

export default Details;
