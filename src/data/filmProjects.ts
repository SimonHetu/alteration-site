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
    description: "Placeholder: describe the visual work completed for this project, your main contribution, and the type of shots or assets involved."
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
    description: "Placeholder: describe your contribution on this production, including the visual tasks, technical approach, and final deliverables."
  },
  {
    id: "bloodshot",
    title: "Bloodshot",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/bloodshot/bloodshot-01.jpg", import.meta.url).href
    ],
    description: "Placeholder: summarize the work completed for this project, the visual problem to solve, and your role in the final result."
  },
  {
    id: "cloverfield-paradox",
    title: "Cloverfield Paradox",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/cloverfield-paradox/cloverfield-paradox-01.jpg", import.meta.url).href
    ],
    description: "Placeholder: explain the type of imagery created or supported, your responsibilities, and how the work contributed to the project."
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
    description: "Placeholder: describe the visual development, production tasks, or shot work handled for this project."
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
    description: "Placeholder: describe the creative or technical work completed for this commercial project and the final visual objective."
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
    description: "Placeholder: summarize the shots, visual polish, or production support provided, including your main responsibilities."
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
    description: "Placeholder: describe the production work completed, the visual challenges involved, and your contribution to the final images."
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
    description: "Placeholder: explain your contribution to the project, including the assets, environments, shots, or visual tasks you worked on."
  },
  {
    id: "star-trek-beyond",
    title: "Star Trek Beyond",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/star-trek-beyond/star-trek-beyond-01.jpg", import.meta.url).href
    ],
    description: "Placeholder: summarize the work performed for this film project, your role, and the visual outcome of the contribution."
  },
  {
    id: "the-walk",
    title: "The Walk",
    category: "Film",
    role: "Generaliste",
    images: [
      new URL("../assets/images/film/the-walk/the-walk-01.jpg", import.meta.url).href
    ],
    description: "Placeholder: describe the visual tasks completed, the production context, and how your work supported the final result."
  }
];
