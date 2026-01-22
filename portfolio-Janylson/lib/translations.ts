export type Language = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    portfolio: "Portfolio",

    hero: {
      role: "Full Stack Developer",
      title: "Desenvolvedor",
      titleHighlight: "Full Stack",
      description: "Criando experiências web modernas e eficientes com as melhores tecnologias do mercado",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em Contato",
    },

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

    skills: {
      title: "Skills & Tecnologias",
      description: "Principais tecnologias e ferramentas que utilizo no desenvolvimento de projetos",
      frontend: "Frontend",
      languages: "Linguagens",
      backend: "Backend",
      databases: "Bancos de Dados",
      devops: "DevOps & Tools",
    },

    projects: {
      title: "Projetos em Destaque",
      description: "Uma coleção de aplicações Full Stack, Back-end e Algoritmos Complexos",
      
      // Descrições Otimizadas (Curtas)
      project1Title: "UniQuadras",
      project1Desc: "Sistema de reservas de quadras com notificações e painel administrativo.",
      
      project2Title: "Comanda Digital",
      project2Desc: "Gestão de restaurantes com controle de mesas, pedidos e cardápio em tempo real.",
      
      project3Title: "Algoritmos de Teoria dos Grafos",
      project3Desc: "Algoritmos avançados de grafos, incluindo TSP, Coloração e buscas (BFS/DFS).",
      
      project4Title: "Gerenciador de Carteira (Clojure)",
      project4Desc: "Backend em Clojure para gestão de investimentos com cotações em tempo real.",
      
      project5Title: "File System CLI",
      project5Desc: "CLI robusta para manipulação de arquivos e operações CRUD usando Java NIO.",
      
      project6Title: "ToDoList",
      project6Desc: "Gerenciador de tarefas com dashboard analítico e upload de arquivos.",

      project7Title: "Otimização de Empacotamento",
      project7Desc: "Solução de otimização para Bin Packing usando Python, Pyomo e solver HiGHS.",

      project10Title: "Análise de Complexidade e Algoritmos",
      project10Desc: "Análise assintótica (Big O) de algoritmos clássicos como N-Damas e Mochila.",

      project8Title: "Índice Remissivo",
      project8Desc: "Indexação eficiente de textos usando estruturas de dados como Árvores e Hashmaps.",

      project9Title: "Frogger Game Remaster",
      project9Desc: "Remaster do clássico Frogger em Java (Swing/AWT) com foco em POO.",

      project11Title: "Calculadora Lógica Proposicional",
      project11Desc: "Calculadora que avalia fórmulas lógicas e gera tabelas verdade completas.",

      project12Title: "Sistema de Gestão de Estacionamento",
      project12Desc: "Sistema de console para gestão de entrada e saída de veículos.",

      project13Title: "Biblioteca de Álgebra Linear",
      project13Desc: "Biblioteca matemática para manipulação e operações de matrizes e vetores.",
      
      demo: "Demo",
      code: "Código",
    },

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

    contact: {
      title: "Entre em Contato",
      description: "Interessado em trabalhar juntos? Vamos conversar!",
      email: "Email",
      phone: "Telefone",
      location: "Localização",
      linkedin: "LinkedIn",
      linkedinAction: "Conectar no LinkedIn",
      linkedinValue: "linkedin.com/in/janylsonfilho",
      github: "GitHub",
      githubAction: "Ver Perfil no GitHub",
      githubValue: "github.com/janylsonfilho",
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

    footer: {
      rights: "Todos os direitos reservados.",
      builtWith: "Desenvolvido por Janylson Filho",
      roleText: "Janylson Filho — Desenvolvedor Web Full Stack",
      slogan: "Construindo aplicações web escaláveis e modernas."
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    portfolio: "Portfolio",

    hero: {
      role: "Full Stack Developer",
      title: "Full Stack",
      titleHighlight: "Developer",
      description: "Creating modern and efficient web experiences with the best technologies on the market",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
    },

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

    skills: {
      title: "Skills & Technologies",
      description: "Main technologies and tools I use in project development",
      frontend: "Frontend",
      languages: "Languages",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps & Tools",
    },

    projects: {
      title: "Featured Projects",
      description: "A collection of Full Stack applications, Back-end systems, and Complex Algorithms",
      
      // Optimized Descriptions (Short)
      project1Title: "UniQuadras",
      project1Desc: "Sports court booking system with notifications and admin dashboard.",
      
      project2Title: "Digital Command",
      project2Desc: "Restaurant management with real-time table, order, and menu control.",
      
      project3Title: "Graph Theory Algorithms",
      project3Desc: "Advanced graph algorithms including TSP, Coloring, and optimized traversals.",
      
      project4Title: "Stock Portfolio (Clojure)",
      project4Desc: "Clojure backend for investment management with real-time stock quotes.",
      
      project5Title: "File System CLI",
      project5Desc: "Robust CLI for file manipulation and CRUD operations using Java NIO.",
      
      project6Title: "ToDoList",
      project6Desc: "Task manager with analytical dashboard and file upload features.",

      project7Title: "Bin Packing Optimization",
      project7Desc: "Optimization solution for Bin Packing using Python, Pyomo, and HiGHS solver.",

      project10Title: "Algorithm Complexity Analysis",
      project10Desc: "Asymptotic analysis (Big O) of classic algorithms like N-Queens and Knapsack.",

      project8Title: "Remissive Index",
      project8Desc: "Efficient text indexing using data structures like Trees and Hashmaps.",

      project9Title: "Frogger Game Remaster",
      project9Desc: "Remaster of the classic Frogger in Java (Swing/AWT) focused on OOP.",

      project11Title: "Propositional Logic Calculator",
      project11Desc: "Calculator that evaluates logical formulas and generates complete truth tables.",

      project12Title: "Parking Management System",
      project12Desc: "Console-based system for managing vehicle entry and exit.",

      project13Title: "Linear Algebra Library",
      project13Desc: "Mathematical library for matrix and vector manipulation and operations.",
      
      demo: "Demo",
      code: "Code",
    },

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

    contact: {
      title: "Get In Touch",
      description: "Interested in working together? Let's talk!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedin: "LinkedIn",
      linkedinAction: "Connect on LinkedIn",
      linkedinValue: "linkedin.com/in/janylsonfilho",
      github: "GitHub",
      githubAction: "View GitHub Profile",
      githubValue: "github.com/janylsonfilho",
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

    footer: {
      rights: "All rights reserved.",
      builtWith: "Developed by Janylson Filho",
      roleText: "Janylson Filho — Full Stack Web Developer",
      slogan: "Building scalable and modern web applications."
    },
  },
} as const