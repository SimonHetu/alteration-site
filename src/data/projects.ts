export const projects = [
  {
    title: "Empire Media",
    category: "Web Development",
    role: "Frontend Development",
    tools: ["Frontend", "Feature implementation", "Git workflows"],
    website: {
      label: "empirestudio.ca",
      url: "https://empirestudio.ca",
    },
    images: [
      new URL("../assets/images/development/empire-media/empire-media-01.jpg", import.meta.url).href,
      new URL("../assets/images/development/empire-media/empire-media-02.jpg", import.meta.url).href,
      new URL("../assets/images/development/empire-media/empire-media-03.jpg", import.meta.url).href,
      new URL("../assets/images/development/empire-media/empire-media-04.jpg", import.meta.url).href,
      new URL("../assets/images/development/empire-media/empire-media-06.jpg", import.meta.url).href,
      new URL("../assets/images/development/empire-media/empire-media-07.jpg", import.meta.url).href,
    ],
    description: "Streaming platform developed within a collaborative team environment. Contributions include frontend development, feature implementation, code analysis and Git-based workflows."
  },
  {
    title: "Crime Vision",
    category: "Application Development",
    role: "Full-stack Development",
    tools: ["Interactive maps", "Data visualization", "Geospatial data"],
    website: {
      label: "crimevision-frontend.vercel.app",
      url: "https://crimevision-frontend.vercel.app/",
    },
    images: [
      new URL("../assets/images/development/crime-vision/crime-vision-01.jpg", import.meta.url).href,
    ],
    description: "Interactive platform for visualizing criminal incidents across Montreal on a map. Crime Vision combines geospatial data, location-based exploration and clear data visualization to make incident patterns easier to understand."
  },
  {
    title: "Kernel Coffee",
    category: "E-commerce Development",
    role: "Web Development",
    tools: ["E-commerce", "Responsive UI", "Product catalog"],
    website: {
      label: "next-cafe-five.vercel.app",
      url: "https://next-cafe-five.vercel.app/",
    },
    images: [
      new URL("../assets/images/development/kernel-coffee/kernel-coffee-01.jpg", import.meta.url).href,
      new URL("../assets/images/development/kernel-coffee/kernel-coffee-02.jpg", import.meta.url).href,
      new URL("../assets/images/development/kernel-coffee/kernel-coffee-03.jpg", import.meta.url).href,
      new URL("../assets/images/development/kernel-coffee/kernel-coffee-04.jpg", import.meta.url).href,
      new URL("../assets/images/development/kernel-coffee/kernel-coffee-05.jpg", import.meta.url).href,
      new URL("../assets/images/development/kernel-coffee/kernel-coffee-06.jpg", import.meta.url).href,
    ],
    description: "Coffee e-commerce platform built around programming-language-inspired blends such as Go Brew and Ruby Roast. The experience combines a themed product catalog, responsive shopping interface and playful developer-focused branding."
  }
];
