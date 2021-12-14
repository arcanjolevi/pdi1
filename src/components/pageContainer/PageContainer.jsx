import ImageView from "../imageView/ImageView";
import Sidebar from "../sidebar/Sidebar";
import "./styles.css";

export default function PageContainer() {
  return (
    <>
      <div className="page-container">
        <Sidebar />
        <ImageView />
      </div>
    </>
  );
}
