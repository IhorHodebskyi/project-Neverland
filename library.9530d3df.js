const e={menuBtn:document.querySelector("[data-menu-open]"),menuContainer:document.querySelector("[data-menu]"),menuBackdrop:document.querySelector("[data-backdrop]"),body:document.querySelector("body"),homeHeroFilmWraper:document.querySelector(".hero-content"),homeHero:document.querySelector(".home-hero-plug"),homeHeroFilmWraper:document.querySelector(".home-hero-container"),monthGalery:document.querySelector(".monthgalery")};function n(){e.menuBackdrop.classList.toggle("visual_hidden"),e.menuContainer.classList.toggle("is-open"),e.body.classList.toggle("is-open")}e.menuBtn.addEventListener("click",n),e.menuBackdrop.addEventListener("click",(function(t){t.target===e.menuBackdrop&&n()}));const t=document.getElementById("nav-header"),r=window.location.pathname;"/project-neverland/index.html"===r?t.children[0].children[0].classList.add("nav_list-current"):"/project-neverland/catalog.html"===r?t.children[1].children[0].classList.add("nav_list-current"):"/project-neverland/library.html"===r?t.children[2].children[0].classList.add("nav_list-current"):t.children[0].children[0].classList.add("nav_list-current");
//# sourceMappingURL=library.9530d3df.js.map
