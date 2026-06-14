export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  role?: string;
  images: string[];
  description: string;
};

export const filmProjects: PortfolioProject[] = [
  {
    id: "ad-astra",
    title: "Ad Astra",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/ad-astra/ad-astra-01.jpg", import.meta.url).href
    ],
    description: "Environment extension and digital matte painting work completed as part of the visual effects pipeline. Focused on supporting cinematic environments while maintaining the visual direction and realism of the production."
  },
  {
    id: "alien-covenant",
    title: "Alien Covenant",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/alien-covenant/alien-covenant-01.jpg", import.meta.url).href,
      new URL("../assets/images/film/alien-covenant/alien-covenant-02.jpg", import.meta.url).href
    ],
    description: "Visual effects support work involving environment integration and shot development. Contributed to the creation of large-scale science fiction imagery consistent with the film's established aesthetic."
  },
  {
    id: "bloodshot",
    title: "Bloodshot",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/bloodshot/bloodshot-01.jpg", import.meta.url).href
    ],
    description: "Environment and compositing support for action-oriented visual effects sequences. Worked within the production pipeline to help deliver polished final imagery."
  },
  {
    id: "cloverfield-paradox",
    title: "Cloverfield Paradox",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/cloverfield-paradox/cloverfield-paradox-01.jpg", import.meta.url).href
    ],
    description: "Visual development and environment support for science fiction sequences. Contributed to the creation and integration of digital environments used throughout the project."
  },
  {
    id: "deadpool",
    title: "Deadpool",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/deadpool/deadpool-01.jpg", import.meta.url).href,
      new URL("../assets/images/film/deadpool/deadpool-02.jpg", import.meta.url).href
    ],
    description: "Environment and visual effects support work completed within a collaborative production environment. Focused on delivering high-quality imagery while supporting the overall visual style of the film."
  },
  {
    id: "dune",
    title: "Dune",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/dune/dune-arrakis-01.jpg", import.meta.url).href,
      new URL("../assets/images/film/dune/dune-arrakis-02.jpg", import.meta.url).href,
      new URL("../assets/images/film/dune/dune-arrakis-03.jpg", import.meta.url).href
    ],
    description: "Placeholder: outline the environment, lookdev, compositing, or asset work completed, plus your contribution to the final imagery."
  },
  {
    id: "honda",
    title: "Honda",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/honda/honda-01.jpg", import.meta.url).href
    ],
    description: "Commercial visual development project involving digital environment work and image enhancement. Focused on creating polished visuals aligned with the campaign's creative direction."
  },
  {
    id: "pachinko",
    title: "Pachinko",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/pachinko/pachinko-01.jpg", import.meta.url).href,
      new URL("../assets/images/film/pachinko/pachinko-02.jpg", import.meta.url).href,
      new URL("../assets/images/film/pachinko/pachinko-03.jpg", import.meta.url).href,
      new URL("../assets/images/film/pachinko/pachinko-04.jpg", import.meta.url).href
    ],
    description: "Digital matte painting, environment development and texture work completed for Apple TV's Pachinko. Focused on supporting environmental storytelling and enhancing the visual atmosphere of key sequences."
  },
  {
    id: "pacific-rim-2",
    title: "Pacific Rim 2",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/pacific-rim-2/pacific-rim-2-01.jpg", import.meta.url).href,
      new URL("../assets/images/film/pacific-rim-2/pacific-rim-2-02.jpg", import.meta.url).href,
      new URL("../assets/images/film/pacific-rim-2/pacific-rim-2-03.jpg", import.meta.url).href,
      new URL("../assets/images/film/pacific-rim-2/pacific-rim-2-04.jpg", import.meta.url).href
    ],
    description: "Environment development and visual effects support for large-scale science fiction sequences. Contributed to the creation and integration of digital elements used in final cinematic shots."
  },
  {
    id: "pirates-of-the-caribbeans-5",
    title: "Pirates of the Caribbeans 5",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/pirates-of-the-caribbeans-5/pirate-5-01.jpg", import.meta.url).href,
      new URL("../assets/images/film/pirates-of-the-caribbeans-5/pirate-5-02.jpg", import.meta.url).href,
      new URL("../assets/images/film/pirates-of-the-caribbeans-5/pirate-5-03.jpg", import.meta.url).href
    ],
    description: "Environment support and digital matte painting work completed as part of a collaborative visual effects pipeline. Focused on extending environments and supporting final shot production."
  },
  {
    id: "star-trek-beyond",
    title: "Star Trek Beyond",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/star-trek-beyond/star-trek-beyond-01.jpg", import.meta.url).href
    ],
    description: "Visual effects support involving environment integration and digital imagery development. Contributed to the creation of science fiction environments and cinematic sequences."
  },
  {
    id: "the-walk",
    title: "The Walk",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/the-walk/the-walk-01.jpg", import.meta.url).href
    ],
    description: "Environment extension and visual effects support work completed to help integrate practical photography with digital environments while preserving realism and scale."
  }
];
