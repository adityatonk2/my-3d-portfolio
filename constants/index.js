import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Salesforce Developer LWC",
    icon: <FullStackIcon />,
  },
  {
    title: "Cloud Enthusiast",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Programming Languages and Algo's",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Web and Business Solutions",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Zustand",
      icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Software Developer",
  //   company_name: "Tech Lead at Fast Data Connect",
  //   icon: "/assets/company/fdc-logo.png",
  //   iconBg: "#E6DEDD",
  //   date: "January 2025 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of FDC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with FDC's mission, and provided technical mentorship.",
  //     "Developed Projects for FDC, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the FDC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Salesforce and Google Cloud Apprentice",
    company_name: "Fast Data Connect",
    icon: "/assets/company/fdc-logo.png",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developed a Facility Ed-Tech Platform for Nova Nector using JS, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to Nova Nector needs.",
    ],
  },

  {
    title: "MERN Stack and Web Development",
    company_name: "Mentor at Nova Nector software solutions",
    icon: "/assets/company/nova-logo.jpeg",
    iconBg: "#E6DEDD",
    date: "October - December 2024",
    points: [
      "Developed a Facility Ed-Tech Platform for Nova Nector using JS, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to Nova Nector needs.",
    ],
  },
  {
    title: "Software Development , Web Solutions",
    company_name: "Intern at OffBeat Pixels Private Ltd",
    icon: "/assets/company/offbeat-pixel.png",
    iconBg: "#E6DEDD",
    date: "January - June 2024",
    points: [
      "Developing Web Solutions Using , Low Code No Code Tools like Wix , Wordpress and Shopify, significantly enhancing user experience.",
      "Maintaining an efficient workflow under senior guidance, ensuring adherence to best practices in software development.",
      "Contributing to the DND form microfrontend, improving user interaction by 30%.",
      "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
    ],
  },
    //  {
    //   title: "Software Developer",
    //   company_name: "Tech Lead at Fast Data Connect",
    //   icon: "/assets/company/fdc-logo.png",
    //   iconBg: "#E6DEDD",
    //   date: "January 2025 - Present",
    //   points: [
    //     "Currently serving as the Tech Lead of FDC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
    //     "Led induction programs, ensured new member alignment with FDC's mission, and provided technical mentorship.",
    //     "Developed Projects for FDC, enhancing the organization's online visibility.",
    //     "Spearheaded promotional campaigns, actively engaged with the FDC community, and played a key role in planning and executing events.",
    //   ],
    // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aditya proved me wrong.",
    name: "Ranjan Rai",
    designation: "CFO",
    company: "Wow Shippings",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
          "I've never met a web developer who truly cares about their clients' success like Aditya does.",
    name: "Abhishek Puri",
    designation: "COO",
    company: "Wow Shippings",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aditya optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Suresh J",
    designation: "Owner",
    company: "Suresh Milk Services - Local Milk Business",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WOW Shippings Live Website",
    description:
      "Wow shippings is an Logistics Company and Shipping Services built using the Wix Studio , Velo and API's for integration. It offers robust features for Tracking , with user-friendly authentication and a Query Form. Enhance your Logistics Experience!",
    tags: [
      {
        name: "Wix Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Velo JS",
        color: "green-text-gradient",
      },
      {
        name: "Wix Components",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/company/WS_logo.png",
    source_code_link: "Source code is not disclosed due to company policies",
    deployed_link: "https://www.wowshippings.com/",
  },
  {
    name: "Google Gemini Clone",
    description:
      "its a web-based application designed in JS, built using Google Api, JavaScript, Tailwind CSS , User can seamlessly ask Interactive Questions .Solution is provided by interfaces in real-time with a Loading Animations.",
    tags: [
      {
        name: "Java Script",
        color: "blue-text-gradient",
      },
      {
        name: "Google API",
        color: "green-text-gradient",
      },
      {
        name: "tailwindc",
        color: "pink-text-gradient",
      },
      {
        name: "Netlify",
        color: "orange-text-gradient",
      },
      {
        name: "Async JS",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gem-clone.jpg",
    source_code_link: "https://github.com/adityatonk2/Gemini-Clone",
    deployed_link: "https://adityatonk-gemini-clone.netlify.app/",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "Time Table Management System",
    description:
      "The Time Table Management System is a comprehensive management solution developed using the html/css/js stack. It allows users to Analyze time slots and classes and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Algorithms_development",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/tt.jpg",
    source_code_link:
      "https://github.com/adityatonk2/TimeTable-Management-System",
    deployed_link:
      "https://set-even-sem-tt.netlify.app/",
  },
  {
    name: "Full Stack Ecommerce Clone",
    description:
      "The Time Table Management System is a comprehensive management solution developed using the html/css/js stack. It allows users to Analyze time slots and classes and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "orange-text-gradient",
      },
      {
        name: "Algorithms_development",
        color: "yellow-text-gradient",
      }
    ],
    image: "/assets/projects/ecom.jpg",
    source_code_link:
      "https://github.com/adityatonk2/E-commerce-Frontend",
    deployed_link:
      "https://astounding-pudding-9bb795.netlify.app//",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/adityatonk2",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/aditya-tonk-0b0794234/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://www.linkedin.com/in/aditya-tonk-0b0794234/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/i_aditya_tonk/",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
