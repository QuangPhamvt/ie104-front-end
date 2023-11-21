import{j as e,R as a,d as r,I as n,l as i,B as o,w as x,Q as d}from"./index-848ebb4f.js";const h=()=>e.jsx("article",{className:"mt-4 p-4 border-b-1 border-solid border-gray-600",children:e.jsx("h2",{className:"font-semibold",children:"Secure Checkout"})}),m=()=>{const l=a(r),{data:{province:s,district:t,ward:c}}=l;return e.jsxs("section",{className:"flex flex-col space-y-8",children:[e.jsxs("h2",{className:"inline-flex space-x-2",children:[e.jsx(n,{size:28,color:"orange"}),e.jsx("p",{className:"font-semibold",children:"Delivery Address"})]}),e.jsxs("section",{className:"p-4 h-32 bg-orange-500 opacity-95 w-2/5 border-1 border-solid rounded-2xl flex flex-col justify-around ",children:[e.jsx(n,{size:28,color:"white"}),e.jsx("p",{className:"text-white font-normal",children:`${s}, ${t}, ${c}`})]})]})},u=l=>{const{qr:s}=l;return s?e.jsx("section",{className:"flex flex-col space-y-8",children:e.jsxs("h2",{className:"inline-flex space-y-4 flex-col",children:[e.jsx("p",{className:"font-semibold",children:"QR Code to payment"}),e.jsx("div",{className:"w-64 aspect-square border-1 border-solid border-black rounded overflow-hidden",children:e.jsx("img",{className:"w-full aspect-square ",src:s.qrDataURL,alt:""})})]})}):null},j=l=>{const{qr:s}=l;return e.jsxs("section",{className:"flex flex-col col-span-2 space-y-8",children:[e.jsx(m,{}),e.jsx(u,{qr:s})]})},p=l=>{const{price:s,title:t,quantity:c}=l;return e.jsxs("section",{className:"flex flex-col space-y-2 ",children:[e.jsxs("h4",{className:"inline-flex font-light",children:["from ",e.jsx("p",{className:"text-orange-500 ml-2",children:" Lunch Box"})]}),e.jsxs("div",{className:"flex flex-row justify-between items-end",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("h4",{className:"font-light",children:t}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(i,{})," ",e.jsx("p",{className:"text-gray-400",children:s})]})]}),e.jsxs("div",{className:"inline-flex items-center bg-gray-50 w-24 justify-between",children:[e.jsx("button",{className:"px-4 bg-gray-50",children:" - "}),e.jsx("p",{children:c}),e.jsx("button",{className:"px-4 bg-gray-50",children:" + "})]})]})]})},f=l=>{const{cart_items:s}=l;return e.jsx("section",{className:"flex flex-col space-y-8",children:s.map(t=>e.jsx(p,{price:t.product.price,title:t.product.title,quantity:t.quantity},t.product.product_id))})},y=l=>{const{price:s}=l;return e.jsxs("section",{className:"flex flex-col space-y-4 font-thin",children:[e.jsx("h4",{className:"font-light text-gray-400",children:"Bill details"}),e.jsxs("div",{className:"inline-flex flex-row  w-full justify-between text-gray-400",children:[e.jsx("p",{children:"Items Total"}),e.jsxs("p",{children:["$",s]})]}),e.jsxs("div",{className:"inline-flex flex-row  w-full justify-between text-gray-400",children:[e.jsx("p",{children:"Delivery Fee"}),e.jsx("p",{children:"0"})]}),e.jsxs("div",{className:"inline-flex w-full flex-row justify-between text-gray-400",children:[e.jsx("p",{children:"Tax"}),e.jsx("p",{children:"0"})]})]})},N=l=>{const{cart_id:s="",price:t=0,cart_items:c=[]}=l;return e.jsx("section",{className:"px-8",children:e.jsxs("section",{className:"bg-gray-50 col-span-1 p-4 rounded-xl space-y-10",children:[e.jsxs("section",{className:"mt-4 inline-flex w-full flex-row justify-between items-center",children:[e.jsx("h2",{style:{fontWeight:400},children:"Cart"}),e.jsx("p",{children:"item"})]}),e.jsx(f,{cart_items:c}),e.jsx(y,{price:t}),e.jsxs("section",{className:"inline-flex w-full flex-row justify-between items-center",children:[e.jsx("h2",{className:"font-normal",children:"Total"}),e.jsxs("p",{className:"text-2xl",children:["$",t]})]}),e.jsx("button",{className:"w-full py-4 bg-orange-500 rounded-2xl",children:e.jsx("p",{className:"text-xl text-white",children:"Processed to payment"})})]})})},g=()=>{const{cartId:l}=o(),{state:s,contents:t}=x(d(l));return console.log(s),console.log(t),e.jsxs("article",{className:"grid grid-cols-3 gap-x-12",children:[s==="loading"&&e.jsx("p",{children:"Loading..."}),s==="hasValue"&&e.jsxs(e.Fragment,{children:[e.jsx(j,{qr:t.data[0].seller.qr}),e.jsx(N,{price:t.data[0].cart.price,cart_id:t.data[0].cart.cart_id,cart_items:t.data[0].cart.cart_items})]})]})},w=()=>e.jsxs("main",{className:"container mx-auto mt-28 space-y-12",children:[e.jsx(h,{}),e.jsx(g,{})]});export{w as default};
