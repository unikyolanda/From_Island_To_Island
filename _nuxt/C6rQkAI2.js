const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lite-yt-embed.B292MshV.css"])))=>i.map(i=>d[i]);
import{p as d,r as b,A as D,B as R,f as $,C as W,c as A,b as p,w as a,T as G,a as e,n as j,q as Y,z as H,F as J,D as M,o as L,s as K,E as Q,d as m,G as X}from"./DcNxR1Zm.js";import{_ as Z}from"./DD6QvHiD.js";import{_ as tt}from"./BAwBGg_p.js";import{_ as et}from"./BvXz8gRV.js";import{_ as st}from"./CZB7PlI0.js";const N=d("/images-webp/title.webp"),ot=d("/images-webp/first_photo5.webp"),it=d("/images-webp/first_photo4.webp"),rt=d("/images-webp/first_photo3.webp"),lt=d("/images-webp/first_photo2.webp"),pt=d("/images-webp/first_photo1.webp"),at=d("/images-webp/still_3.webp"),nt={class:"fixed inset-0 bg-[#032535] z-30 flex items-center justify-center"},xt={class:"relative overflow-x-hidden h-[270vh] w-full"},mt={class:"ripple-effect absolute flex flex-col items-center w-full h-full overflow-x-hidden"},ct={class:"title w-full min-h-screen relative flex items-center"},ft={class:"flex sm:px-[162px] justify-center relative w-full h-auto"},dt={class:"vertical-text-section hidden absolute top-[106px] right-[162px] sm:flex flex-col z-10"},ut={class:"mt-24 -translate-x-2 flex"},wt={class:"min-h-max sm:h-screnn flex third-bg justify-center items-center film z-0"},gt={class:"sm:max-w-[1200px] w-screen h-full min-h-screen flex flex-col items-center justify-center sm:flex-row sm:gap-x-[142px] sm:mb-24 filmContent pt-12 pb-[150px] sm:pb-0 px-10"},ht={class:"flex flex-col gap-y-6 sm:gap-y-14 items-center sm:items-start filmText"},bt={class:"flex flex-col"},yt={class:"flex flex-col mt-9 sm:hidden items-center"},vt={class:"min-h-max sm:h-screen w-full flex forth-bg justify-center items-center lesson -mt-[100px] z-0"},kt={class:"max-w-[1600px] flex flex-col items-center sm:flex-row my-[100px] sm:my-[224px] lessonContent"},_t={class:"flex flex-col items-center sm:items-start gap-y-6 sm:gap-y-14 px-10 sm:px-0"},Et={class:"relative max-w-[90%] max-h-[90vh]"},At={__name:"index",setup(Tt){const y=b(!1),v=b(!0),P=()=>{const w=["/images-webp/first_bg.webp","/images-webp/third_bg.webp","/images-webp/fourth_bg.webp"];return Promise.all(w.map(t=>new Promise(n=>{const r=new Image;r.src=t,r.onload=()=>n(),r.onerror=()=>n()})))},k=()=>{y.value=!y.value},{$gsap:i,$ScrollTrigger:c}=D(),V=async()=>{await M(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url),await M(()=>import("./Dkyb9mLy.js"),[],import.meta.url)},_=b(null),q=b(window.innerWidth),E=()=>{q.value=window.innerWidth},U=()=>{_.value.show()},O=()=>{_.value.hide()};return R(()=>{E(),Promise.all([P(),new Promise(h=>setTimeout(h,3e3))]).then(()=>{v.value=!1}),setTimeout(V,2e3),window.addEventListener("resize",E);const w=Array.from(document.querySelectorAll(".image-box img")),t=document.querySelectorAll(".still p"),n=document.querySelector(".stills2"),r=document.querySelectorAll(".title-text-section, .vertical-text-section"),g=document.querySelectorAll(".lessonTopic p"),S=document.querySelector(".filmText > div"),I=document.querySelector(".filmText > p"),T=document.querySelectorAll(".filmContent > div:nth-child(2), .filmContent > div:nth-child(3)");$(v,h=>{h===!1&&B()});const B=()=>{i.set([S,I,...T],{opacity:0,y:30,filter:"blur(5px)"}),i.set(r,{opacity:0,filter:"blur(15px)"}),i.to(r,{opacity:1,filter:"blur(0px)",duration:2,delay:.5,ease:"power2.out"}),w.forEach((o,s)=>{i.set(o,{opacity:0,y:5,filter:"blur(5px)",zIndex:s+1})});const h=i.timeline({delay:.1});w.forEach((o,s)=>{h.to(o,{opacity:.4,y:0,filter:"blur(0px)",duration:1.5,ease:"power1.inOut"},s*.8)}),t.forEach(o=>{i.set(o,{opacity:0,y:30,filter:"blur(5px)"})}),c.create({trigger:".still",start:"top center",end:"bottom bottom",scrub:!0,onUpdate:o=>{const s=o.progress,l=o.direction,u=t.length;t.forEach((f,x)=>{const C=l===1?x*.6:(u-1-x)*.6;l===1?i.to(f,{opacity:s*1.5,y:s*-30,filter:"blur(0px)",duration:2.5,delay:C,ease:"power2.out"}):i.to(f,{opacity:s,y:(1-s)*30,filter:"blur(5px)",duration:2.5,delay:C,ease:"power2.out"})})}}),i.set(n,{opacity:0,maskImage:"linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)"}),c.create({trigger:n,start:"top bottom",end:"bottom bottom",scrub:!0,onUpdate:o=>{const s=o.progress;i.to(n,{opacity:s<.5?0:(s-.5)*2,duration:.2,maskImage:`linear-gradient(to top, rgba(0, 0, 0, 1) ${20+s*50}%, rgba(0, 0, 0, 0) 100%)`,ease:"power1.out"})}}),i.set([".filmContent","lessonContent"],{opacity:0,y:30,filter:"blur(5px)"}),c.create({trigger:".film",start:"top bottom",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress;i.to(".film",{y:s*-100,duration:.2,ease:"power1.out"}),i.to(".filmContent",{opacity:s,y:(1-s)*30,filter:`blur(${(1-s)*5}px)`,duration:.2,ease:"power1.out"})}}),c.create({trigger:".lesson",start:"top bottom",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress;i.to(".lesson",{y:s*-100,duration:.2,ease:"power1.out"}),i.to(".lessonContent",{opacity:s,y:(1-s)*30,filter:`blur(${(1-s)*5}px)`,duration:.2,ease:"power1.out"})}}),c.create({trigger:".film",start:"top 75%",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress,l=o.direction;i.to(S,{opacity:s,y:(1-s)*30,filter:l===1?"blur(0px)":"blur(5px)",duration:1.5,delay:0,ease:"power2.out"}),i.to(I,{opacity:s,y:(1-s)*30,filter:l===1?"blur(0px)":"blur(5px)",duration:1.5,delay:l===1?.3:0,ease:"power2.out"}),T.forEach((u,f)=>{const x=l===1?(f+2)*.3:(T.length-1-f)*.3;i.to(u,{opacity:s,y:(1-s)*30,filter:l===1?"blur(0px)":"blur(5px)",duration:1.5,delay:x,ease:"power2.out"})})}}),g.forEach(o=>{i.set(o,{opacity:0,filter:"blur(5px)"})}),c.create({trigger:".lesson",start:"top 75%",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress,l=o.direction,u=g.length;g.forEach((f,x)=>{const z=x%2!==0?Math.floor(u/2)+Math.floor(x/2):Math.floor(x/2),F=l===1?z*.3:(u-1-z)*.5;i.to(f,{opacity:s,filter:l===1?"blur(0px)":"blur(5px)",duration:2.5,delay:F,ease:"power2.out"})})}}),X(()=>{window.removeEventListener("resize",E),c.getAll().forEach(o=>o.kill())})}}),(w,t)=>{const n=Z,r=tt,g=W("lite-youtube");return L(),A(J,null,[p(G,{name:"fade"},{default:a(()=>[K(e("div",nt,t[0]||(t[0]=[e("div",{class:"inner-circles-loader"},null,-1)]),512),[[Q,v.value]])]),_:1}),e("div",xt,[p(n,{ref_key:"menuRef",ref:_,onClose:O},null,512),e("div",{class:"fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20"},[e("img",{src:et,alt:"menu",class:"w-8 sm:w-10 h-8",onClick:U})]),e("div",mt,[e("div",ct,[t[8]||(t[8]=e("div",{class:"sm:hidden absolute left-10 z-10 top-[55px]"},[e("img",{src:N,alt:"title",class:"w-[140px] h-[81px]"})],-1)),e("div",ft,[t[7]||(t[7]=j('<div class="title-text-section flex flex-col absolute top-[480px] sm:top-[447px] left-[60px] sm:left-[162px]"><p class="font-shippori text-white text-[32px] sm:text-[50px] font-light tracking-[8px] sm:tracking-[12px]"> 由島至島 </p><p class="font-shippori text-white text-[32px] sm:text-[50px] font-light tracking-[8px] sm:tracking-[12px]"> 記憶與對話 </p><p class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px] mt-7"> From Island </p><p class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px]"> to Island </p><p class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px]"> Memory and Dialogue </p></div><div class="image-box mt-16 sm:mt-[100px] relative flex justify-center w-screen"><img src="'+ot+'" alt="photo5" class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px]"><img src="'+it+'" alt="photo4" class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"><img src="'+rt+'" alt="photo3" class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"><img src="'+lt+'" alt="photo2" class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"><img src="'+pt+'" alt="photo1" class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"></div>',2)),e("div",dt,[t[6]||(t[6]=e("img",{src:N,alt:"title",class:"w-[276px] h-[160px]"},null,-1)),e("div",ut,[p(r,{to:"/lesson/five",class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"},{default:a(()=>t[1]||(t[1]=[m(" 為什麼要記憶 ")])),_:1}),p(r,{to:"/lesson/four",class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"},{default:a(()=>t[2]||(t[2]=[m(" 克服過去 ")])),_:1}),p(r,{to:"/lesson/three",class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"},{default:a(()=>t[3]||(t[3]=[m(" 共犯結構 ")])),_:1}),p(r,{to:"/lesson/two",class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"},{default:a(()=>t[4]||(t[4]=[m(" 加害與被害 ")])),_:1}),p(r,{to:"/lesson/one",class:"font-shippori text-white text-xl tracking-[8px] rotateText hover:opacity-50"},{default:a(()=>t[5]||(t[5]=[m("移動與邊界")])),_:1})])])])]),t[9]||(t[9]=j('<div class="flex flex-col w-full min-h-[70vh] items-center justify-center still relative"><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-[250px] sm:mt-20"> 記憶像水一樣流動 </p><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"> 我們可以選擇如何記憶 </p><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"> 也是在重塑我們 </p><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"> 作為人的意義 </p></div><div class="flex w-full h-screen translate-y-[var(--parallax-y)] mask-leathers"><img src="'+at+'" alt="stills2" class="stills2 size-full origin-center object-cover"></div>',2))])]),e("div",wt,[e("div",gt,[e("div",ht,[t[11]||(t[11]=e("div",{class:"flex flex-col items-center sm:items-start"},[e("p",{class:"font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]"},"FILM"),e("p",{class:"font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]"},"由島至島")],-1)),t[12]||(t[12]=e("p",{class:"hidden sm:flex font-noto text-white tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"}," 台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。 ",-1)),p(r,{to:"/film",class:"hidden sm:flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"},{default:a(()=>t[10]||(t[10]=[m(" View more ")])),_:1})]),e("div",bt,[p(g,{videoid:"YkEfOmfF5FM",class:"w-full sm:w-[568px] h-[220px] sm:h-[362px] mt-10 sm:mt-24 shadow-md",playlabel:"由島至島 From Island to Island"}),t[13]||(t[13]=e("img",{src:st,alt:"forth_logo",class:"mt-6 sm:mt-20 w-[568px] h-auto"},null,-1))]),e("div",yt,[t[15]||(t[15]=e("p",{class:"font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"}," 台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。 ",-1)),p(r,{to:"/film",class:"flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 mt-8"},{default:a(()=>t[14]||(t[14]=[m(" View more ")])),_:1})])])]),e("div",vt,[e("div",kt,[t[19]||(t[19]=j('<div class="flex sm:hidden flex-col items-center sm:items-start"><p class="font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]">LESSON</p><p class="font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]">主題教案</p></div><div class="flex w-full sm:w-auto opacity-20 sm:mr-[112px] lessonTopic justify-center mt-12 sm:mt-0 mb-6 sm:mb-0 px-4 sm:px-0 overflow-x-auto"><p class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[20px] sm:tracking-[36px] rotateText mr-[14px] sm:mr-7 whitespace-nowrap"> 為什麼要記憶 </p><p class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[20px] sm:tracking-[36px] rotateText mr-[14px] sm:mr-7 mt-9 sm:mt-12 whitespace-nowrap"> 克服過去 </p><p class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[20px] sm:tracking-[36px] rotateText mr-[14px] sm:mr-7 whitespace-nowrap"> 共犯結構 </p><p class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[20px] sm:tracking-[36px] rotateText mr-[14px] sm:mr-7 mt-9 sm:mt-12 whitespace-nowrap"> 加害與被害 </p><p class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[20px] sm:tracking-[36px] rotateText whitespace-nowrap"> 移動與邊界 </p></div>',2)),e("div",_t,[t[17]||(t[17]=e("div",{class:"hidden sm:flex flex-col items-center sm:items-start"},[e("p",{class:"font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]"},"LESSON"),e("p",{class:"font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]"},"主題教案")],-1)),t[18]||(t[18]=e("p",{class:"font-noto text-white tracking-[1px] sm:tracking-[2px] w-[295px] sm:w-[440px] leading-[36px] text-[14px] sm:text-[16px] text-justify"}," 《由島至島》教育推廣規劃，從本片中節選出５個主題的片段，發展搭配教案，免費開放老師申請作為課程教授素材。五大主題為：移動與邊界、加害與被害、共犯結構－日本擴張行動、克服過去、為什麼要記憶，各有台灣、日本及馬來西亞教案可下載。 ",-1)),p(r,{to:"/lesson",class:"flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"},{default:a(()=>t[16]||(t[16]=[m(" View more ")])),_:1})])])]),e("div",{class:"w-full h-[190px] sm:h-[146px] bg-black -mt-[100px] flex sm:px-20 items-center justify-center z-10"},[e("div",{class:"max-w-[1440px] w-full flex flex-col sm:flex-row items-center justify-between"},[e("div",{class:"flex gap-x-16 sm:gap-x-[77px]"},[t[20]||(t[20]=e("a",{href:"https://www.facebook.com/fromislandtoisland",target:"_blank",class:"font-shippori text-[18px] text-white/80 tracking-[10px] hover:text-white"},"由島至島",-1)),e("p",{onClick:k,class:"font-shippori text-[18px] text-white/80 tracking-[10px] cursor-pointer hover:text-white"}," 最新場次 ")]),t[21]||(t[21]=e("div",{class:"flex flex-col-reverse items-center sm:flex-row gap-x-[30px]"},[e("a",{href:"https://siddharam.com/",target:"_blank",class:"font-noto text-[12px] text-white/80 tracking-[1px] mt-1 sm:mt-0"}," 網站製作｜西打藍好內容有限公司 "),e("p",{class:"font-wix text-[13px] text-white/80 mt-8 sm:mt-0"}," Copyright © HUMMINGBIRD Production ")],-1))])]),y.value?(L(),A("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",onClick:k},[e("div",Et,[t[22]||(t[22]=e("img",{src:"https://res.cloudinary.com/daznz2uvo/image/upload/v1740982012/3%E6%9C%88%E7%AC%AC%E4%B8%80%E6%B3%A2%E5%9C%96%E6%96%87_epboly.png",alt:"最新場次",class:"max-w-full max-h-[90vh] object-contain"},null,-1)),e("button",{onClick:Y(k,["stop"]),class:"absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"}," ✕ ")])])):H("",!0)],64)}}};export{At as default};
