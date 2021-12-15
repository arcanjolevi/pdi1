import toast from "react-hot-toast";
import api, { apiBaseUrl } from "../../services/api";
import { useState } from "react";

import "./styles.css";

function getImageName(image) {
  return "uploads/" + image.split("/")[4];
}

export default function Effects({ setImage, title, image }) {
  const [histogramurl, sethistogramurl] = useState();

  function applyEffect() {
    if (title === "Histograma") {
      toast
        .promise(
          api.post("histogram", {
            filename: getImageName(image),
          }),
          {
            loading: "Aplicando Histograma...",
            success: <b>Histograma Aplicado com sucesso!</b>,
            error: <b>Falha ao aplicar técnica</b>,
          }
        )
        .then((r) => {
          console.log(apiBaseUrl + r.data.histogram);
          sethistogramurl(apiBaseUrl + r.data.histogram);
        });
    } else {
      toast.error("Selecione alguma Técina/Algoritmo");
    }
  }

  const changeHandler = (event) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    toast
      .promise(
        api.post("api/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        {
          loading: "Carregando imagem...",
          success: <b>Imagem carregada com sucesso!</b>,
          error: <b>Falha no upload da imagem.</b>,
        }
      )
      .then((r) => {
        setImage(apiBaseUrl + r.data.filename);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="effects-container">
      <h2>{title || "Parâmetros"}</h2>

      <div className="params">
        <div className="top cell"></div>
        <div className="bottom cell">
          <img src={histogramurl || ""} alt="histogram" />
        </div>
      </div>

      <div className="btns">
        <button onClick={applyEffect}>Aplicar</button>
        <button>Voltar</button>
        <form>
          <div>
            <div className="button">
              <label htmlFor="arquivo">Selecionar Imagem</label>
            </div>
            <input
              type="file"
              name="arquivo"
              id="arquivo"
              onChange={changeHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
