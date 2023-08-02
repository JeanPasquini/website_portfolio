
  // Função para fazer o smooth scroll até o elemento alvo
  function scrollToTarget(target) {
    const element = document.querySelector(target);
    const navHeight = document.querySelector('nav').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - navHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Adicione um evento de clique para cada link do menu
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link

      // Obtém o valor do atributo "href" e remove o caractere '#'
      const target = link.getAttribute('href').substring(1);

      // Chama a função de scroll suave
      scrollToTarget(`#${target}`);
    });
  });