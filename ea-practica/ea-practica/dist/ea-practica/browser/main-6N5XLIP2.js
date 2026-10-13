import{A as i,Aa as $,Ba as R,Ca as V,Ea as Q,Fa as U,G as B,K as F,Ka as q,La as G,Ma as c,Oa as u,Qb as M,Ra as g,S as H,Sa as h,U as f,a as S,ca as m,ea as z,g as k,h as A,ib as J,j as P,jb as K,kb as D,lb as Y,mb as W,n as I,nb as X,ob as v,pb as Z,qa as r,qb as tt,ra as l,rb as et,sa as p,sb as ot,tb as w,ub as at,wb as nt,x as O,ya as E,z as j}from"./chunk-7WBNDKU3.js";var it=new j("TRANSLATE_HTTP_LOADER_CONFIG"),dt=(()=>{class t{http;config;constructor(){this.config=S({resources:[],enforceLoading:!1,useHttpBackend:!1},i(it)),this.http=this.config.useHttpBackend?new D(i(K)):i(D)}getTranslation(e){let o=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"",d=this.config.resources.map(n=>{let s=typeof n=="string"?`${n}${e}.json`:`${n.prefix}${e}${n.suffix??".json"}`,b=this.http.get(`${s}${o}`);return this.config.failOnError?b:b.pipe(I(y=>(console.warn(`@ngx-translate/http-loader: error loading translation for ${e}:`,y),k({}))))});return d.length===0?k({}):P(d).pipe(A(n=>n.reduce((s,b)=>et(s,b),{})))}static \u0275fac=function(o){return new(o||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function lt(t={}){if("resources"in t&&t.resources)return rt(t);let a=t,e={enforceLoading:a.enforceLoading??!1,useHttpBackend:a.useHttpBackend??!1,failOnError:a.failOnError??!1,resources:[{prefix:a.prefix??"/assets/i18n/",suffix:a.suffix??".json"}]};return rt(e)}function rt(t={}){return[{provide:it,useValue:S({resources:["/assets/i18n/"]},t)},{provide:tt,useClass:dt}]}var T=class t{router=i(X);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-page-not-found"]],decls:9,vars:7,consts:[[1,"not-found"],["mat-raised-button","","routerLink","/home"]],template:function(e,o){e&1&&(r(0,"section",0)(1,"h1"),c(2),g(3,"translate"),l(),r(4,"p"),c(5),l(),r(6,"a",1),c(7),g(8,"translate"),l()()),e&2&&(f(2),u("404 - ",h(3,3,"page-not-found")),f(3),u("Route not found: ",o.router.url),f(2),u(" ",h(8,5,"return-home")," "))},dependencies:[v,M,w],styles:[".not-found[_ngcontent-%COMP%]{padding:40px;text-align:center}"]})};var st=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",loadChildren:()=>import("./chunk-ZGDL36XU.js").then(t=>t.monitoringRoutes)},{path:"**",component:T}];var mt={providers:[F(),Z(st),Y(),at({fallbackLang:"en",lang:"en",loader:lt({prefix:"/i18n/",suffix:".json"})})]};var ft=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=z({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),ct=(()=>{class t{_elementRef=i(H);_platform=i(nt);_document=i(B);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=(function(){let e=["*",[["mat-toolbar-row"]]];return m({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,s,b){if(n&1&&V(b,ft,5),n&2){let y;Q(y=U())&&(s._toolbarRows=y)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,s){n&2&&(G(s.color?"mat-"+s.color:""),q("mat-toolbar-multiple-rows",s._toolbarRows.length>0)("mat-toolbar-single-row",s._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(n,s){n&1&&($(e),R(0),R(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return t})();var C=class t{translate=i(ot);changeLanguage(a){this.translate.use(a)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-toolbar"]],decls:15,vars:6,consts:[["src","https://img.logo.dev/iea.org?token=YOUR_TOKEN","alt","IEA Logo",1,"iea-logo"],[1,"spacer"],["mat-button","","routerLink","/home"],["mat-button","","routerLink","/energy-reports/new"],["mat-button","","type","button","aria-label","Switch to English",3,"click"],["mat-button","","type","button","aria-label","Cambiar a espa\xF1ol",3,"click"]],template:function(e,o){e&1&&(r(0,"mat-toolbar"),p(1,"img",0),r(2,"span"),c(3,"IEA Energy Monitoring Platform"),l(),p(4,"span",1),r(5,"a",2),c(6),g(7,"translate"),l(),r(8,"a",3),c(9),g(10,"translate"),l(),r(11,"button",4),E("click",function(){return o.changeLanguage("en")}),c(12," EN "),l(),r(13,"button",5),E("click",function(){return o.changeLanguage("es")}),c(14," ES "),l()()),e&2&&(f(6),u(" ",h(7,2,"home")," "),f(3),u(" ",h(10,4,"new-energy-report")," "))},dependencies:[v,ct,M,w],styles:["mat-toolbar[_ngcontent-%COMP%]{display:flex;gap:12px}.iea-logo[_ngcontent-%COMP%]{width:48px;height:48px;object-fit:contain}.spacer[_ngcontent-%COMP%]{flex:1}"]})};var N=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-layout"]],decls:3,vars:0,template:function(e,o){e&1&&(p(0,"app-toolbar"),r(1,"main"),p(2,"router-outlet"),l())},dependencies:[W,C],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;background-color:#f5f7fa}main[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:24px}@media(max-width:600px){main[_ngcontent-%COMP%]{padding:12px}}"]})};var _=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,o){e&1&&p(0,"app-layout")},dependencies:[N],encapsulation:2})};J(_,mt).catch(t=>console.error(t));
