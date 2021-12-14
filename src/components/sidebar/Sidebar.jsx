import Logo from "../logo/Logo";
import "./style.css";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <Logo />

      <div className="algorithm-techniques">
        <h2>Algoritmos/Técnicas</h2>

        <ul>
          <li className="selected">
            <h3>Limiarização</h3>
          </li>
          <li>
            <h3>Escala de cinza</h3>
          </li>
          <li>
            <h3>Passa Alta</h3>
          </li>
          <li>
            <h3>Passa Baixa</h3>
          </li>
          <li>
            <h3>Roberts</h3>
          </li>
          <li>
            <h3>Prewitt</h3>
          </li>
          <li>
            <h3>Sobel</h3>
          </li>
          <li>
            <h3>Log</h3>
          </li>
          <li>
            <h3>Zerocross</h3>
          </li>
          <li>
            <h3>Canny</h3>
          </li>
          <li>
            <h3>Ruídos(salt and pepper, etc)</h3>
          </li>
          <li>
            <h3>Watershed</h3>
          </li>
          <li>
            <h3>Histograma (Escala de cinza)</h3>
          </li>
          <li>
            <h3>Ajuste adaptativo de histograma</h3>
          </li>
          <li>
            <h3>Contagem simples de objetos</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
