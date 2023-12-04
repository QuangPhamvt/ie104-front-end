import{j as e,R as d,d as t,m as i}from"./index-d69f0e7c.js";import{c as x}from"./index.esm-557518f7.js";import{u as n,B as p}from"./index-2787ddb5.js";import"./userApi-c40ec8c7.js";const u=()=>{const a=d(t),[l,o]=i(n),{handlePostUpdateBuyer:s}=p.usePostUpdateBuyer();return console.log(l),e.jsxs("section",{className:"w-full p-4 flex flex-col space-y-4 bg-white rounded-xl ",children:[e.jsxs("div",{className:"w-full flex justify-between flex-row",children:[e.jsx("p",{style:{fontFamily:"monospace"},className:"font-bold text-xl pl-2 pb-2 pr-4 border-b-1 border-solid border-gray-400 w-fit",children:"Setting Profile"}),e.jsx("div",{className:"p-1 flex justify-center items-center",value:l.username||"",onClick:r=>{r.preventDefault(),s()},children:e.jsx(x,{size:24})})]}),e.jsxs("div",{className:"flex flex-row space-x-4 px-2 pb-4 border-b-1 border-solid border-gray-200",children:[e.jsx("div",{className:"h-24 w-24 rounded-full bg-gray-50 border-4 border-solid border-gray-400"}),e.jsx("div",{className:"flex flex-col h-24 justify-end pb-4",children:e.jsx("input",{className:"text-xl font-bold text-black p-1 pl-4 border-1 border-solid border-gray-300 rounded",type:"text",placeholder:`${a.data.username}`,value:l.username||"",onChange:r=>{r.preventDefault(),o(c=>({...c,username:r.target.value}))}})})]})]})},f=()=>{const a=d(t),[l,o]=i(n);return e.jsxs("section",{className:"w-full p-6 flex flex-row space-x-4 ",children:[e.jsxs("div",{className:"grow bg-white rounded-xl p-4",children:[e.jsx("p",{className:"font-bold text-xl pr-4 w-fit mb-4",style:{fontFamily:"monospace"},children:"Address"}),e.jsxs("div",{className:"flex flex-col pl-4 space-y-2",children:[e.jsx("div",{className:"flex space-x-2 items-center mr-8 border-b-1 profile--banking-item",children:e.jsx("input",{type:"text",placeholder:`Province: ${a.data.province}`,className:"text-base p-1 w-full border-1 border-solid border-gray-300 italic",value:l.address.province||"",onChange:s=>{s.preventDefault(),o(r=>({...r,address:{...r.address,province:s.target.value}}))}})}),e.jsx("div",{className:"flex space-x-2 items-center mr-8 border-b-1 profile--banking-item",children:e.jsx("input",{type:"text",placeholder:`District: ${a.data.district}`,className:"text-base p-1 w-full border-1 border-solid border-gray-300 italic",value:l.address.district||"",onChange:s=>{s.preventDefault(),o(r=>({...r,address:{...r.address,district:s.target.value}}))}})}),e.jsx("div",{className:"flex space-x-2 items-center mr-8 border-b-1 profile--banking-item",children:e.jsx("input",{type:"text",placeholder:`Ward: ${a.data.ward}`,className:"text-base p-1 w-full border-1 border-solid border-gray-300 italic",value:l.address.ward||"",onChange:s=>{s.preventDefault(),o(r=>({...r,address:{...r.address,ward:s.target.value}}))}})})]})]}),e.jsx("div",{className:"grow p-4 flex flex-col rounded-xl bg-white"})]})},j=()=>e.jsxs("article",{className:"profile w-full h-full flex flex-col shadow-xl rounded-xl overflow-hidden ",children:[e.jsx("div",{className:"px-6 pt-6 overflow-hidden",children:e.jsx(u,{})}),e.jsx(f,{})]});export{j as default};
