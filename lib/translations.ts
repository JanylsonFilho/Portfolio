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
    portfolio: "Janylson Filho",

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
        "Sou Janylson Filho — Desenvolvedor Full Stack Júnior e estudante de Ciência da Computação. Projetos que desenvolvo priorizam arquitetura escalável, API design (REST), modelagem relacional e boas práticas de teste.",
      paragraph2:
        "No backend trabalho com TypeScript/Node (Express/Spring Boot quando aplicável), validação com Zod, autenticação JWT, testes com Jest e integrações com AWS para rotinas de processamento. No frontend utilizo React e Next.js para construir interfaces performáticas e acessíveis.",
      experienceTitle: "Experiência",
      experienceContent: "Anos de experiência em desenvolvimento web",
      projectsTitle: "Projetos",
      projectsContent: "Projetos completos entregues",
      resumeTitle: "Currículo",
      resumeContent: "Baixe a versão em português do meu currículo.",
      resumeAction: "Baixar currículo",
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
      period2: "Março 2026 - Presente",
      jobDesc: "Descrição das principais responsabilidades, projetos desenvolvidos e tecnologias utilizadas",
      job1Title: "Estagiário de Desenvolvimento Full Stack",
      job1Company: "Conta Plena",
      job1Desc: "Estagiário de Desenvolvimento Full Stack na Conta Plena, atuando em um projeto de sistema financeiro para emissão de notas de serviço. No backend trabalho com TypeScript, Express, construção de REST APIs, validação com Zod, testes com Jest, banco de dados MongoDB e uso de AWS para implementar rotinas de processamento de jobs. No front-end utilizo React com TypeScript e Vite. Minhas responsabilidades incluem colaborar com a equipe no desenvolvimento de novas funcionalidades e realizar manutenção e correção de bugs.",
      job2Title: "Bolsa de incentivo à inovação e à pesquisa científica e tecnológica",
      job2Company: "UNIFOR",
      job2Desc: "Atuação em uma bolsa voltada para IA aplicada à saúde, no desenvolvimento da IARA, uma assistente virtual de saúde. Trabalho na evolução de uma solução web composta por painel administrativo full stack e landing page institucional. No painel, atuo no backend com TypeScript, Express, PostgreSQL, Sequelize e Zod, implementando APIs e regras de negócio para fluxos ligados a usuários, conversas, notificações, agendamentos, histórico de campanhas e mensageria da assistente. Também tenho envolvimento com system templates utilizados no comportamento e na operação da IARA. No frontend, utilizo React com TypeScript e Vite para construir fluxos administrativos e integração com a API. Além disso, desenvolvi a landing page do projeto com Next.js, estruturando seções institucionais, apresentação do produto e canais de contato.",
    },

    contact: {
      title: "Entre em Contato",
      description: "Interessado em trabalhar juntos? Vamos conversar!",
      email: "Email",
      emailAction: "Enviar email",
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
      slogan: "Construindo aplicações web escaláveis e modernas.",
      backToTop: "Voltar ao topo"
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
    portfolio: "Janylson Filho",

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
        "On the backend I use TypeScript/Node (Express or Spring Boot where relevant), Zod for validation, JWT for authentication, Jest for testing, and AWS integrations for processing routines. On the frontend I use React and Next.js to build performant and accessible interfaces.",
      experienceTitle: "Experience",
      experienceContent: "Years of experience in web development",
      projectsTitle: "Projects",
      projectsContent: "Complete projects delivered",
      resumeTitle: "Resume",
      resumeContent: "Download the English version of my resume.",
      resumeAction: "Download resume",
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
      period2: "March 2026 - Present",
      jobDesc: "Description of main responsibilities, projects developed and technologies used",
      job1Title: "Full Stack Development Intern",
      job1Company: "Conta Plena",
      job1Desc: "Full Stack Development Intern at Conta Plena, working on a financial system project for service invoice issuance. On the backend I work with TypeScript, Express, REST API development, validation with Zod, testing with Jest, MongoDB, and AWS to build job processing routines. On the frontend I use React with TypeScript and Vite. My main responsibilities include collaborating with the team on developing new features and maintaining and fixing bugs.",
      job2Title: "Innovation and Scientific and Technological Research Scholarship",
      job2Company: "UNIFOR",
      job2Desc: "Worked on an AI scholarship focused on healthcare, contributing to the development of IARA, a virtual health assistant. I help evolve a web solution composed of a full stack admin panel and an institutional landing page. In the admin panel, I work on the backend with TypeScript, Express, PostgreSQL, Sequelize, and Zod, implementing APIs and business rules for flows related to users, conversations, notifications, scheduling, campaign history, and the assistant's messaging layer. I am also involved with system templates used in IARA's behavior and operation. On the frontend, I use React with TypeScript and Vite to build administrative flows and API integrations. In addition, I developed the project's landing page with Next.js, structuring institutional sections, product presentation, and contact channels.",
    },

    contact: {
      title: "Get In Touch",
      description: "Interested in working together? Let's talk!",
      email: "Email",
      emailAction: "Send email",
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
      slogan: "Building scalable and modern web applications.",
      backToTop: "Back to top"
    },
  },
} as const
