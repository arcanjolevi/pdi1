import "./style.css";
import { useState } from "react";

const filtersDefault = [
  {
    name: "Limiarização",
    selected: false,
  },

  {
    name: "Escala de cinza",
    selected: false,
  },

  {
    name: "Passa Alta",
    selected: false,
  },

  {
    name: "Passa Baixa",
    selected: false,
  },

  {
    name: "Roberts",
    selected: false,
  },

  {
    name: "Prewitt",
    selected: false,
  },

  {
    name: "Sobel",
    selected: false,
  },

  {
    name: "Log",
    selected: false,
  },

  {
    name: "Zerocross",
    selected: false,
  },

  {
    name: "Canny",
    selected: false,
  },

  {
    name: "Ruídos(salt and pepper, etc)",
    selected: false,
  },

  {
    name: "Watershed",
    selected: false,
  },

  {
    name: "Histograma (Escala de cinza)",
    selected: false,
  },

  {
    name: "Ajuste adaptativo de histograma",
    selected: false,
  },

  {
    name: "Contagem simples de objetos",
    selected: false,
  },
];

export default function Sidebar() {
  const [filters, setFilters] = useState(filtersDefault);

  function select(name) {
    const newFilters = filters.map((f) => {
      return {
        name: f.name,
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
              onClick={() => select(f.name)}
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
