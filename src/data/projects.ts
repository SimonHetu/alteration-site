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
    title: "MD Clinique",
    category: "WordPress Development",
    description: "WordPress project involving local deployment, content management, technical analysis and investigation of production issues. Worked with WordPress, PHP, MySQL and ACF Pro."
  },
  {
    title: "Crime Map",
    category: "Application Development",
    description: "Interactive mapping application focused on data visualization and location-based information. Designed to explore user interaction, mapping systems and application architecture."
  }
];
