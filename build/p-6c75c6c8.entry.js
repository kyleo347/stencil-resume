import{r as t,a as s}from"./p-a9e4cca4.js";import{A as e}from"./p-4165db20.js";let i=class{constructor(s){t(this,s),this.when=!0,this.message=""}enable(t){this.unblock&&this.unblock(),this.history&&(this.unblock=this.history.block(t))}disable(){this.unblock&&(this.unblock(),this.unblock=void 0)}componentWillLoad(){this.when&&this.enable(this.message)}updateMessage(t,s){this.when?this.when&&s===t||this.enable(this.message):this.disable()}componentDidUnload(){this.disable()}render(){return null}get el(){return s(this)}static get watchers(){return{message:["updateMessage"],when:["updateMessage"]}}};e.injectProps(i,["history"]);export{i as stencil_router_prompt}