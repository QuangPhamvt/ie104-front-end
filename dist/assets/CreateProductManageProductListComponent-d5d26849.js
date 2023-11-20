import{Q as f,e as N,S as d,v as P,p as C,T as F,a as u,R as n,f as b,J as T,c as h,j as e,U as v}from"./index-f08fe699.js";import{a as H}from"./index.esm-7a6ce2d2.js";import{G as R}from"./index.esm-727d8bbf.js";const l={HO_CHI_MINH:"Thành phố Hồ Chí Minh",HA_NOI:"Thủ đô Hà Nội",HUE:"Cố đô Huế",DA_NANG:"Thành phố Đà Đẵng",BEN_TRE:"Tỉnh Bến Tre",BINH_DINH:"Tỉnh Bình Định",HAI_PHONG:"Thành phố Hải Phòng",NHA_TRANG:"Thành phố Nha Trang",VUNG_TAU:"Thành phố Vũng Tàu"},I=[l.HO_CHI_MINH,l.HA_NOI,l.HUE,l.DA_NANG,l.BEN_TRE,l.BINH_DINH,l.HAI_PHONG,l.NHA_TRANG,l.VUNG_TAU],c=f({key:"createProductFormAtom",default:{state:N.IDLE,data:{title:void 0,description:void 0,location:void 0,price:void 0,picture:void 0,categories_id:void 0}}}),y=f({key:"categoriesAtom",default:{state:N.IDLE,message:void 0,data:[]}}),w=f({key:"openDialogCreateProductAtom",default:!1}),_=f({key:"stateCreateProductAtom",default:{status:d.IDLE,message:void 0}}),S=P({key:"getCategoriesSelector",get:async()=>{const o=await C.getCategories();return console.log(o.data),o.data}}),x=F({key:"createProductFormSelector",get:o=>({get:t})=>t(c).data[o],set:o=>({set:t},s)=>{t(c,r=>({...r,state:N.HAS_VALUE,data:{...r.data,[o]:s}}))}}),E=()=>{const o=u(y),t=n(S);return{handleSetCategories:()=>{o(r=>({...r,message:t.message,data:t.data}))}}},L=()=>{const{data:{title:o,description:t,price:s,location:r,picture:a,categories_id:m}}=n(c),[g,i]=b(_),A=T(c);return{handleSubmitCreateProductForm:h.useCallback(async()=>{if(!o||!t||!s||!r||!a||!m)i({status:d.HAS_ERROR,message:"SomeThing wrong in form"});else try{i({status:d.LOADING,message:void 0});const p=await C.createProduct({title:o,description:t,price:s,location:r,picture:a,categories_id:m});i({status:d.HAS_VALUE,message:p.data.message}),A()}catch(p){console.log(p.data),i({status:d.HAS_ERROR,message:p.data.message})}},[m,t,r,a,s,i,g,o])}},j={useGetCategories:E,useCreateProduct:L},O=()=>{const o=u(x("title")),{data:{title:t}}=n(c);return e.jsxs("section",{className:"flex flex-col w-1/2 space-y-2 ",children:[e.jsx("h4",{className:"text-lg font-light ml-2",children:"Title of Production"}),e.jsx("input",{type:"text",value:t||"",placeholder:"Enter to title of production",onChange:s=>o(s.target.value),className:"w-5/6 py-2 bg-gray-50 border-1 border-solid border-gray-300 rounded-xl px-4"})]})},D=()=>{const{data:o}=n(y),t=u(x("categories_id"));return e.jsxs("section",{className:"flex flex-col w-1/2 mt-0 space-x-4 justify-start  items-start space-y-2",children:[e.jsx("h4",{className:"text-lg font-light ml-6",children:"Categories"}),e.jsxs("select",{onChange:s=>t(s.target.value),className:" p-2 border-1 w-3/5 border-solid border-gray-300 rounded-xl ",children:[e.jsx("option",{value:"",children:"choose categories"}),o.map(s=>e.jsx("option",{value:s.id,children:s.name},s))]})]})},U=()=>{const o=u(x("description")),{data:{description:t}}=n(c);return e.jsxs("section",{className:"w-full flex flex-col space-y-2",children:[e.jsx("h4",{className:"text-lg font-light ml-2",children:"Description"}),e.jsx("textarea",{type:"text",rows:8,value:t||"",onChange:s=>o(s.target.value),placeholder:"Enter to description of production",className:"w-4/5 py-2 bg-white border-1 border-solid border-gray-400 rounded-xl px-4 font-mono"})]})},G=()=>{const o=u(x("picture")),{data:{picture:t}}=n(c),s=r=>{const a=new FileReader;a.readAsDataURL(r.target.files[0]),a.onload=()=>{o(()=>a.result)}};return e.jsxs("section",{className:"flex flex-wrap flex-row items-center space-x-4",children:[e.jsx("h4",{className:"text-lg font-light ml-2",children:"Upload Image"}),e.jsx("label",{htmlFor:"upLoadImageProduction",children:e.jsx(v,{})}),e.jsx("div",{className:"hidden",children:e.jsx("input",{id:"upLoadImageProduction",className:"m-0 ",type:"file",name:"upLoadImageProduction",onChange:s})}),e.jsx("div",{className:"w-full px-8 mt-4  max-h-100 bg-gray-400 flex justify-center items-center border-2 border-solid border-gray-500",children:e.jsx("img",{className:"w-full h-100 object-cover",src:t,alt:"Not have file"})})]})},k=()=>{const o=u(x("location"));return e.jsxs("section",{className:"flex flex-wrap flex-row space-x-2 items-center w-2/5 ",children:[e.jsx("h4",{className:"text-lg font-light",children:"Location Shop"}),e.jsxs("select",{className:"w-1/5 p-2 border-2 border-solid border-gray-300 rounded-xl grow",onChange:t=>o(t.target.value),children:[e.jsx("option",{value:"",children:"choose city"}),I.map(t=>e.jsx("option",{value:t,children:t},t))]})]})},M=()=>{const o=u(x("price")),{data:{price:t}}=n(c);return e.jsxs("section",{className:"flex flex-wrap flex-row space-x-2 items-center w-2/5 mx-12",children:[e.jsx("h4",{className:"text-lg font-light",children:"Money"}),e.jsx("input",{placeholder:"Spend",type:"text",value:t||"",onChange:s=>o(s.target.value),className:"grow px-4 py-2 border-solid border-1 border-gray-300 rounded-2xl bg-gray-50"})]})},B=o=>{const{open:t=!1}=o,s=h.useRef(null),{status:r,message:a}=n(_),m=u(w);return h.useLayoutEffect(()=>{var g,i;t&&!((g=s.current)!=null&&g.open)?s.current.showModal():!t&&((i=s.current)!=null&&i.open)&&s.current.close()},[t]),e.jsx("dialog",{ref:s,className:"absolute bg-white overflow-hidden rounded-2xl ",style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:e.jsxs("article",{className:"w-116 h-64 flex flex-col justify-between items-center p-4",children:[e.jsxs("section",{className:"grow w-full flex justify-center items-center",children:[r===d.LOADING&&e.jsx(H,{size:60,className:"animate-spin",color:"orange"}),r===d.HAS_VALUE&&e.jsx(R,{size:60,color:"#557C55"}),r===d.HAS_ERROR&&e.jsx("p",{style:{color:"red"},children:a})]}),e.jsx("section",{className:"px-4 py-2 flex justify-center items-center w-full",children:e.jsx("button",{onClick:()=>m(!1),className:"bg-orange-400 w-full py-2",children:"OK"})})]})})},K=()=>{const{handleSetCategories:o}=j.useGetCategories(),{handleSubmitCreateProductForm:t}=j.useCreateProduct(),{data:s}=n(c),[r,a]=b(w);return h.useEffect(()=>{o()},[]),console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(B,{open:r}),e.jsxs("article",{className:"w-full p-8 flex flex-col space-y-6 shadow-lg mt-8",children:[e.jsx("section",{className:"",children:e.jsx("h3",{className:"font-base text-orange-400 border-b-1 py-2 border-solid border-gray-300 mb-4",children:"Create Your Product"})}),e.jsxs("section",{className:"w-full flex flex-row  justify-center items-center",children:[e.jsx(O,{}),e.jsx("div",{className:"border-l-1 border-solid border-gray-300 h-24"}),e.jsx(D,{})]}),e.jsx("section",{className:"w-full flex flex-col space-y-2"}),e.jsx(U,{}),e.jsx(G,{}),e.jsxs("section",{className:"flex flex-row w-full space-x-12 justify-between",children:[e.jsx(k,{}),e.jsx(M,{})]}),e.jsxs("section",{className:"flex flex-row space-x-8 pt-4",children:[e.jsx("button",{className:"grow py-2 text-lg font-bold bg-white border-1 border-solid border-gray-300",children:"Cancel"}),e.jsx("button",{onClick:m=>{m.preventDefault(),t(),a(!0)},className:"grow py-2 text-lg text-white bg-orange-400 font-bold",children:"Save Production"})]})]})]})};export{K as default};
