(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6577:function(e,t,i){Promise.resolve().then(i.bind(i,2590)),Promise.resolve().then(i.bind(i,6665)),Promise.resolve().then(i.bind(i,4114)),Promise.resolve().then(i.bind(i,8379)),Promise.resolve().then(i.bind(i,6982))},9376:function(e,t,i){"use strict";var r=i(5475);i.o(r,"useRouter")&&i.d(t,{useRouter:function(){return r.useRouter}}),i.o(r,"useSearchParams")&&i.d(t,{useSearchParams:function(){return r.useSearchParams}})},257:function(e,t,i){"use strict";var r,s;e.exports=(null==(r=i.g.process)?void 0:r.env)&&"object"==typeof(null==(s=i.g.process)?void 0:s.env)?i.g.process:i(4227)},4227:function(e){!function(){var t={229:function(e){var t,i,r,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{i="function"==typeof clearTimeout?clearTimeout:n}catch(e){i=n}}();var o=[],c=!1,d=-1;function h(){c&&r&&(c=!1,r.length?o=r.concat(o):d=-1,o.length&&u())}function u(){if(!c){var e=l(h);c=!0;for(var t=o.length;t;){for(r=o,o=[];++d<t;)r&&r[d].run();d=-1,t=o.length}r=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===n||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function x(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];o.push(new m(e,t)),1!==o.length||c||l(u)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=x,s.addListener=x,s.once=x,s.off=x,s.removeListener=x,s.removeAllListeners=x,s.emit=x,s.prependListener=x,s.prependOnceListener=x,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},i={};function r(e){var s=i[e];if(void 0!==s)return s.exports;var a=i[e]={exports:{}},n=!0;try{t[e](a,a.exports,r),n=!1}finally{n&&delete i[e]}return a.exports}r.ab="//";var s=r(229);e.exports=s}()},2590:function(e,t,i){"use strict";i.d(t,{default:function(){return l}});var r=i(7437),s=i(429),a=i(2265);let n=[{icon:a.forwardRef(function(e,t){let{title:i,titleId:r,...s}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),i?a.createElement("title",{id:r},i):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}),title:"Premium Service",description:"We use only the finest products and techniques"},{icon:a.forwardRef(function(e,t){let{title:i,titleId:r,...s}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),i?a.createElement("title",{id:r},i):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"}))}),title:"Expert Team",description:"Our team of certified professionals ensures excellence"},{icon:i(322).Z,title:"Time Efficient",description:"Quick service without compromising quality"}];function l(){return(0,r.jsx)("section",{className:"py-20 bg-gray-50",children:(0,r.jsxs)("div",{className:"container-custom",children:[(0,r.jsx)(s.E.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-3xl md:text-4xl font-playfair text-center mb-12",children:"Why Choose Us"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map((e,t)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2*t},className:"text-center",children:[(0,r.jsx)(e.icon,{className:"h-12 w-12 text-gold mx-auto mb-4"}),(0,r.jsx)("h3",{className:"text-xl font-playfair mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-gray-600",children:e.description})]},e.title))})]})})}},6665:function(e,t,i){"use strict";i.d(t,{default:function(){return l}});var r=i(7437),s=i(3145),a=i(429),n=i(7648);function l(){return(0,r.jsxs)("div",{className:"relative h-screen w-full",children:[(0,r.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,r.jsx)(s.default,{src:"/car-wash/images/hero/hero_image.png",alt:"Hero Background",fill:!0,priority:!0,className:"object-cover",quality:100}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"})]}),(0,r.jsx)("div",{className:"relative h-full z-10 flex items-center justify-center text-center",children:(0,r.jsxs)("div",{className:"max-w-4xl px-4",children:[(0,r.jsx)(a.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-4xl md:text-6xl font-playfair text-white mb-6",children:"Premium Car Care Service"}),(0,r.jsx)(a.E.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-xl md:text-2xl text-white/90 mb-8",children:"Trust your vehicle to the professionals"}),(0,r.jsxs)("div",{className:"space-x-4",children:[(0,r.jsx)(n.default,{href:"/contact",className:"bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",children:"Book Now"}),(0,r.jsx)(n.default,{href:"/services",className:"bg-white text-gold px-8 py-3 rounded-md hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",children:"Our Services"})]})]})})]})}},4114:function(e,t,i){"use strict";i.d(t,{default:function(){return d}});var r=i(7437),s=i(429),a=i(2265);let n=a.forwardRef(function(e,t){let{title:i,titleId:r,...s}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),i?a.createElement("title",{id:r},i):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))}),l=a.forwardRef(function(e,t){let{title:i,titleId:r,...s}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),i?a.createElement("title",{id:r},i):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))});var o=i(322);let c={googleMapsApiKey:"your_google_maps_api_key_here",emailServiceKey:i(257).env.NEXT_PUBLIC_EMAIL_SERVICE_KEY};function d(){let e="https://www.google.com/maps/embed/v1/place?key=".concat(c.googleMapsApiKey,"&q=place_id:YOUR_PLACE_ID");return(0,r.jsx)("section",{className:"py-20 bg-zinc-50",children:(0,r.jsx)("div",{className:"container-custom",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[(0,r.jsxs)(s.E.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"space-y-8",children:[(0,r.jsxs)("div",{className:"max-w-lg",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-playfair mb-4",children:"Visit Our Location"}),(0,r.jsx)("p",{className:"text-zinc-600",children:"Conveniently located in the heart of the city, our facility is equipped with state-of-the-art equipment to provide the best care for your vehicle."})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,r.jsx)(n,{className:"w-6 h-6 text-gold flex-shrink-0 mt-1"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold text-zinc-800 mb-1",children:"Address"}),(0,r.jsx)("p",{className:"text-zinc-600",children:"123 Detailing Street, Los Angeles, CA 90210"})]})]}),(0,r.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,r.jsx)(l,{className:"w-6 h-6 text-gold flex-shrink-0 mt-1"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold text-zinc-800 mb-1",children:"Contact"}),(0,r.jsx)("p",{className:"text-zinc-600",children:"+1 (555) 123-4567"})]})]}),(0,r.jsxs)("div",{className:"flex items-start space-x-4",children:[(0,r.jsx)(o.Z,{className:"w-6 h-6 text-gold flex-shrink-0 mt-1"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold text-zinc-800 mb-1",children:"Working Hours"}),(0,r.jsx)("p",{className:"text-zinc-600",children:"Monday - Saturday: 9AM - 6PM"}),(0,r.jsx)("p",{className:"text-zinc-600",children:"Sunday: Closed"})]})]})]}),(0,r.jsx)(s.E.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-gradient-to-r from-gold to-amber-500 text-white px-8 py-3 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl",children:"Get Directions"})]}),(0,r.jsx)(s.E.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px]",children:(0,r.jsx)("iframe",{src:e,width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full"})})]})})})}c.googleMapsApiKey||console.warn("Google Maps API key is not set in .env.local"),c.emailServiceKey||console.warn("Email service key is not set in .env.local")},8379:function(e,t,i){"use strict";i.d(t,{default:function(){return n}});var r=i(7437),s=i(429);let a=[{type:"Small Cars (Sedan/Hatchback)",prices:[{service:"Basic Wash",exterior:30,full:45},{service:"Deluxe Wash",exterior:50,full:75},{service:"Premium Detail",exterior:null,full:150}]},{type:"Medium Cars (SUV/Crossover)",prices:[{service:"Basic Wash",exterior:40,full:60},{service:"Deluxe Wash",exterior:65,full:90},{service:"Premium Detail",exterior:null,full:180}]},{type:"Large Cars (Van/Truck)",prices:[{service:"Basic Wash",exterior:50,full:75},{service:"Deluxe Wash",exterior:80,full:110},{service:"Premium Detail",exterior:null,full:220}]},{type:"Motorcycles",prices:[{service:"Basic Wash",exterior:25,full:null},{service:"Deluxe Wash",exterior:40,full:null},{service:"Premium Detail",exterior:100,full:null}]}];function n(){return(0,r.jsx)("section",{className:"py-20 bg-zinc-50",id:"pricing",children:(0,r.jsxs)("div",{className:"container-custom",children:[(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-4xl font-playfair mb-4",children:"Our Pricing"}),(0,r.jsx)("p",{className:"text-zinc-600",children:"Transparent pricing for all vehicle types"})]}),(0,r.jsx)("div",{className:"space-y-8",children:a.map((e,t)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*t},className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[(0,r.jsx)("div",{className:"bg-gradient-to-r from-gold to-amber-500 p-4",children:(0,r.jsx)("h3",{className:"text-xl font-semibold text-white",children:e.type})}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-b border-gray-200",children:[(0,r.jsx)("th",{className:"text-left py-2",children:"Service"}),(0,r.jsx)("th",{className:"text-right py-2",children:"Exterior Only"}),(0,r.jsx)("th",{className:"text-right py-2",children:"Interior + Exterior"})]})}),(0,r.jsx)("tbody",{children:e.prices.map(e=>(0,r.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,r.jsx)("td",{className:"py-3",children:e.service}),(0,r.jsx)("td",{className:"text-right py-3",children:e.exterior?"$".concat(e.exterior):"-"}),(0,r.jsx)("td",{className:"text-right py-3",children:e.full?"$".concat(e.full):"-"})]},e.service))})]})})]},e.type))}),(0,r.jsx)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"mt-8 text-center",children:(0,r.jsx)("p",{className:"text-sm text-zinc-500",children:"* Prices may vary based on vehicle condition and additional services required"})})]})})}},6982:function(e,t,i){"use strict";i.d(t,{default:function(){return c}});var r=i(7437),s=i(429),a=i(3145),n=i(7648),l=i(9376);let o=[{title:"Basic Wash",description:"Complete exterior wash and basic interior cleaning",image:"/car-wash/images/services/basic-wash.png"},{title:"Deluxe Wash",description:"Premium wash with wax protection and interior detailing",image:"/car-wash/images/services/deluxe-wash.png"},{title:"Premium Detail",description:"Full detail service with ceramic coating and paint correction",image:"/car-wash/images/services/premium-detail.png"}];function c(){let e=(0,l.useRouter)(),t=t=>{e.push("/contact?service=".concat(encodeURIComponent(t)))};return(0,r.jsx)("section",{className:"py-20 bg-white",children:(0,r.jsxs)("div",{className:"container-custom",children:[(0,r.jsx)(s.E.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-3xl md:text-4xl font-playfair text-center mb-12",children:"Our Premium Services"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:o.map((e,i)=>(0,r.jsxs)(s.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2*i},className:"bg-white rounded-lg shadow-lg overflow-hidden group",children:[(0,r.jsx)("div",{className:"relative w-full h-[240px]",children:(0,r.jsx)(a.default,{src:e.image,alt:e.title,fill:!0,className:"object-cover transition-transform duration-300 group-hover:scale-105",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 33vw"})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-xl font-playfair mb-2",children:e.title}),(0,r.jsx)("p",{className:"text-zinc-600 mb-4",children:e.description}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsxs)(n.default,{href:"/services/".concat(e.title.toLowerCase().replace(/ /g,"-")),className:"text-gold hover:text-amber-500 transition-colors flex items-center",children:["Learn More",(0,r.jsx)("svg",{className:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]}),(0,r.jsx)("button",{onClick:()=>t(e.title),className:"bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-2.5 rounded-md hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",children:"Book Now"})]})]})]},e.title))})]})})}},322:function(e,t,i){"use strict";var r=i(2265);let s=r.forwardRef(function(e,t){let{title:i,titleId:s,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),i?r.createElement("title",{id:s},i):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});t.Z=s}},function(e){e.O(0,[429,145,648,971,117,744],function(){return e(e.s=6577)}),_N_E=e.O()}]);