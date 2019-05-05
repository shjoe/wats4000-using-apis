(function(e){function t(t){for(var s,a,u=t[0],i=t[1],l=t[2],p=0,d=[];p<u.length;p++)a=u[p],n[a]&&d.push(n[a][0]),n[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},n={app:0},o=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var s=r("64a9"),n=r.n(s);n.a},"2c33":function(e,t,r){},3671:function(e,t,r){"use strict";var s=r("e51b"),n=r.n(s);n.a},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("a026"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Fun with Datamuse")]),r("Navigation"),r("router-view")],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",e._l(e.links,function(t){return r("router-link",{key:t.id,staticClass:"spacing",attrs:{to:""+t.page}},[e._v(e._s(t.text))])}),1)])},u=[],i={name:"Navigation",data(){return{links:[{id:0,text:"Rhymesaurus",page:"/"},{id:1,text:"Adjective for Noun",page:"/adjfornoun"},{id:2,text:"Guess My Word",page:"/guessmyword"}]}}},l=i,c=(r("3671"),r("2877")),p=Object(c["a"])(l,a,u,!1,null,null,null),d=p.exports,f={name:"app",components:{Navigation:d}},m=f,h=(r("034f"),Object(c["a"])(m,n,o,!1,null,null,null)),v=h.exports,_=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rhymesaurus"},[r("h2",[e._v("Rhymesaurus: The Rhyming Thesaurus")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.findWords(t)}}},[r("p",[e._v("\n      Find rhymes for\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.rhyme,expression:"rhyme"}],attrs:{type:"text"},domProps:{value:e.rhyme},on:{input:function(t){t.target.composing||(e.rhyme=t.target.value)}}}),e._v(" related to\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.phrase,expression:"phrase"}],attrs:{type:"text"},domProps:{value:e.phrase},on:{input:function(t){t.target.composing||(e.phrase=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e.results&&e.results.length>0?r("ul",{staticClass:"results"},e._l(e.results,function(t,s){return r("li",{key:s,staticClass:"item"},[r("p",[r("strong",[e._v(e._s(t.word))])]),r("p",[e._v(e._s(t.score))])])}),0):e.results&&0==e.results.length?r("div",{staticClass:"no-results"},[r("h2",[e._v("No Words Found")]),r("p",[e._v("Please adjust your search to find more words.")])]):e._e(),e.errors&&e.errors.length>0?r("ul",{staticClass:"errors"},e._l(e.errors,function(t,s){return r("li",{key:s},[e._v(e._s(t.message))])}),0):e._e()])},y=[],b=r("bc3a"),w=r.n(b),j={name:"Rhymesaurus",data(){return{results:null,errors:[],phrase:"",rhyme:""}},methods:{findWords:function(){w.a.get("https://api.datamuse.com/words",{params:{ml:this.phrase,rel_rhy:this.rhyme}}).then(e=>{this.results=e.data}).catch(e=>{this.errors.push(e)})}}},x=j,C=(r("a759"),Object(c["a"])(x,g,y,!1,null,"62954e40",null)),k=C.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"adjfornoun"},[r("h2",[e._v("Adjective for Noun")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.findWords(t)}}},[r("p",[e._v("\n      Find an Adjective for a given Noun\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.noun,expression:"noun"}],attrs:{type:"text"},domProps:{value:e.noun},on:{input:function(t){t.target.composing||(e.noun=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e.results&&e.results.length>0?r("ul",{staticClass:"results"},e._l(e.results,function(t,s){return r("li",{key:s,staticClass:"item"},[r("p",[r("strong",[e._v(e._s(t.word))])]),r("p",[e._v(e._s(t.score))])])}),0):e.results&&0==e.results.length?r("div",{staticClass:"no-results"},[r("h2",[e._v("No Words Found")]),r("p",[e._v("Please adjust your search to find more words.")])]):e._e(),e.errors&&e.errors.length>0?r("ul",{staticClass:"errors"},e._l(e.errors,function(t,s){return r("li",{key:s},[e._v(e._s(t.message))])}),0):e._e()])},O=[],P={name:"AdjForNoun",data(){return{results:null,errors:[],noun:""}},methods:{findWords:function(){w.a.get("https://api.datamuse.com/words",{params:{rel_jjb:this.noun}}).then(e=>{this.results=e.data}).catch(e=>{this.errors.push(e)})}}},W=P,S=(r("7ea9"),Object(c["a"])(W,N,O,!1,null,"23d48b4d",null)),F=S.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"guessmyword"},[r("h2",[e._v("Guess My Word")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.findWords(t)}}},[r("p",[e._v("\n      Don't know how a word is spelt? Enter your best guess and see the results:\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.guess,expression:"guess"}],attrs:{type:"text"},domProps:{value:e.guess},on:{input:function(t){t.target.composing||(e.guess=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e.results&&e.results.length>0?r("ul",{staticClass:"results"},e._l(e.results,function(t,s){return r("li",{key:s,staticClass:"item"},[r("p",[r("strong",[e._v(e._s(t.word))])]),r("p",[e._v(e._s(t.score))])])}),0):e.results&&0==e.results.length?r("div",{staticClass:"no-results"},[r("h2",[e._v("No Words Found")]),r("p",[e._v("Please adjust your search to find more words.")])]):e._e(),e.errors&&e.errors.length>0?r("ul",{staticClass:"errors"},e._l(e.errors,function(t,s){return r("li",{key:s},[e._v(e._s(t.message))])}),0):e._e()])},A=[],E={name:"GuessMyWord",data(){return{results:null,errors:[],guess:""}},methods:{findWords:function(){w.a.get("https://api.datamuse.com/words",{params:{sl:this.guess}}).then(e=>{this.results=e.data}).catch(e=>{this.errors.push(e)})}}},D=E,T=(r("fe39"),Object(c["a"])(D,M,A,!1,null,"08b4708c",null)),$=T.exports;s["a"].use(_["a"]);var R=new _["a"]({routes:[{path:"/",name:"rhymesaurus",component:k},{path:"/adjfornoun",name:"adjfornoun",component:F},{path:"/guessmyword",name:"guessmyword",component:$}]});s["a"].config.productionTip=!1,new s["a"]({el:"#app",router:R,template:"<App/>",components:{App:v}})},"64a9":function(e,t,r){},"707d":function(e,t,r){},"7ea9":function(e,t,r){"use strict";var s=r("707d"),n=r.n(s);n.a},a759:function(e,t,r){"use strict";var s=r("2c33"),n=r.n(s);n.a},b9fa:function(e,t,r){},e51b:function(e,t,r){},fe39:function(e,t,r){"use strict";var s=r("b9fa"),n=r.n(s);n.a}});
//# sourceMappingURL=app.124ce94b.js.map