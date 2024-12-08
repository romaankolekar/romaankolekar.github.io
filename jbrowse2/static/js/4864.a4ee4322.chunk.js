"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4864],{34864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(60972),a=r(46377),s=r(99834),i=r(66885),o=r(99546),c=r(32598),u=r(28493);class d extends a.BaseFeatureDataAdapter{intervalTrees={};static capabilities=["getFeatures","getRefNames"];async loadDataP(e={}){const t=this.pluginManager,r=this.getConf("bedLocation"),a=await(0,o.fetchAndMaybeUnzip)((0,s.openLocation)(r,t),e);if(a.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const i=new TextDecoder("utf8",{fatal:!0}).decode(a).split(/\n|\r\n|\r/).filter((e=>!!e)),c=[];let u=0;for(;u<i.length&&i[u].startsWith("#");u++)c.push(i[u]);const d=c.join("\n"),l={};for(;u<i.length;u++){const e=i[u],t=e.indexOf("\t"),r=e.slice(0,t);l[r]||(l[r]=[]),l[r].push(e)}const f=this.getConf("autoSql");return{header:d,features:l,parser:new n.A({autoSql:f}),columnNames:this.getConf("columnNames"),scoreColumn:this.getConf("scoreColumn"),colRef:this.getConf("colRef"),colStart:this.getConf("colStart"),colEnd:this.getConf("colEnd")}}async loadData(e={}){return this.bedFeatures||(this.bedFeatures=this.loadDataP(e).catch((e=>{throw this.bedFeatures=void 0,e}))),this.bedFeatures}async getRefNames(e={}){const{features:t}=await this.loadData(e);return Object.keys(t)}async getHeader(e={}){const{header:t}=await this.loadData(e);return t}async getNames(){const{header:e,columnNames:t}=await this.loadData();if(t.length)return t;const r=e.split(/\n|\r\n|\r/).filter((e=>!!e)).at(-1);return r?.includes("\t")?r.slice(1).split("\t").map((e=>e.trim())):void 0}async loadFeatureIntervalTreeHelper(e){const{colRef:t,colStart:r,colEnd:n,features:a,parser:s,scoreColumn:i}=await this.loadData(),d=a[e];if(!d)return;const l=await this.getNames(),f=new c.Ay,h=d.map(((a,c)=>{const d=`${this.id}-${e}-${c}`;return new o.SimpleFeature((0,u.dE)({line:a,colRef:t,colStart:r,colEnd:n,scoreColumn:i,parser:s,uniqueId:d,names:l}))}));for(const e of h)f.insert([e.get("start"),e.get("end")],e);return f}async loadFeatureIntervalTree(e){return this.intervalTrees[e]||(this.intervalTrees[e]=this.loadFeatureIntervalTreeHelper(e).catch((t=>{throw this.intervalTrees[e]=void 0,t}))),this.intervalTrees[e]}getFeatures(e,t={}){return(0,i.ObservableCreate)((async t=>{const{start:r,end:n,refName:a}=e,s=await this.loadFeatureIntervalTree(a);s?.search([r,n]).forEach((e=>{t.next(e)})),t.complete()}),t.signal)}freeResources(){}}},28493:(e,t,r)=>{function n(e){const t=e?.trim().split(" ");return[0,1,2,3,5,6].every((e=>void 0!==t?.[e]&&!Number.isNaN(+t[e])))}function a(e){if(n(e)){const[t,r,n,a,s,i,o,c,u,d,l,f,h,m,p]=e.trim().split(" ");return{bitsw_score:t,percent_div:r,percent_del:n,percent_ins:a,query_chr:s,query_begin:i,query_end:o,query_remaining:c,orientation:u,matching_repeat_name:d,matching_repeat_class:l,matching_repeat_begin:f,matching_repeat_end:h,matching_repeat_remaining:m,repeat_id:p}}return{description:e}}function s({line:e,colRef:t,colStart:r,colEnd:n,scoreColumn:a,parser:s,uniqueId:o,names:c}){const u=e.split("\t");return i({line:e,refName:u[t],start:+u[r],end:+u[n]+(r===n?1:0),parser:s,uniqueId:o,scoreColumn:a,names:c})}function i({line:e,refName:t,start:r,end:s,parser:i,uniqueId:c,scoreColumn:u,names:d}){const l=e.split("\t"),f=d?function(e,t){const r=Object.fromEntries(t.split("\t").map(((t,r)=>[e[r],t]))),{blockStarts:n,blockCount:a,chromStarts:s,thickEnd:i,thickStart:c,blockSizes:u,...d}=r;return{...d,blockStarts:o(n),chromStarts:o(s),blockSizes:o(u),thickStart:c?+c:void 0,thickEnd:i?+i:void 0,blockCount:a?+a:void 0}}(d,e):i.parseLine(e,{uniqueId:c}),{strand:h,score:m,chrom:p,chromStart:b,chromEnd:_,...k}=f,{chromStarts:S,blockSizes:g,blockStarts:N,type:y,blockCount:v,thickStart:C,thickEnd:q,description:w,...I}=k,T=u?+f[u]:m?+m:void 0,E="string"==typeof h?"-1"===(R=h)?-1:"+"===R?1:0:h;var R;const D=function({start:e,uniqueId:t,refName:r,chromStarts:n,blockCount:a,blockSizes:s,blockStarts:i}){if(a){const o=[],c=n||i||[];for(let n=0;n<a;n++){const a=(c[n]||0)+e,i=s?.[n];if(i&&i>0){const e=a+i;o.push({uniqueId:`${t}-${n}`,start:a,end:e,refName:r,type:"block"})}}return o}return[]}({start:r,uniqueId:c,refName:t,chromStarts:S,blockCount:v,blockSizes:g,blockStarts:N});return function({splitLine:e,start:t,end:r}){return+(e[6]||0)===t&&+(e[7]||0)===r}({splitLine:l,start:r,end:s})?function({line:e,uniqueId:t,refName:r,start:n,end:a}){const[,,,s,,i,,,o,c,u,d,l,f,h,m,p,b]=e.split("\t");return{uniqueId:t,refName:r,start:n,end:a,code:s,score:u,strand:i,color:o,source:s,n_valid_cov:c,fraction_modified:u,n_mod:d,n_canonical:l,n_other_mod:f,n_delete:h,n_fail:m,n_diff:p,n_nocall:b}}({line:e,uniqueId:c,refName:t,start:r,end:s}):n(w)?function({uniqueId:e,refName:t,start:r,end:n,description:s,...i}){return{...i,...a(s),uniqueId:e,refName:t,start:r,end:n}}({...I,uniqueId:c,description:w,type:y,score:T,start:r,end:s,strand:E,refName:t,subfeatures:D}):function({thickStart:e,blockCount:t,strand:r}){return e&&t&&0!==r}({strand:E,blockCount:v,thickStart:C})?function(e){const{strand:t=0,chrom:r,chromStart:n,chromEnd:a,chromStarts:s,blockStarts:i,blockSizes:o,uniqueId:c,...u}=e,{subfeatures:d,thickStart:l,thickEnd:f,blockCount:h,refName:m,...p}=u,b=[],_=d.filter((e=>"block"===e.type)).sort(((e,t)=>e.start-t.start));for(const e of _){const r=e.start,n=e.end;l>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:n,refName:m}):l>r&&l<n&&f>=n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:l,refName:m},{type:"CDS",start:l,end:n,refName:m}):l<=r&&f>=n?b.push({type:"CDS",start:r,end:n,refName:m}):l>r&&l<n&&f<n?b.push({type:(t>0?"five":"three")+"_prime_UTR",start:r,end:l,refName:m},{type:"CDS",start:l,end:f,refName:m},{type:(t>0?"three":"five")+"_prime_UTR",start:f,end:n,refName:m}):l<=r&&f>r&&f<n?b.push({type:"CDS",start:r,end:f,refName:m},{type:(t>0?"three":"five")+"_prime_UTR",start:f,end:n,refName:m}):f<=r&&b.push({type:(t>0?"three":"five")+"_prime_UTR",start:r,end:n,refName:m})}return{...p,uniqueId:c,strand:t,type:"mRNA",refName:m,subfeatures:b}}({...k,description:w,chromStarts:S,thickStart:C,thickEnd:q,blockSizes:g,blockCount:v,type:y,score:T,start:r,end:s,strand:E,refName:t,uniqueId:c,subfeatures:D}):{...k,uniqueId:c,description:w,type:y,score:T,start:r,end:s,strand:E,refName:t,subfeatures:D}}function o(e){return void 0!==e?"string"==typeof e?e.split(",").map((e=>+e)):e:void 0}r.d(t,{dE:()=>s,np:()=>i})}}]);
//# sourceMappingURL=4864.a4ee4322.chunk.js.map