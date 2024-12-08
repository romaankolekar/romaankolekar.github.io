"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5461],{75461:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var n=s(46377),r=s(6434),o=s(66885),i=s(82088),a=s(44728),c=s(86576),d=s(99546),p=s(95805),f=s(93092),u=s(59509);function g(e){return b(e.type)?1:e.length}function b(e){return"softclip"===e||"hardclip"===e||"insertion"===e}function l(e,t,s,n){let r=e[s][n];void 0===r&&(r=e[s][n]={entryDepth:0,probabilities:[],"-1":0,0:0,1:0}),r.entryDepth++,r[t]++}function h({feature:e,bins:t,region:s,regionSequence:n}){const r=e.get("start"),o=e.get("end"),i=e.get("strand"),a=s.end-s.start;for(let e=r;e<o+1;e++){const r=e-s.start;r>=0&&r<a&&(void 0===t[r]&&(t[r]={depth:0,readsCounted:0,refbase:n[r],ref:{probabilities:[],entryDepth:0,"-1":0,0:0,1:0},snps:{},mods:{},nonmods:{},delskips:{},noncov:{}}),e!==o&&(t[r].depth++,t[r].readsCounted++,t[r].ref.entryDepth++,t[r].ref[i]++))}}function m({feature:e,region:t,bins:s,skipmap:n}){const r=e.get("start"),o=e.get("strand"),i=e.get("mismatches")??[];for(const a of i){const i=r+a.start,c=g(a),d=i+c;for(let e=i;e<i+c;e++){const n=e-t.start;if(n>=0&&n<s.length){const e=s[n],{base:t,type:r}=a,i=b(r);"deletion"===r||"skip"===r?(l(e,o,"delskips",r),e.depth--):i?l(e,o,"noncov",r):(l(e,o,"snps",t),e.ref.entryDepth--,e.ref[o]--)}}if("skip"===a.type){const t=e.get("tags"),s=t?.XS||t?.TS,r=t?.ts,a="+"===s?1:"-"===s?-1:("+"===r?1:"-"===s?-1:0)*o,c=`${i}_${d}_${a}`;void 0===n[c]&&(n[c]={feature:e,start:i,end:d,strand:o,effectiveStrand:a,score:0}),n[c].score++}}}function y({feature:e,region:t,bins:s,regionSequence:n}){const r=e.get("start"),o=e.get("end"),i=e.get("strand"),a=e.get("seq"),c=e.get("mismatches")??[],u=n.toLowerCase();if(a){const n=(0,p.parseCigar)(e.get("CIGAR")),{methBins:a,methProbs:g}=(0,f.Ps)(e,n),b=c.filter((e=>"deletion"===e.type));for(let e=0;e<o-r;e++){const n=e+r,o=u[n-t.start+1],c=u[n-t.start+2];if("c"===o&&"g"===c){const o=s[n-t.start],c=s[n-t.start+1],p=a[e],f=a[e+1],u=g[e],l=g[e+1];p&&(void 0===u||u>.5)||f&&(void 0===l||l>.5)?(o&&(v(o,i,"mods","cpg_meth",u||0),o.ref.entryDepth--,o.ref[i]--),c&&(v(c,i,"mods","cpg_meth",l||0),c.ref.entryDepth--,c.ref[i]--)):(o&&(b.some((e=>(0,d.doesIntersect2)(n,n+1,e.start+r,e.start+r+e.length)))||(v(o,i,"nonmods","cpg_unmeth",1-(u||0)),o.ref.entryDepth--,o.ref[i]--)),c&&(b.some((e=>(0,d.doesIntersect2)(n+1,n+2,e.start+r,e.start+r+e.length)))||(v(c,i,"nonmods","cpg_unmeth",1-(l||0)),c.ref.entryDepth--,c.ref[i]--)))}}}}function w({feature:e,colorBy:t,region:s,bins:n,regionSequence:r}){const o=e.get("start"),i=e.get("strand"),a=e.get("end"),c=t?.modifications?.twoColor,p=t?.modifications?.isolatedModification;(0,u.r)(e)?.forEach((({type:e,prob:t,allProbs:f},u)=>{if(p&&e!==p)return;const g=u+o-s.start;if(g>=0&&g<n.length&&u+o<a){void 0===n[g]&&(n[g]={depth:0,readsCounted:0,refbase:r[g],snps:{},ref:{probabilities:[],entryDepth:0,"-1":0,0:0,1:0},mods:{},nonmods:{},delskips:{},noncov:{}});const s=1-(0,d.sum)(f),o=n[g];c&&s>(0,d.max)(f)?v(o,i,"nonmods",`nonmod_${e}`,s):v(o,i,"mods",`mod_${e}`,t)}}))}function v(e,t,s,n,r){let o=e[s][n];void 0===o&&(o=e[s][n]={entryDepth:0,probabilities:[],"-1":0,0:0,1:0}),o.entryDepth++,o.probabilities.push(r),o[t]++}class S extends n.BaseFeatureDataAdapter{async configure(){const e=this.getConf("subadapter"),t=e.sequenceAdapter,s=await(this.getSubAdapter?.(e)),n=t?await(this.getSubAdapter?.(t)):void 0;if(!s)throw new Error("Failed to get subadapter");return{subadapter:s.dataAdapter,sequenceAdapter:n?.dataAdapter}}async fetchSequence(e){const{sequenceAdapter:t}=await this.configure();if(t)return(0,c.Iw)(e,t)}getFeatures(e,t={}){return(0,o.ObservableCreate)((async s=>{const{subadapter:n}=await this.configure(),o=await(0,a._)(n.getFeatures(e,t).pipe((0,i.$)())),{bins:c,skipmap:p}=await async function({fetchSequence:e,features:t,region:s,opts:n}){const{colorBy:r}=n,o={},i=[],a=Math.max(0,s.start-1),c=s.start-a,p=await e({...s,start:a,end:s.end+1})||"";for(const e of t)h({feature:e,bins:i,region:s,regionSequence:p.slice(c)}),"modifications"===r?.type?w({feature:e,colorBy:r,bins:i,region:s,regionSequence:p.slice(c)}):"methylation"===r?.type&&y({feature:e,bins:i,region:s,regionSequence:p}),m({feature:e,skipmap:o,bins:i,region:s});for(const e of i)e&&(e.mods=Object.fromEntries(Object.entries(e.mods).map((([e,t])=>[e,{...t,avgProbability:t.probabilities.length?(0,d.sum)(t.probabilities)/t.probabilities.length:void 0}]))),e.nonmods=Object.fromEntries(Object.entries(e.nonmods).map((([e,t])=>[e,{...t,avgProbability:t.probabilities.length?(0,d.sum)(t.probabilities)/t.probabilities.length:void 0}]))));return{bins:i,skipmap:o}}({features:o,region:e,opts:t,fetchSequence:e=>this.fetchSequence(e)});c.forEach(((t,n)=>{const o=e.start+n;s.next(new r.A({id:`${this.id}-${o}`,data:{score:t.depth,snpinfo:t,start:o,end:o+1,refName:e.refName}}))})),Object.entries(p).forEach((([e,t])=>{s.next(new r.A({id:e,data:{type:"skip",start:t.start,end:t.end,strand:t.strand,score:t.score,effectiveStrand:t.effectiveStrand}}))})),s.complete()}),t.signal)}async getMultiRegionFeatureDensityStats(e,t){const{subadapter:s}=await this.configure();return s.getMultiRegionFeatureDensityStats(e,t)}async getRefNames(e={}){const{subadapter:t}=await this.configure();return t.getRefNames(e)}freeResources(){}}},59509:(e,t,s)=>{s.d(t,{r:()=>a});var n=s(93092),r=s(95805),o=s(49256),i=s(86576);function a(e,t){const s=e.get("strand"),a=e.get("seq"),c=(0,i.c$)(e,"MM","Mm")||"",d=t||(0,r.parseCigar)(e.get("CIGAR"));if(a){const t=(0,n.Z1)(c,a,s),r=(0,n.Yj)(e),i=[];let p=0;for(const{type:e,positions:n}of t){for(const{ref:t,idx:a}of(0,o.h)(d,n)){const o=r?.[p+(-1===s?n.length-1-a:a)]||0;if(i[t]){const s=i[t];i[t]={allProbs:[...s.allProbs,o],prob:Math.max(s.prob,o),type:s.prob>o?s.type:e}}else i[t]={type:e,prob:o,allProbs:[o]}}p+=n.length}return i}}}}]);
//# sourceMappingURL=5461.ac024c1b.chunk.js.map