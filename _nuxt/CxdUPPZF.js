import{_ as x}from"./MRVf6WyJ.js";import{o as f,c as p,b as l,w as a,a as d,d as n,G as r,H as g}from"./DdfkqNET.js";const u={class:"sticky sm:fixed top-0 sm:top-11 left-12 w-full sm:w-10 h-[78px] sm:h-[61px] flex flex-col justify-center sm:items-start sm:justify-start z-20 bg-black/50 sm:bg-transparent"},y=["src"],k={__name:"NavBar",props:{textColor:{type:String,default:"#999"},logoSrc:{type:String,default:"images/logo_gray.png"}},setup(s){var c;const i=((c=g().app)==null?void 0:c.baseURL)||"/",m=e=>{const t=e.startsWith("/")?e.substring(1):e;return`${i}${t}`};return(e,t)=>{const o=x;return f(),p("div",u,[l(o,{to:"/",class:"hover:opacity-50"},{default:a(()=>[d("img",{src:m(s.logoSrc),class:"w-[22px] sm:w-10 h-[34px] sm:h-[61px] ml-10 sm:ml-0"},null,8,y)]),_:1}),l(o,{to:"/film",class:"hidden sm:flex font-wix tracking-[4px] text-xs mt-7 hover:opacity-50",style:r({color:s.textColor})},{default:a(()=>t[0]||(t[0]=[n(" FILM ")])),_:1},8,["style"]),l(o,{to:"/lesson",class:"hidden sm:flex font-wix tracking-[4px] text-xs mt-5 hover:opacity-50",style:r({color:s.textColor})},{default:a(()=>t[1]||(t[1]=[n(" LESSON ")])),_:1},8,["style"]),l(o,{to:"/contact",class:"hidden sm:flex font-wix tracking-[4px] text-xs mt-5 hover:opacity-50",style:r({color:s.textColor})},{default:a(()=>t[2]||(t[2]=[n(" CONTACT ")])),_:1},8,["style"])])}}};export{k as _};
