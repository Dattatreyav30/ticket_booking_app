import "./Insights.css";

const Insights = (props) => {
  return (
    <div className="insights">
      <div>
        <button className="byYou"></button>
        <p>seat selected by you</p>
      </div>
      <div>
        <button disabled className="green"></button>
        <p>seats available</p>
      </div>
      <div>
        <button disabled className="red"></button>
        <p>seat available for female passengers</p>
      </div>
      <div>
        <button disabled className="bookedred"></button>
        <p>seat booked by female passengers</p>
      </div>
      <div>
        <button disabled></button>
        <p>seat booked by others</p>
      </div>
    </div>
  );
};

export default Insights;
