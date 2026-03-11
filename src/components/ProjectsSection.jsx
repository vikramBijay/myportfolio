import { ProjectSlider } from "./Projects";

const jsProjects = [
  { name: "Weather Dashboard",   desc: "Real-time weather app displaying temperature, humidity, and wind speed for any city using the OpenWeather API and async JavaScript.", tags: ["JavaScript", "OpenWeather API", "Fetch API"], link: "https://vikrambijay.github.io/mini-projects/weather/index.html" },
  { name: "Task Management App", desc: "CRUD-based to-do application with add, edit, delete, and persistent local storage so your tasks survive browser restarts.",               tags: ["JavaScript", "Local Storage", "HTML5"],      link: "https://vikrambijay.github.io/mini-projects/todo/index.html" },
  { name: "Calculator App",      desc: "Fully functional calculator with keyboard input support and clean UI for all arithmetic operations.",                                   tags: ["JavaScript", "CSS3", "DOM"],                 link: "https://vikrambijay.github.io/mini-projects/calculator/index.html" },
  { name: "Stopwatch",           desc: "Precision stopwatch with start, pause, resume, and reset. Millisecond accuracy with smooth state transitions.",                        tags: ["JavaScript", "setInterval", "DOM API"],      link: "https://vikrambijay.github.io/mini-projects/stopwatch/index.html" },
  { name: "Quote Generator",     desc: "Generates random inspirational quotes on click. Dynamically updates content using vanilla JavaScript DOM manipulation.",               tags: ["JavaScript", "DOM", "Random"],               link: "https://vikrambijay.github.io/mini-projects/quoteGenerator/index.html" },
];

const reactProjects = [
  { name: "Modern Shopping Website", desc: "Fully responsive e-commerce app with dynamic product listings, smart category filtering, and real-time cart management.",         tags: ["React.js", "Tailwind CSS", "JavaScript", "useState"] },
  { name: "News Aggregator App",     desc: "Live news application fetching real-time data via REST API with category filters and keyword search functionality.",               tags: ["React.js", "REST API", "useEffect"] },
  { name: "Portfolio Website",       desc: "This very portfolio — built with React featuring scroll animations, responsive layout, and smooth interactions.",                  tags: ["React.js", "Vite", "Animations"] },
];

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 1, background: "#060608" }}>
      <div className="sec-pad">
        <div className="sec-label"><span className="sec-line" />Work</div>
        <h2 className="sec-h2">Featured Projects</h2>
        <ProjectSlider projects={jsProjects}    label="⚡ JavaScript Projects" />
        <ProjectSlider projects={reactProjects} label="⚛  React Projects" />
      </div>
    </section>
  );
}
