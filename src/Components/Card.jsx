import Button from "./Button";

function Card() {
    return (
        <>
        <div className="card__wrapper">
            <article className="price__card">
                <h2>Basic</h2>
                <div className="price__block">19.99</div>
                <hr />
                <div className="info__block">500 GB storage</div>
                <hr />
                <div className="info__block">2 Users Allowed</div>
                <hr />
                <div className="info__block">Sent Up to 3 GB</div>
                <hr />
                <Button />
            </article>
        </div>
    </>
    )
}

export default Card;