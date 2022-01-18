export const filtersDefault = [
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
        range0: 3,
        range1: 99,
        default: 3,
        title: "Ordem do filtro",
        step: 3,
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
        range0: 3,
        range1: 99,
        default: 3,
        title: "Ordem do filtro",
        step: 3,
      },
      {
        type: "spinner",
        title: "Constante A",
        range0: 0,
        range1: 30,
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
            title: "Horizontal",
            value: "0",
          },
          {
            title: "Vertical",
            value: "1",
          },
          {
            title: "Horizontal+Vertical",
            value: "2",
          },
        ],
      },
    ],
  },

  {
    name: "Log",
    selected: false,
    route: "log",
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
      {
        type: "spinner",
        range0: 0,
        range1: 3,
        default: 0.04,
        title: "Ordem do filtro",
        step: 0.001,
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
