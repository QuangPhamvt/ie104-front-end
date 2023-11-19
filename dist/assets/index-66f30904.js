import{i as h,o as m,j as e,k as a,N as u,l as j,I as p,R as r,b as n,s as f,S as g}from"./index-471de8c2.js";import{R as N}from"./index.esm-2a477c1f.js";const t={isChoose:"bg-orange-500 p-4 text-white text-xl rounded-2xl",notChoose:"bg-white p-4 text-xl text-black rounded-2xl border-2 border-orange-400 border-solid"},S=()=>{const[o,s]=h(m);return e.jsxs("section",{className:"flex flex-row space-x-8",children:[e.jsx("button",{onClick:()=>s(a.DISHES),className:o===a.DISHES?t.isChoose:t.notChoose,children:"Dishes"}),e.jsx("button",{onClick:()=>s(a.RESTAURANT),className:o===a.RESTAURANT?t.isChoose:t.notChoose,children:"Restaurants"})]})},R=o=>{const{id:s,title:c,picture:l,price:i,author:x,location:d}=o;return e.jsx(u,{to:`/post/${s}`,children:e.jsxs("section",{style:{borderRadius:8},className:"p-4 flex flex-row bg-gray-100 space-x-6 ",children:[e.jsx("img",{className:"h-24 aspect-square object-cover rounded-lg",src:l,alt:"Not have image",loading:"Is loading"}),e.jsxs("div",{className:"flex flex-col justify-around grow",children:[e.jsx("h3",{className:"text-base font-normal",children:c}),e.jsx("h4",{className:"text-xs font-normal text-gray-400",children:x}),e.jsxs("div",{className:"flex flex-row justify-between items-center w-full",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx(j,{color:"orange"}),e.jsx("h5",{className:"font-normal",children:i})]}),e.jsxs("div",{className:"flex flex-row ",children:[e.jsx(p,{color:"orange"}),e.jsx("h5",{className:"font-normal",children:d})]})]})]})]})})},b=()=>{const{data:o}=r(n);return console.log(o),e.jsx("article",{className:"grid grid-cols-3 gap-x-16 gap-y-24",children:o.map(s=>e.jsx(R,{id:s.id,title:s.title,price:s.price,author:s.author.username,picture:s.picture,location:s.location},s.id))})},C=()=>{const{data:{slug:o}}=r(f),{status:s}=r(n);return e.jsx("article",{className:"mt-28 container mx-auto space-y-12 pt-12",children:s===g.HAS_VALUE?e.jsxs(e.Fragment,{children:[e.jsxs("h2",{children:['Search result for " ',o,' "']}),e.jsx(S,{}),e.jsx(b,{}),e.jsxs("section",{className:"w-full inline-flex justify-end items-center",children:[e.jsx("p",{className:"text-orange-400 ",children:"View More"})," ",e.jsx(N,{color:"orange",size:24})]})]}):e.jsx("p",{children:"Loading..."})})};export{C as default};
