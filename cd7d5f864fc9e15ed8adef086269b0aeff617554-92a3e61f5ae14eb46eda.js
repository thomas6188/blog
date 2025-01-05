"use strict";(self.webpackChunkthomas_blog=self.webpackChunkthomas_blog||[]).push([[847],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=o,o=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return S},P:function(){return E},S:function(){return D},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});a(6910);var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(g,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,f);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,o({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(v,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const S=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=v.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],A=new Set;let I,O;const _=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=s(e,T);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:E,className:S}=w,x=s(w,j),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{I||(I=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(C);if(O&&A.has(C))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=a(o({isLoading:!0,isLoaded:A.has(C),image:n},h)),A.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,C,A,i,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{A.has(C)&&O&&(k.current.innerHTML=O(o({isLoading:A.has(C),isLoaded:A.has(C),image:n},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},x,{style:o({},E,i,{backgroundColor:u}),className:S+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));M.propTypes=N,M.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=s(t,q);return i&&console.warn(i),n?r.createElement(e,o({image:n},l)):(console.warn("Image not loaded",a),null)}}const R=z((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=s(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=o({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:L,layout:N,images:T,placeholder:j,backgroundColor:A}=l,I=c(w,L,N),{style:O,className:_}=I,M=s(I,k),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,o({},M,{style:o({},O,i,{backgroundColor:h}),className:_+(a?" "+a:"")}),r.createElement(m,{layout:N,width:w,height:L},r.createElement(E,o({},d(j,!1,N,w,L,A,y,v))),r.createElement(S,o({"data-gatsby-image-ssr":"",className:g},b,u("eager"===p,!1,q,p,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:L,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=F;const D=z(M);D.displayName="StaticImage",D.propTypes=F},4967:function(e,t,a){var r=a(6540),n=a(8693),i=a(2532);t.A=()=>{var e,t;const o=(0,n.useStaticQuery)("3257411868"),s=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=o.site.siteMetadata)||void 0===t||t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(4857)}),(null==s?void 0:s.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,s.name)," "))}},3895:function(e,t,a){var r=a(6540),n=a(8693);t.A=e=>{let{location:t,title:a,children:i}=e;const o="/"===t.pathname;let s;return s=o?r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/blog"},a)):r.createElement(n.Link,{className:"header-link-home",to:"/blog"},a),r.createElement("div",{className:"global-wrapper","data-is-root-path":o},r.createElement("header",{className:"global-header"},s),r.createElement("main",null,i),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},7528:function(e,t,a){var r=a(6540),n=a(8693);t.A=e=>{var t,a,i;let{description:o,title:s,children:l}=e;const{site:c}=(0,n.useStaticQuery)("2841359383"),u=o||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?s+" | "+d:s),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:u}),l)}},2217:function(e,t,a){var r=a(9039);e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){return 1},1)}))}},7680:function(e,t,a){var r=a(9504);e.exports=r([].slice)},4488:function(e,t,a){var r=a(7680),n=Math.floor,i=function(e,t){var a=e.length;if(a<8)for(var o,s,l=1;l<a;){for(s=l,o=e[l];s&&t(e[s-1],o)>0;)e[s]=e[--s];s!==l++&&(e[s]=o)}else for(var c=n(a/2),u=i(r(e,0,c),t),d=i(r(e,c),t),p=u.length,g=d.length,m=0,f=0;m<p||f<g;)e[m+f]=m<p&&f<g?t(u[m],d[f])<=0?u[m++]:d[f++]:m<p?u[m++]:d[f++];return e};e.exports=i},6955:function(e,t,a){var r=a(2140),n=a(4901),i=a(2195),o=a(8227)("toStringTag"),s=Object,l="Arguments"===i(function(){return arguments}());e.exports=r?i:function(e){var t,a,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=s(e),o))?a:l?i(t):"Object"===(r=i(t))&&n(t.callee)?"Arguments":r}},4606:function(e,t,a){var r=a(6823),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw new n("Cannot delete property "+r(t)+" of "+r(e))}},3709:function(e,t,a){var r=a(2839).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},3763:function(e,t,a){var r=a(2839);e.exports=/MSIE|Trident/.test(r)},3607:function(e,t,a){var r=a(2839).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},2140:function(e,t,a){var r={};r[a(8227)("toStringTag")]="z",e.exports="[object z]"===String(r)},655:function(e,t,a){var r=a(6955),n=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return n(e)}},6910:function(e,t,a){var r=a(6518),n=a(9504),i=a(9306),o=a(8981),s=a(6198),l=a(4606),c=a(655),u=a(9039),d=a(4488),p=a(2217),g=a(3709),m=a(3763),f=a(9519),h=a(3607),y=[],v=n(y.sort),b=n(y.push),w=u((function(){y.sort(void 0)})),E=u((function(){y.sort(null)})),S=p("sort"),x=!u((function(){if(f)return f<70;if(!(g&&g>3)){if(m)return!0;if(h)return h<603;var e,t,a,r,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(r=0;r<47;r++)y.push({k:t+r,v:a})}for(y.sort((function(e,t){return t.v-e.v})),r=0;r<y.length;r++)t=y[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));r({target:"Array",proto:!0,forced:w||!E||!S||!x},{sort:function(e){void 0!==e&&i(e);var t=o(this);if(x)return void 0===e?v(t):v(t,e);var a,r,n=[],u=s(t);for(r=0;r<u;r++)r in t&&b(n,t[r]);for(d(n,function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:c(t)>c(a)?1:-1}}(e)),a=s(n),r=0;r<a;)t[r]=n[r++];for(;r<u;)l(t,r++);return t}})},4857:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#282828","images":{"fallback":{"src":"/static/4c7d792a4d2e1d172adfcd07ec886942/d24ee/profile-pic.jpg","srcSet":"/static/4c7d792a4d2e1d172adfcd07ec886942/d24ee/profile-pic.jpg 50w,\\n/static/4c7d792a4d2e1d172adfcd07ec886942/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/4c7d792a4d2e1d172adfcd07ec886942/d4bf4/profile-pic.avif 50w,\\n/static/4c7d792a4d2e1d172adfcd07ec886942/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/4c7d792a4d2e1d172adfcd07ec886942/3faea/profile-pic.webp 50w,\\n/static/4c7d792a4d2e1d172adfcd07ec886942/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-92a3e61f5ae14eb46eda.js.map