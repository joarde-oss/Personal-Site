(function () {
  const STORAGE_KEY = "preferredLanguage";
  const DEFAULT_LANG = "it";

  const translations = {
    it: {
      meta: {
        home: {
          title: "Portfolio Blockchain Developer",
          description: "Sviluppatore blockchain che progetta infrastrutture Web3 scalabili, sicure e orientate all’esperienza utente.",
          ogTitle: "Portfolio Blockchain Developer",
          ogDescription: "Progetto infrastrutture Web3 scalabili e sicure, con un occhio attento all'esperienza utente e alle metriche operative."
        },
        projects: {
          title: "I miei Progetti",
          description: "In arrivo progetti Web3: smart contract, dApp e automazioni on-chain su cui sto lavorando.",
          ogTitle: "I miei Progetti – Blockchain Developer",
          ogDescription: "Scopri cosa sto costruendo tra smart contract, dApp e automazioni on-chain."
        },
        contact: {
          title: "Contattami",
          description: "Parliamo del tuo progetto Web3: supporto su smart contract, dApp e integrazioni blockchain.",
          ogTitle: "Contattami – Blockchain Developer",
          ogDescription: "Parliamo del tuo prossimo progetto Web3: smart contract, dApp e automazioni on-chain."
        },
        cv: {
          title: "Curriculum Vitae",
          description: "Curriculum di un blockchain developer con esperienza in smart contract, dApp e processi end-to-end.",
          ogTitle: "Curriculum Vitae – Blockchain Developer",
          ogDescription: "Competenze, esperienza professionale e metodo di lavoro per progetti Web3."
        }
      },
      global: {
        language: {
          label: "Lingua",
          promptTitle: "Scegli la lingua",
          promptBody: "Seleziona come vuoi navigare il sito. Potrai cambiarla in qualsiasi momento.",
          buttonIt: "Italiano",
          buttonEn: "Inglese",
          switchIt: "IT",
          switchEn: "EN"
        },
        nav: {
          menuToggle: "Apri il menu di navigazione",
          home: "Home",
          projects: "Progetti",
          contact: "Contatti",
          cv: "CV"
        },
        footer: {
          copy: "© 2025 Blockchain Developer | Ardelean Jonathan",
          linkedin: "LinkedIn",
          github: "GitHub"
        }
      },
      home: {
        hero: {
          badge: "Blockchain Developer",
          title: "Sono Jonathan Ardelean",
          lead: "Disegno architetture Web3 che uniscono sicurezza, affidabilità operativa e una user experience fluida lungo tutto il ciclo di vita del prodotto.",
          summary1: "Arrivo da un background industriale: precisione, procedure e coordinamento di squadre sono l'ossatura che porto in ogni progetto. Nel Web3 li traduco in smart contract robusti, ambienti di test tracciabili e delivery misurabile.",
          summary2: "Fuori dalla fabbrica mi dedico ad approfondire tecnologia, gaming strategico e mentoring tra pari. Più mi informo su Web3 e intelligenza artificiale, più cresce la voglia di trasformare questa passione in progetti concreti, condividendo ciò che scopro con chi sta muovendo i primi passi in questo ecosistema.",
          highlight1: "Smart contract progettati per audit indipendenti",
          highlight2: "DApp con flussi di onboarding chiari",
          highlight3: "Automazioni on-chain che riducono tempi operativi"
        },
        profile: {
          badge: "Profilo",
          title: "Da dove vengo",
          text1: "Curiosità e attenzione all'innovazione sono i tratti che mi accompagnano da sempre. Nel manifatturiero ho maturato metodo, precisione e capacità di coordinare persone e processi, ma la routine ripetitiva mi ha spinto a cercare sfide più stimolanti: è così che ho incontrato il mondo blockchain.",
          text2: "Fuori dalla fabbrica mi dedico ad approfondire tecnologia, gaming strategico e mentoring tra pari. Più mi informo su Web3 e intelligenza artificiale, più cresce la voglia di trasformare questa passione in progetti concreti, condividendo ciò che scopro con chi sta muovendo i primi passi in questo ecosistema."
        },
        skills: {
          badge: "Competenze",
          title: "Punti di forza",
          item1: {
            title: "Smart Contracts",
            text: "Scrittura e audit di contratti Solidity con attenzione a sicurezza, test e monitoraggio post-deploy."
          },
          item2: {
            title: "DApp Frontend",
            text: "Interfacce responsive, onboarding chiaro e integrazione wallet (WalletConnect, Metamask)."
          },
          item3: {
            title: "Automazione & Testing",
            text: "Pipeline CI, test automatizzati e deployment coordinato su testnet e mainnet."
          }
        },
        method: {
          badge: "Metodo",
          title: "Come lavoro",
          discovery: "Discovery",
          prototyping: "Prototipazione",
          audit: "Audit & Test",
          deployment: "Deployment",
          sharing: "Knowledge sharing",
          text: "Alterno momenti di ricerca e modellazione con sessioni di sviluppo rapide e misurabili. Ogni progetto è accompagnato da revisioni incrociate, checklist di sicurezza e materiali di handover per garantire continuità al team."
        }
      },
      projects: {
        hero: {
          kicker: "Showcase",
          title: "Esperimenti Web e micro‑tool personali",
          body: "Una selezione di micro progetti costruiti per esplorare nuove idee, migliorare il mio flusso con JavaScript vanilla e curare i dettagli di UI/UX. Ogni release nasce da curiosità e voglia di automazione."
        },
        stats: {
          live: "Progetti live",
          ideas: "Iterazioni & idee"
        },
        project1: {
          status: "Live",
          title: "Counter App",
          body: "Web app minimale per gestire incrementi/decrementi rapidi con reset immediato. Perfetta per esercitarmi con eventi, stato locale e micro‑interazioni senza framework.",
          type: "Tipologia: Utility",
          focus: "Focus: DOM & UX micro",
          link: "Apri il progetto",
          source: "Codice sorgente"
        },
        project2: {
          status: "Live",
          title: "3D Project",
          body: "Esperimento 3D browser-based con geometrie animate e controlli orbit per esplorare la scena. Un banco di prova per ottimizzare pipeline WebGL e rifinire la resa visiva in tempo reale.",
          type: "Tipologia: Esperimento 3D",
          focus: "Focus: Rendering & Animazioni",
          link: "Apri il progetto",
          source: "Codice sorgente"
        },
        project3: {
          status: "Live",
          title: "3D Game",
          body: "Mini gioco 3D in browser con controlli orbit e possibilità di distruggere oggetti intorno. Evoluzione del progetto 3D per sperimentare loop di gioco leggeri e feedback visivi.",
          type: "Tipologia: Gioco 3D",
          focus: "Focus: Gameplay & Rendering",
          link: "Apri il gioco",
          source: "Codice sorgente"
        }
      },
      contact: {
        hero: {
          title: "Parliamo del tuo prossimo progetto",
          body: "Che si tratti di progettare smart contract, creare una dApp o analizzare dati on-chain, possiamo costruire insieme un percorso chiaro. Scegli il canale che preferisci e raccontami le tue priorità.",
          highlight1: "Risposta entro 24 ore",
          highlight2: "Focus su Web3, DeFi e automazioni",
          highlight3: "Italiano · English"
        },
        direct: {
          badge: "Direct",
          title: "Contatti rapidi",
          body: "Scegli il tuo canale preferito e raccontami cosa desideri costruire."
        },
        availability: {
          badge: "Disponibilità",
          title: "Posso aiutarti con",
          item1: "Sviluppo smart contract & audit",
          item2: "DApp frontend & integrazioni wallet",
          item3: "Dashboard e automazioni on-chain"
        },
        form: {
          badge: "Scrivimi",
          title: "Raccontami la tua idea",
          nameLabel: "Nome",
          namePlaceholder: "Come ti chiami?",
          emailLabel: "Email",
          emailPlaceholder: "La tua email",
          messageLabel: "Messaggio",
          messagePlaceholder: "Scrivi qui i dettagli",
          submit: "Invia messaggio"
        }
      },
      cv: {
        hero: {
          title: "Curriculum Vitae",
          body: "Sviluppatore orientato al Web3 con esperienza nella creazione di smart contract, dApp e automazioni che collegano team tecnici e business.",
          location: "Piemonte, Italia",
          availability: "Disponibile per collaborazioni",
          languages: "Italiano · English"
        },
        experience: {
          badge: "Esperienza",
          title: "Background professionale",
          item1: {
            title: "Vergnano Utensili",
            meta: "2017 – oggi · Operatore specializzato",
            body: "Rettificatore CNC, controllo qualità e ottimizzazione dei processi produttivi."
          },
          item2: {
            title: "Progetti Blockchain Freelance",
            meta: "2025 – oggi",
            body: "Sviluppo di smart contract ERC-20/721, integrazioni wallet per frontend, audit, test automatizzati e deployment su ambienti pubblici e privati."
          }
        },
        education: {
          badge: "Formazione",
          title: "Percorso",
          item1: {
            title: "IPSIA Andriano",
            body: "Qualifica professionale · Indirizzo meccanico"
          },
          item2: {
            title: "Training Blockchain & Solidity",
            body: "Corso intensivo + autoformazione continua su DeFi, sicurezza e tooling"
          }
        },
        skills: {
          badge: "Competenze",
          title: "Stack tecnico",
          tags: {
            solidity: "Solidity",
            html: "HTML",
            css: "CSS",
            python: "Python",
            typescript: "TypeScript",
            react: "React",
            git: "Git",
            ai: "IA"
          },
          item1: "Audit di smart contract e security review",
          item2: "Architetture modulari per dApp",
          item3: "Automazione di workflow e testing su pipeline"
        },
        soft: {
          badge: "Soft Skills",
          title: "Approccio",
          item1: "Collaborazione cross-team",
          item2: "Problem solving orientato ai risultati",
          item3: "Gestione del tempo e priorità"
        },
        plain: {
          heading: "Curriculum Vitae",
          profile: {
            title: "Profilo professionale",
            body: "Rettificatore preciso e affidabile, specializzato nella lavorazione di creatori e nel collaudo finale degli utensili. Unisco manualità, rapidità di apprendimento e forte spirito collaborativo con un approccio sempre attento all'analisi e ai dettagli."
          },
          data: {
            title: "Dati personali",
            nameLabel: "Nome:",
            birthLabel: "Nascita:",
            languagesLabel: "Lingue:",
            languagesValue: "Italiano (madrelingua), Inglese (buona padronanza)"
          },
          experience: {
            title: "Esperienza professionale",
            period: "2017 – oggi",
            role: "Rettificatore",
            point1: "Rettifica di creatori con monitoraggio costante delle tolleranze.",
            point2: "Collaudo e verifica finale per garantire conformità a standard elevati.",
            point3: "Supporto al team nella risoluzione di anomalie e nel passaggio di consegne."
          },
          education: {
            title: "Istruzione",
            level: "Qualifica superiore",
            school: "IPSIA Andriano · Indirizzo meccanico"
          },
          personal: {
            title: "Competenze personali",
            item1: "Ottima manualità e precisione operativa.",
            item2: "Apprendimento rapido di processi, macchinari e strumenti digitali.",
            item3: "Collaborazione efficace con i reparti di produzione e controllo qualità.",
            item4: "Analisi accurata dei dati di lavorazione e identificazione tempestiva degli errori.",
            item5: "Attenzione costante ai dettagli e senso di responsabilità sul risultato finale."
          },
          digital: {
            title: "Competenze digitali",
            item1: "Conoscenza di base di intelligenza artificiale applicata a flussi produttivi e analisi dati.",
            item2: "Linguaggi di programmazione e markup: Python, HTML, CSS, TypeScript."
          }
        }
      }
    },
    en: {
      meta: {
        home: {
          title: "Blockchain Developer Portfolio",
          description: "Blockchain developer who designs scalable, secure Web3 infrastructure with a user-first focus.",
          ogTitle: "Blockchain Developer Portfolio",
          ogDescription: "I design scalable and secure Web3 infrastructure with a keen eye on user experience and operational metrics."
        },
        projects: {
          title: "My Projects",
          description: "Upcoming Web3 projects: smart contracts, dApps and on-chain automations I'm working on.",
          ogTitle: "My Projects – Blockchain Developer",
          ogDescription: "See what I'm building across smart contracts, dApps and on-chain automations."
        },
        contact: {
          title: "Contact me",
          description: "Let's talk about your Web3 project: support on smart contracts, dApps and blockchain integrations.",
          ogTitle: "Contact me – Blockchain Developer",
          ogDescription: "Let's discuss your next Web3 project: smart contracts, dApps and on-chain automations."
        },
        cv: {
          title: "Curriculum Vitae",
          description: "Resume of a blockchain developer with experience in smart contracts, dApps and end-to-end processes.",
          ogTitle: "Curriculum Vitae – Blockchain Developer",
          ogDescription: "Skills, professional experience and working method for Web3 projects."
        }
      },
      global: {
        language: {
          label: "Language",
          promptTitle: "Select your language",
          promptBody: "Choose how you want to browse the site. You can switch any time.",
          buttonIt: "Italian",
          buttonEn: "English",
          switchIt: "IT",
          switchEn: "EN"
        },
        nav: {
          menuToggle: "Open navigation menu",
          home: "Home",
          projects: "Projects",
          contact: "Contact",
          cv: "CV"
        },
        footer: {
          copy: "© 2025 Blockchain Developer | Ardelean Jonathan",
          linkedin: "LinkedIn",
          github: "GitHub"
        }
      },
      home: {
        hero: {
          badge: "Blockchain Developer",
          title: "I'm Jonathan Ardelean",
          lead: "I design Web3 architectures that combine security, operational reliability and a smooth user experience across the product lifecycle.",
          summary1: "I come from an industrial background: precision, procedures and team coordination are the backbone I bring to every project. In Web3, that becomes robust smart contracts, traceable test environments and measurable delivery.",
          summary2: "Outside the factory I dive into technology, strategic gaming and peer mentoring. The more I explore Web3 and AI, the more I want to turn this passion into concrete projects, sharing what I learn with people taking their first steps in this ecosystem.",
          highlight1: "Smart contracts designed for independent audits",
          highlight2: "DApps with clear onboarding flows",
          highlight3: "On-chain automations that cut operational time"
        },
        profile: {
          badge: "Profile",
          title: "Where I come from",
          text1: "Curiosity and an eye for innovation have always been with me. In manufacturing I developed method, precision and the ability to coordinate people and processes, but the repetitive routine pushed me to seek more stimulating challenges: that's how I found the blockchain world.",
          text2: "Outside the factory I focus on technology, strategic gaming and peer mentoring. The more I learn about Web3 and artificial intelligence, the more I want to turn this passion into concrete projects and share what I discover with those taking their first steps in this ecosystem."
        },
        skills: {
          badge: "Skills",
          title: "Strengths",
          item1: {
            title: "Smart Contracts",
            text: "Writing and auditing Solidity contracts with focus on security, testing and post-deploy monitoring."
          },
          item2: {
            title: "DApp Frontend",
            text: "Responsive interfaces, clear onboarding and wallet integration (WalletConnect, Metamask)."
          },
          item3: {
            title: "Automation & Testing",
            text: "CI pipelines, automated tests and coordinated deployments on testnet and mainnet."
          }
        },
        method: {
          badge: "Method",
          title: "How I work",
          discovery: "Discovery",
          prototyping: "Prototyping",
          audit: "Audit & Testing",
          deployment: "Deployment",
          sharing: "Knowledge sharing",
          text: "I alternate research and modeling with fast, measurable development sessions. Every project includes cross reviews, security checklists and handover materials to keep the team aligned."
        }
      },
      projects: {
        hero: {
          kicker: "Showcase",
          title: "Web experiments and personal micro-tools",
          body: "A selection of micro projects built to explore new ideas, improve my vanilla JavaScript flow and polish UI/UX details. Each release comes from curiosity and a love for automation."
        },
        stats: {
          live: "Live projects",
          ideas: "Iterations & ideas"
        },
        project1: {
          status: "Live",
          title: "Counter App",
          body: "Minimal web app to handle quick increments/decrements with an instant reset. Perfect for practicing events, local state and micro-interactions without a framework.",
          type: "Type: Utility",
          focus: "Focus: DOM & micro UX",
          link: "Open project",
          source: "Source code"
        },
        project2: {
          status: "Live",
          title: "3D Project",
          body: "Browser-based 3D experiment with animated geometry and orbit controls to explore the scene. A testbed to optimize WebGL pipelines and refine real-time visuals.",
          type: "Type: 3D experiment",
          focus: "Focus: Rendering & Animations",
          link: "Open project",
          source: "Source code"
        },
        project3: {
          status: "Live",
          title: "3D Game",
          body: "Browser 3D mini-game with orbit controls and the ability to destroy nearby objects. Evolves the 3D project to test lightweight gameplay loops and visual feedback.",
          type: "Type: 3D game",
          focus: "Focus: Gameplay & Rendering",
          link: "Open game",
          source: "Source code"
        }
      },
      contact: {
        hero: {
          title: "Let's talk about your next project",
          body: "Whether it's designing smart contracts, building a dApp or analyzing on-chain data, we can define a clear path together. Choose the channel you prefer and tell me your priorities.",
          highlight1: "Reply within 24 hours",
          highlight2: "Focus on Web3, DeFi and automations",
          highlight3: "Italian · English"
        },
        direct: {
          badge: "Direct",
          title: "Quick contacts",
          body: "Pick your preferred channel and tell me what you want to build."
        },
        availability: {
          badge: "Availability",
          title: "I can help you with",
          item1: "Smart contract development & audits",
          item2: "DApp frontend & wallet integrations",
          item3: "Dashboards and on-chain automations"
        },
        form: {
          badge: "Write me",
          title: "Tell me about your idea",
          nameLabel: "Name",
          namePlaceholder: "What's your name?",
          emailLabel: "Email",
          emailPlaceholder: "Your email",
          messageLabel: "Message",
          messagePlaceholder: "Add the details here",
          submit: "Send message"
        }
      },
      cv: {
        hero: {
          title: "Curriculum Vitae",
          body: "Web3-oriented developer with experience creating smart contracts, dApps and automations that connect technical teams and business.",
          location: "Piedmont, Italy",
          availability: "Available for collaborations",
          languages: "Italian · English"
        },
        experience: {
          badge: "Experience",
          title: "Professional background",
          item1: {
            title: "Vergnano Utensili",
            meta: "2017 – present · Specialized operator",
            body: "CNC grinder, quality control and optimization of production processes."
          },
          item2: {
            title: "Blockchain Projects Freelance",
            meta: "2025 – present",
            body: "Development of ERC-20/721 smart contracts, wallet integrations for frontends, audits, automated testing and deployments to public and private environments."
          }
        },
        education: {
          badge: "Education",
          title: "Path",
          item1: {
            title: "IPSIA Andriano",
            body: "Professional qualification · Mechanical track"
          },
          item2: {
            title: "Blockchain & Solidity Training",
            body: "Intensive course + continuous self-learning on DeFi, security and tooling"
          }
        },
        skills: {
          badge: "Skills",
          title: "Technical stack",
          tags: {
            solidity: "Solidity",
            html: "HTML",
            css: "CSS",
            python: "Python",
            typescript: "TypeScript",
            react: "React",
            git: "Git",
            ai: "AI"
          },
          item1: "Smart contract audits and security reviews",
          item2: "Modular architectures for dApps",
          item3: "Automation of workflow and pipeline testing"
        },
        soft: {
          badge: "Soft Skills",
          title: "Approach",
          item1: "Cross-team collaboration",
          item2: "Result-oriented problem solving",
          item3: "Time and priority management"
        },
        plain: {
          heading: "Curriculum Vitae",
          profile: {
            title: "Professional profile",
            body: "Reliable and precise grinding specialist, focused on shaping hobs and final tool testing. I combine manual skill, fast learning and strong teamwork with a mindset that is always analytical and detail oriented."
          },
          data: {
            title: "Personal data",
            nameLabel: "Name:",
            birthLabel: "Born:",
            languagesLabel: "Languages:",
            languagesValue: "Italian (native), English (good proficiency)"
          },
          experience: {
            title: "Professional experience",
            period: "2017 – present",
            role: "Grinding operator",
            point1: "Grinding hobs with constant tolerance monitoring.",
            point2: "Testing and final checks to guarantee high standards.",
            point3: "Supporting the team when resolving anomalies and during handovers."
          },
          education: {
            title: "Education",
            level: "Upper secondary qualification",
            school: "IPSIA Andriano · Mechanical track"
          },
          personal: {
            title: "Personal skills",
            item1: "Excellent manual skills and operational precision.",
            item2: "Fast learner of processes, machinery and digital tools.",
            item3: "Effective collaboration with production and quality control teams.",
            item4: "Accurate analysis of processing data and prompt error detection.",
            item5: "Constant attention to detail and ownership of the final result."
          },
          digital: {
            title: "Digital skills",
            item1: "Basic knowledge of artificial intelligence applied to production flows and data analysis.",
            item2: "Programming and markup languages: Python, HTML, CSS, TypeScript."
          }
        }
      }
    }
  };

  const fallbackLang = DEFAULT_LANG;

  function resolveTranslation(lang, key) {
    return key.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), translations[lang]);
  }

  function translate(lang, key) {
    const primary = resolveTranslation(lang, key);
    if (primary !== undefined) return primary;
    return resolveTranslation(fallbackLang, key);
  }

  function updateTextNodes(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = translate(lang, key);
      if (value === undefined) return;
      if (el.dataset.i18nHtml === "true") {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const attrList = el.dataset.i18nAttr.split("|");
      attrList.forEach((pair) => {
        const [attr, key] = pair.split(":").map((part) => part.trim());
        if (!attr || !key) return;
        const value = translate(lang, key);
        if (value !== undefined) {
          el.setAttribute(attr, value);
        }
      });
    });
  }

  function updateMeta(lang) {
    const page = document.body.dataset.page;
    if (!page) return;

    const title = translate(lang, `meta.${page}.title`);
    const description = translate(lang, `meta.${page}.description`);
    const ogTitle = translate(lang, `meta.${page}.ogTitle`);
    const ogDescription = translate(lang, `meta.${page}.ogDescription`);

    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute("content", description);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl && ogTitle) ogTitleEl.setAttribute("content", ogTitle);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl && ogDescription) ogDescEl.setAttribute("content", ogDescription);
  }

  function syncButtons(lang) {
    document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
      const isActive = btn.dataset.langChoice === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function closeLanguageGate() {
    const gate = document.querySelector("[data-lang-gate]");
    if (gate) gate.classList.remove("is-active");
    document.body.classList.remove("language-locked");
  }

  function applyLanguage(lang) {
    const safeLang = translations[lang] ? lang : fallbackLang;
    updateTextNodes(safeLang);
    updateMeta(safeLang);
    syncButtons(safeLang);
    document.documentElement.setAttribute("lang", safeLang);
  }

  function setLanguage(lang) {
    const safeLang = translations[lang] ? lang : fallbackLang;
    localStorage.setItem(STORAGE_KEY, safeLang);
    applyLanguage(safeLang);
    closeLanguageGate();
  }

  function initLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialLang = saved || DEFAULT_LANG;

    applyLanguage(initialLang);

    document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.langChoice));
    });

    if (!saved) {
      const gate = document.querySelector("[data-lang-gate]");
      if (gate) {
        gate.classList.add("is-active");
        document.body.classList.add("language-locked");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initLanguage);
})();
