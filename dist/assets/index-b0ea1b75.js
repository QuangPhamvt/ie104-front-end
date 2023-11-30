import{j as e,R as x,d as h,a as p,Z as u,S as c,_ as f,K as j,D as y,$ as N,E as C}from"./index-1721314b.js";import{I as d,a as g}from"./index.esm-2d5834f5.js";import{G as b}from"./index.esm-af05ec99.js";import{a as w}from"./index.esm-9b72ddf0.js";const S=()=>e.jsx("article",{className:"mt-4 p-4 border-b-1 border-solid border-gray-600",children:e.jsx("h2",{className:"font-semibold",children:"Secure Checkout"})}),_=()=>{const t=x(h),{data:{province:r,district:s,ward:l}}=t;return e.jsxs("section",{className:"flex flex-col space-y-8",children:[e.jsxs("h2",{className:"inline-flex space-x-2",children:[e.jsx(d,{size:28,color:"orange"}),e.jsx("p",{className:"font-semibold",children:"Delivery Address"})]}),e.jsxs("section",{className:"p-4 h-32 bg-orange-500 opacity-95 w-2/5 border-1 border-solid rounded-2xl flex flex-col justify-around ",children:[e.jsx(d,{size:28,color:"white"}),e.jsx("p",{className:"text-white font-normal",children:`${r}, ${s}, ${l}`})]})]})},v=t=>{const{qr:r}=t;return r?e.jsx("section",{className:"flex flex-col space-y-8",children:e.jsxs("h2",{className:"inline-flex space-y-4 flex-col",children:[e.jsx("p",{className:"font-semibold",children:"QR Code to payment"}),e.jsx("div",{className:"w-64 aspect-square border-1 border-solid border-black rounded overflow-hidden",children:e.jsx("img",{className:"w-full aspect-square ",src:r.qrDataURL,alt:""})})]})}):null},P=t=>{const{qr:r}=t;return e.jsxs("section",{className:"flex flex-col col-span-2 space-y-8",children:[e.jsx(_,{}),e.jsx(v,{qr:r})]})},A=()=>{const t=p(u);return{handlePostCreateOrder:async({seller_id:s,cart_id:l,price:o,cart_items:i=[]})=>{const n=i.map(a=>({product_id:a.product.product_id,quantity:a.quantity}));console.log({seller_id:s,cart_id:l,price:o,products:n});try{t({status:c.LOADING,message:void 0});const a=await f.postCreateOrder({seller_id:s,cart_id:l,price:o,products:n});t({status:c.HAS_VALUE,message:a.data.message})}catch(a){console.error(a.response),t({status:c.HAS_ERROR,message:a})}}}},k={usePostCreateOrder:A},D=t=>{const{price:r,title:s,quantity:l}=t;return e.jsxs("section",{className:"flex flex-col space-y-2 ",children:[e.jsxs("h4",{className:"inline-flex font-light",children:["from ",e.jsx("p",{className:"text-orange-500 ml-2",children:" Lunch Box"})]}),e.jsxs("div",{className:"flex flex-row justify-between items-end",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("h4",{className:"font-light",children:s}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(b,{})," ",e.jsx("p",{className:"text-gray-400",children:r})]})]}),e.jsxs("div",{className:"inline-flex items-center bg-gray-50 w-24 justify-between",children:[e.jsx("button",{className:"px-4 bg-gray-50",children:" - "}),e.jsx("p",{children:l}),e.jsx("button",{className:"px-4 bg-gray-50",children:" + "})]})]})]})},R=t=>{const{cart_items:r}=t;return e.jsx("section",{className:"flex flex-col space-y-8",children:r.map(s=>e.jsx(D,{price:s.product.price,title:s.product.title,quantity:s.quantity},s.product.product_id))})},O=t=>{const{price:r}=t;return e.jsxs("section",{className:"flex flex-col space-y-4 font-thin",children:[e.jsx("h4",{className:"font-light text-gray-400",children:"Bill details"}),e.jsxs("div",{className:"inline-flex flex-row  w-full justify-between text-gray-400",children:[e.jsx("p",{children:"Items Total"}),e.jsxs("p",{children:["$",r]})]}),e.jsxs("div",{className:"inline-flex flex-row  w-full justify-between text-gray-400",children:[e.jsx("p",{children:"Delivery Fee"}),e.jsx("p",{children:"0"})]}),e.jsxs("div",{className:"inline-flex w-full flex-row justify-between text-gray-400",children:[e.jsx("p",{children:"Tax"}),e.jsx("p",{children:"0"})]})]})},E=t=>{const{seller_id:r="",cart_id:s="",status:l="",price:o=0,cart_items:i=[]}=t,n=x(u),{handlePostCreateOrder:a}=k.usePostCreateOrder();return e.jsx("section",{className:"px-8",children:e.jsxs("section",{className:"bg-gray-50 col-span-1 p-4 rounded-xl space-y-10",children:[e.jsxs("section",{className:"mt-4 inline-flex w-full flex-row justify-between items-center",children:[e.jsx("h2",{style:{fontWeight:400},children:"Cart"}),e.jsx("p",{children:"item"})]}),e.jsx(R,{cart_items:i}),e.jsx(O,{price:o}),e.jsxs("section",{className:"inline-flex w-full flex-row justify-between items-center",children:[e.jsx("h2",{className:"font-normal",children:"Total"}),e.jsxs("p",{className:"text-2xl",children:["$",o]})]}),l==="prepare"&&e.jsxs("button",{className:"w-full py-4 bg-gray-100 rounded-2xl border-1 border-solid border-black",onClick:m=>{m.preventDefault(),n.status!==c.HAS_VALUE&&a({cart_id:s,price:o,cart_items:i,seller_id:r})},children:[n.status===c.LOADING&&e.jsx(g,{className:"animate-spin",size:24}),n.status===c.HAS_VALUE&&e.jsx(w,{size:24}),n.status===c.IDLE&&e.jsx("p",{className:"text-xl font-bold text-black",children:"PREPARE"})]}),l==="processing"&&e.jsx("div",{className:"w-full py-4 bg-orange-400 rounded-2xl flex justify-center items-center",children:e.jsx("p",{className:"text-xl font-bold text-white",children:"PROCESSING"})}),l==="deny"&&e.jsx("div",{className:"w-full py-4 bg-red-700 rounded-2xl flex justify-center items-center",children:e.jsx("p",{className:"text-xl font-bold text-white",children:"DENY"})}),l==="ordered"&&e.jsx("div",{className:"w-full py-4 bg-green-400 rounded-2xl flex justify-center items-center",children:e.jsx("p",{className:"text-xl font-bold text-white",children:"ORDERED"})})]})})},q=()=>{const{cartId:t}=j(),{state:r,contents:s}=y(N(t));return console.log(r),console.log(s),e.jsxs("article",{className:"grid grid-cols-3 gap-x-12",children:[r==="loading"&&e.jsx("div",{className:"w-full flex justify-center items-center col-span-3",children:e.jsx(C,{color:"#FFA33C",height:100,width:100})}),r==="hasValue"&&e.jsxs(e.Fragment,{children:[e.jsx(P,{qr:s.data[0].seller.qr}),e.jsx(E,{price:s.data[0].cart.price,cart_id:s.data[0].cart.cart_id,cart_items:s.data[0].cart.cart_items,status:s.data[0].cart.status,seller_id:s.data[0].seller.seller_id})]})]})},F=()=>e.jsxs("main",{className:"container mx-auto mt-28 space-y-12",children:[e.jsx(S,{}),e.jsx(q,{})]});export{F as default};
