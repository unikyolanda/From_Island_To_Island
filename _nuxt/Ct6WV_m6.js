import{_ as A}from"./DSrbIcEu.js";import{_ as U}from"./DV0K7ZXU.js";import{p as x,u as q,r as E,m as F,q as N,c as V,a as e,b as a,n as w,w as f,F as z,o as L,d}from"./DNDAJOL4.js";import{_ as W}from"./DtGxSQw1.js";import{_ as $}from"./qQGawaWq.js";const T=x("/images/title.png"),O=x("/images/first_photo5.png"),R=x("/images/first_photo4.png"),B=x("/images/first_photo3.png"),D=x("/images/first_photo2.png"),H=x("/images/first_photo1.png"),Y=x("/images/second_stills2.jpg"),G={class:"relative overflow-x-hidden h-[300vh] w-full"},P={class:"ripple-effect absolute flex flex-col items-center w-full h-full overflow-x-hidden"},Q={class:"title w-full min-h-screen relative flex items-center"},J={class:"flex sm:px-[162px] justify-center relative w-full h-auto"},K={class:"vertical-text-section hidden absolute top-[106px] right-[162px] sm:flex flex-col z-10"},X={class:"mt-24 -translate-x-2 flex"},Z={class:"h-auto sm:h-[100vh] flex third-bg justify-center items-center film"},tt={class:"sm:max-w-[1200px] w-screen h-full min-h-screen flex flex-col items-center justify-center sm:flex-row sm:gap-x-[142px] sm:mb-24 filmContent px-10"},et={class:"flex flex-col gap-y-6 sm:gap-y-14 items-center sm:items-start filmText"},st={class:"flex flex-col mt-9 sm:hidden items-center"},ot={class:"h-screen flex forth-bg justify-center items-center lesson -mt-[100px]"},it={class:"max-w-[1600px] flex my-[224px] lessonContent"},rt={class:"flex flex-col items-center sm:items-start gap-y-6 sm:gap-y-14 px-10 sm:px-0"},ct={__name:"index",setup(lt){const{$gsap:i,$ScrollTrigger:n}=q(),h=E(null),C=E(window.innerWidth),y=()=>{C.value=window.innerWidth},j=()=>{h.value.show()},I=()=>{h.value.hide()};return F(()=>{y(),window.addEventListener("resize",y);const v=Array.from(document.querySelectorAll(".image-box img")),t=document.querySelectorAll(".still p"),u=document.querySelector(".stills2"),r=document.querySelectorAll(".title-text-section, .vertical-text-section"),b=document.querySelectorAll(".lessonTopic p"),k=document.querySelectorAll(".filmContent > .filmText, .filmContent > div:nth-child(2), .filmContent > div:nth-child(3)");i.set(k,{opacity:0,y:30,filter:"blur(5px)"}),i.set(r,{opacity:0,filter:"blur(15px)"}),i.to(r,{opacity:1,filter:"blur(0px)",duration:2,delay:.5,ease:"power2.out"}),v.forEach((o,s)=>{i.set(o,{opacity:0,y:5,filter:"blur(5px)",zIndex:s+1})});const S=i.timeline({delay:.1});v.forEach((o,s)=>{S.to(o,{opacity:.4,y:0,filter:"blur(0px)",duration:1.5,ease:"power1.inOut"},s*.8)}),t.forEach(o=>{i.set(o,{opacity:0,y:30,filter:"blur(5px)"})}),n.create({trigger:".still",start:"top center",end:"bottom bottom",scrub:!0,onUpdate:o=>{const s=o.progress,p=o.direction,m=t.length;t.forEach((c,l)=>{const g=p===1?l*1:(m-1-l)*1;p===1?i.to(c,{opacity:s*1.5,y:s*-30,filter:"blur(0px)",duration:2.5,delay:g,ease:"power2.out"}):i.to(c,{opacity:s,y:(1-s)*30,filter:"blur(5px)",duration:2.5,delay:g,ease:"power2.out"})})}}),i.set(u,{opacity:0,maskImage:"linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)"}),n.create({trigger:u,start:"top bottom",end:"bottom bottom",scrub:!0,onUpdate:o=>{const s=o.progress;i.to(u,{opacity:s<.5?0:(s-.5)*2,duration:.2,maskImage:`linear-gradient(to top, rgba(0, 0, 0, 1) ${20+s*50}%, rgba(0, 0, 0, 0) 100%)`,ease:"power1.out"})}}),i.set([".filmContent","lessonContent"],{opacity:0,y:30,filter:"blur(5px)"}),n.create({trigger:".film",start:"top bottom",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress;i.to(".film",{y:s*-100,duration:.2,ease:"power1.out"}),i.to(".filmContent",{opacity:s,y:(1-s)*30,filter:`blur(${(1-s)*5}px)`,duration:.2,ease:"power1.out"})}}),n.create({trigger:".lesson",start:"top bottom",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress;i.to(".lesson",{y:s*-100,duration:.2,ease:"power1.out"}),i.to(".lessonContent",{opacity:s,y:(1-s)*30,filter:`blur(${(1-s)*5}px)`,duration:.2,ease:"power1.out"})}}),n.create({trigger:".film",start:"top 75%",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress,p=o.direction,m=k.length;k.forEach((c,l)=>{const g=p===1?l*.3:(m-1-l)*.3;i.to(c,{opacity:s,y:(1-s)*30,filter:p===1?"blur(0px)":"blur(5px)",duration:1.5,delay:g,ease:"power2.out"})})}}),b.forEach(o=>{i.set(o,{opacity:0,filter:"blur(5px)"})}),n.create({trigger:".lesson",start:"top 75%",end:"top 25%",scrub:!0,onUpdate:o=>{const s=o.progress,p=o.direction,m=b.length;b.forEach((c,l)=>{const _=l%2!==0?Math.floor(m/2)+Math.floor(l/2):Math.floor(l/2),M=p===1?_*.5:(m-1-_)*.5;i.to(c,{opacity:s,filter:p===1?"blur(0px)":"blur(5px)",duration:2.5,delay:M,ease:"power2.out"})})}}),N(()=>{window.removeEventListener("resize",y),n.getAll().forEach(o=>o.kill())})}),(v,t)=>{const u=A,r=U;return L(),V(z,null,[e("div",G,[a(u,{ref_key:"menuRef",ref:h,onClose:I},null,512),e("div",P,[e("div",Q,[t[7]||(t[7]=e("div",{class:"sm:hidden absolute left-10 z-10 top-[55px]"},[e("img",{src:T,alt:"title",class:"w-[140px] h-[81px]"})],-1)),e("div",{class:"absolute right-10 sm:right-12 top-10 cursor-pointer z-10"},[e("img",{src:W,alt:"menu",class:"w-10 h-8",onClick:j})]),e("div",J,[t[6]||(t[6]=w('<div class="title-text-section flex flex-col absolute top-[480px] sm:top-[447px] left-[60px] sm:left-[162px]"><p class="font-shippori text-white text-[32px] sm:text-[50px] font-light tracking-[8px] sm:tracking-[12px]"> 由島至島 </p><p class="font-shippori text-white text-[32px] sm:text-[50px] font-light tracking-[8px] sm:tracking-[12px]"> 記憶與對話 </p><p class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px] mt-7"> From Island </p><p class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px]"> to Island </p><p class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px]"> Memory and Dialogue </p></div><div class="image-box mt-16 sm:mt-[100px] relative flex justify-center w-screen"><img src="'+O+'" alt="photo5" class="opacity-40 h-[437px] min-w-[514.12px] sm:h-[709px] sm:min-w-[834px]"><img src="'+R+'" alt="photo4" class="opacity-40 h-[437px] min-w-[514.12px] sm:h-[709px] sm:min-w-[834px] absolute top-0"><img src="'+B+'" alt="photo3" class="opacity-40 h-[437px] min-w-[514.12px] sm:h-[709px] sm:min-w-[834px] absolute top-0"><img src="'+D+'" alt="photo2" class="opacity-40 h-[437px] min-w-[514.12px] sm:h-[709px] sm:min-w-[834px] absolute top-0"><img src="'+H+'" alt="photo1" class="opacity-40 h-[437px] min-w-[514.12px] sm:h-[709px] sm:min-w-[834px] absolute top-0"></div>',2)),e("div",K,[t[5]||(t[5]=e("img",{src:T,alt:"title",class:"w-[276px] h-[160px]"},null,-1)),e("div",X,[t[3]||(t[3]=e("p",{class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8"}," 為什麼要記憶 ",-1)),t[4]||(t[4]=e("p",{class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8"}," 克服過去 ",-1)),a(r,{to:"/lesson/three",class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8"},{default:f(()=>t[0]||(t[0]=[d(" 共犯結構 ")])),_:1}),a(r,{to:"/lesson/two",class:"font-shippori text-white text-xl tracking-[8px] rotateText mr-8"},{default:f(()=>t[1]||(t[1]=[d(" 加害與被害 ")])),_:1}),a(r,{to:"/lesson/one",class:"font-shippori text-white text-xl tracking-[8px] rotateText"},{default:f(()=>t[2]||(t[2]=[d("移動與邊界")])),_:1})])])])]),t[8]||(t[8]=w('<div class="flex flex-col w-full min-h-screen items-center justify-center still relative"><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-[220px] sm:mt-12"> 記憶像水一樣流動 </p><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"> 我們可以選擇如何記憶 </p><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"> 也是在重塑我們 </p><p class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"> 作為人的意義 </p></div><div class="flex w-full h-screen translate-y-[var(--parallax-y)] mask-leathers"><img src="'+Y+'" alt="stills2" class="stills2 size-full origin-center object-cover"></div>',2))])]),e("div",Z,[e("div",tt,[e("div",et,[t[10]||(t[10]=e("div",{class:"flex flex-col items-center sm:items-start"},[e("p",{class:"font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]"},"FILM"),e("p",{class:"font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]"},"由島至島")],-1)),t[11]||(t[11]=e("p",{class:"hidden sm:flex font-noto text-white tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"}," 台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。 ",-1)),a(r,{to:"/film",class:"hidden sm:flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"},{default:f(()=>t[9]||(t[9]=[d(" View more ")])),_:1})]),t[14]||(t[14]=e("div",{class:"flex flex-col"},[e("iframe",{src:"https://www.youtube.com/embed/YkEfOmfF5FM?si=y8Clq6RWv6QLCHfb",class:"w-full sm:w-[568px] h-[220px] sm:h-[362px] mt-10 sm:mt-24 shadow-md",title:"由島至島 From Island to Island",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),e("img",{src:$,alt:"forth_logo",class:"mt-6 sm:mt-20"})],-1)),e("div",st,[t[13]||(t[13]=e("p",{class:"font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"}," 台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。 ",-1)),a(r,{to:"/film",class:"flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 mt-8"},{default:f(()=>t[12]||(t[12]=[d(" View more ")])),_:1})])])]),e("div",ot,[e("div",it,[t[18]||(t[18]=w('<div class="hidden sm:flex opacity-15 mr-[112px] lessonTopic"><p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7"> 為什麼要記憶 </p><p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7 mt-12"> 克服過去 </p><p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7">共犯結構</p><p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7 mt-12"> 加害與被害 </p><p class="font-shippori text-white text-[59px] tracking-[36px] rotateText">移動與邊界</p></div>',1)),e("div",rt,[t[16]||(t[16]=e("div",{class:"flex flex-col items-center sm:items-start"},[e("p",{class:"font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]"},"LESSON"),e("p",{class:"font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]"},"主題教案")],-1)),t[17]||(t[17]=e("p",{class:"font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[440px] leading-[36px] text-[14px] sm:text-[16px]"}," 《由島至島》教育推廣規劃，從本片中節選出５個主題的片段，發展搭配教案，免費開放老師申請作為課程教授素材。五大主題為：移動與邊界、加害與被害、共犯結構－日本擴張行動、克服過去、為什麼要記憶，各有台灣、日本及馬來西亞教案可下載。 ",-1)),a(r,{to:"/lesson",class:"flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"},{default:f(()=>t[15]||(t[15]=[d(" View more ")])),_:1})])])]),t[19]||(t[19]=w('<div class="w-full bg-white h-[160px] sm:h-[200px] -mt-[100px] flex flex-col sm:flex-row items-center p-10 sm:px-[162px] justify-between"><div class="flex flex-row sm:flex-col justify-between items-end sm:items-start w-full sm:w-auto"><div class="text-[#aaa] text-[16px] sm:text-xl font-noto tracking-[6px] sm:tracking-[8px]"> 蜂鳥影像 </div><div class="text-[#aaa] text-[14px] sm:text-[17px] font-wix sm:mt-4"> Facebook ｜ Youtube ｜ Vimeo </div></div><div class="flex flex-col-reverse sm:flex-col items-start sm:items-end w-full sm:w-auto"><div class="text-[#aaa] text-xs sm:text-sm font-noto tracking-[1px] mt-2 sm:mt-0"> 隱私權政策 </div><div class="text-[#aaa] text-xs sm:text-[15px] font-wix sm:mt-2 mt-0"> Copyright © HUMMINGBIRD Production </div></div></div>',1))],64)}}};export{ct as default};
