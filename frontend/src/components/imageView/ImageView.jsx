import "./styles.css";

export default function ImageView({ imageUrl }) {
  return (
    <div className="img-container">
      <img src={imageUrl || ""} alt="img" />
    </div>
  );
}
