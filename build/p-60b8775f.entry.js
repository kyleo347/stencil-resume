import{r as t,a as r}from"./p-a9e4cca4.js";import{A as s}from"./p-4165db20.js";let i=class{constructor(r){t(this,r)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace((r=this.root,"/"==(t=this.url).charAt(0)&&"/"==r.charAt(r.length-1)?r.slice(0,r.length-1)+t:r+t));var t,r}get el(){return r(this)}};s.injectProps(i,["history","root"]);export{i as stencil_router_redirect}