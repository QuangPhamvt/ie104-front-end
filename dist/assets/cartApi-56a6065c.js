import{$ as r,a0 as a}from"./index-56934ed0.js";const n={getCart:()=>{const t=a.GET_CART;return r.get(t)},createCart:t=>{const{price:e,cart_items:s}=t,c=a.CREATE_CART;return r.post(c,{price:e,cart_items:s})}};export{n as c};