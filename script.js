const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");

function showPage(pageId) {
  
  pages.forEach(page => {
    page.classList.remove("active");
  });
  
  const page = document.getElementById(pageId);
  
  if (page) {
    page.classList.add("active");
  }
  
  navItems.forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.page === pageId
    );
  });
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* NAVEGAÇÃO */

navItems.forEach(item => {
  
  item.addEventListener("click", () => {
    
    showPage(item.dataset.page);
    
  });
  
});


/* VER TUDO */

document.querySelectorAll("[data-page]").forEach(button => {
  
  button.addEventListener("click", event => {
    
    const page = event.currentTarget.dataset.page;
    
    if (page) {
      showPage(page);
    }
    
  });
  
});


/* BOTÃO DE PESQUISA */

document.getElementById("searchBtn")
  .addEventListener("click", () => {
    
    showPage("explore");
    
    setTimeout(() => {
      document.getElementById("searchInput").focus();
    }, 100);
    
  });


/* DETALHES */

document.querySelectorAll(".movie-card").forEach(card => {
  
  card.addEventListener("click", () => {
    
    showPage("details");
    
  });
  
});


/* VOLTAR */

document.getElementById("backBtn")
  .addEventListener("click", () => {
    
    showPage("home");
    
  });


/* PESQUISA */

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll("#movieGrid .movie-card");

searchInput.addEventListener("input", () => {
  
  const value = searchInput.value.toLowerCase();
  
  cards.forEach(card => {
    
    const title = card
      .querySelector("h3")
      .textContent
      .toLowerCase();
    
    card.style.display =
      title.includes(value) ? "" : "none";
    
  });
  
});


/* BOTÃO ADICIONAR */

document.querySelectorAll('[data-action="add"]')
  .forEach(button => {
    
    button.addEventListener("click", () => {
      
      button.textContent = "✓ Na minha lista";
      
    });
    
  });


/* BOTÃO ASSISTIR */

document.querySelectorAll('[data-action="watch"]')
  .forEach(button => {
    
    button.addEventListener("click", () => {
      
      alert("Aqui você pode abrir o player oficial do seu conteúdo.");
      
    });
    
  });


/* PWA */

if ("serviceWorker" in navigator) {
  
  window.addEventListener("load", () => {
    
    navigator.serviceWorker.register("sw.js")
      .then(() => {
        console.log("Service Worker ativo.");
      })
      .catch(error => {
        console.error(
          "Erro no Service Worker:",
          error
        );
      });
    
  });
  
}