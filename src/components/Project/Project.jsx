import React from 'react'
import './Project.css'

const Project = ({darkMode}) => {
    const projects=[
        {
            title:"MovieLand",
            image:"\WhatsApp Image 2025-05-01 at 01.24.07_f89f065c.jpg",
            description:"A sleek React-based movie search app where users can explore movies by title, view detailed information like plot, cast,date and instantly watch the official YouTube trailer. Integrated with the OMDb API and YouTube Data API for real-time data and video streaming.",
            techStack:["React","CSS","API"],
            github:"https://github.com/Shreya657/movieLand",
            live:null

        },
        {
            title:"PasteNote",
            image:"\WhatsApp Image 2025-05-01 at 01.48.16_6e4edcca.jpg",
            description:"A React + Redux Toolkit app to create, edit, delete, and view notes in read-only mode with a clean, responsive UI.",
            techStack:["React","Redux","CSS"],
            github:"https://github.com/Shreya657/notepad",
            live:null

        },
        {
            title:"DQApp – Decentralized Quiz & Reward Platform",
            image:"\WhatsApp Image 2025-05-01 at 01.52.48_dfd36424.jpg",
            description:"A React + Solidity-based dApp where users take randomized quizzes and earn blockchain tokens based on their scores. Powered by MetaMask, EduChain, and Open Trivia DB.",
            techStack:["React","Solidity", "MetaMask"],
            github:"https://github.com/Shreya657/educhain",
            live:null

        },
        {
            title:" TaskMate – Simple To-Do Manager",
            image:"\WhatsApp Image 2025-05-01 at 02.13.30_7278c185.jpg",
            description:"A clean React-based to-do app with local storage, task editing, deletion, and real-time tracking of creation and last edit dates.",
            techStack:["React","css","LocalStorage"],
            github:"https://github.com/Shreya657/taskManager",
            live:null

        },
        {
          title:"MedCert – Medical Certificate Generator",
          image:"\WhatsApp Image 2025-05-02 at 02.06.57_ea4b3fea.jpg",
          description:"A React app where users can fill out personal and doctor details to generate and download a medical certificate in PDF format, powered by jsPDF and html2canvas.",
          techStack:["React","CSS","jsPDF"],
          github:"https://github.com/Shreya657/medical",
          live:null

      },
      {
        title:"Landing Page",
        image:"\WhatsApp Image 2025-05-02 at 02.04.13_5bfe2566.jpg",
        description:"A sleek,e-commerce landing page with an intuitive design, showcasing key products and promotions. The simple layout ensures a smooth user experience, encouraging easy browsing and shopping.",
        techStack:["HTML","CSS"],
        github:"https://github.com/Shreya657/gdg_project1",
        live:null

    },
      
    ]
  return (
    <div className={`projects-section ${darkMode ? 'dark' : 'light'}`}>
      <h1>My Projects</h1>
      <div className='grid'>
        {projects.map((project,idx)=>(
            <div className='project-card' key={idx}>
                <h3>{project.title}</h3>
                <img className='project-image' src={project.image} alt="title" />
                <p>{project.description}</p>
                <div className='stacks'>
                    {project.techStack.map((techStack,index)=>(
                        <span key={index} className='tech-pill'>{techStack}</span>
                    ))}
                </div>
                <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">RepoLink</a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
              )}
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Project
