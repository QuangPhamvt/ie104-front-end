import{j as e,e as p,X as b,a as h,c as f,R as j,K as y}from"./index-d69f0e7c.js";import{d as g}from"./dayjs.min-1d2ee850.js";import{g as E,d as u,M as m}from"./hook-6442ffa0.js";import{S as _}from"./index-8af381f0.js";const L=()=>{const{t:s}=p();return e.jsx("section",{className:"flex flex-row pb-2 border-b-1 border-solid border-gray-500",children:e.jsx("div",{className:"text-2xl font-bold",children:s("SELLER_VIEW.LIST_PRODUCT.LIST_PRODUCT")})})},w=()=>{const{t:s}=p(),{state:n,contents:i}=b(E);return console.log(n),console.log(i),e.jsxs("section",{children:[e.jsxs("div",{className:"flex flex-row w-full font-bold border-b-1 pb-4 border-solid border-gray-300",children:[e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:s("SELLER_VIEW.LIST_PRODUCT.ORDER_ID")}),e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:s("SELLER_VIEW.LIST_PRODUCT.CREATE_AT")}),e.jsx("div",{className:"w-1/6 flex justify-center items-center",children:s("SELLER_VIEW.LIST_PRODUCT.BUYER")}),e.jsx("div",{className:"w-1/6 flex justify-center items-center",children:s("SELLER_VIEW.LIST_PRODUCT.STATUS")})]}),n==="loading"&&e.jsx("p",{children:"Loading..."}),n==="hasValue"&&e.jsx(_,{style:{maxHeight:480},children:i.data.map(o=>e.jsx(D,{order_id:o.order_id,order_items:o.order_items,price:o.price,status:o.status,buyer:o.buyer},o.order_id))})]})},D=s=>{const{order_id:n,price:i,status:o,buyer:l="",order_items:c}=s,t=h(u),r=()=>{let d=`${c[0].title}: ${c[0].quantity}`;for(let a in c)if(console.log(a),a!=0){const x=c[a];d=d+`, ${x.title}: ${x.quantity}`}t(a=>({...a,open:!0,data:{order_id:n,buyer:l.username,status:o,address:`${l.province}, ${l.district}, ${l.ward}`,products:d,price:i}}))};return e.jsxs("div",{onClick:d=>{d.preventDefault(),r()},className:"product--list--item flex flex-row w-full hover-cursor hover-box  py-6 border-solid border-1 rounded border-black mt-4 shadow ",children:[e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:n}),e.jsx("div",{className:"w-2/5 flex justify-center items-center",children:g("2023-11-21T15:12:15.000Z").format("HH:mm:ss - DD/MM/YYYY")}),e.jsx("div",{className:"w-1/6 flex justify-center items-center",children:l.username}),e.jsxs("div",{className:"w-1/6 flex justify-center items-center",children:[o==="ordered"&&e.jsx("p",{style:{color:"#9ADE7B"},className:"text-base font-bold",children:"ORDERED"}),o==="deny"&&e.jsx("p",{style:{color:"#DF2E38"},className:"text-base font-bold",children:"DENY"}),o==="processing"&&e.jsx("p",{style:{color:"#A9A9A9"},className:"text-base font-bold",children:"Processing"})]})]})},R=()=>{const s=f.useRef(null),n=j(u),i=y(u),{handleDenyOrder:o}=m.useDenyOrder(),{handleAcceptOrder:l}=m.useAcceptOrder();f.useEffect(()=>{var r;n.open&&!((r=s.current)!=null&&r.open)?s.current.showModal():!n.open&&s.current.open&&s.current.close()},[n.open]);const c=()=>{i()},{data:t}=n;return e.jsx("dialog",{ref:s,className:"overflow-hidden rounded-2xl ",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},onClick:r=>{r.preventDefault();const d=r.currentTarget.getBoundingClientRect();(r.clientX<d.left||r.clientX>d.right||r.clientY<d.top||r.clientY>d.bottom)&&c()},children:t?e.jsxs("section",{className:"w-116 h-72  p-4 flex flex-col justify-between",children:[e.jsx("div",{className:"text-2xl flex justify-center items-center border-b-1 border-gray-200 pb-2",children:"DETAIL"}),e.jsxs("section",{className:"h-full flex flex-col space-y-2 pt-4 border-b-1 border-solid border-gray-300 px-4",children:[e.jsxs("div",{children:["Buyer: ",t.buyer]}),e.jsxs("div",{children:["Address: ",t.address]}),e.jsxs("div",{children:["Product: ",t.products]}),e.jsxs("div",{children:["Price: ",t.price||""]})]}),e.jsxs("div",{className:"flex flex-row justify-around space-x-2 mt-4",children:[e.jsx("button",{onClick:r=>{r.preventDefault(),c()},className:"grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base bg-white",children:"Close"}),e.jsx("button",{onClick:r=>{r.preventDefault(),o(t.order_id)},className:"grow p-2 border-1 border-solid rounded border-gray-400 font-bold text-base",style:{color:`${t.status==="deny"?"white":"#DF2E38"}`,backgroundColor:`${t.status==="deny"?"#DF2E38":"white"}`},children:"Deny"}),e.jsx("button",{onClick:r=>{r.preventDefault(),l(t.order_id)},className:"grow p-2 border-1 border-solid border-gray-400 rounded font-bold text-base",style:{color:`${t.status==="ordered"?"white":"#9ADE7B"}`,backgroundColor:`${t.status==="ordered"?"#54B435":"white"}`},children:t.status==="ordered"?"Ordered":"Accept"})]})]}):e.jsx("p",{children:"Loading..."})})},T=()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsxs("article",{className:"mt-12  space-y-6",children:[e.jsx(L,{}),e.jsx(w,{})]})]});export{T as default};