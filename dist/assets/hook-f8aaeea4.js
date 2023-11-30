import{x as A,p as S,V as g,a5 as P,e as m,a6 as d,S as a,a as l,R as O,l as L,K as p,c as v}from"./index-f70282ab.js";import"./dayjs.min-8d96ba77.js";const E=A({key:"getCategoriesSellerViewSelector",get:async()=>{const e=await S.getCategories();return console.log(e.data),e.data}}),w=A({key:"getOrderListSelector",get:async()=>{try{const e=await g.getOrderList();return{message:e.data.message,data:e.data.data}}catch(e){return{message:e.response.data.message,data:[]}}}}),M=P({key:"createProductFormSelector",get:e=>({get:t})=>t(i).data[e],set:e=>({set:t},o)=>{t(i,r=>({...r,state:m.HAS_VALUE,data:{...r.data,[e]:o}}))}});const i=d({key:"createProductFormAtom",default:{state:m.IDLE,data:{title:void 0,description:void 0,location:void 0,price:void 0,picture:void 0,categories_id:void 0}}}),h=d({key:"categoriesAtom",default:{state:m.IDLE,message:void 0,data:[]}}),T=d({key:"openDialogCreateProductAtom",default:!1}),D=d({key:"stateCreateProductAtom",default:{status:a.IDLE,message:void 0}}),_=d({key:"statusUpdateOrderAtom",default:{status:a.IDLE,message:void 0}}),y=d({key:"openModalStatusOrder",default:{status:a.IDLE,open:!1,message:void 0,data:void 0}}),f=()=>{const e=l(h),t=O(E);return{handleSetCategories:()=>{e(r=>({...r,message:t.message,data:t.data}))}}},k=()=>{const{data:{title:e,description:t,price:o,location:r,picture:s,categories_id:u}}=O(i),[R,c]=L(D),C=p(i);return{handleSubmitCreateProductForm:v.useCallback(async()=>{if(!e||!t||!o||!r||!s||!u)c({status:a.HAS_ERROR,message:"SomeThing wrong in form"});else try{c({status:a.LOADING,message:void 0});const n=await S.createProduct({title:e,description:t,price:o,location:r,picture:s,categories_id:u});c({status:a.HAS_VALUE,message:n.data.message}),C()}catch(n){console.log(n.data),c({status:a.HAS_ERROR,message:n.data.message})}},[u,t,r,s,o,c,R,e])}},x=()=>{const e=l(_),t=p(y);return{handleDenyOrder:async r=>{try{e({status:a.LOADING,message:void 0});const s=await g.updateOriginOrder({order_id:r,status:"deny"});e({status:a.HAS_VALUE,message:s.data.message}),t()}catch(s){console.error(s.response.data.message),e({status:a.HAS_ERROR,message:s.response.data.message})}}}},I=()=>{const e=l(_),t=p(y);return{handleAcceptOrder:async r=>{try{e({status:a.LOADING,message:void 0});const s=await g.updateOriginOrder({order_id:r,status:"ordered"});e({status:a.HAS_VALUE,message:s.data.message}),t()}catch(s){console.error(s.response.data.message),e({status:a.HAS_ERROR,message:s.response.data.message})}}}},V={useGetCategories:f,useCreateProduct:k,useDenyOrder:x,useAcceptOrder:I};export{V as M,i as a,h as b,M as c,y as d,w as g,T as o,D as s};
