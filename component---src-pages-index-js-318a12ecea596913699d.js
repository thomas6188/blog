"use strict";(self.webpackChunkthomas_blog=self.webpackChunkthomas_blog||[]).push([[293],{4967:function(e,t,a){var l=a(6540),n=a(8693);t.A=()=>{var e,t,a;const r=(0,n.useStaticQuery)("4097823270"),i=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t||null===(a=t.author)||void 0===a?void 0:a.social,c=Object.keys(o);return l.createElement("section",{className:"bio"},l.createElement("section",{className:"imgWrapper"},l.createElement("img",{src:i.dp,alt:"DP"})),l.createElement("section",{className:"bioWrapper"},l.createElement("div",{className:"textWrapper",dangerouslySetInnerHTML:{__html:i.bio}}),l.createElement("div",{className:"socialWrapper"},c.map(((e,t)=>l.createElement("a",{href:o[e].url+o[e].username,target:"_blank",rel:"noreferrer",key:t},l.createElement("img",{src:"/blog/icons/"+o[e].title+".png",alt:o[e].title})))))))}},3895:function(e,t,a){var l=a(6540),n=a(8693);t.A=e=>{let{location:t,title:a,children:r}=e;const i="/"===t.pathname;let o;return o=i?l.createElement("h1",{className:"main-heading"},l.createElement(n.Link,{to:"/blog"},a)):l.createElement(n.Link,{className:"header-link-home",to:"/blog"},a),l.createElement("div",{className:"global-wrapper","data-is-root-path":i},l.createElement("header",{className:"global-header"},o),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},7528:function(e,t,a){var l=a(6540),n=a(8693);t.A=e=>{var t,a,r;let{description:i,title:o,children:c}=e;const{site:s}=(0,n.useStaticQuery)("2841359383"),m=i||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,d?o+" | "+d:o),l.createElement("meta",{name:"description",content:m}),l.createElement("meta",{property:"og:title",content:o}),l.createElement("meta",{property:"og:description",content:m}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(a=s.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:o}),l.createElement("meta",{name:"twitter:description",content:m}),c)}},9639:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var l=a(6540),n=a(8693),r=a(4967),i=a(3895),o=a(7528);t.default=e=>{var t;let{data:a,location:o}=e;const c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMarkdownRemark.nodes;return 0===s.length?l.createElement(i.A,{location:o,title:c},l.createElement(r.A,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(i.A,{location:o,title:c},l.createElement(r.A,null),l.createElement("ol",{style:{listStyle:"none"}},s.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(n.Link,{to:"/blog"+e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const c=()=>l.createElement(o.A,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-318a12ecea596913699d.js.map