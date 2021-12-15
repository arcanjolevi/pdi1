import ImageView from "../imageView/ImageView";
import Sidebar from "../sidebar/Sidebar";
import Effects from "../effects/Effects";
import "./styles.css";
import Logo from "../logo/Logo";
import { useState, useEffect } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function PageContainer() {
  const [image, setImage] = useState();
  const [currentEfftectTitle, setCurrentEffectTitle] = useState("Parâmetros");
  const [histogramUrl, sethistogramUrl] = useState();

  return (
    <>
      <Logo />
      <div className="page-container">
        <Sidebar setEffectTitle={setCurrentEffectTitle} />
        <ImageView imageUrl={image} />
        <Effects
          histogramUrl={histogramUrl}
          title={currentEfftectTitle}
          setImage={setImage}
          image={image}
        />
      </div>
    </>
  );
}
