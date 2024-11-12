"use client"; // This makes the component a Client Component

import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      name: "Cura Pets",
      description:
        "CuraPets provides facilities for pets and street animals, focusing on improving access to veterinary healthcare. The CuraPets website offers information about the application. This is our final year group project. The website is built using HTML, CSS, Bootstrap, JavaScript, and PHP, while the application is developed on Android Studio.",
      link: "",
      code: "https://cur-pets.vercel.app/",
      image: "/logo.png", // Example image URL
    },
    {
      name: "Resume-Builder",
      description:
        "I have created a Resume Builder using HTML, CSS, and TypeScript. This tool allows users to easily design and customize their resumes. The purpose of this project is to help individuals present their professional profiles more effectively and prepare for job applications.",
      link: "#",
      code: "https://editable-resume-builder-inky.vercel.app/",
      image: "/cv.jpeg", // Example image URL
    },
    {
      name: "ATM Simulation",
      description:
        "Created an ATM simulation program that enables users to perform essential banking operations, including withdrawals, deposits, and balance inquiries. The project incorporates basic authentication, transaction processing, and user interface elements, providing a simple yet effective simulation of real-world banking functionalities.",
      link: "#",
      code: "https://github.com/Bisal-Shafiq/beta-ATM.git",
      image: "/atm.png", // Example image URL
    },
    {
      name: "Interactive Quiz Game",
      description:
        "Developed an interactive quiz game using Python that calculates and displays scores based on user performance. The game features multiple-choice questions and provides immediate feedback on each answer, enhancing user engagement and promoting a dynamic learning experience. Leveraged Python’s functions and control flow to create a seamless, user-friendly interface.",
      link: "#",
      code: "https://github.com/Bisal-Shafiq/Quiz_game.git",
      image: "/game.jpg", // Example image URL
    },
  ];

  const [index, setIndex] = useState(0);

  // Navigate to next project
  const nextProject = () => setIndex((prevIndex) => (prevIndex + 1) % projects.length);

  // Navigate to previous project
  const prevProject = () => setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">Our Projects</h2> {/* Heading added here */}
      <div className="project-slider">
        <div className="project-card">
          <img
            src={projects[index].image}
            alt={projects[index].name}
            className="project-icon"
          />
          <h3>{projects[index].name}</h3>
          <p>{projects[index].description}</p>
          <div className="project-links">
            <a href={projects[index].code} className="view-link">
              View Project Code
            </a>
          </div>
        </div>

        {/* Next project */}
        <div className="project-card">
          <img
            src={projects[(index + 1) % projects.length].image}
            alt={projects[(index + 1) % projects.length].name}
            className="project-icon"
          />
          <h3>{projects[(index + 1) % projects.length].name}</h3>
          <p>{projects[(index + 1) % projects.length].description}</p>
          <div className="project-links">
            <a href={projects[(index + 1) % projects.length].code} className="view-link">
              View Project Code
            </a>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="project-navigation">
        <button onClick={prevProject} className="project-button">
          Previous
        </button>
        <button onClick={nextProject} className="project-button">
          Next
        </button>
      </div>
    </section>
  );
}
