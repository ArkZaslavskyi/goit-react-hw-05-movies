"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[126],{1126:function(r,n,e){e.r(n),e.d(n,{default:function(){return j}});var t,a,o,i,u,c=e(885),s=e(2791),p=e(470),h=e(1933),l=e(168),f=e(6444),d=f.ZP.ul(t||(t=(0,l.Z)(["\n    padding-top: 16px;\n    margin-top: 8px;\n    \n    border-top: 1px solid #cccccc;\n"]))),m=f.ZP.li(a||(a=(0,l.Z)(["\n    :not(:first-of-type) {\n        margin-top: 24px;\n    };\n"]))),v=f.ZP.h3(o||(o=(0,l.Z)(["\n"]))),g=f.ZP.span(i||(i=(0,l.Z)(["\n    color: #707070;\n"]))),y=f.ZP.p(u||(u=(0,l.Z)(["\n    margin-top: 16px;\n    padding-left: 16px;\n    padding-right: 16px;\n"]))),w=e(184),x=function(r){var n=r.reviews;return(0,w.jsx)(d,{children:n.map((function(r){var n=r.id,e=r.author,t=r.content;return(0,w.jsxs)(m,{children:[(0,w.jsxs)(v,{children:[(0,w.jsx)(g,{children:"Author: "}),e]}),(0,w.jsx)(y,{children:t})]},n)}))})},b=e(8402),j=function(){var r=(0,s.useState)(null),n=(0,c.Z)(r,2),e=n[0],t=n[1],a=(0,p.UO)().movieId;return(0,s.useEffect)((function(){(0,h.Xj)(a).then((function(r){return t(r.results)}))}),[a]),e?e.length?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(x,{reviews:e})}):(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("h3",{children:["Oop's! We don't have any ",(0,w.jsx)("span",{style:{color:"blueviolet"},children:"reviews"})," for this movie"]})}):(0,w.jsx)(b.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"navy",barColor:"orangered"})}},1933:function(r,n,e){e.d(n,{Aj:function(){return p},Pg:function(){return h},Ph:function(){return l},Xj:function(){return d},gI:function(){return f},rA:function(){return c}});var t=e(5861),a=e(7757),o=e.n(a),i=e(4569),u=e.n(i),c={baseUrl:"http://image.tmdb.org/t/p/",posterSizes:["w92","w154","w185","w342","w500","w780","original"]},s=function(){var r=(0,t.Z)(o().mark((function r(n){var e,t,a,i,c,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.queryType,t=n.pathParams,a=n.query,i={baseURL:"https://api.themoviedb.org/3",params:{api_key:"b282a22ae665f5f17a32a077013d243c",query:a}},r.next=4,u().get("".concat(e).concat(t),i);case 4:return c=r.sent,s=c.data,r.abrupt("return",s);case 7:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r="/".concat("movie","/","week");return s({queryType:"/trending",pathParams:r})},h=function(r){var n="/".concat(r);return s({queryType:"/movie",pathParams:n})},l=function(r){return s({queryType:"/search",pathParams:"/movie",query:r})},f=function(r){var n="/".concat(r,"/credits");return s({queryType:"/movie",pathParams:n})},d=function(r){var n="/".concat(r,"/reviews");return s({queryType:"/movie",pathParams:n})}}}]);
//# sourceMappingURL=126.537c5b9a.chunk.js.map