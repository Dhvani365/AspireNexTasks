import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    logo3,
    logo,
    logo2,
    logo4,
    project1,
    project2,
    project3,
    project4,
    project5,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
       id: "portfolio",
       title: "Portfolio",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "AspireNex",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "GrapplTech",
      icon: logo4,
      iconBg: "#E6DEDD",
      date: "June 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Portfolio Website",      
      company_name: "June 2024 - July 2024",
      icon: logo,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developed My Portfolio Website .",
        "As a passionate Computer Engineering student with a keen interest in full-stack development, I designed and developed a comprehensive portfolio website showcasing my educational background, projects, experiences, and skills.",
        "This project was aimed at demonstrating both my technical abilities and creative design skills in web development.",
        "Technologies: React.js, ViteJS, Three.js, Tailwind CSS, EmailJS",
      ],
    },
    {
      title: "Ecommerce Shopping Website UI",      
      company_name: "Nov 2023 - Jan 2024",
      icon: logo2,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developed UI of shopping ecommerce website using React + ViteJS.",
        "Add to Cart Functionality, Creating Custom hooks, Route management using React Router DOM.",
        "Implemented state management and various inbuilt hooks of React and developed various re-usable components.",
        "Technologies: ReactJS, Vite, TailwindCSS",
      ],
    },
    {
      title: "Pratibhav",
      company_name: "Jan 2022 - Jan 2023",
      icon: logo3,
      iconBg: "#383E56",
      date: "",
      points: [
        "QR code based Citizen Feedback System for Gujarat Police.",
        "Participated in the SSIP Hackathon'22 and developed a complete solution in the form of a Dynamic Website.",
        "Key features: OTP generation & verification using Javascript & SMTP mailer, Integrated with MySQL database, Secure and Faste.",
        "Technologies: HTML, CSS, PHP, Bootstrap, Javascript, MySQL",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Portfolio Website",
      description:
        "As a passionate Computer Engineering student with a keen interest in full-stack development, I designed and developed a comprehensive portfolio website showcasing my educational background, projects, experiences, and skills. This project was aimed at demonstrating both my technical abilities and creative design skills in web development.",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Three.JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-CSS",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/Dhvani365/AspireNexTasks",
    },
    {
      name: "Tic Tac Toe",
      description:
        "Developed an interactive Tic Tac Toe game using React to demonstrate advanced problem-solving abilities and front-end design skills. Implemented state management to handle game logic, including player turns, win conditions, and draw scenarios. Enabled dynamic game play with real-time updates and immediate feedback for user actions.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: project4,
      source_code_link: "https://github.com/Dhvani365/React_Projects/tree/main/tictactoe",
    },
    {
      name: "Sudoku Solver",
      description:
        "Developed an advanced Sudoku Solver game using React to showcase problem-solving abilities and logic-building skills. Employed React for a component-based architecture, facilitating a modular and scalable codebase. Designed an intuitive and responsive user interface with CSS, Integrated a robust algorithm to solve Sudoku puzzles efficiently.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: project5,
      source_code_link: "https://github.com/Dhvani365/React_Projects/tree/main/sudoku-solver",
    },
    {
        name: "An Ecommerce Shopping Website UI",
        description:
          "Developed UI of shopping ecommerce website using React + ViteJS. Add to Cart Functionality, Creating Custom hooks, Route management using React Router DOM. Implemented state management and various inbuilt hooks of React and developed various re-usable components.",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "React-Router-DOM",
            color: "green-text-gradient",
          },
          {
            name: "TailwindCSS",
            color: "pink-text-gradient",
          },
        ],
        image: project2,
        source_code_link: "https://github.com/Dhvani365/React_Projects/tree/main/ecommerce-website",
      },
      {
        name: "Pratibhav: QR based Feedback System",
        description:
          "The user is provided with QR code by scanning which he/she can fill out the feedback form. There is an admin and officers panel showing filterable summery of all the feedbacks in the form of pie charts and tables. Key features: OTP generation & verification using Javascript & SMTP mailer, Integrated with MySQL database",
        tags: [
          {
            name: "HTML5, CSS3(Bootstrap), Javascript",
            color: "blue-text-gradient",
          },
          {
            name: "PHP",
            color: "green-text-gradient",
          },
          {
            name: "MySQL",
            color: "pink-text-gradient",
          },
        ],
        image: project3,
        source_code_link: "https://github.com/Dhvani365/QRBasedFeedbackSystem",
      },
  ];
  
  export { services, technologies, experiences, testimonials, projects };