!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequire66be;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire66be=a);var i=a("bpxeT"),o=a("8nrFW"),s=a("2TvXO"),c=a("2SxBx"),l=a("4Nugj"),u="https://image.tmdb.org/t/p/original/",d="https://image.tmdb.org/t/p/w500/",p="5bf13f442a6612ea903461e28536fdca",f=(0,c.fetchAllGet)("https://api.themoviedb.org","/3/genre/movie/list",p,"");function m(t){return h.apply(this,arguments)}function h(){return(h=t(i)(t(s).mark((function e(n){var r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f;case 2:return r=t.sent,t.abrupt("return",n.map((function(t){return t=r.data.genres.filter((function(e){return e.id==t}))[0].name})).join(", "));case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(){return v=t(i)(t(s).mark((function e(n){var r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Math.floor(20*Math.random()),n.data.results.map(function(){var e=t(i)(t(s).mark((function e(n,a){var i,o,c,p,f,h,v,b,x,w,k,S;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.backdrop_path,o=n.poster_path,c=n.title,p=n.original_title,f=n.id,h=n.release_date,v=n.vote_average,b=n.vote_count,x=n.popularity,w=n.overview,k=n.genre_ids,a!==r){t.next=11;break}return t.t0='<div class="month-item" id="'.concat(f,'">\n                            <div>\n                            <div class="month-item-img">\n                                <picture>\n                                    <source srcset="').concat(u).concat(i,'" media="(min-width: 768px)" width="805"/>\n                                    <img src="').concat(d).concat(o,'" alt="').concat(p,'"/>\n                                </picture>\n                            </div></div>\n                            <div class="month-item-title">\n                                <h3>').concat(c,'</h3>\n                                <div class="month-item-title-text">\n                                    <div>\n                                        <h3>Release date<span class="month-rel-date">').concat(h.replaceAll("-","."),'</span></h3>\n                                        <h3>Vote / Votes<span class="month-vote">').concat(v,'</span> / <span class="month-votes">').concat(b,'</span></h3>\n                                    </div>\n                                    <div>\n                                        <h3>Popularity<span class="month-popular">').concat(parseFloat(x).toFixed(1),'</span></h3>\n                                        <h3>Genre<span class="month-genre">'),t.next=5,m(k);case 5:t.t1=t.sent,S=t.t0.concat.call(t.t0,t.t1,'</span></h3>\n                                    </div>\n                                </div>\n                                <p>About</p><span class="month-text">').concat(w,'</span>\n                                <button type="submit" class="month-btn">').concat(g(f),"</button>\n                            </div>\n                         </div>"),l.refs.monthGalery.insertAdjacentHTML("beforeend",S),l.refs.monthBtn=document.querySelector(".month-btn"),l.refs.monthItem=document.querySelector(".month-item"),l.refs.monthBtn.addEventListener("click",y);case 11:case"end":return t.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function g(e){var n={id:[]};return localStorage.getItem("favoriteFilm")&&(n.id=t(o)(JSON.parse(localStorage.getItem("favoriteFilm")).id)),n.id.includes(e.toString())?"Remove from my library":"Add to my library"}function y(e){e.preventDefault();var n=l.refs.monthItem.getAttribute("id"),r={id:[]};localStorage.getItem("favoriteFilm")&&(r.id=t(o)(JSON.parse(localStorage.getItem("favoriteFilm")).id)),r.id.includes(n)?(r.id.splice(r.id.indexOf(n),1),localStorage.setItem("favoriteFilm",JSON.stringify(r)),e.currentTarget.textContent="Add to my library"):("Add to my library"===e.currentTarget.textContent&&(e.currentTarget.textContent="Remove from  my library"),r.id.push(n),localStorage.setItem("favoriteFilm",JSON.stringify(r)))}function b(){l.refs.menuBackdrop.classList.toggle("visual_hidden"),l.refs.menuContainer.classList.toggle("is-open"),l.refs.body.classList.toggle("is-open")}(0,c.fetchAllGet)("https://api.themoviedb.org","/3/movie/upcoming",p,"&language=en-US&page=1").then((function(t){return v.apply(this,arguments)})),a("gVa74"),(l=a("4Nugj")).refs.menuBtn.addEventListener("click",b),l.refs.menuBackdrop.addEventListener("click",(function(t){t.target===l.refs.menuBackdrop&&b()}));i=a("bpxeT"),s=a("2TvXO");var x=a("dIxxU"),w=a("hPKSR"),k=(l=a("4Nugj"),"5bf13f442a6612ea903461e28536fdca"),S="https://api.themoviedb.org/3/trending/all/week",_=[];function T(){return(T=t(i)(t(s).mark((function e(){var n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.default.get("".concat(S,"?api_key=").concat(k,"&language=en-US&per_page=20"));case 2:return n=t.sent,_=n.data.results,t.next=6,L();case 6:return window.addEventListener("resize",L),t.abrupt("return",_);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function L(){return F.apply(this,arguments)}function F(){return(F=t(i)(t(s).mark((function e(){var n,r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=window.innerWidth,r=n<768?_.slice(0,1):_.slice(0,3),l.refs.weeklyList.innerHTML=(0,w.createMarkupCard)(r);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(){T.apply(this,arguments)}()}();
//# sourceMappingURL=index.d8186566.js.map
