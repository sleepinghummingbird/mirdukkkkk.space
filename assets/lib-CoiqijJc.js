var n,t,i,r,o,e,u,f,l,s,c,a,v={},h=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function p(n,t){for(var i in t)n[i]=t[i];return n}function _(n){var t=n.parentNode;t&&t.removeChild(n)}function w(t,i,r){var o,e,u,f={};for(u in i)"key"==u?o=i[u]:"ref"==u?e=i[u]:f[u]=i[u];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(u in t.defaultProps)void 0===f[u]&&(f[u]=t.defaultProps[u]);return g(t,f,o,e,null)}function g(n,r,o,e,u){var f={type:n,props:r,key:o,ref:e,_:null,m:null,k:0,C:null,O:void 0,j:null,constructor:void 0,P:u??++i,$:-1,A:0};return null==u&&null!=t.vnode&&t.vnode(f),f}function m(){return{current:null}}function b(n){return n.children}function k(n,t){this.props=n,this.context=t}function S(n,t){if(null==t)return n.m?S(n.m,n.$+1):null;for(var i;t<n._.length;t++)if(null!=(i=n._[t])&&null!=i.C)return i.C;return"function"==typeof n.type?S(n):null}function C(n){var t,i;if(null!=(n=n.m)&&null!=n.j){for(n.C=n.j.base=null,t=0;t<n._.length;t++)if(null!=(i=n._[t])&&null!=i.C){n.C=n.j.base=i.C;break}return C(n)}}function x(n){(!n.O&&(n.O=!0)&&o.push(n)&&!E.L++||e!==t.debounceRendering)&&((e=t.debounceRendering)||u)(E)}function E(){var n,i,r,e,u,l,s,c;for(o.sort(f);n=o.shift();)n.O&&(i=o.length,e=void 0,l=(u=(r=n).P).C,s=[],c=[],r.T&&((e=p({},u)).P=u.P+1,t.vnode&&t.vnode(e),T(r.T,e,u,r.F,r.T.namespaceURI,32&u.A?[l]:null,s,l??S(u),!!(32&u.A),c),e.P=u.P,e.m._[e.$]=e,F(s,e,c),e.C!=l&&C(e)),o.length>i&&o.sort(f));E.L=0}function O(n,t,i,r,o,e,u,f,l,s,c){var a,d,p,_,w,m=r&&r._||h,k=t.length;for(i.O=l,((n,t,i)=>{var r,o,e,u,f,l=t.length,s=i.length,c=s,a=0;for(n._=[],r=0;l>r;r++)u=r+a,null!=(o=n._[r]=null==(o=t[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):y(o)?g(b,{children:o},null,null,null):void 0===o.constructor&&o.k>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.P):o)?(o.m=n,o.k=n.k+1,f=P(o,i,u,c),o.$=f,e=null,-1!==f&&(c--,(e=i[f])&&(e.A|=131072)),null==e||null===e.P?(-1==f&&a--,"function"!=typeof o.type&&(o.A|=65536)):f!==u&&(f===u+1?a++:f>u?c>l-u?a+=f-u:a--:u>f?f==u-1&&(a=f-u):a=0,f!==r+a&&(o.A|=65536))):(e=i[u])&&null==e.key&&e.C&&!(131072&e.A)&&(e.C==n.O&&(n.O=S(e)),M(e,e,!1),i[u]=null,c--);if(c)for(r=0;s>r;r++)null!=(e=i[r])&&!(131072&e.A)&&(e.C==n.O&&(n.O=S(e)),M(e,e))})(i,t,m),l=i.O,a=0;k>a;a++)null!=(p=i._[a])&&"boolean"!=typeof p&&"function"!=typeof p&&(d=-1===p.$?v:m[p.$]||v,p.$=a,T(n,p,d,o,e,u,f,l,s,c),_=p.C,p.ref&&d.ref!=p.ref&&(d.ref&&I(d.ref,null,p),c.push(p.ref,p.j||_,p)),null==w&&null!=_&&(w=_),65536&p.A||d._===p._?(l&&!l.isConnected&&(l=S(d)),l=j(p,l,n)):"function"==typeof p.type&&void 0!==p.O?l=p.O:_&&(l=_.nextSibling),p.O=void 0,p.A&=-196609);i.O=l,i.C=w}function j(n,t,i){var r,o;if("function"==typeof n.type){for(r=n._,o=0;r&&o<r.length;o++)r[o]&&(r[o].m=n,t=j(r[o],t,i));return t}n.C!=t&&(i.insertBefore(n.C,t||null),t=n.C);do{t=t&&t.nextSibling}while(null!=t&&8===t.nodeType);return t}function P(n,t,i,r){var o=n.key,e=n.type,u=i-1,f=i+1,l=t[i];if(null===l||l&&o==l.key&&e===l.type&&!(131072&l.A))return i;if(r>(null==l||131072&l.A?0:1))for(;u>=0||f<t.length;){if(u>=0){if((l=t[u])&&!(131072&l.A)&&o==l.key&&e===l.type)return u;u--}if(f<t.length){if((l=t[f])&&!(131072&l.A)&&o==l.key&&e===l.type)return f;f++}}return-1}function $(n,t,i){"-"===t[0]?n.setProperty(t,i??""):n[t]=null==i?"":"number"!=typeof i||d.test(t)?i:i+"px"}function A(n,t,i,r,o){var e;n:if("style"===t)if("string"==typeof i)n.style.cssText=i;else{if("string"==typeof r&&(n.style.cssText=r=""),r)for(t in r)i&&t in i||$(n.style,t,"");if(i)for(t in i)r&&i[t]===r[t]||$(n.style,t,i[t])}else if("o"===t[0]&&"n"===t[1])e=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in n||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),n.l||(n.l={}),n.l[t+e]=i,i?r?i.u=r.u:(i.u=l,n.addEventListener(t,e?c:s,e)):n.removeEventListener(t,e?c:s,e);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&t in n)try{n[t]=i??"";break n}catch(u){}"function"==typeof i||(null==i||!1===i&&"-"!==t[4]?n.removeAttribute(t):n.setAttribute(t,i))}}function L(n){return function(i){if(this.l){var r=this.l[i.type+n];if(null==i.t)i.t=l++;else if(i.t<r.u)return;return r(t.event?t.event(i):i)}}}function T(i,r,o,e,u,f,l,s,c,a){var h,d,w,g,m,C,x,E,j,P,$,L,T,F,I,M=r.type;if(void 0!==r.constructor)return null;128&o.A&&(c=!!(32&o.A),f=[s=r.C=o.C]),(h=t.k)&&h(r);n:if("function"==typeof M)try{if(E=r.props,j=(h=M.contextType)&&e[h.j],P=h?j?j.props.value:h.m:e,o.j?x=(d=r.j=o.j).m=d.I:("prototype"in M&&M.prototype.render?r.j=d=new M(E,P):(r.j=d=new k(E,P),d.constructor=M,d.render=R),j&&j.sub(d),d.props=E,d.state||(d.state={}),d.context=P,d.F=e,w=d.O=!0,d.M=[],d.R=[]),null==d.H&&(d.H=d.state),null!=M.getDerivedStateFromProps&&(d.H==d.state&&(d.H=p({},d.H)),p(d.H,M.getDerivedStateFromProps(E,d.H))),g=d.props,m=d.state,d.P=r,w)null==M.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.M.push(d.componentDidMount);else{if(null==M.getDerivedStateFromProps&&E!==g&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(E,P),!d.C&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(E,d.H,P)||r.P===o.P)){for(r.P!==o.P&&(d.props=E,d.state=d.H,d.O=!1),r.C=o.C,r._=o._,r._.forEach((n=>{n&&(n.m=r)})),$=0;$<d.R.length;$++)d.M.push(d.R[$]);d.R=[],d.M.length&&l.push(d);break n}null!=d.componentWillUpdate&&d.componentWillUpdate(E,d.H,P),null!=d.componentDidUpdate&&d.M.push((()=>{d.componentDidUpdate(g,m,C)}))}if(d.context=P,d.props=E,d.T=i,d.C=!1,L=t.L,T=0,"prototype"in M&&M.prototype.render){for(d.state=d.H,d.O=!1,L&&L(r),h=d.render(d.props,d.state,d.context),F=0;F<d.R.length;F++)d.M.push(d.R[F]);d.R=[]}else do{d.O=!1,L&&L(r),h=d.render(d.props,d.state,d.context),d.state=d.H}while(d.O&&25>++T);d.state=d.H,null!=d.getChildContext&&(e=p(p({},e),d.getChildContext())),w||null==d.getSnapshotBeforeUpdate||(C=d.getSnapshotBeforeUpdate(g,m)),O(i,y(I=null!=h&&h.type===b&&null==h.key?h.props.children:h)?I:[I],r,o,e,u,f,l,s,c,a),d.base=r.C,r.A&=-161,d.M.length&&l.push(d),x&&(d.I=d.m=null)}catch(H){r.P=null,c||null!=f?(r.C=s,r.A|=c?160:32,f[f.indexOf(s)]=null):(r.C=o.C,r._=o._),t.C(H,r,o)}else null==f&&r.P===o.P?(r._=o._,r.C=o.C):r.C=((t,i,r,o,e,u,f,l,s)=>{var c,a,h,d,p,w,g,m=r.props,b=i.props,k=i.type;if("svg"===k?e="http://www.w3.org/2000/svg":"math"===k?e="http://www.w3.org/1998/Math/MathML":e||(e="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((p=u[c])&&"setAttribute"in p==!!k&&(k?p.localName===k:3===p.nodeType)){t=p,u[c]=null;break}if(null==t){if(null===k)return document.createTextNode(b);t=document.createElementNS(e,k,b.is&&b),u=null,l=!1}if(null===k)m===b||l&&t.data===b||(t.data=b);else{if(u=u&&n.call(t.childNodes),m=r.props||v,!l&&null!=u)for(m={},c=0;c<t.attributes.length;c++)m[(p=t.attributes[c]).name]=p.value;for(c in m)if(p=m[c],"children"==c);else if("dangerouslySetInnerHTML"==c)h=p;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;A(t,c,null,p,e)}for(c in b)p=b[c],"children"==c?d=p:"dangerouslySetInnerHTML"==c?a=p:"value"==c?w=p:"checked"==c?g=p:"key"===c||l&&"function"!=typeof p||m[c]===p||A(t,c,p,m[c],e);if(a)l||h&&(a.q===h.q||a.q===t.innerHTML)||(t.innerHTML=a.q),i._=[];else if(h&&(t.innerHTML=""),O(t,y(d)?d:[d],i,r,o,"foreignObject"===k?"http://www.w3.org/1999/xhtml":e,u,f,u?u[0]:r._&&S(r,0),l,s),null!=u)for(c=u.length;c--;)null!=u[c]&&_(u[c]);l||(c="value",void 0!==w&&(w!==t[c]||"progress"===k&&!w||"option"===k&&w!==m[c])&&A(t,c,w,m[c],e),c="checked",void 0!==g&&g!==t[c]&&A(t,c,g,m[c],e))}return t})(o.C,r,o,e,u,f,l,c,a);(h=t.diffed)&&h(r)}function F(n,i,r){i.O=void 0;for(var o=0;o<r.length;o++)I(r[o],r[++o],r[++o]);t.j&&t.j(i,n),n.some((i=>{try{n=i.M,i.M=[],n.some((n=>{n.call(i)}))}catch(r){t.C(r,i.P)}}))}function I(n,i,r){try{"function"==typeof n?n(i):n.current=i}catch(o){t.C(o,r)}}function M(n,i,r){var o,e;if(t.unmount&&t.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.C||I(o,null,i)),null!=(o=n.j)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(u){t.C(u,i)}o.base=o.T=null}if(o=n._)for(e=0;e<o.length;e++)o[e]&&M(o[e],i,r||"function"!=typeof n.type);r||null==n.C||_(n.C),n.j=n.m=n.C=n.O=void 0}function R(n,t,i){return this.constructor(n,i)}function H(i,r,o){var e,u,f,l;t.m&&t.m(i,r),u=(e="function"==typeof o)?null:r._,f=[],l=[],T(r,i=(!e&&o||r)._=w(b,null,[i]),u||v,v,r.namespaceURI,!e&&o?[o]:u?null:r.firstChild?n.call(r.childNodes):null,f,!e&&o?o:u?u.C:r.firstChild,e,l),F(f,i,l)}function N(t,i,r){var o,e,u,f,l=p({},t.props);for(u in t.type&&t.type.defaultProps&&(f=t.type.defaultProps),i)"key"==u?o=i[u]:"ref"==u?e=i[u]:l[u]=void 0===i[u]&&void 0!==f?f[u]:i[u];return arguments.length>2&&(l.children=arguments.length>3?n.call(arguments,2):r),g(t.type,l,o||t.key,e||t.ref,null)}function q(n,t){var i={j:t="__cC"+a++,m:n,Consumer(n,t){return n.children(t)},Provider(n){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=()=>r,this.shouldComponentUpdate=function(n){this.props.value!==n.value&&i.some((n=>{n.C=!0,x(n)}))},this.sub=n=>{i.push(n);var t=n.componentWillUnmount;n.componentWillUnmount=()=>{i.splice(i.indexOf(n),1),t&&t.call(n)}}),n.children}};return i.Provider.m=i.Consumer.contextType=i}n=h.slice,t={C(n,t,i,r){for(var o,e,u;t=t.m;)if((o=t.j)&&!o.m)try{if((e=o.constructor)&&null!=e.getDerivedStateFromError&&(o.setState(e.getDerivedStateFromError(n)),u=o.O),null!=o.componentDidCatch&&(o.componentDidCatch(n,r||{}),u=o.O),u)return o.I=o}catch(f){n=f}throw n}},i=0,r=n=>null!=n&&null==n.constructor,k.prototype.setState=function(n,t){var i;i=null!=this.H&&this.H!==this.state?this.H:this.H=p({},this.state),"function"==typeof n&&(n=n(p({},i),this.props)),n&&p(i,n),null!=n&&this.P&&(t&&this.R.push(t),x(this))},k.prototype.forceUpdate=function(n){this.P&&(this.C=!0,n&&this.M.push(n),x(this))},k.prototype.render=b,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=(n,t)=>n.P.k-t.P.k,E.L=0,l=0,s=L(!1),c=L(!0),a=0;var V,z,B,U,D=0,G=[],J=[],K=t,Q=K.k,W=K.L,X=K.diffed,Y=K.j,Z=K.unmount,nn=K.m;function tn(n,t){K.M&&K.M(z,n,D||t),D=0;var i=z.V||(z.V={m:[],M:[]});return n>=i.m.length&&i.m.push({B:J}),i.m[n]}function rn(n,t){var i=tn(V++,4);!K.H&&an(i.V,t)&&(i.m=n,i.i=t,z.M.push(i))}function on(n){return D=5,en((()=>({current:n})),[])}function en(n,t){var i=tn(V++,7);return an(i.V,t)?(i.B=n(),i.i=t,i.M=n,i.B):i.m}function un(){for(var n;n=G.shift();)if(n.T&&n.V)try{n.V.M.forEach(sn),n.V.M.forEach(cn),n.V.M=[]}catch(t){n.V.M=[],K.C(t,n.P)}}K.k=n=>{z=null,Q&&Q(n)},K.m=(n,t)=>{n&&t._&&t._.D&&(n.D=t._.D),nn&&nn(n,t)},K.L=n=>{W&&W(n),V=0;var t=(z=n.j).V;t&&(B===z?(t.M=[],z.M=[],t.m.forEach((n=>{n.G&&(n.m=n.G),n.B=J,n.G=n.i=void 0}))):(t.M.forEach(sn),t.M.forEach(cn),t.M=[],V=0)),B=z},K.diffed=n=>{X&&X(n);var t=n.j;t&&t.V&&(t.V.M.length&&(1!==G.push(t)&&U===K.requestAnimationFrame||((U=K.requestAnimationFrame)||ln)(un)),t.V.m.forEach((n=>{n.i&&(n.V=n.i),n.B!==J&&(n.m=n.B),n.i=void 0,n.B=J}))),B=z=null},K.j=(n,t)=>{t.some((n=>{try{n.M.forEach(sn),n.M=n.M.filter((n=>!n.m||cn(n)))}catch(i){t.some((n=>{n.M&&(n.M=[])})),t=[],K.C(i,n.P)}})),Y&&Y(n,t)},K.unmount=n=>{Z&&Z(n);var t,i=n.j;i&&i.V&&(i.V.m.forEach((n=>{try{sn(n)}catch(i){t=i}})),i.V=void 0,t&&K.C(t,i.P))};var fn="function"==typeof requestAnimationFrame;function ln(n){var t,i=()=>{clearTimeout(r),fn&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(i,100);fn&&(t=requestAnimationFrame(i))}function sn(n){var t=z,i=n.j;"function"==typeof i&&(n.j=void 0,i()),z=t}function cn(n){var t=z;n.j=n.m(),z=t}function an(n,t){return!n||n.length!==t.length||t.some(((t,i)=>t!==n[i]))}function vn(n,t){return"function"==typeof t?t(n):t}const hn=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement);function dn(n,t){return n===t&&(0!==n||1/n==1/t)||n!=n&&t!=t}const yn=n=>{const t=on([n,(...n)=>t[0](...n)]).current;return rn((()=>{t[0]=n})),t[1]},pn="pushState",_n="replaceState",wn=["popstate",pn,_n,"hashchange"],gn=n=>{for(const t of wn)addEventListener(t,n);return()=>{for(const t of wn)removeEventListener(t,n)}},mn=(n,t)=>function(n,t,i){i&&!hn&&(t=i);const r=t(),[{J:o},e]=function(n){return D=1,function(n,t){var i=tn(V++,2);if(i.t=n,!i.j&&(i.m=[vn(void 0,t),n=>{var t=i.G?i.G[0]:i.m[0],r=i.t(t,n);t!==r&&(i.G=[r,i.m[1]],i.j.setState({}))}],i.j=z,!z.u)){var r=function(n,t,r){if(!i.j.V)return!0;var e=i.j.V.m.filter((n=>!!n.j));if(e.every((n=>!n.G)))return!o||o.call(this,n,t,r);var u=!1;return e.forEach((n=>{if(n.G){var t=n.m[0];n.m=n.G,n.G=void 0,t!==n.m[0]&&(u=!0)}})),!(!u&&i.j.props===n)&&(!o||o.call(this,n,t,r))};z.u=!0;var o=z.shouldComponentUpdate,e=z.componentWillUpdate;z.componentWillUpdate=function(n,t,i){if(this.C){var u=o;o=void 0,r(n,t,i),o=u}e&&e.call(this,n,t,i)},z.shouldComponentUpdate=r}return i.G||i.m}(vn,n)}({J:{K:r,W:t}});var u,f,l;return rn((()=>{o.K=r,o.W=t,dn(o.K,t())||e({J:o})}),[n,r,t]),u=()=>(dn(o.K,o.W())||e({J:o}),n((()=>{dn(o.K,o.W())||e({J:o})}))),f=[n],l=tn(V++,3),!K.H&&an(l.V,f)&&(l.m=u,l.i=f,z.V.M.push(l)),r}(gn,n,t),bn=()=>location.search,kn=()=>location.pathname,Sn=({ssrPath:n}={})=>mn(kn,n?()=>n:kn),Cn=(n,{replace:t=!1,state:i=null}={})=>history[t?_n:pn](i,"",n),xn=Symbol.for("wouter_v3");if("undefined"!=typeof history&&void 0===window[xn]){for(const n of[pn,_n]){const t=history[n];history[n]=function(){const i=t.apply(this,arguments),r=new Event(n);return r.arguments=arguments,dispatchEvent(r),i}}Object.defineProperty(window,xn,{value:!0})}const En=(n="",t)=>t.toLowerCase().indexOf(n.toLowerCase())?"~"+t:t.slice(n.length)||"/",On=n=>{try{return decodeURI(n)}catch(t){return n}},jn={hook(n={}){return[Sn(n),Cn]},searchHook({ssrSearch:n=""}={}){return mn(bn,(()=>n))},parser(n,t){if(n instanceof RegExp)return{keys:!1,pattern:n};var i,r,o,e,u=[],f="",l=n.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(i=o[0])?(u.push(i),f+="?"===o[1]?"(?:/(.*))?":"/(.*)"):":"===i?(r=o.indexOf("?",1),e=o.indexOf(".",1),u.push(o.substring(1,~r?r:~e?e:o.length)),f+=~r&&!~e?"(?:/([^/]+?))?":"/([^/]+?)",~e&&(f+=(~r?"?":"")+"\\"+o.substring(e))):f+="/"+o;return{keys:u,pattern:RegExp("^"+f+(t?"(?=$|/)":"/?$"),"i")}},base:"",ssrPath:void 0,ssrSearch:void 0,hrefs(n){return n}},Pn=q(jn),$n=()=>{return n=Pn,t=z.context[n.j],(i=tn(V++,9)).c=n,t?(null==i.m&&(i.m=!0,t.sub(z)),t.props.value):n.m;var n,t,i},An=q({}),Ln=n=>{const[t,i]=n.hook(n);return[On(En(n.base,t)),yn(((t,r)=>i(((n,t="")=>"~"===n[0]?n.slice(1):t+n)(t,n.base),r)))]},Tn=(n,t,i,r)=>{const{pattern:o,keys:e}=t instanceof RegExp?{keys:!1,pattern:t}:n(t||"*",r),u=o.exec(i)||[],[f,...l]=u;return void 0!==f?[!0,(()=>{const n=!1!==e?Object.fromEntries(e.map(((n,t)=>[n,l[t]]))):u.groups;let t={...l};return n&&Object.assign(t,n),t})(),...r?[f]:[]]:[!1,null]},Fn=({children:n,...t})=>{var i,r;const o=$n(),e=t.hook?jn:o;let u=e;const[f,l]=(null==(i=t.ssrPath)?void 0:i.split("?"))??[];l&&(t.ssrSearch=l,t.ssrPath=f),t.hrefs=t.hrefs??(null==(r=t.hook)?void 0:r.hrefs);let s=on({}),c=s.current,a=c;for(let v in e){const n="base"===v?e[v]+(t[v]||""):t[v]||e[v];c===a&&n!==a[v]&&(s.current=a={...a}),a[v]=n,n!==e[v]&&(u=a)}return w(Pn.Provider,{value:u,children:n})},In=({children:n,component:t},i)=>t?w(t,{params:i}):"function"==typeof n?n(i):n,Mn=({path:n,nest:t,match:i,...r})=>{const o=$n(),[e]=Ln(o),[u,f,l]=i??Tn(o.parser,n,e,t);if(!u)return null;const s=l?w(Fn,{base:l},In(r,f)):In(r,f);return w(An.Provider,{value:f,children:s})},Rn=(n,t)=>{const i=$n(),[o,e]=Ln(i),{to:u,href:f=u,onClick:l,asChild:s,children:c,className:a,replace:v,state:h,...d}=n,y=yn((t=>{t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button||(null==l||l(t),t.defaultPrevented||(t.preventDefault(),e(f,n)))})),p=i.hrefs("~"===f[0]?f.slice(1):i.base+f,i);return s&&r(c)?N(c,{onClick:y,href:p}):w("a",{...d,onClick:y,href:p,className:(null==a?void 0:a.call)?a(o===f):a,children:c,ref:t})},Hn=n=>Array.isArray(n)?n.flatMap((n=>Hn(n&&n.type===b?n.props.children:n))):[n],Nn=({children:n,location:t})=>{const i=$n(),[o]=Ln(i);for(const e of Hn(n)){let n=0;if(r(e)&&(n=Tn(i.parser,e.props.path,t||o,e.props.nest))[0])return N(e,{match:n})}return null},qn=n=>{const{to:t,href:i=t}=n,[,r]=Ln($n()),o=yn((()=>r(t||i,n)));return rn((()=>{o()}),[]),null};var Vn=Symbol.for("preact-signals");function zn(){if(Gn>1)Gn--;else{for(var n,t=!1;void 0!==Dn;){var i=Dn;for(Dn=void 0,Jn++;void 0!==i;){var r=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Yn(i))try{i.c()}catch(o){t||(n=o,t=!0)}i=r}}if(Jn=0,Gn--,t)throw n}}var Bn,Un=void 0,Dn=void 0,Gn=0,Jn=0,Kn=0;function Qn(n){if(void 0!==Un){var t=n.n;if(void 0===t||t.t!==Un)return t={i:0,S:n,p:Un.s,n:void 0,t:Un,e:void 0,x:void 0,r:t},void 0!==Un.s&&(Un.s.n=t),Un.s=t,n.n=t,32&Un.f&&n.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=Un.s,t.n=void 0,Un.s.n=t,Un.s=t),t}}function Wn(n){this.v=n,this.i=0,this.n=void 0,this.t=void 0}function Xn(n){return new Wn(n)}function Yn(n){for(var t=n.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Zn(n){for(var t=n.s;void 0!==t;t=t.n){var i=t.S.n;if(void 0!==i&&(t.r=i),t.S.n=t,t.i=-1,void 0===t.n){n.s=t;break}}}function nt(n){for(var t=n.s,i=void 0;void 0!==t;){var r=t.p;-1===t.i?(t.S.U(t),void 0!==r&&(r.n=t.n),void 0!==t.n&&(t.n.p=r)):i=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=r}n.s=i}function tt(n){Wn.call(this,void 0),this.x=n,this.s=void 0,this.g=Kn-1,this.f=4}function it(n){var t=n.u;if(n.u=void 0,"function"==typeof t){Gn++;var i=Un;Un=void 0;try{t()}catch(r){throw n.f&=-2,n.f|=8,rt(n),r}finally{Un=i,zn()}}}function rt(n){for(var t=n.s;void 0!==t;t=t.n)t.S.U(t);n.x=void 0,n.s=void 0,it(n)}function ot(n){if(Un!==this)throw Error("Out-of-order effect");nt(this),Un=n,this.f&=-2,8&this.f&&rt(this),zn()}function et(n){this.x=n,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function ut(n){var t=new et(n);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}function ft(n,i){t[n]=i.bind(null,t[n]||(()=>{}))}function lt(n){Bn&&Bn(),Bn=n&&n.S()}function st(n){var t=this,i=n.data,o=(n=>en((()=>Xn(n)),[]))(i);o.value=i;var e=en((()=>{for(var n=t.P;n=n.m;)if(n.j){n.j.X|=4;break}return t.Y.c=()=>{var n;r(e.peek())||3!==(null==(n=t.base)?void 0:n.nodeType)?(t.X|=1,t.setState({})):t.base.data=e.peek()},new tt((()=>{var n=o.value.value;return 0===n?0:!0===n?"":n||""}))}),[]);return e.value}function ct(n,t,i,r){var o=t in n&&void 0===n.ownerSVGElement,e=Xn(i);return{o(n,t){e.value=n,r=t},d:ut((()=>{var i=e.value.value;r[t]!==i&&(r[t]=i,o?n[t]=i:i?n.setAttribute(t,i):n.removeAttribute(t))}))}}Wn.prototype.brand=Vn,Wn.prototype.h=()=>!0,Wn.prototype.S=function(n){this.t!==n&&void 0===n.e&&(n.x=this.t,void 0!==this.t&&(this.t.e=n),this.t=n)},Wn.prototype.U=function(n){if(void 0!==this.t){var t=n.e,i=n.x;void 0!==t&&(t.x=i,n.e=void 0),void 0!==i&&(i.e=t,n.x=void 0),n===this.t&&(this.t=i)}},Wn.prototype.subscribe=function(n){var t=this;return ut((()=>{var i=t.value,r=Un;Un=void 0;try{n(i)}finally{Un=r}}))},Wn.prototype.valueOf=function(){return this.value},Wn.prototype.toString=function(){return this.value+""},Wn.prototype.toJSON=function(){return this.value},Wn.prototype.peek=function(){var n=Un;Un=void 0;try{return this.value}finally{Un=n}},Object.defineProperty(Wn.prototype,"value",{get(){var n=Qn(this);return void 0!==n&&(n.i=this.i),this.v},set(n){if(n!==this.v){if(Jn>100)throw Error("Cycle detected");this.v=n,this.i++,Kn++,Gn++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{zn()}}}}),(tt.prototype=new Wn).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Kn)return!0;if(this.g=Kn,this.f|=1,this.i>0&&!Yn(this))return this.f&=-2,!0;var n=Un;try{Zn(this),Un=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return Un=n,nt(this),this.f&=-2,!0},tt.prototype.S=function(n){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}Wn.prototype.S.call(this,n)},tt.prototype.U=function(n){if(void 0!==this.t&&(Wn.prototype.U.call(this,n),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},tt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;void 0!==n;n=n.x)n.t.N()}},Object.defineProperty(tt.prototype,"value",{get(){if(1&this.f)throw Error("Cycle detected");var n=Qn(this);if(this.h(),void 0!==n&&(n.i=this.i),16&this.f)throw this.v;return this.v}}),et.prototype.c=function(){var n=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.u=t)}finally{n()}},et.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,it(this),Zn(this),Gn++;var n=Un;return Un=this,ot.bind(this,n)},et.prototype.N=function(){2&this.f||(this.f|=2,this.o=Dn,Dn=this)},et.prototype.d=function(){this.f|=8,1&this.f||rt(this)},st.displayName="_st",Object.defineProperties(Wn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:st},props:{configurable:!0,get(){return{data:this}}},k:{configurable:!0,value:1}}),ft("__b",((n,t)=>{if("string"==typeof t.type){var i,r=t.props;for(var o in r)if("children"!==o){var e=r[o];e instanceof Wn&&(i||(t.Z=i={}),i[o]=e,r[o]=e.peek())}}n(t)})),ft("__r",(function(n,t){lt();var i,r,o=t.j;o&&(o.X&=-2,void 0===(i=o.Y)&&(o.Y=(ut((function(){r=this})),r.c=()=>{o.X|=1,o.setState({})},i=r))),lt(i),n(t)})),ft("__e",((n,t,i,r)=>{lt(),n(t,i,r)})),ft("diffed",((n,t)=>{var i;if(lt(),"string"==typeof t.type&&(i=t.C)){var r=t.Z,o=t.props;if(r){var e=i.U;if(e)for(var u in e){var f=e[u];void 0===f||u in r||(f.d(),e[u]=void 0)}else i.U=e={};for(var l in r){var s=e[l],c=r[l];void 0===s?(s=ct(i,l,c,o),e[l]=s):s.o(c,o)}}}n(t)})),ft("unmount",((n,t)=>{if("string"==typeof t.type){var i=t.C;if(i){var r=i.U;if(r)for(var o in i.U=void 0,r){var e=r[o];e&&e.d()}}}else{var u=t.j;if(u){var f=u.Y;f&&(u.Y=void 0,f.d())}}n(t)})),ft("__h",((n,t,i,r)=>{(3>r||9===r)&&(t.X|=2),n(t,i,r)})),k.prototype.shouldComponentUpdate=function(n,t){var i=this.Y;if(!(i&&void 0!==i.s||4&this.X))return!0;if(3&this.X)return!0;for(var r in t)return!0;for(var o in n)if("__source"!==o&&n[o]!==this.props[o])return!0;for(var e in this.props)if(!(e in n))return!0;return!1};var at=0;function vt(n,i,r,o,e,u){i||(i={});var f,l,s=i;if("ref"in s)for(l in s={},i)"ref"==l?f=i[l]:s[l]=i[l];var c={type:n,props:s,key:r,ref:f,_:null,m:null,k:0,C:null,O:void 0,j:null,constructor:void 0,P:--at,$:-1,A:0,nn:e,tn:u};if("function"==typeof n&&(f=n.defaultProps))for(l in f)void 0===s[l]&&(s[l]=f[l]);return t.vnode&&t.vnode(c),c}export{H as B,q as G,Rn as L,qn as R,Nn as S,Mn as a,k as b,Xn as d,b as k,m,vt as u};
//# sourceMappingURL=lib-CoiqijJc.js.map
