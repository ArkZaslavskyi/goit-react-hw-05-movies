"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[126],{1126:function(r,e,n){n.r(e),n.d(e,{default:function(){return j}});var t,a,o,i,u,c=n(885),s=n(2791),p=n(470),h=n(1933),l=n(168),f=n(6444),d=f.ZP.ul(t||(t=(0,l.Z)(["\n    padding-top: 16px;\n    margin-top: 8px;\n    \n    border-top: 1px solid #cccccc;\n"]))),m=f.ZP.li(a||(a=(0,l.Z)(["\n    :not(:first-of-type) {\n        margin-top: 16px;\n    };\n"]))),v=f.ZP.h3(o||(o=(0,l.Z)(["\n"]))),y=f.ZP.span(i||(i=(0,l.Z)(["\n    color: #707070;\n"]))),w=f.ZP.p(u||(u=(0,l.Z)(["\n    margin-top: 8px;\n"]))),g=n(184),x=function(r){var e=r.reviews;return(0,g.jsx)(d,{children:e.map((function(r){var e=r.id,n=r.author,t=r.content;return(0,g.jsxs)(m,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)(y,{children:"Author: "}),n]}),(0,g.jsx)(w,{children:t})]},e)}))})},b=n(8402),j=function(){var r=(0,s.useState)(null),e=(0,c.Z)(r,2),n=e[0],t=e[1],a=(0,p.UO)().movieId;return(0,s.useEffect)((function(){(0,h.Xj)(a).then((function(r){return t(r.results)}))}),[a]),n?n.length?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(x,{reviews:n})}):(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("h3",{children:["Oop's! We don't have any ",(0,g.jsx)("span",{style:{color:"blueviolet"},children:"reviews"})," for this movie"]})}):(0,g.jsx)(b.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"navy",barColor:"orangered"})}},1933:function(r,e,n){n.d(e,{Aj:function(){return p},Pg:function(){return h},Ph:function(){return l},Xj:function(){return d},gI:function(){return f},rA:function(){return c}});var t=n(5861),a=n(7757),o=n.n(a),i=n(4569),u=n.n(i),c={baseUrl:"http://image.tmdb.org/t/p/",posterSizes:["w92","w154","w185","w342","w500","w780","original"]},s=function(){var r=(0,t.Z)(o().mark((function r(e){var n,t,a,i,c,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.queryType,t=e.pathParams,a=e.query,i={baseURL:"https://api.themoviedb.org/3",params:{api_key:"b282a22ae665f5f17a32a077013d243c",query:a}},r.next=4,u().get("".concat(n).concat(t),i);case 4:return c=r.sent,s=c.data,r.abrupt("return",s);case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r="/".concat("movie","/","week");return s({queryType:"/trending",pathParams:r})},h=function(r){var e="/".concat(r);return s({queryType:"/movie",pathParams:e})},l=function(r){return s({queryType:"/search",pathParams:"/movie",query:r})},f=function(r){var e="/".concat(r,"/credits");return s({queryType:"/movie",pathParams:e})},d=function(r){var e="/".concat(r,"/reviews");return s({queryType:"/movie",pathParams:e})}}}]);
//# sourceMappingURL=126.1769b290.chunk.js.map