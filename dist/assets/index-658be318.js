import{a as i,w as a,c,j as e,R as o,d as x,n as d,C as m,x as u}from"./index-81d40cd2.js";const S=()=>{const s=i(a);return{handleChangeStatusContentSellerView:c.useCallback(t=>{s(t),console.log(t)},[s])}},C={useChangeStatusContentSellerView:S},g=[{title:"Manage My Account",items:["My Profile","Change Profile"]},{title:"Manage Product List",items:["Create Product","List Product"]},{title:"Detail Order",items:["Delivered","Processing","Notification"]}],h=s=>{const{items:n=[]}=s,{handleChangeStatusContentSellerView:t}=C.useChangeStatusContentSellerView(),r=o(a);return e.jsx("ul",{className:"px-8 space-y-2",children:n.map(l=>e.jsx("p",{className:`${r===l?"text-orange-400":"text-gray-400"} cursor-pointer`,onClick:()=>t(l),children:l},l))})},j=s=>{const{items:n=[]}=s;return e.jsx(e.Fragment,{children:n.map(t=>e.jsxs("section",{className:"flex flex-col space-y-4 mb-6",children:[e.jsx("p",{className:"text-black text-xl",children:t.title}),e.jsx(h,{items:t.items},t.title)]},t.title))})},p=()=>e.jsx("section",{className:"w-full col-span-2 px-4",children:e.jsx("article",{className:"",children:e.jsx(j,{items:g})})}),L=()=>{const{data:{isLoggedIn:s,role:n}}=o(x);return e.jsx(e.Fragment,{children:s&&n===d.SELLER?e.jsxs("main",{className:"container mx-auto mt-28 grid grid-cols-7 justify-items-center",children:[e.jsx(p,{}),e.jsx(m,{})]}):e.jsx(u,{to:"/"})})};export{L as default};