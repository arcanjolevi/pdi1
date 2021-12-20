import { apiBaseUrl } from "../../services/api";
import "./styles.css";

export default function ImageView({ imageUrl, image2Url }) {
  if (image2Url)
    return (
      <div className="img-container2">
        <img src={`${apiBaseUrl}${imageUrl || ""}`} alt="img" />
        <img src={`${apiBaseUrl}${image2Url || ""}`} alt="img" />
      </div>
    );

  return (
    <div className="img-container">
      <img src={`${apiBaseUrl}${imageUrl || ""}`} alt="img" />
    </div>
  );
}
