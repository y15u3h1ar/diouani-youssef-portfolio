// Translation dictionary
const translations = {
    fr: {
        name: "DIOUANI YOUSSEF",
        title: "Élève ingénieur en Efficacité Énergétique & Bâtiment Intelligent",
        subtitle: "À la recherche d'un stage d'observation à partir de juin 2026",
        phone: "06 82 47 72 12",
        email: "youssefdiouani05@gmail.com",
        location: "Kénitra",
        linkedin: "Diouani-youssef",
        "profile-title": "PROFIL",
        "profile-text": "Élève ingénieur en Efficacité Énergétique et Bâtiment Intelligent à l'ENSA Kénitra, titulaire d'un DUT en Génie Civil. Passionné par la performance énergétique des bâtiments, les solutions durables et les technologies intelligentes appliquées au BTP. Membre actif du club SEB, doté d'un esprit analytique, d'un bon sens de l'organisation et d'une forte capacité à travailler en équipe, je cherche un stage d'observation à partir de juin 2026.",
        "education-title": "FORMATION",
        "edu1-degree": "Cycle Ingénieur: Efficacité Énergétique et Bâtiment Intelligent",
        "edu2-degree": "DUT Génie Civil",
        "edu2-mention": "Mention: Bien",
        "edu3-degree": "Baccalauréat Sciences Physiques (Option Français)",
        "edu3-mention": "Mention: Bien",
        "skills-title": "COMPÉTENCES CLÉS",
        "skill-cat1": "Logiciels & Outils",
        "skill-cat2": "Techniques BTP",
        "skill1": "LECTURE DE PLANS ET DOCUMENTS TECHNIQUES",
        "skill2": "METRE ET ESTIMATION DES QUANTITES",
        "skill3": "SUIVI DE CHANTIER (ORGANISATION, CONTROLE, RAPPORTS)",
        "skill4": "NOTIONS DES NORMES MAROCAINES DE CONSTRUCTION",
        "languages-title": "LANGUES",
        lang1: "Bon niveau",
        lang2: "Bon Niveau",
        lang3: "Notions",
        "experience-title": "EXPÉRIENCE",
        "exp1-title": "Stage d'initiation – LGC Laboratoire de Géotechnique et de Conseils",
        "exp1-1": "Réalisation d'essais géotechniques: Proctor, CBR, limites d'Atterberg, densité, perméabilité",
        "exp1-2": "Analyse granulométrique (tamisage et sédimentation)",
        "exp1-3": "Identification des sols (plasticité, cohésion, humidité naturelle)",
        "exp1-4": "Préparation et conservation des échantillons",
        "exp1-5": "Interprétation des résultats selon les normes (NF, ASTM)",
        "exp1-6": "Contribution à la rédaction de rapports géotechniques",
        "exp2-title": "Stage technique – Bureau d'Études Sahara CIM",
        "exp2-1": "Participation aux études techniques en génie civil",
        "exp2-2": "Lecture et interprétation de plans",
        "exp2-3": "Appui au suivi de chantier et à l'estimation des quantités",
        "clubs-title": "CLUBS & VIE ASSOCIATIVE",
        "certifications-title": "FORMATIONS COMPLÉMENTAIRES"
    },
    en: {
        name: "DIOUANI YOUSSEF",
        title: "Engineering Student in Energy Efficiency & Smart Buildings",
        subtitle: "Looking for an observation internship starting June 2026",
        phone: "06 82 47 72 12",
        email: "youssefdiouani05@gmail.com",
        location: "Kenitra",
        linkedin: "Diouani-youssef",
        "profile-title": "PROFILE",
        "profile-text": "Engineering student in Energy Efficiency and Smart Buildings at ENSA Kenitra, holder of a DUT in Civil Engineering. Passionate about building energy performance, sustainable solutions, and smart technologies applied to construction. Active member of the SEB club, with an analytical mindset, good organizational skills, and strong ability to work in a team, I am seeking an observation internship starting June 2026.",
        "education-title": "EDUCATION",
        "edu1-degree": "Engineering Cycle: Energy Efficiency and Smart Buildings",
        "edu2-degree": "DUT Civil Engineering",
        "edu2-mention": "Grade: Good",
        "edu3-degree": "Baccalaureate Physical Sciences (French Option)",
        "edu3-mention": "Grade: Good",
        "skills-title": "KEY SKILLS",
        "skill-cat1": "Software & Tools",
        "skill-cat2": "Construction Techniques",
        "skill1": "READING PLANS AND TECHNICAL DOCUMENTS",
        "skill2": "QUANTITY SURVEYING AND ESTIMATION",
        "skill3": "SITE SUPERVISION (ORGANIZATION, CONTROL, REPORTS)",
        "skill4": "KNOWLEDGE OF MOROCCAN CONSTRUCTION STANDARDS",
        "languages-title": "LANGUAGES",
        lang1: "Good level",
        lang2: "Good Level",
        lang3: "Basic knowledge",
        "experience-title": "EXPERIENCE",
        "exp1-title": "Internship – LGC Geotechnical and Consulting Laboratory",
        "exp1-1": "Conducting geotechnical tests: Proctor, CBR, Atterberg limits, density, permeability",
        "exp1-2": "Grain size analysis (sieveing and sedimentation)",
        "exp1-3": "Soil identification (plasticity, cohesion, natural moisture)",
        "exp1-4": "Sample preparation and preservation",
        "exp1-5": "Interpretation of results according to standards (NF, ASTM)",
        "exp1-6": "Contribution to the writing of geotechnical reports",
        "exp2-title": "Technical Internship – Sahara CIM Engineering Office",
        "exp2-1": "Participation in technical studies in civil engineering",
        "exp2-2": "Reading and interpretation of plans",
        "exp2-3": "Support for site monitoring and quantity estimation",
        "clubs-title": "CLUBS & ASSOCIATIVE LIFE",
        "certifications-title": "ADDITIONAL TRAINING"
    }
};

let currentLang = 'fr';

// Language toggle functionality
document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    
    // Update button text
    this.textContent = currentLang.toUpperCase();
    
    // Update all translated elements
    Object.keys(translations[currentLang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update document language
    document.documentElement.lang = currentLang;
});

// Set profile image with fallback
const profileImg = document.getElementById('profileImage');
if (profileImg) {
    profileImg.onerror = function() {
        this.style.backgroundColor = '#ff6600';
        this.alt = 'Profile Image';
    };
}