!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequire66be;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequire66be=a);var i=a("4Nugj");function o(){i.refs.menuBackdrop.classList.toggle("visual_hidden"),i.refs.menuContainer.classList.toggle("is-open"),i.refs.body.classList.toggle("is-open")}i.refs.menuBtn.addEventListener("click",o),i.refs.menuBackdrop.addEventListener("click",(function(e){e.target===i.refs.menuBackdrop&&o()}));var c=document.getElementById("nav-header"),l=window.location.pathname;"/project-neverland/index.html"===l?c.children[0].children[0].classList.add("nav_list-current"):"/project-neverland/catalog.html"===l?c.children[1].children[0].classList.add("nav_list-current"):"/project-neverland/library.html"===l?c.children[2].children[0].classList.add("nav_list-current"):c.children[0].children[0].classList.add("nav_list-current");var s,d=a("bpxeT"),u=a("2TvXO"),p=a("dIxxU"),f="https://image.tmdb.org/t/p/original/",v=(s=e(d)(e(u).mark((function n(t,r){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.default)("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("5bf13f442a6612ea903461e28536fdca","&query=").concat(t,"&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),n)}))),function(e,n){return s.apply(this,arguments)}),g=document.querySelector("#search-form"),b=document.querySelector(".gallery");g.addEventListener("submit",(function(e){e.preventDefault(),m=1,b.innerHTML="";var n=e.currentTarget.elements.searchQuery;if(!(h=n.value.trim()))return;v(h,m).then((function(e){var n,t,r=e.data;console.log(r),0===r.results.length||(n=r.results,t=null==n?void 0:n.map((function(e){var n=e.poster_path,t=e.original_title,r=e.id,a=e.release_date,i=e.vote_average,o=e.vote_count,c=e.popularity,l=e.genre_ids;return'<div class="photo-card">\n  <img src="'.concat(f).concat(n,'" alt="').concat(t,'" loading="lazy" width="330"/>\n  <div class="info" id="').concat(r,'">\n    <p class="info-item">\n      <b>original_title</b></br>').concat(t,'\n    </p>\n    <p class="info-item">\n      <b>release_date</b></br>').concat(a,'\n    </p>\n    <p class="info-item">\n      <b>vote_average</b></br>').concat(i,'\n    </p>\n    <p class="info-item">\n      <b>vote_count</b></br>').concat(o,'\n    </p>\n    <p class="info-item">\n      <b>popularity</b></br>').concat(c,'\n    </p>\n    <p class="info-item">\n      <b>genre_ids</b></br>').concat(l,"\n    </p>\n  </div>\n</div>")})).join(""),b.insertAdjacentHTML("beforeend",t))}))}));var m=1,h="";a("gVa74")}();
//# sourceMappingURL=catalog.359dfd40.js.map
