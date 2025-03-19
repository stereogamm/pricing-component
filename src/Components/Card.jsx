import CountUp from "react-countup";
import Button from "./Button";

function Card({ data }) {
  return (
    <div className="card__wrapper">
      {data.map((card, index) => (
        <article  key={index} tabIndex="0" className="price__card">
          <h2>{card.header}</h2>
          <CountUp className="price__block" start={1} end={card.price} duration={2} />
          <hr />
          <div className="info__block">{card.storage} {card.units} storage</div>
          <hr />
          <div className="info__block">{card.userCount} Users Allowed</div>
          <hr />
          <div className="info__block">Sent Up to {card.update} GB</div>
          <hr />
          <Button />
        </article>
      ))}
    </div>
  );
}

export default Card;
