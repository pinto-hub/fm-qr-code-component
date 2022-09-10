import qrImage from "../assets/image-qr-code.png";
import "./Card.css";

export const Card = () => {
  return (
    <article className="card">
      <header>
        <img src={qrImage} alt="" />
        <h1>Improve your front-end skills by building projects</h1>
      </header>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </article>
  );
};

export default Card;
