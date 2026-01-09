export type Language = "pt" | "en"

export const translations = {
  pt: {
    // Header
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    portfolio: "Portfolio",

    // Hero
    hero: {
      role: "Full Stack Developer",
      title: "Desenvolvedor",
      titleHighlight: "Full Stack",
      description: "Criando experiências web modernas e eficientes com as melhores tecnologias do mercado",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em Contato",
    },

    // About
    about: {
      title: "Sobre Mim",
      paragraph1:
        "Sou Janylson Filho — Junior Full Stack Developer e estudante de Ciência da Computação. Projetos que desenvolvo priorizam arquitetura escalável, API design (REST), modelagem relacional e boas práticas de teste.",
      paragraph2:
        "No backend trabalho com TypeScript/Node (Express/Spring Boot quando aplicável), validação com Zod, autenticação JWT e testes com Jest. No frontend utilizo React e Next.js para construir interfaces performáticas, acessíveis e otimizadas para SEO.",
      experienceTitle: "Experiência",
      experienceContent: "Anos de experiência em desenvolvimento web",
      projectsTitle: "Projetos",
      projectsContent: "Projetos completos entregues",
    },

    // Skills
    skills: {
      title: "Skills & Tecnologias",
      description: "Principais tecnologias e ferramentas que utilizo no desenvolvimento de projetos",
      frontend: "Frontend",
      languages: "Linguagens",
      backend: "Backend",
      databases: "Bancos de Dados",
      devops: "DevOps & Tools",
    },

    // Projects
    projects: {
      title: "Projetos em Destaque",
      description: "Alguns dos projetos mais relevantes que desenvolvi",
      project1Title: "Projeto 1",
      project1Desc: "Descrição detalhada do projeto, tecnologias utilizadas e problemas solucionados",
      project2Title: "Projeto 2",
      project2Desc: "Descrição detalhada do projeto, tecnologias utilizadas e problemas solucionados",
      project3Title: "Projeto 3",
      project3Desc: "Descrição detalhada do projeto, tecnologias utilizadas e problemas solucionados",
      demo: "Demo",
      code: "Código",
    },

    // Experience
    experience: {
      title: "Experiência Profissional",
      description: "Minha trajetória profissional no desenvolvimento web",
      position: "Cargo / Posição",
      company: "Nome da Empresa",
      period1: "2025 - Presente",
      jobDesc: "Descrição das principais responsabilidades, projetos desenvolvidos e tecnologias utilizadas",
      job1Title: "Estagiário de Desenvolvimento Full Stack",
      job1Company: "Conta Plena",
      job1Desc: "Estagiário de Desenvolvimento Full Stack na Conta Plena, atuando em um projeto de sistema financeiro para emissão de notas de serviço. No backend trabalho com TypeScript, Express, construção de REST APIs, validação com Zod, testes com Jest e banco de dados MongoDB. No front-end utilizo React. Minhas responsabilidades incluem colaborar com a equipe no desenvolvimento de novas funcionalidades e realizar manutenção e correção de bugs.",
    },

    // Contact
    contact: {
      title: "Entre em Contato",
      description: "Interessado em trabalhar juntos? Vamos conversar!",
      email: "Email",
      phone: "Telefone",
      location: "Localização",
      emailValue: "janylsonfilho34@hotmail.com",
      phoneValue: "+55 (85) 98955-1746",
      whatsapp: "WhatsApp",
      whatsappValue: "Conversar no WhatsApp",
      locationValue: "Fortaleza, Ceará",
      formName: "Nome",
      formNamePlaceholder: "Seu nome completo",
      formEmail: "Email",
      formEmailPlaceholder: "seu@email.com",
      formMessage: "Mensagem",
      formMessagePlaceholder: "Como posso ajudar você?",
      send: "Enviar Mensagem",
    },

    // Footer
    footer: {
      rights: "Desenvolvido com React e Next.js",
    },
  },
  en: {
    // Header
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    portfolio: "Portfolio",

    // Hero
    hero: {
      role: "Full Stack Developer",
      title: "Full Stack",
      titleHighlight: "Developer",
      description: "Creating modern and efficient web experiences with the best technologies on the market",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
    },

    // About
    about: {
      title: "About Me",
      paragraph1:
        "I'm Janylson Filho — a Junior Full Stack Developer and Computer Science student. My work emphasizes scalable architecture, API design (REST), relational data modeling and test-driven practices.",
      paragraph2:
        "On the backend I use TypeScript/Node (Express or Spring Boot where relevant), Zod for validation, JWT for authentication and Jest for testing. On the frontend I use React and Next.js to build performant, accessible and SEO-friendly interfaces.",
      experienceTitle: "Experience",
      experienceContent: "Years of experience in web development",
      projectsTitle: "Projects",
      projectsContent: "Complete projects delivered",
    },

    // Skills
    skills: {
      title: "Skills & Technologies",
      description: "Main technologies and tools I use in project development",
      frontend: "Frontend",
      languages: "Languages",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps & Tools",
    },

    // Projects
    projects: {
      title: "Featured Projects",
      description: "Some of the most relevant projects I have developed",
      project1Title: "Project 1",
      project1Desc: "Detailed description of the project, technologies used and problems solved",
      project2Title: "Project 2",
      project2Desc: "Detailed description of the project, technologies used and problems solved",
      project3Title: "Project 3",
      project3Desc: "Detailed description of the project, technologies used and problems solved",
      demo: "Demo",
      code: "Code",
    },

    // Experience
    experience: {
      title: "Professional Experience",
      description: "My professional journey in web development",
      position: "Position / Role",
      company: "Company Name",
      period1: "2025 - Present",
      jobDesc: "Description of main responsibilities, projects developed and technologies used",
      job1Title: "Full Stack Development Intern",
      job1Company: "Conta Plena",
      job1Desc: "Full Stack Development Intern at Conta Plena, working on a financial system project for service invoice issuance. On the backend I work with TypeScript, Express, REST API development, validation with Zod, testing with Jest and MongoDB database. On the frontend I use React. My main responsibilities include collaborating with the team on developing new features and maintaining and fixing bugs.",
    },

    // Contact
    contact: {
      title: "Get In Touch",
      description: "Interested in working together? Let's talk!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      emailValue: "janylsonfilho34@hotmail.com",
      phoneValue: "+55 (85) 98955-1746",
      whatsapp: "WhatsApp",
      whatsappValue: "Chat on WhatsApp",
      locationValue: "Fortaleza, Ceará",
      formName: "Name",
      formNamePlaceholder: "Your full name",
      formEmail: "Email",
      formEmailPlaceholder: "your@email.com",
      formMessage: "Message",
      formMessagePlaceholder: "How can I help you?",
      send: "Send Message",
    },

    // Footer
    footer: {
      rights: "Built with React and Next.js",
    },
  },
} as const
