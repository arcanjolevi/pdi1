import "./style.css";
import { useState } from "react";
import { Flex, Button, Heading, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import api from "../../services/api";
import { MdBuild } from "react-icons/md";
import { filtersDefault } from "../../utils/filters";

export default function Sidebar({
  setEffectTitle,
  applyEffect,
  btnRef,
  onOpen,
  popStack,
  setCurrentEffect,
  setImage,
  pushStack,
}) {
  const [filters, setFilters] = useState(filtersDefault);

  const inputRef = useRef();

  function select(name) {
    const newFilters = filters.map((f) => {
      return {
        ...f,
        selected: f.name === name,
      };
    });
    setFilters(newFilters);
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
        setImage(r.data.filename);
        pushStack(r.data.filename);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="side-bar">
      <Flex alignItems="center" justifyContent="center" padding="10px">
        <MdBuild color="#220049" size={20} />
        <Heading marginLeft="10px" color="#220049" fontSize="20px">
          Algoritmos/Técnicas
        </Heading>
      </Flex>
      <div className="algorithm-techniques">
        <ul>
          {filters.map((f) => (
            <li key={f.name}>
              <Button
                width="100%"
                justifyContent="flex-start"
                colorScheme="purple"
                variant={"ghost"}
                borderBottom="1px solid #eee"
                btnRef={btnRef}
                onClick={() => {
                  select(f.name);
                  if (f.params) {
                    setCurrentEffect(f);
                    onOpen();
                  } else {
                    if (f.route) {
                      applyEffect(f.route);
                    } else {
                      console.log("no params", f.route);
                    }
                  }
                }}
              >
                {f.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <Flex width="100%" paddingY="10px" justifyContent="space-evenly">
        <Input
          display="none"
          onChange={changeHandler}
          ref={inputRef}
          type="file"
          colorScheme="purple"
        />
        <Button onClick={popStack} colorScheme="purple">
          Desfazer
        </Button>
        <Button onClick={() => inputRef.current.click()} colorScheme="purple">
          Carregar Imagem
        </Button>
      </Flex>
    </div>
  );
}
