import "./style.css";
import { useState } from "react";
import { Flex, Button, Heading, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import api from "../../services/api";
import { MdBuild } from "react-icons/md";

const filtersDefault = [
  {
    name: "Limiarização",
    selected: false,
    effectTitle: "Effect Title",
    route: "threshold",
    params: [
      {
        type: "selector",
        title: "Tipo de limiarização",
        options: [
          {
            title: "Binario",
            value: "0",
          },
          {
            title: "Binario Inverso",
            value: "1",
          },
          {
            title: "Truncamento",
            value: "2",
          },
          {
            title: "To zero",
            value: "3",
          },
          {
            title: "To Zero Inverso",
            value: "4",
          },
        ],
      },
      {
        type: "spinner",
        title: "Peso limiarização",
        range0: 0,
        range1: 255,
        default: 127,
        step: 1,
      },
    ],
  },

  {
    name: "Escala de cinza",
    selected: false,
    effectTitle: "Effect Title",
    route: "grayscale",
  },

  {
    name: "Passa Alta",
    selected: false,
    effectTitle: "Effect Title",
    route: "highpassaverage",
    params: [
      {
        type: "spinner",
        range0: 0,
        range1: 100,
        default: 3,
        title: "Ordem do filtro",
        step: 1,
      },
    ],
  },

  {
    name: "Passa Alta - Alto Reforço",
    selected: false,
    effectTitle: "Effect Title",
    route: "highpassreforce",
    params: [
      {
        type: "spinner",
        range0: 0,
        range1: 100,
        default: 3,
        title: "Ordem do filtro",
        step: 1,
      },
      {
        type: "spinner",
        title: "Constante A",
        range0: 0,
        range1: 100,
        default: 3,
        step: 0.1,
      },
    ],
  },

  {
    name: "Passa Baixa (Mediana)",
    selected: false,
    effectTitle: "Effect Title",
    route: "lowpassmedian",
    params: [
      {
        type: "spinner",
        range0: 1,
        range1: 99,
        default: 3,
        title: "Ordem do filtro",
        step: 2,
      },
    ],
  },

  {
    name: "Passa Baixa (Média)",
    selected: false,
    effectTitle: "Effect Title",
    route: "lowpassaverage",
    params: [
      {
        type: "spinner",
        range0: 0,
        range1: 100,
        default: 3,
        title: "Ordem do filtro",
        step: 1,
      },
    ],
  },

  {
    name: "Roberts",
    selected: false,
    route: "roberts",
    effectTitle: "Effect Title",
  },

  {
    name: "Prewitt",
    route: "prewitt",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Sobel",
    selected: false,
    route: "sobel",
    effectTitle: "Effect Title",
    params: [
      {
        type: "selector",
        title: "Direção",
        options: [
          {
            title: "Vertical",
            value: "0",
          },
          {
            title: "Horizontal",
            value: "1",
          },
        ],
      },
    ],
  },

  {
    name: "Log",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Zerocross",
    selected: false,
    route: "zerocross",
    effectTitle: "Effect Title",
  },

  {
    name: "Canny",
    selected: false,
    route: "canny",
    effectTitle: "Effect Title",
  },

  {
    name: "Ruídos(salt and pepper, etc)",
    selected: false,
    route: "noise",
    effectTitle: "Effect Title",
    params: [
      {
        type: "selector",
        title: "Tipo de ruído",
        options: [
          {
            title: "Salt and pepper",
            value: "0",
          },
          {
            title: "Gaussian",
            value: "1",
          },
          {
            title: "Localvar",
            value: "2",
          },
          {
            title: "Speckle",
            value: "3",
          },
          {
            title: "Poison",
            value: "4",
          },
        ],
      },
    ],
  },

  {
    name: "Watershed",
    selected: false,
    route: "watersheld",
    effectTitle: "Effect Title",
  },

  {
    name: "Histograma (Escala de cinza)",
    selected: false,
    effectTitle: "Histograma",
    route: "histogram",
  },

  {
    name: "Ajuste adaptativo de histograma",
    selected: false,
    effectTitle: "Effect Title",
    route: "histeq",
  },

  {
    name: "Contagem simples de objetos",
    selected: false,
    effectTitle: "Effect Title",
    route: "count",
  },
];

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
