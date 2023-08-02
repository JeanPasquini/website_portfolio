const words = ["Hi I'm Jean Pasquini", "I'll be your Web Developer"]; // Insira as palavras que deseja que sejam digitadas
const typingEffectElement = document.querySelector(".typing-effect .word");
const cursorElement = document.querySelector(".typing-effect .cursor");

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingEffectElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Ajuste o atraso entre caracteres (em milissegundos)
  } else {
    setTimeout(erase, 1000); // Ajuste o atraso após digitar a palavra (em milissegundos)
  }
}

function erase() {
  if (charIndex > 0) {
    typingEffectElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Ajuste o atraso entre apagar caracteres (em milissegundos)
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500); // Ajuste o atraso entre palavras (em milissegundos)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type(); // Inicia o efeito de digitação
});




function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('appear');
      }
    });
  }
  
  // Execute a função quando a página é carregada e quando o usuário rola a página
  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
  