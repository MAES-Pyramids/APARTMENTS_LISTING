(()=>{var e={};e.id=648,e.ids=[648],e.modules={506:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,9603,23)),Promise.resolve().then(t.bind(t,9553)),Promise.resolve().then(t.bind(t,7304)),Promise.resolve().then(t.bind(t,5043)),Promise.resolve().then(t.bind(t,6818))},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1122:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},1322:(e,A)=>{"use strict";function t(e){let{widthInt:A,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:s,objectFit:a}=e,n=i?40*i:A,l=r?40*r:t,o=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+o+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(o?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"getImageBlurSvg",{enumerable:!0,get:function(){return t}})},2091:(e,A)=>{"use strict";function t(e){var A;let{config:t,src:i,width:r,quality:s}=e,a=s||(null==(A=t.qualities)?void 0:A.reduce((e,A)=>Math.abs(A-75)<Math.abs(e-75)?A:e))||75;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+a+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"default",{enumerable:!0,get:function(){return i}}),t.__next_img_default=!0;let i=t},2152:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-2.50a90426.jpeg",height:640,width:512,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAApCZ//8QAHhAAAQMEAwAAAAAAAAAAAAAAAgEDBAAFERITIUH/2gAIAQEAAT8Afm3WE7xOHGEtULXBEg586Sv/xAAaEQABBQEAAAAAAAAAAAAAAAABAAIDBBEj/9oACAECAQE/ADZn09XL/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQADBDL/2gAIAQMBAT8AM1KcE//Z",blurWidth:6,blurHeight:8}},2480:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),!function(e,A){for(var t in A)Object.defineProperty(e,t,{enumerable:!0,get:A[t]})}(A,{default:function(){return l},getImageProps:function(){return n}});let i=t(2639),r=t(9131),s=t(9603),a=i._(t(2091));function n(e){let{props:A}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(A))void 0===t&&delete A[e];return{props:A}}let l=s.Image},2704:()=>{},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3038:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"useMergedRef",{enumerable:!0,get:function(){return r}});let i=t(3210);function r(e,A){let t=(0,i.useRef)(null),r=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=t.current;e&&(t.current=null,e());let A=r.current;A&&(r.current=null,A())}else e&&(t.current=s(e,i)),A&&(r.current=s(A,i))},[e,A])}function s(e,A){if("function"!=typeof e)return e.current=A,()=>{e.current=null};{let t=e(A);return"function"==typeof t?t:()=>e(null)}}("function"==typeof A.default||"object"==typeof A.default&&null!==A.default)&&void 0===A.default.__esModule&&(Object.defineProperty(A.default,"__esModule",{value:!0}),Object.assign(A.default,A),e.exports=A.default)},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3316:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>v});var i=t(7413),r=t(1120);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,A,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===A).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,r.forwardRef)(({color:e="currentColor",size:A=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:o,...d},u)=>(0,r.createElement)("svg",{ref:u,...n,width:A,height:A,stroke:e,strokeWidth:i?24*Number(t)/Number(A):t,className:a("lucide",s),...d},[...o.map(([e,A])=>(0,r.createElement)(e,A)),...Array.isArray(l)?l:[l]])),o=((e,A)=>{let t=(0,r.forwardRef)(({className:t,...i},n)=>(0,r.createElement)(l,{ref:n,iconNode:A,className:a(`lucide-${s(e)}`,t),...i}));return t.displayName=`${e}`,t})("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);var d=t(9553),u=t(7304),g=t(5043),c=t(6818),m=t(2480),p=t.n(m);function h({imagesGallery:e}){return d.default,u.default,g.default,c.default,(0,i.jsx)("div",{className:"mb-6 flex items-center justify-center gap-5 flex-wrap ",children:e?.map((e,A)=>i.jsx(p(),{src:e,alt:"department",className:"w-[200px] h-[180px] rounded-lg object-cover cursor-pointer",loading:"lazy",height:180,width:200},`${A}-${e}`))})}function f({department:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{imagesGallery:e.imagesGallery}),(0,i.jsxs)("div",{className:"flex lg:items-start lg:flex-row flex-col gap-6",children:[(0,i.jsx)(E,{department:e}),(0,i.jsx)(x,{department:e})]}),(0,i.jsx)(b,{contactDetails:e.contactDetails})]})}function x({department:e}){return(0,i.jsxs)("div",{className:"p-5 rounded-xl bg-white shadow-lg flex-1",children:[(0,i.jsxs)("div",{className:"flex flex-col items-start gap-y-2",children:[(0,i.jsx)("span",{className:"text-gray-400 mb-1 text-lg capitalize",children:"Location"}),(0,i.jsxs)("div",{className:"text-[#4D5F65] font-bold flex items-center gap-x-1 text-xl md:text-2xl",children:[(0,i.jsx)(o,{}),(0,i.jsx)("span",{children:`${e.unitAddress.fullAddress}, ${e.unitAddress.city}`||"No address available"})]})]}),(0,i.jsxs)("div",{className:"flex flex-col items-start gap-y-[6px] mt-4",children:[(0,i.jsx)("span",{className:"text-gray-400 mb-1 sm:text-xl text-lg capitalize font-bold",children:e?.description}),(0,i.jsx)("p",{className:"text-[#4D5F65] sm:text-lg text-base",children:e.description||"No description available."})]}),(0,i.jsxs)("div",{className:"flex flex-col items-start gap-y-2 mt-4",children:[(0,i.jsx)("span",{className:"text-lg md:text-xl font-semibold text-[#4D5F65]",children:"Price"}),(0,i.jsxs)("span",{className:"text-lg md:text-2xl font-bold text-[#4D5F65]",children:["$",e.rentingPrice.toLocaleString()]})]})]})}function E({department:e}){let A=e?.unitDetails?.hasElevator?"Yes":"No",t=[{title:"project name",value:e?.projectName},{title:"unit name",value:e?.unitName},{title:"unit type",value:e?.unitType},{title:"unit name",value:e?.unitName},{title:"Price",value:`$${e?.rentingPrice}`},{title:"Area",value:`${e?.unitDetails?.unitSize} sqm`},{title:"Rooms",value:e?.unitDetails?.numberOfBedrooms},{title:"Bathrooms",value:e?.unitDetails?.numberOfBathrooms},{title:"Has Elevator",value:A},{title:"floor Number",value:e?.unitDetails?.floorNumber}];return(0,i.jsx)("div",{className:"p-5 rounded-xl bg-white shadow-lg flex-1",children:(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6",children:t.map((e,A)=>(0,i.jsx)(C,{title:e.title,value:e.value},`${A}:- ${e.title}`))})})}function b({contactDetails:e}){let A=[{title:"Agent Name",value:e?.agentName},{title:"Phone",value:e?.phone},{title:"Email",value:e?.email}];return(0,i.jsxs)("div",{className:"p-5 rounded-xl bg-white shadow-lg flex-1 mt-5",children:[(0,i.jsx)("h4",{className:"text-xl md:text-2xl text-[#4D5F65] mb-4 font-semibold",children:"Contact Details"}),A.map((e,A)=>(0,i.jsx)(C,{title:e.title,value:e.value},`${A}:- ${e.title}`))]})}function C({title:e,value:A}){return(0,i.jsxs)("div",{className:"flex flex-col items-start gap-y-1",children:[(0,i.jsx)("span",{className:"text-[#4D5F65] mb-1",children:e}),(0,i.jsx)("div",{className:"text-black font-bold",children:A})]})}async function Q(e){let A=await fetch(`http://localhost:3333/api/v1/apartments/${e}`),t=(await A.json()).data;return{id:t?.id,unitName:t?.unitName,unitType:t?.unitType,projectName:t?.projectName,available:t?.available,mainImage:t?.mainImage,imagesGallery:t?.imagesGallery,unitAddress:{fullAddress:t?.unitAddress?.fullAddress,city:t?.unitAddress?.city,district:t?.unitAddress?.district},unitDetails:{unitSize:t?.unitDetails?.unitSize,numberOfBedrooms:t?.unitDetails?.numberOfBedrooms,numberOfBathrooms:t?.unitDetails?.numberOfBathrooms,hasElevator:t?.unitDetails?.hasElevator,floorNumber:t?.unitDetails?.floorNumber},contactDetails:{agentName:t?.contactDetails?.agentName,phone:t?.contactDetails?.phone,email:t?.contactDetails?.email},rentingPrice:t?.rentingPrice,description:t?.description,averageRating:t?.averageRating}}async function v({params:e}){let A=await Q(e.id);return(0,i.jsx)("div",{className:"bg-[#bdc7bc42] min-h-screen lg:py-16 py-12",children:(0,i.jsx)("div",{className:"section-wrapper",children:(0,i.jsx)(f,{department:A})})})}},3554:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,6533,23)),Promise.resolve().then(t.bind(t,6001)),Promise.resolve().then(t.bind(t,2152)),Promise.resolve().then(t.bind(t,9467)),Promise.resolve().then(t.bind(t,4970))},3873:e=>{"use strict";e.exports=require("path")},4970:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-4.4b0a1b97.jpeg",height:920,width:736,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAApiJ//8QAGRAAAgMBAAAAAAAAAAAAAAAAAgMAARGS/9oACAEBAAE/ADx7DOlL62f/xAAaEQABBQEAAAAAAAAAAAAAAAACAAMEETOR/9oACAECAQE/ACkP3sfV/8QAGhEAAAcAAAAAAAAAAAAAAAAAAAECAwRTkf/aAAgBAwEBPwAo7FSMH//Z",blurWidth:6,blurHeight:8}},5043:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-3.11263b76.jpeg",height:470,width:626,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAsB5//8QAHBAAAQMFAAAAAAAAAAAAAAAAAQASEwIRIzJB/9oACAEBAAE/AJsxLzE8WoaNer//xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AWn//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAEDAQE/AGmH/9k=",blurWidth:8,blurHeight:6}},5732:()=>{},5876:()=>{},6001:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-1.eb972733.jpeg",height:900,width:720,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACgQ//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAwQRABJRgf/aAAgBAQABPwCNIf1UnIQ8tXBG/CXP/8QAGhEAAQUBAAAAAAAAAAAAAAAAAQACAwQSI//aAAgBAgEBPwBtqfI6Ff/EABcRAAMBAAAAAAAAAAAAAAAAAAADE1L/2gAIAQMBAT8AgrJ//9k=",blurWidth:6,blurHeight:8}},6319:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,6444,23)),Promise.resolve().then(t.t.bind(t,6042,23)),Promise.resolve().then(t.t.bind(t,8170,23)),Promise.resolve().then(t.t.bind(t,9477,23)),Promise.resolve().then(t.t.bind(t,9345,23)),Promise.resolve().then(t.t.bind(t,2089,23)),Promise.resolve().then(t.t.bind(t,6577,23)),Promise.resolve().then(t.t.bind(t,1307,23))},6818:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-4.4b0a1b97.jpeg",height:920,width:736,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAApiJ//8QAGRAAAgMBAAAAAAAAAAAAAAAAAgMAARGS/9oACAEBAAE/ADx7DOlL62f/xAAaEQABBQEAAAAAAAAAAAAAAAACAAMEETOR/9oACAECAQE/ACkP3sfV/8QAGhEAAAcAAAAAAAAAAAAAAAAAAAECAwRTkf/aAAgBAwEBPwAo7FSMH//Z",blurWidth:6,blurHeight:8}},7304:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-2.50a90426.jpeg",height:640,width:512,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAApCZ//8QAHhAAAQMEAwAAAAAAAAAAAAAAAgEDBAAFERITIUH/2gAIAQEAAT8Afm3WE7xOHGEtULXBEg586Sv/xAAaEQABBQEAAAAAAAAAAAAAAAABAAIDBBEj/9oACAECAQE/ADZn09XL/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQADBDL/2gAIAQMBAT8AM1KcE//Z",blurWidth:6,blurHeight:8}},7894:(e,A)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),!function(e,A){for(var t in A)Object.defineProperty(e,t,{enumerable:!0,get:A[t]})}(A,{VALID_LOADERS:function(){return t},imageConfigDefault:function(){return i}});let t=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},8014:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>s,metadata:()=>r});var i=t(7413);t(2704);let r={title:"Create Next App",description:"Generated by create next app"};function s({children:e}){return(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)("body",{className:" antialiased",children:e})})}},8771:(e,A,t)=>{"use strict";t.r(A),t.d(A,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>g,tree:()=>o});var i=t(5239),r=t(8088),s=t(8170),a=t.n(s),n=t(893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(A,l);let o={children:["",{children:["departments",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3316)),"E:\\..My Apps\\nawy_assignment\\frontend\\app\\departments\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,8014)),"E:\\..My Apps\\nawy_assignment\\frontend\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["E:\\..My Apps\\nawy_assignment\\frontend\\app\\departments\\[id]\\page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},g=new i.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/departments/[id]/page",pathname:"/departments/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9131:(e,A,t)=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"getImgProps",{enumerable:!0,get:function(){return n}}),t(1122);let i=t(1322),r=t(7894);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,A){var t,n;let l,o,d,{src:u,sizes:g,unoptimized:c=!1,priority:m=!1,loading:p,className:h,quality:f,width:x,height:E,fill:b=!1,style:C,overrideSrc:Q,onLoad:v,onLoadingComplete:D,placeholder:I="empty",blurDataURL:B,fetchPriority:P,decoding:w="async",layout:y,objectFit:j,objectPosition:M,lazyBoundary:F,lazyRoot:U,...R}=e,{imgConf:G,showAltText:N,blurComplete:_,defaultLoader:X}=A,k=G||r.imageConfigDefault;if("allSizes"in k)l=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,A)=>e-A),A=k.deviceSizes.sort((e,A)=>e-A),i=null==(t=k.qualities)?void 0:t.sort((e,A)=>e-A);l={...k,allSizes:e,deviceSizes:A,qualities:i}}if(void 0===X)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let z=R.loader||X;delete R.loader,delete R.srcSet;let O="__next_img_default"in z;if(O){if("custom"===l.loader)throw Object.defineProperty(Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=z;z=A=>{let{config:t,...i}=A;return e(i)}}if(y){"fill"===y&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[y];e&&(C={...C,...e});let A={responsive:"100vw",fill:"100vw"}[y];A&&!g&&(g=A)}let S="",L=a(x),T=a(E);if((n=u)&&"object"==typeof n&&(s(n)||void 0!==n.src)){let e=s(u)?u.default:u;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(o=e.blurWidth,d=e.blurHeight,B=B||e.blurDataURL,S=e.src,!b){if(L||T){if(L&&!T){let A=L/e.width;T=Math.round(e.height*A)}else if(!L&&T){let A=T/e.height;L=Math.round(e.width*A)}}else L=e.width,T=e.height}}let Y=!m&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:S)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,Y=!1),l.unoptimized&&(c=!0),O&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(c=!0);let K=a(f),Z=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:M}:{},N?{}:{color:"transparent"},C),H=_||"empty"===I?null:"blur"===I?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:T,blurWidth:o,blurHeight:d,blurDataURL:B||"",objectFit:Z.objectFit})+'")':'url("'+I+'")',W=H?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},$=function(e){let{config:A,src:t,unoptimized:i,width:r,quality:s,sizes:a,loader:n}=e;if(i)return{src:t,srcSet:void 0,sizes:void 0};let{widths:l,kind:o}=function(e,A,t){let{deviceSizes:i,allSizes:r}=e;if(t){let e=/(^|\s)(1?\d?\d)vw/g,A=[];for(let i;i=e.exec(t);i)A.push(parseInt(i[2]));if(A.length){let e=.01*Math.min(...A);return{widths:r.filter(A=>A>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof A?{widths:i,kind:"w"}:{widths:[...new Set([A,2*A].map(e=>r.find(A=>A>=e)||r[r.length-1]))],kind:"x"}}(A,r,a),d=l.length-1;return{sizes:a||"w"!==o?a:"100vw",srcSet:l.map((e,i)=>n({config:A,src:t,quality:s,width:e})+" "+("w"===o?e:i+1)+o).join(", "),src:n({config:A,src:t,quality:s,width:l[d]})}}({config:l,src:u,unoptimized:c,width:L,quality:K,sizes:g,loader:z});return{props:{...R,loading:Y?"lazy":p,fetchPriority:P,width:L,height:T,decoding:w,className:h,style:{...Z,...W},sizes:$.sizes,srcSet:$.srcSet,src:Q||$.src},meta:{unoptimized:c,priority:m,placeholder:I,fill:b}}}},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9447:(e,A,t)=>{Promise.resolve().then(t.t.bind(t,6346,23)),Promise.resolve().then(t.t.bind(t,7924,23)),Promise.resolve().then(t.t.bind(t,5656,23)),Promise.resolve().then(t.t.bind(t,99,23)),Promise.resolve().then(t.t.bind(t,8243,23)),Promise.resolve().then(t.t.bind(t,8827,23)),Promise.resolve().then(t.t.bind(t,2763,23)),Promise.resolve().then(t.t.bind(t,7173,23))},9467:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-3.11263b76.jpeg",height:470,width:626,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAsB5//8QAHBAAAQMFAAAAAAAAAAAAAAAAAQASEwIRIzJB/9oACAEBAAE/AJsxLzE8WoaNer//xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AWn//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAEDAQE/AGmH/9k=",blurWidth:8,blurHeight:6}},9553:(e,A,t)=>{"use strict";t.r(A),t.d(A,{default:()=>i});let i={src:"/_next/static/media/department-1.eb972733.jpeg",height:900,width:720,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACgQ//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAwQRABJRgf/aAAgBAQABPwCNIf1UnIQ8tXBG/CXP/8QAGhEAAQUBAAAAAAAAAAAAAAAAAQACAwQSI//aAAgBAgEBPwBtqfI6Ff/EABcRAAMBAAAAAAAAAAAAAAAAAAADE1L/2gAIAQMBAT8AgrJ//9k=",blurWidth:6,blurHeight:8}},9603:(e,A,t)=>{let{createProxy:i}=t(9844);e.exports=i("E:\\..My Apps\\nawy_assignment\\frontend\\node_modules\\next\\dist\\client\\image-component.js")}};var A=require("../../../webpack-runtime.js");A.C(e);var t=e=>A(A.s=e),i=A.X(0,[825,533],()=>t(8771));module.exports=i})();