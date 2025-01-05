"use strict";(self.webpackChunkthomas_blog=self.webpackChunkthomas_blog||[]).push([[847],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,a,n)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=a(c)===c&&n(c)!==c,s=o,o=n(c)===c&&a(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){r.d(t,{L:function(){return p},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});r(6910);var a=r(6540),n=(r(2729),r(5556)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],m=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,r=s(e,g);return a.createElement(a.Fragment,null,a.createElement(m,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,f);return a.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:i}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,i=s(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,o({},i,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return a.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,r=s(e,w);return t?a.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const k=function(e){return a.createElement(a.Fragment,null,a.createElement(v,o({},e)),a.createElement("noscript",null,a.createElement(v,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),L=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:L},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],A=new Set;let I,O;const _=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:g,onStartLoad:m,onLoad:p,onError:f}=e,h=s(e,T);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:E,className:k}=w,S=s(w,j),x=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const L=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,v);return(0,a.useEffect)((()=>{I||(I=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(C);if(O&&A.has(C))return;let t,a;return I.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=r(o({isLoading:!0,isLoaded:A.has(C),image:n},h)),A.has(C)||(t=requestAnimationFrame((()=>{x.current&&(a=s(x.current,C,A,i,m,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{A.has(C)&&O&&(x.current.innerHTML=O(o({isLoading:A.has(C),isLoaded:A.has(C),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,a.createElement)(t,o({},S,{style:o({},E,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},M=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));M.propTypes=N,M.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:r,__imageData:n,__error:i}=t,l=s(t,P);return i&&console.warn(i),n?a.createElement(e,o({image:n},l)):(console.warn("Image not loaded",r),null)}}const R=q((function(e){let{as:t="div",className:r,class:n,style:i,image:l,loading:g="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=s(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=o({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:L,layout:N,images:T,placeholder:j,backgroundColor:A}=l,I=c(w,L,N),{style:O,className:_}=I,M=s(I,x),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),a.createElement(t,o({},M,{style:o({},O,i,{backgroundColor:h}),className:_+(r?" "+r:"")}),a.createElement(p,{layout:N,width:w,height:L},a.createElement(E,o({},d(j,!1,N,w,L,A,y,v))),a.createElement(k,o({"data-gatsby-image-ssr":"",className:m},b,u("eager"===g,!1,P,g,f)))))})),z=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:L,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=F;const D=q(M);D.displayName="StaticImage",D.propTypes=F},4967:function(e,t,r){var a=r(6540),n=r(8693),i=r(2532);t.A=()=>{var e,t;const r=(0,n.useStaticQuery)("3257411868"),o=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"/blog/images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__error:'No data found for image "/blog/images/profile-pic.png"\n              undefinedCould not read image data file "D:\\Learning\\Projects\\Blog\\blog\\.cache\\caches\\gatsby-plugin-image\\177060793.json". \nThis may mean that the images in "D:\\Learning\\Projects\\Blog\\blog\\src\\components\\bio.js" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78.'}),(null==o?void 0:o.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,o.name)," ",(null==o?void 0:o.summary)||null," ",a.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"You should follow them on Twitter")))}},3895:function(e,t,r){var a=r(6540),n=r(8693);t.A=e=>{let{location:t,title:r,children:i}=e;const o="/"===t.pathname;let s;return s=o?a.createElement("h1",{className:"main-heading"},a.createElement(n.Link,{to:"/blog"},r)):a.createElement(n.Link,{className:"header-link-home",to:"/blog"},r),a.createElement("div",{className:"global-wrapper","data-is-root-path":o},a.createElement("header",{className:"global-header"},s),a.createElement("main",null,i),a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},7528:function(e,t,r){var a=r(6540),n=r(8693);t.A=e=>{var t,r,i;let{description:o,title:s,children:l}=e;const{site:c}=(0,n.useStaticQuery)("2841359383"),u=o||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?s+" | "+d:s),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{property:"og:title",content:s}),a.createElement("meta",{property:"og:description",content:u}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r||null===(i=r.social)||void 0===i?void 0:i.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:s}),a.createElement("meta",{name:"twitter:description",content:u}),l)}},2217:function(e,t,r){var a=r(9039);e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){return 1},1)}))}},7680:function(e,t,r){var a=r(9504);e.exports=a([].slice)},4488:function(e,t,r){var a=r(7680),n=Math.floor,i=function(e,t){var r=e.length;if(r<8)for(var o,s,l=1;l<r;){for(s=l,o=e[l];s&&t(e[s-1],o)>0;)e[s]=e[--s];s!==l++&&(e[s]=o)}else for(var c=n(r/2),u=i(a(e,0,c),t),d=i(a(e,c),t),g=u.length,m=d.length,p=0,f=0;p<g||f<m;)e[p+f]=p<g&&f<m?t(u[p],d[f])<=0?u[p++]:d[f++]:p<g?u[p++]:d[f++];return e};e.exports=i},6955:function(e,t,r){var a=r(2140),n=r(4901),i=r(2195),o=r(8227)("toStringTag"),s=Object,l="Arguments"===i(function(){return arguments}());e.exports=a?i:function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=s(e),o))?r:l?i(t):"Object"===(a=i(t))&&n(t.callee)?"Arguments":a}},4606:function(e,t,r){var a=r(6823),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw new n("Cannot delete property "+a(t)+" of "+a(e))}},3709:function(e,t,r){var a=r(2839).match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},3763:function(e,t,r){var a=r(2839);e.exports=/MSIE|Trident/.test(a)},3607:function(e,t,r){var a=r(2839).match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},2140:function(e,t,r){var a={};a[r(8227)("toStringTag")]="z",e.exports="[object z]"===String(a)},655:function(e,t,r){var a=r(6955),n=String;e.exports=function(e){if("Symbol"===a(e))throw new TypeError("Cannot convert a Symbol value to a string");return n(e)}},6910:function(e,t,r){var a=r(6518),n=r(9504),i=r(9306),o=r(8981),s=r(6198),l=r(4606),c=r(655),u=r(9039),d=r(4488),g=r(2217),m=r(3709),p=r(3763),f=r(9519),h=r(3607),y=[],v=n(y.sort),b=n(y.push),w=u((function(){y.sort(void 0)})),E=u((function(){y.sort(null)})),k=g("sort"),S=!u((function(){if(f)return f<70;if(!(m&&m>3)){if(p)return!0;if(h)return h<603;var e,t,r,a,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)y.push({k:t+a,v:r})}for(y.sort((function(e,t){return t.v-e.v})),a=0;a<y.length;a++)t=y[a].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));a({target:"Array",proto:!0,forced:w||!E||!k||!S},{sort:function(e){void 0!==e&&i(e);var t=o(this);if(S)return void 0===e?v(t):v(t,e);var r,a,n=[],u=s(t);for(a=0;a<u;a++)a in t&&b(n,t[a]);for(d(n,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}}(e)),r=s(n),a=0;a<r;)t[a]=n[a++];for(;a<u;)l(t,a++);return t}})}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-70e49c6ea1442374640f.js.map