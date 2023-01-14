enum Tag {
  poster = "poster",
  painting = "painting",
  writing = "writing",
}

interface PortfolioItem {
  tags: Tag[];
  src: string;
  description: string;
}

const portfolioData: { [k: string]: PortfolioItem } = {
  bassideDopeCobra: {
    src: "/assets/portfolio/images/basside-dope-cobra.jpg",
    tags: [Tag["poster"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  citrus: {
    src: "/assets/portfolio/images/citrus.jpg",
    tags: [Tag["painting"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  figure: {
    src: "/assets/portfolio/images/figure.jpg",
    tags: [Tag["painting"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  inTheGarden: {
    src: "/assets/portfolio/images/in-the-garden.jpg",
    tags: [Tag["writing"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  inThisEconomy: {
    src: "/assets/portfolio/images/in-this-economy.jpg",
    tags: [Tag["poster"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  ismail: {
    src: "/assets/portfolio/images/ismail.jpg",
    tags: [Tag["painting"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  nude: {
    src: "/assets/portfolio/images/nude.jpg",
    tags: [Tag["painting"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  pansyParty: {
    src: "/assets/portfolio/images/pansy-press-party.jpg",
    tags: [Tag["poster"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  poemAndImage: {
    src: "/assets/portfolio/images/poem-and-image.jpg",
    tags: [Tag["poster"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  selfPortrait: {
    src: "/assets/portfolio/images/self-portrait.jpg",
    tags: [Tag["painting"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  templetons: {
    src: "/assets/portfolio/images/templetons-reopening-color.jpg",
    tags: [Tag["poster"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  theDistance: {
    src: "/assets/portfolio/images/the-distance.jpg",
    tags: [Tag["writing"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
  treasureMammal: {
    src: "/assets/portfolio/images/treasure-mammal-1.jpg",
    tags: [Tag["poster"]],
    description:
      "Lorem ipsum explanation. Aliquam at odio fermentum, pellentesque arcu eget, rutrum quam. Phasellus leo magna, pharetra id cursus bibendum, varius imperdiet ipsum.",
  },
};

export default portfolioData;
