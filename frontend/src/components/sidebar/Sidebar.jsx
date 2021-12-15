import "./style.css";
import { useState } from "react";

const filtersDefault = [
  {
    name: "Limiarização",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Escala de cinza",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Passa Alta",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Passa Baixa",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Roberts",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Prewitt",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Sobel",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Log",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Zerocross",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Canny",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Ruídos(salt and pepper, etc)",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Watershed",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Histograma (Escala de cinza)",
    selected: false,
    effectTitle: "Histograma",
  },

  {
    name: "Ajuste adaptativo de histograma",
    selected: false,
    effectTitle: "Effect Title",
  },

  {
    name: "Contagem simples de objetos",
    selected: false,
    effectTitle: "Effect Title",
  },
];

export default function Sidebar({ setEffectTitle }) {
  const [filters, setFilters] = useState(filtersDefault);

  function select(name) {
    const newFilters = filters.map((f) => {
      return {
        ...f,
        selected: f.name === name,
      };
    });
    setFilters(newFilters);
  }

  return (
    <div className="side-bar">
      <div className="algorithm-techniques">
        <h2>Algoritmos/Técnicas</h2>

        <ul>
          {filters.map((f) => (
            <li
              onClick={() => {
                select(f.name);
                setEffectTitle(f.effectTitle);
              }}
              key={f.name}
              className={f.selected ? "selected" : ""}
            >
              <h3>{f.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
