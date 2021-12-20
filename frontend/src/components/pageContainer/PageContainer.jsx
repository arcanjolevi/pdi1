import ImageView from "../imageView/ImageView";
import Sidebar from "../sidebar/Sidebar";
import "./styles.css";
import Logo from "../logo/Logo";
import { useState } from "react";
import api from "../../services/api";

import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Rightbar } from "../effects/Rightbar.jsx";
import toast from "react-hot-toast";

export default function PageContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [image, setImage] = useState();
  const [image2, setImage2] = useState();

  const [images, setImages] = useState([]);
  const [currentEffect, setCurrentEffect] = useState();

  function applyEffectWithParams(params) {
    if (!currentEffect.route) {
      return;
    }
    toast
      .promise(
        api.post(currentEffect.route, {
          filename: image,
          ...params,
        }),
        {
          loading: "Aplicando técnica...",
          success: <b>Técnica aplicado com sucesso!</b>,
          error: <b>Falha na aplicação da técnica.</b>,
        }
      )
      .then((r) => {
        setImage(r.data.result);
        pushStack(r.data.result);
        setImage2(null);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        onClose();
      });
  }

  function applyEffect(route) {
    toast
      .promise(
        api.post(route, {
          filename: image,
        }),
        {
          loading: "Aplicando técnica...",
          success: <b>Técnica aplicado com sucesso!</b>,
          error: <b>Falha na aplicação da técnica.</b>,
        }
      )
      .then((r) => {
        if (route === "histogram") {
          setImage2(r.data.histogram);
        } else {
          setImage(r.data.result);
          pushStack(r.data.result);
          setImage2(null);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function pushStack() {
    images.push(image);
  }

  function popStack() {
    if (images.length > 1) {
      setImage(images.pop());
    } else {
      toast.error("Não Existem estados anteriores");
    }

    setImage2(null);
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
          setCurrentEffect={setCurrentEffect}
          setImage={setImage}
        />
        <ImageView imageUrl={image} image2Url={image2} />
        <Rightbar
          currentEffect={currentEffect}
          isOpen={isOpen}
          onClose={onClose}
          applyEffectWithParams={applyEffectWithParams}
        />
      </div>
    </>
  );
}
