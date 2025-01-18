const content = {
  en: {
    title: "About Me",
    aboutTitle: "Introduction",
    aboutText: "Hi! My name is Paul. I love creating websites!",
    hobbiesTitle: "Hobbies",
    hobbiesText: "I enjoy programming, gaming, and making music with Bandlab.",
    skillsTitle: "Skills",
    skillsText: "HTML, CSS, JavaScript, and more.",
    contactText: "Contact me at: paul.tvog@hotmail.com"
  },
  nl: {
    title: "Over Mij",
    aboutTitle: "Introductie",
    aboutText: "Hoi! Mijn naam is Paul. Ik hou van websites maken!",
    hobbiesTitle: "Hobby's",
    hobbiesText: "Ik hou van programmeren, gamen en muziek maken met Bandlab.",
    skillsTitle: "Vaardigheden",
    skillsText: "HTML, CSS, JavaScript en meer.",
    contactText: "Contacteer mij via: paul.tvog@hotmail.com"
  },
  fr: {
    title: "À Propos de Moi",
    aboutTitle: "Introduction",
    aboutText: "Salut! Je m'appelle Paul. J'adore créer des sites web!",
    hobbiesTitle: "Loisirs",
    hobbiesText: "J'aime coder, jouer et créer de la musique avec Bandlab.",
    skillsTitle: "Compétences",
    skillsText: "HTML, CSS, JavaScript, et plus.",
    contactText: "Contactez-moi à : paul.tvog@hotmail.com"
  }
};

function changeLanguage(lang) {
  document.getElementById("title").textContent = content[lang].title;
  document.getElementById("aboutTitle").textContent = content[lang].aboutTitle;
  document.getElementById("aboutText").textContent = content[lang].aboutText;
  document.getElementById("hobbiesTitle").textContent = content[lang].hobbiesTitle;
  document.getElementById("hobbiesText").textContent = content[lang].hobbiesText;
  document.getElementById("skillsTitle").textContent = content[lang].skillsTitle;
  document.getElementById("skillsText").textContent = content[lang].skillsText;
  document.getElementById("contactText").textContent = content[lang].contactText;
}

// Start in Dutch
changeLanguage('nl');


function typeText(elementId, text, delay = 100) {
  const element = document.getElementById(elementId);
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, delay);
    }
  }

  type();
}
