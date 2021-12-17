import { apiBaseUrl } from "../../services/api";
import "./styles.css";

export default function ImageView({ imageUrl }) {
  return (
    <div className="img-container">
      <img src={`${apiBaseUrl}${imageUrl || ""}`} alt="img" />
    </div>
  );
}
