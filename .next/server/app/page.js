(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9209:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>h,routeModule:()=>m,tree:()=>c});var i=r(3137),n=r(4647),a=r(4183),s=r.n(a),o=r(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=i.AppPageRouteModule,c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,210)),"/workspaces/hacktober2023/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9270)),"/workspaces/hacktober2023/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],h=["/workspaces/hacktober2023/app/page.js"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5294:(e,t,r)=>{Promise.resolve().then(r.bind(r,3919)),Promise.resolve().then(r.bind(r,3385))},3919:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(80),n=r(9885),a=r(930),s=r(7935);let o=({isOpen:e,headerText:t="Close",toggle:r,children:n})=>i.jsx("div",{className:`fixed left-0 top-0 z-50 w-full h-screen overflow-x-auto flex-col justify-center items-center bg-white/20 backdrop-blur-xl  ${e?"flex":"hidden"}`,children:(0,i.jsxs)("div",{className:"w-[90%] sm:max-w-sm md:max-w-md  border border-black/10 rounded-xl bg-white p-4",children:[(0,i.jsxs)("button",{className:"w-fit border border-none bg-black text-white py-1 px-2 text-sm font-bold rounded-md cursor-pointer flex flex-row items-center gap-2 mr-0 ml-auto",onClick:r,children:[i.jsx(s.toq,{size:"1rem"})," ",t]}),n]})}),l=function(){let[e,t]=(0,n.useState)(!1),r=()=>{t(!e)};return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center py-[10vh]",children:[i.jsx("div",{className:"text-2xl font-semibold text-center",children:"Contributor Profiles"}),(0,i.jsxs)("div",{className:"text-base mt-2 text-center",children:["We ❤️ Open Source, Let's make your first contribution today! ",i.jsx("br",{})," "]}),(0,i.jsxs)("button",{className:"flex flex-row justify-center items-center mt-2 gap-2 py-1 px-3 rounded-lg bg-sky-300 outline-2 outline-sky-600 border-none text-sky-950 font-semibold transition-all",onClick:r,children:[i.jsx(a.Hfo,{})," HOW"]}),(0,i.jsxs)(o,{toggle:r,isOpen:e,children:[i.jsx("div",{className:"text-lg font-bold",children:"What's Purpose of this repo?"}),(0,i.jsxs)("p",{children:["This is a repository to help beginners get started with Open Source during"," ",i.jsx("a",{href:"https://hacktoberfest.com/",className:"underline underline-offset-2 text-sky-600",target:"_blank",rel:"noopener noreferrer",children:"Hacktoberfest"}),". PS: Hacktoberfest is a month-long celebration of open source software in partnership with Github ."]}),i.jsx("div",{className:"text-lg mt-4 font-bold",children:"How can I contribute?"}),(0,i.jsxs)("p",{children:["This is a beginner-friendly repo, we've made a simple website where you can add your profile card and make your first contribution to open source and GitHub.",i.jsx("br",{}),"Go to"," ",i.jsx("a",{href:"https://github.com/gdsc-kits/hacktober2023",className:"underline underline-offset-2 text-sky-600",target:"_blank",rel:"noopener noreferrer",children:"@gdsc-kits/hacktober2023"})," ","and make a small change adding your profile into contributors/profiles.json and make a PR.",i.jsx("br",{}),"You will find all the instructions there itself into README.md file."]})]})]})}},3385:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var i=r(80);r(9885);var n=r(5816),a=r(2279);let s=function(e){return i.jsx("a",{href:`${e.href}?ref=hacktober2023.vercel.app`,rel:"noopener noreferrer",className:`no-underline text-inherit transition-all ${e.className}`,target:"_blank",children:e.children})},o=function({profileData:e}){return i.jsx("div",{className:"pb-8",children:(0,i.jsxs)("div",{className:"relative pt-10 pb-2 px-2 bg-gray-950 text-white rounded-md",children:[i.jsx("img",{src:`https://github.com/${e?.github?e?.github:"ghost"}.png`,alt:"profile",className:"absolute ring-4 ring-gray-950 -top-8 h-16  rounded-full left-1/2 -translate-x-1/2"}),(0,i.jsxs)("div",{className:"text-center",children:[i.jsx("div",{className:"text-lg font-semibold",children:e.name}),i.jsx("div",{className:"text-sm font-medium",children:e?.description?e?.description:"</>"}),(0,i.jsxs)("div",{className:"flex justify-center items-center gap-2 text-2xl my-2",children:[e?.github&&e?.github.trim()!=""&&i.jsx(s,{href:`https://github.com/${e?.github}`,children:i.jsx(n.RrF,{})}),e?.linkedin&&e?.linkedin.trim()!=""&&i.jsx(s,{href:`https://linkedin.com/in/${e?.linkedin}`,children:i.jsx(n._iD,{})}),e?.twitter&&e?.twitter.trim()!=""&&i.jsx(s,{href:`https://twitter.com/${e?.twitter}`,children:i.jsx(n.JMB,{})}),e?.portfolio&&e?.portfolio.trim()!=""&&i.jsx(s,{href:e?.portfolio,children:i.jsx(a.q13,{})})]})]})]})})},l=JSON.parse('[{"name":"GDSC Karunya","github":"gdsc-kits","linkedin":"gdsc-kits","description":"Hello Open Source Contributors"},{"name":"Renuka Rajpuria","github":"renuka-rajpuria","linkedin":"renukarajpuria","description":"Web-App Dev | UI/UX"},{"name":"Sri Ram M S","github":"isri-ram","linkedin":"sriramms","description":"Machine Learning | Data Analyst"},{"name":"Bewin Felix","github":"Bewin007","linkedin":"bewin-felix","description":"Web Developer"},{"name":"Cyril Jacob","github":"cj445","linkedin":"thecyriljacob","description":"Web Dev | Data Analyst"},{"name":"jigar shah","github":"jigar577","linkedin":"jigar-n-shah-3b5b38267","description":"credentials"},{"name":"Aarin Zacharia","github":"aarinz","linkedin":"aarin-zacharia-539b15278","description":"Web dev"},{"name":"Vasu Gangavarapu","github":"vasu1912","linkedin":"gangavarapu-venkata-vasu-5aa0a0285","description":"Coder"},{"name":"Saroj Swadithya","github":"saroj-swadithya","linkedin":"SarojSwadithya","description":"Web-Dev | Data Analyst | AI Dev"},{"name":"Nadar Samuvel Bhaskar","github":"Samuvel-Bhaskar","linkedin":"nadar-samuvel-bhaskar","description":"App dev"},{"name":"A JOSHUA ISAAC","github":"isaac-joshua","linkedin":"joshua-isaac-b77625239","description":"Coder"},{"name":"Pratheesh Raj P L","github":"URK21CS1064","linkedin":"pratheesh-raj-p-l-822056235","description":"Coder"},{"name":"Ishan Chaskar","github":"ishanchaskar","linkedin":"ishanchaskar","description":"Web Dev"},{"name":"Roshan John Renny","github":"RoshanJ20","linkedin":"roshan-john-a28973221","description":"Programmer | Web Dev | Data Science"},{"name":"P. John Ruben Raj","github":"JohnRuben717","linkedin":"johnruben171","description":"UI/UX Dev | Web Dev | Front-End Dev"},{"name":"Anmol Mangaraj","github":"anmol5936","linkedin":"anmol-mangaraj-5722a4251/","description":"Coder || Web Dev || Block Chain"},{"name":"Bharath Kumar S","github":"Bharathlax-2005","linkedin":"bharath-kumar-bksquare","description":"AI & DS | AI Developer"},{"name":"Allen Alex Thomas","github":"Alex0-7","linkedin":"","description":"Coder"},{"name":"Joe Freddie Cheeran","github":"joefreddiecheeran","linkedin":"joe-freddie-cheeran-834588267","description":"Hello World"},{"name":"Akash Nair","github":"URK21CS2020AKASHNAIR","linkedin":"https://www.linkedin.com/in/akash-nair-636142267/","description":"Coder"},{"name":"Jobin Shery Mathew","github":"jobin2201","linkedin":"jobin-shery-mathew","description":"Web Dev"}]');function d(){return i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 max-w-xs mx-auto sm:max-w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",children:l.map((e,t)=>i.jsx(o,{profileData:e},t))})})}},210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var i=r(8144),n=r(7536);let a=(0,n.createProxy)(String.raw`/workspaces/hacktober2023/components/Home/Header.jsx`),{__esModule:s,$$typeof:o}=a,l=a.default,d=(0,n.createProxy)(String.raw`/workspaces/hacktober2023/components/Home/RenderProfiles.jsx`),{__esModule:c,$$typeof:h}=d,u=d.default;function p(){return(0,i.jsxs)("main",{className:"p-4",children:[i.jsx(l,{}),i.jsx(u,{})]})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(6885);let n=e=>{let t=(0,i.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"32x32",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[385,495,513],()=>r(9209));module.exports=i})();