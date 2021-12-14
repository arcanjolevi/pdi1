import ImageView from "../imageView/ImageView";
import Sidebar from "../sidebar/Sidebar";
import Effects from "../effects/Effects";
import "./styles.css";
import Logo from "../logo/Logo";

export default function PageContainer() {
  return (
    <>
      <Logo />
      <div className="page-container">
        <Sidebar />
        <ImageView />
        <Effects />
      </div>
    </>
  );
}
