(this["webpackJsonpproject-one"]=this["webpackJsonpproject-one"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=(c(9),c(2)),l=c(0),o=function(e){var t=e.image,c=t.tags.split(",");return Object(l.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(l.jsx)("img",{src:t.webformatURL,alt:"",className:"w-full"}),Object(l.jsxs)("div",{className:"px-6 py-4",children:[Object(l.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo By ",t.user]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Views: "}),t.views]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(l.jsx)("div",{className:"px-6 py-4",children:c.map((function(e,t){return Object(l.jsxs)("span",{className:"inline-block bg-gray-200 rounded-fill px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:["#",e]},t)}))})]})},j=function(e){var t=e.searchText,c=Object(s.useState)(""),n=Object(i.a)(c,2),a=n[0],r=n[1];return Object(l.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"w-full max-w-sm",children:Object(l.jsxs)("div",{className:"bg-white shadow p-4 flex",children:[Object(l.jsx)("input",{onChange:function(e){return r(e.target.value)},className:"w-full rounded p-2",type:"text",placeholder:"Search Image..."}),Object(l.jsx)("button",{className:"bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4",children:Object(l.jsx)("p",{className:"font-semibold text-sm",children:"Search"})})]})})})};var d=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!0),r=Object(i.a)(a,2),d=r[0],x=r[1],u=Object(s.useState)(""),b=Object(i.a)(u,2),h=b[0],m=b[1];return Object(s.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("19770978-c0b5749d985567a59e2251497","&q=").concat(h,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){n(e.hits),x(!1)})).catch((function(e){return console.log(e)}))}),[h]),Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)(j,{searchText:function(e){return m(e)}}),!d&&0===c.length&&Object(l.jsx)("h1",{className:"text-5xl text-center mx-auto-mt-32",children:"No Images Found"}),d?Object(l.jsx)("h1",{className:"text-6xl text-center mx-auto-mt-32",children:"Loading..."}):Object(l.jsx)("div",{className:"grid grid-cols-3 gap-4",children:c.map((function(e){return Object(l.jsx)(o,{image:e},e.id)}))})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.18eed5d6.chunk.js.map