import ImageView from "../imageView/ImageView";
import Sidebar from "../sidebar/Sidebar";
import "./styles.css";
import Logo from "../logo/Logo";
import { useState, useEffect } from "react";

import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Rightbar } from "../effects/Rightbar.jsx";
import toast from "react-hot-toast";

export default function PageContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [image, setImage] = useState([]);

  const [images, setImages] = useState([]);
  const [currentParams, setCurrentParams] = useState();

  function applyEffect() {
    console.log("apply");
  }

  function pushStack() {
    images.push(image);
    console.log(images.length);
  }

  function popStack() {
    if (images.length > 1) {
      setImage(images.pop());
    } else {
      toast.error("Não Existem estados anteriores");
    }
  }

  return (
    <>
      <Logo />
      <div className="page-container">
        <Sidebar
          popStack={popStack}
          pushStack={pushStack}
          applyEffect={applyEffect}
          btnRef={btnRef}
          onOpen={onOpen}
          setCurrentParams={setCurrentParams}
          setImage={setImage}
        />
        <ImageView imageUrl={image} />
        <Rightbar
          currentParams={currentParams}
          isOpen={isOpen}
          onClose={onClose}
        />
      </div>
    </>
  );
}
