(this["webpackJsonpreact-app-movie"]=this["webpackJsonpreact-app-movie"]||[]).push([[0],{187:function(e,t,n){"use strict";n.r(t);var a,c,i,r,s,o,b,d,j,l,p,u,f,O,h,x,m,g,v,w,y,_,k,S,C,P,z,F,T,E,G,B,D,M,U,N,V=n(0),A=n(45),I=n.n(A),R=n(252),J=n(112),W=n(18),q=n(14),L=n(15),Y=L.b.div(a||(a=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 10vh;\n  pointer: cursor;\n  background-color: #222222;\n  z-index: 100;\n  box-shadow: 0px 5px 100px #fff;\n"]))),H=L.b.h1(c||(c=Object(q.a)(["\n  color: #db2b39;\n  font-size: 3rem;\n  text-transform: uppercase;\n  font-family: 'Bebas Neue', cursive;\n"]))),K=n(1),Q=function(){return Object(K.jsx)(Y,{children:Object(K.jsx)(H,{children:" Webflix "})})},X=n(9),Z=n(5),$=n(248),ee=n(249),te=Object(Z.a)($.a)(i||(i=Object(q.a)(["\n  background: #222222;\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n"]))),ne=Object(Z.a)(ee.a)(r||(r=Object(q.a)(["\n  color: #ffff;\n\n  &:hover {\n    color: #db2b39;\n  }\n\n"]))),ae=L.b.div(s||(s=Object(q.a)(["\n  margin-top: 5%;\n\n  @media (max-width: 900px) {\n    margin-top: 10%;\n  }\n\n  @media (max-width: 600px) {\n    margin-top: 15%;\n  }\n\n  @media (max-width: 400px) {\n    margin-top: 20%;\n  }\n"]))),ce=n(108),ie=n.n(ce),re=n(109),se=n.n(re),oe=n(110),be=n.n(oe),de=n(74),je=n.n(de),le=function(){var e=Object(V.useState)(0),t=Object(X.a)(e,2),n=t[0],a=t[1],c=Object(W.f)(),i=function(e){e.preventDefault(),window.scroll(0,0)};return Object(V.useEffect)((function(){switch(n){case 1:c.push("/movies");break;case 2:c.push("/series");break;case 3:c.push("/search");break;default:c.push("/")}}),[n,c]),Object(K.jsx)(ae,{children:Object(K.jsxs)(te,{showLabels:!0,value:n,onChange:function(e,t){a(t)},children:[Object(K.jsx)(ne,{onClick:i,label:"Trending",icon:Object(K.jsx)(ie.a,{})}),Object(K.jsx)(ne,{onClick:i,label:"Movies",icon:Object(K.jsx)(se.a,{})}),Object(K.jsx)(ne,{onClick:i,label:"TV Series",icon:Object(K.jsx)(be.a,{})}),Object(K.jsx)(ne,{onClick:i,label:"Search",icon:Object(K.jsx)(je.a,{})})]})})},pe=n(19),ue=n.n(pe),fe=n(25),Oe=n(26),he=n.n(Oe),xe=L.b.div(o||(o=Object(q.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding-top: 20px;\n"]))),me=L.b.h2(b||(b=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  color: #ffff;\n  margin-top: 10px;\n  font-size: 2rem;\n  font-family: 'Fjalla One', sans-serif;\n  padding-top: 30px;\n"]))),ge=n(242),ve="https://image.tmdb.org/t/p/w300",we="https://image.tmdb.org/t/p/w500",ye="https://www.movienewz.com/img/films/poster-holder.jpg",_e=n(241),ke=n(244),Se=n(233),Ce=n(250),Pe=n(246),ze=Object(Z.a)(Pe.a)(d||(d=Object(q.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n  height: 80%;\n  background-color: #0a0a0a;\n  border: 2px solid #8F8F8F;\n  border-radius: 15px;\n  box-shadow: 24px;\n  color: #ffff;\n  padding: 20px;\n\n  @media (max-width: 450px) {    \n      width: 80%;\n      height: 70%;\n  }\n\n"]))),Fe=L.b.img(j||(j=Object(q.a)(["\n  display: none;\n  object-fit: contain;\n  border-radius: 15px;\n\n  @media (min-width: 835px) {\n    display: flex;\n    width: 38%;\n  }\n"]))),Te=L.b.img(l||(l=Object(q.a)(["\n  object-fit: contain;\n  border-radius: 15px;\n\n  @media (min-width: 835px) {\n    display: none;\n  }\n"]))),Ee=L.b.div(p||(p=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n  scrollbar-width: none;\n\n  @media (min-width: 835px) {\n    flex-direction: row;\n  }\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),Ge=L.b.div(u||(u=Object(q.a)(["\n  width: 95%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  @media (min-width: 835px) {\n    height: 90%;\n    width: 55%;\n    padding 0;\n}\n"]))),Be=L.b.h3(f||(f=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Roboto Slab', serif;\n  font-weight: 500;\n\n  @media (min-width: 835px) {\n    font-size: 3.5vw;\n  }\n"]))),De=L.b.p(O||(O=Object(q.a)(["\n  display: flex;\n  height: 30%;\n  overflow-y: scroll;\n  padding: 15px;\n  text-align: justify;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (min-width: 835px) {\n    font-size: 15px;\n  }\n"]))),Me=L.b.div(h||(h=Object(q.a)([""]))),Ue=Object(Z.a)(Ce.a)(x||(x=Object(q.a)(["\n  background-color: #db2b39;\n  color: #ffff;\n"]))),Ne=L.b.div(m||(m=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: auto;\n  margin: 5px 0;\n  transition: ease-out 0.35s;\n  position: relative;\n  cursor: pointer;\n  color: #ffff;\n  padding: 5px;\n\n  &:hover {\n    opacity: 1;\n    transition: ease-in-out 0.35s;\n    transform: scale(1.05);\n  }\n\n  @media (max-width: 550px) {\n    width: 50%;\n    padding: 10px;\n  }\n"]))),Ve=L.b.img(g||(g=Object(q.a)([""]))),Ae=L.b.span(v||(v=Object(q.a)(["\n  text-align: center;\n  transition: ease 0.5s;\n  background: rgba(0, 0, 0, 0.5);\n  width: 95%;\n  opacity: 1;\n  position: absolute;\n  bottom: 5px;\n  padding: 5px 0;\n  font-size: 12px;\n  color: #ffff;\n"]))),Ie=n(235),Re=n(111),Je=n.n(Re),We=(n(186),L.b.div(w||(w=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  object-fit: contain;\n  padding: 5px;\n"])))),qe=L.b.img(y||(y=Object(q.a)(["\n  margin-bottom: 5px;\n"]))),Le=L.b.p(_||(_=Object(q.a)(["\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n"]))),Ye=function(e){return e.preventDefault()},He=function(e){var t=e.media_type,n=e.id,a=Object(V.useState)([]),c=Object(X.a)(a,2),i=c[0],r=c[1],s=i.map((function(e){return Object(K.jsxs)(We,{children:[Object(K.jsx)(qe,{src:e.profile_path?"".concat(ve).concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:e.name,onDragStart:Ye}),Object(K.jsx)(Le,{children:e.name})]})})),o=function(){var e=Object(fe.a)(ue.a.mark((function e(){var a,c;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/".concat(t,"/").concat(n,"/credits?api_key=").concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US"));case 2:a=e.sent,c=a.data,console.log(c),r(c.cast);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){o()}),[]),Object(K.jsx)(Je.a,{responsive:{0:{items:3},512:{items:5},1024:{items:7}},autoPlay:!0,autoPlayInterval:1e3,infinite:!0,disableButtonsControls:!0,disableDotsControls:!0,mouseTracking:!0,items:s})},Ke=function(e){var t=e.children,n=e.id,a=e.media_type,c=Object(V.useState)(!1),i=Object(X.a)(c,2),r=i[0],s=i[1],o=Object(V.useState)(),b=Object(X.a)(o,2),d=b[0],j=b[1],l=Object(V.useState)(),p=Object(X.a)(l,2),u=p[0],f=p[1],O=function(){var e=Object(fe.a)(ue.a.mark((function e(){var t,c;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(n,"?api_key=").concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US"));case 2:t=e.sent,c=t.data,j(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(fe.a)(ue.a.mark((function e(){var t,c,i;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(n,"/videos?api_key=").concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US"));case 2:c=e.sent,i=c.data,f(null===(t=i.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){O(),h()}),[]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Ne,{onClick:function(){return s(!0)},children:t}),Object(K.jsx)(_e.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:r,onClose:function(){return s(!1)},closeAfterTransition:!0,BackdropComponent:ke.a,BackdropProps:{timeout:500},children:Object(K.jsx)(Se.a,{in:r,children:d&&Object(K.jsx)(ze,{children:Object(K.jsxs)(Ee,{children:[Object(K.jsx)(Fe,{src:d.poster_path?"".concat(we).concat(d.poster_path):"".concat(ye),alt:d.name||d.title}),Object(K.jsx)(Te,{src:d.poster_path?"".concat(we).concat(d.backdrop_path):"".concat("https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"),alt:d.name||d.title}),Object(K.jsxs)(Ge,{children:[Object(K.jsxs)(Be,{children:[d.name||d.title," (",(d.first_air_date||d.release_date||"-----").substring(0,4),")"]}),Object(K.jsx)(De,{children:d.overview}),Object(K.jsx)(Me,{children:Object(K.jsx)(He,{media_type:a,id:n})}),Object(K.jsx)(Ue,{variant:"contained",startIcon:Object(K.jsx)(Ie.a,{}),target:"_blank",href:"https://www.youtube.com/watch?v=".concat(u),children:"Watch Trailer"})]})]})})})})]})},Qe=function(e){var t=e.id,n=e.poster,a=e.title,c=e.media_type,i=e.rating;return Object(K.jsxs)(Ke,{media_type:c,id:t,children:[Object(K.jsx)(ge.a,{badgeContent:i,color:i>6?"primary":"secondary"}),Object(K.jsx)(Ve,{src:n?"".concat(ve).concat(n):ye,alt:a}),Object(K.jsxs)(Ae,{children:["tv"===c?"TV Series":"Movie"," "]})]})},Xe=n(113),Ze=n(238),$e=n(247),et=L.b.div(k||(k=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 3%;\n"]))),tt=Object(Xe.a)({palette:{mode:"dark"}}),nt=function(e){var t=e.setPage,n=e.numOfPages,a=void 0===n?10:n;return Object(K.jsx)($e.a,{theme:tt,children:Object(K.jsx)(et,{children:Object(K.jsx)(Ze.a,{count:a,onChange:function(e){return n=e.target.textContent,t(n),void window.scroll(0,0);var n}})})})},at=function(){var e=Object(V.useState)([]),t=Object(X.a)(e,2),n=t[0],a=t[1],c=Object(V.useState)(1),i=Object(X.a)(c,2),r=i[0],s=i[1],o=function(){var e=Object(fe.a)(ue.a.mark((function e(){var t,n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("afc0e9cbb4a717658067ffd6e49f0ec4","&page=").concat(r));case 2:t=e.sent,n=t.data,a(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){o()}),[r]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(me,{children:"Trending Now"}),Object(K.jsx)(xe,{children:n&&n.map((function(e){return Object(K.jsx)(Qe,{id:e.id,poster:e.poster_path,title:e.name||e.title,date:e.first_air_date||e.release_date,media_type:e.media_type,rating:e.vote_average},e.id)}))}),Object(K.jsx)(nt,{setPage:s})]})},ct=n(16),it=n(245),rt=L.b.div(S||(S=Object(q.a)(["\n  padding-bottom: 20px;\n"]))),st=Object(Z.a)(it.a)(C||(C=Object(q.a)(["\n margin: 0.3%;\n cursor: pointer;\n\n &:hover {\n    color: #C4CBCA;\n }\n"]))),ot=Object(Xe.a)({palette:{mode:"dark"}}),bt=function(e){var t=e.type,n=e.selectedGenre,a=e.genre,c=e.setGenre,i=e.setSelectedGenre,r=e.setPage,s=function(){var e=Object(fe.a)(ue.a.mark((function e(){var n,a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/genre/".concat(t,"/list?api_key=").concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US"));case 2:n=e.sent,a=n.data,c(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){return s(),function(){c([])}}),[r]),Object(K.jsx)($e.a,{theme:ot,children:Object(K.jsxs)(rt,{children:[n&&n.map((function(e){return Object(K.jsx)(st,{label:e.name,size:"small",color:"error",clickable:!0,onDelete:function(){return t=e,i(n.filter((function(e){return e.id!==t.id}))),c([].concat(Object(ct.a)(a),[t])),void r(1);var t}},e.id)})),a&&a.map((function(e){return Object(K.jsx)(st,{label:e.name,variant:"outlined",size:"small",clickable:!0,onClick:function(){return t=e,i([].concat(Object(ct.a)(n),[t])),c(a.filter((function(e){return e.id!==t.id}))),void r(1);var t}},e.id)}))]})})},dt=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},jt=function(){var e=Object(V.useState)(1),t=Object(X.a)(e,2),n=t[0],a=t[1],c=Object(V.useState)([]),i=Object(X.a)(c,2),r=i[0],s=i[1],o=Object(V.useState)(),b=Object(X.a)(o,2),d=b[0],j=b[1],l=Object(V.useState)([]),p=Object(X.a)(l,2),u=p[0],f=p[1],O=Object(V.useState)([]),h=Object(X.a)(O,2),x=h[0],m=h[1],g=dt(u),v=function(){var e=Object(fe.a)(ue.a.mark((function e(){var t,a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(n,"&with_genres=").concat(g));case 2:t=e.sent,a=t.data,s(a.results),j(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){v()}),[n,g]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(me,{children:"Movies"}),Object(K.jsxs)(xe,{children:[Object(K.jsx)(bt,{type:"movie",selectedGenre:u,genre:x,setGenre:m,setSelectedGenre:f,setPage:a}),r&&r.map((function(e){return Object(K.jsx)(Qe,{id:e.id,poster:e.poster_path,title:e.name,date:e.release_date,media_type:"movie",rating:e.vote_average},e.id)}))]}),d>1&&Object(K.jsx)(nt,{setPage:a,numOfPages:d})]})},lt=function(){var e=Object(V.useState)(1),t=Object(X.a)(e,2),n=t[0],a=t[1],c=Object(V.useState)([]),i=Object(X.a)(c,2),r=i[0],s=i[1],o=Object(V.useState)(),b=Object(X.a)(o,2),d=b[0],j=b[1],l=Object(V.useState)([]),p=Object(X.a)(l,2),u=p[0],f=p[1],O=Object(V.useState)([]),h=Object(X.a)(O,2),x=h[0],m=h[1],g=dt(u),v=function(){var e=Object(fe.a)(ue.a.mark((function e(){var t,n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=").concat(g));case 2:t=e.sent,n=t.data,s(n.results),j(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){v()}),[n,g]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(me,{children:"TV Series"}),Object(K.jsxs)(xe,{children:[Object(K.jsx)(bt,{type:"tv",selectedGenre:u,genre:x,setGenre:m,setSelectedGenre:f,setPage:a}),r&&r.map((function(e){return Object(K.jsx)(Qe,{id:e.id,poster:e.poster_path,title:e.title,date:e.first_air_date,media_type:"tv",rating:e.vote_average},e.id)}))]}),d>1&&Object(K.jsx)(nt,{setPage:a,numOfPages:d})]})},pt=n(239),ut=n(237),ft=n(251),Ot=L.b.div(P||(P=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px 0;\n"]))),ht=Object(Z.a)(ut.a)(z||(z=Object(q.a)(["\n    width: 30vw;\n\n    @media (max-width: 800px) {\n        width: 50vw;\n    }\n"]))),xt=Object(Z.a)(Ce.a)(F||(F=Object(q.a)(["\n    margin: 15px 0;\n"]))),mt=Object(Z.a)(je.a)(T||(T=Object(q.a)(["\n    color: #ffff;\n"]))),gt=Object(Z.a)(ft.a)(E||(E=Object(q.a)([""]))),vt=Object(Z.a)(ft.a)(G||(G=Object(q.a)([""]))),wt=L.b.h2(B||(B=Object(q.a)(["\n  color: #7a7a7a;\n  text-align: center;\n  padding: 50px 0;\n  font-family: 'Fjalla One', sans-serif;\n"]))),yt=Object(Xe.a)({palette:{mode:"dark"}}),_t=function(){var e=Object(V.useState)(""),t=Object(X.a)(e,2),n=t[0],a=t[1],c=Object(V.useState)(0),i=Object(X.a)(c,2),r=i[0],s=i[1],o=Object(V.useState)(1),b=Object(X.a)(o,2),d=b[0],j=b[1],l=Object(V.useState)(),p=Object(X.a)(l,2),u=p[0],f=p[1],O=Object(V.useState)(),h=Object(X.a)(O,2),x=h[0],m=h[1],g=function(){var e=Object(fe.a)(ue.a.mark((function e(){var t,a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("https://api.themoviedb.org/3/search/".concat(r?"tv":"movie","?api_key=").concat("afc0e9cbb4a717658067ffd6e49f0ec4","&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:t=e.sent,a=t.data,f(a.results),m(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.useEffect)((function(){window.scroll(0,0),g()}),[d,r]),Object(K.jsxs)($e.a,{theme:yt,children:[Object(K.jsx)(me,{children:"Search"}),Object(K.jsxs)(Ot,{children:[Object(K.jsx)(ht,{label:"Search",variant:"standard",onChange:function(e){var t=e.target.value;a(t)}}),Object(K.jsx)(xt,{onClick:g,children:Object(K.jsx)(mt,{})})]}),Object(K.jsxs)(pt.a,{value:r,indicatorColor:"primary",centered:!0,onChange:function(e,t){s(t),j(1)},children:[Object(K.jsx)(gt,{label:"Search Movie"}),Object(K.jsx)(vt,{label:"Search TV Series"})]}),Object(K.jsxs)(xe,{children:[u&&u.map((function(e){return Object(K.jsx)(Qe,{id:e.id,poster:e.poster_path,title:e.name||e.title,date:e.first_air_date||e.release_date,media_type:r?"tv":"movie",rating:e.vote_average},e.id)})),n&&!u&&(r?Object(K.jsx)(wt,{children:"Sorry, No TV Series Found"}):Object(K.jsx)(wt,{children:" Sorry, No Movies Found"}))]}),x>1&&Object(K.jsx)(nt,{setPage:j,numOfPages:x})]})},kt=L.b.div(D||(D=Object(q.a)(["\n  text-align: center;\n  margin-top: 20px;\n\n  @media (max-width: 500px) {\n    margin-top: 20px;\n  }\n"]))),St=L.b.p(M||(M=Object(q.a)(["\n  color: #7a7a7a;\n  font-size: 12px;\n\n  @media (max-width: 500px) {\n    font-size: 8px;\n  }\n"]))),Ct=L.b.img(U||(U=Object(q.a)(["\n  width: 5%;\n\n  @media (max-width: 750px) {\n    width: 8%;\n  }\n\n  @media (max-width: 600px) {\n    width: 10%;\n  }\n"]))),Pt=n.p+"static/media/tmbd.bf7f470b.svg",zt=function(){return Object(K.jsxs)(kt,{children:[Object(K.jsx)(St,{children:"This website uses the TMDB API but is not endorsed or certified by TMDB."}),Object(K.jsx)(Ct,{src:Pt})]})},Ft=Object(L.a)(N||(N=Object(q.a)(["\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    background: #0a0a0a;\n}\n"])));var Tt=function(){return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(J.a,{children:[Object(K.jsx)(Ft,{}),Object(K.jsx)(Q,{}),Object(K.jsxs)(R.a,{children:[Object(K.jsxs)(W.c,{children:[Object(K.jsx)(W.a,{path:"/",component:at,exact:!0}),Object(K.jsx)(W.a,{path:"/movies",component:jt}),Object(K.jsx)(W.a,{path:"/series",component:lt}),Object(K.jsx)(W.a,{path:"/search",component:_t})]}),Object(K.jsx)(zt,{})]}),Object(K.jsx)(le,{})]})})};I.a.render(Object(K.jsx)(Tt,{}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.9bb0439f.chunk.js.map