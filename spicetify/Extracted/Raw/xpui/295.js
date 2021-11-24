"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[295],{72917:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(67294),l=a.n(n),r=a(76439),i=a(20657),o=a(56802),c=a(61290);const s=({id:e,children:t,targetURI:a})=>{const s=(0,n.useCallback)((()=>{const e=new URL("go",window.location.origin);e.searchParams.set("uri",a.toURI()),e.searchParams.set("rtd","1"),window.open(e.href)}),[a]),m={getTitle:()=>i.ag.get("action-trigger.available-in-app-only"),getDescription:()=>i.ag.get("action-trigger.listen-mixed-media-episode"),primaryButtonText:()=>i.ag.get("action-trigger.button.get-app"),secondaryButtonText:()=>i.ag.get("action-trigger.button.not-now"),isCTA:!0,intentPrimaryButton:"download-app",onLogInteraction:(0,o.o)()};return l().createElement(r.P,{className:c.Z.container,id:e,onPrimaryButtonClick:s,options:m},t)}},90110:(e,t,a)=>{a.d(t,{q:()=>D,o:()=>L});var n=a(67294),l=a.n(n),r=a(69518),i=a.n(r),o=a(50020),c=a(96895),s=a(24656),m=a(69010),d=a(94184),u=a.n(d);const g="_d4_L7w1NI7t09jkH7cu",p="q6RbWlHDlbjkbXsca2Yd",h="YuL8TZO5okStcwZtm4zm",v="_TQIlzCUR8U8a6e2b1GQ",b="UvNLcAhjESB_LRPqmfOK",E="JRR8DDodD_hwH0AdW_Z1",f="_YsfF19yZTzikt2Ed8hB";var y=a(6116),w=a(20657),N=a(40080),k=a(38209);var O=a(80946),_=a(83692);let D;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(D||(D={}));const C=e=>{const{currentTarget:t,detail:a}=e;a>0&&t&&t.blur()},L=({uri:e,isFollowing:t,onFollow:a,size:r=D.sm,className:d})=>{const L={"--size":`${r}px`},{useDownloading:S,useDownloadCapability:x}=(0,n.useContext)(s.I),[P,T]=(0,n.useState)(!1),[j,A]=x(i().isEpisode(e)),[R,I]=(0,n.useState)(!1),{currentAvailability:B,progress:z,beginDownload:G,clearDownload:M}=S(e);((e,t)=>{const a=(0,k.r)(),l=(0,n.useRef)(!1);(0,n.useEffect)((()=>{e===m.V8.DOWNLOADING&&!1===l.current&&(l.current=!0,a.say(w.ag.get("download.downloading",t.totalItems)))}),[a,e,t]);const r=(0,N.D)(e);(0,n.useEffect)((()=>{r===m.V8.DOWNLOADING&&e===m.V8.YES&&(l.current=!1,a.say(w.ag.get("download.complete")))}),[a,r,e])})(B,z);const W=(0,n.useCallback)((e=>{A===m.v$.DOWNLOADING_NOT_ALLOWED?I(!0):!1===t?(a(),T(!0)):G(),C(e)}),[G,A,t,a]),$=(0,n.useCallback)((e=>{M(),C(e)}),[M]);return(0,n.useEffect)((()=>{!0===P&&!0===t&&(G(),T(!1))}),[t,P,G]),j===m.PQ.NO_DOWNLOAD_CAPABILITY?null:A===m.v$.DOWNLOADING_NOT_ALLOWED?l().createElement("div",{className:p},l().createElement(_.w,{label:w.ag.get("download.download")},l().createElement("button",{className:u()(h,d),role:"switch",onClick:W,"aria-label":w.ag.get("download.download"),"aria-checked":!1},l().createElement(o.a,{iconSize:r}))),R&&l().createElement("div",{className:f},l().createElement(O.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{I(!1)}},w.ag.get("download.upsell")))):B===m.V8.YES?l().createElement(_.w,{label:w.ag.get("download.remove")},l().createElement("button",{className:u()(h,d,v),role:"switch",onClick:$,"aria-label":w.ag.get("download.remove"),"aria-checked":!0},l().createElement(c.C,{iconSize:r}))):B===m.V8.NO?l().createElement(_.w,{label:w.ag.get("download.download")},l().createElement("button",{className:u()(h,d),role:"switch",onClick:W,"aria-label":w.ag.get("download.download"),"aria-checked":!1},l().createElement(o.a,{iconSize:r}))):l().createElement("div",{className:u()(b,d),role:"switch","aria-checked":!0},l().createElement(_.w,{label:w.ag.get("download.cancel")},l().createElement("button",{style:L,className:u()(h,g,d),onClick:$,"aria-label":w.ag.get("download.cancel")})),l().createElement("span",{style:L,className:u()(E,g)},l().createElement(y.e,{"aria-valuetext":w.ag.get("progress.downloading-tracks"),percentage:z.percentage,size:r})))}},37483:(e,t,a)=>{a.d(t,{p:()=>d,q:()=>i.q});var n=a(67294),l=a.n(n),r=a(65858),i=a(90110),o=a(56802),c=a(8475),s=a(4383);const m=l().memo((({uri:e,size:t=i.q.md,className:a})=>{const[m,d]=(0,s.Z)(e),u=(0,r.I0)(),g=(0,o.o)(),p=(0,n.useCallback)((()=>{g({targetUri:e,intent:m?"remove-from-library":"add-to-library",type:"click"}),d(!m),u(m?(0,c.SS)():(0,c.kK)())}),[g,e,m,d,u]);return l().createElement(i.o,{className:a,isFollowing:m,onFollow:p,uri:e,size:t})})),d=l().memo((e=>l().createElement(m,e)))},22578:(e,t,a)=>{a.d(t,{$:()=>g});var n=a(20657),l=a(67294),r=a.n(l),i=a(64593),o=a(8341),c=a(83693),s=a(76303),m=a(47886),d=a(24183);function u(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const g=({children:e})=>{let t=u(e);(e=>{const{mainLandmarkRef:t}=(0,d.Oh)(),a=(0,m.k6)(),n=(0,l.useRef)(a.length<2);n.current=a.length<2,(0,l.useEffect)((()=>{const a=t.current;a&&!n.current&&e&&(a.setAttribute("aria-label",e),a.focus())}),[e,t])})(e);const a=(0,o.Y)(s.o9)===c.PO.PLAYING,g=(0,o.Y)((e=>null==e?void 0:e.item));return g&&a&&((0,c.G_)(g)?t=[g.name,g.artists.map((e=>e.name)).join(n.ag.getSeparator())].join(" · "):(0,c.iw)(g)?t=[g.name,g.show.name].join(" · "):(0,c.k6)(g)&&(t=u(n.ag.get("ad-formats.advertisement")))),r().createElement(i.q,{defaultTitle:"Spotify",defer:!1},r().createElement("title",null,t))}},70369:(e,t,a)=>{a.d(t,{$:()=>n.$});var n=a(22578)},30247:(e,t,a)=>{a.d(t,{s:()=>b});var n=a(42781),l=a(23716),r=a(69691),i=a(56802),o=a(67294),c=a(59713),s=a.n(c);const m=e=>e<=64?"small":e>640?"xlarge":e>300?"large":"standard";function d(e,t){return e.filter((e=>e.label?e.label===t:e.width?m(e.width)===t:!!e.height&&m(e.height)===t))[0]}var u=a(67789),g=a(88522);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e){var t,a,n,l,r,i,o,c;const s=d(e,"standard"),m=d(e,"large"),u=d(e,"small"),g=d(e,"xlarge");return{image_url:null==s?void 0:s.url,image_height:null==s||null===(t=s.height)||void 0===t?void 0:t.toString(),image_width:null==s||null===(a=s.width)||void 0===a?void 0:a.toString(),image_url_large:null==m?void 0:m.url,image_height_large:null==m||null===(n=m.height)||void 0===n?void 0:n.toString(),image_width_large:null==m||null===(l=m.width)||void 0===l?void 0:l.toString(),image_url_small:null==u?void 0:u.url,image_height_small:null==u||null===(r=u.height)||void 0===r?void 0:r.toString(),image_width_small:null==u||null===(i=u.width)||void 0===i?void 0:i.toString(),image_url_xlarge:null==g?void 0:g.url,image_height_xlarge:null==g||null===(o=g.height)||void 0===o?void 0:o.toString(),image_width_xlarge:null==g||null===(c=g.width)||void 0===c?void 0:c.toString()}}function b(e,t){const a=(0,i.o)(),c=(0,l.g)(),{isPlaying:s,isActive:m}=(0,r.$o)((null==e?void 0:e.uri)||""),{isActive:d}=(0,r.cR)((null==t?void 0:t.uri)||"");return(0,o.useCallback)((l=>{if(!t||!e)return;const r=function(e,t){var a,n,l,r;const i=(0,g.l)((null===(a=e.coverArt)||void 0===a?void 0:a.sources)||[]),o=(0,u.Xb)(e,t),c=(0,u.Ie)(t)||o;return h(h({uri:e.uri,title:e.name,subtitle:t.name,type:"episode",album_uri:t.uri,album_title:t.name,artist_uri:t.uri,artist_name:t.name},v(i)),{},{media_type:"audio",externalResolvedUrl:null===(n=e.audio)||void 0===n||null===(l=n.items)||void 0===l||null===(r=l.find((e=>e.externallyHosted)))||void 0===r?void 0:r.url,isTrailer:o,anonymousPlaybackAllowed:c})}(e,t);d&&!s&&m&&!l?c.resume():d&&s&&!l?(a({type:"click",intent:"pause",targetUri:e.uri}),c.pause()):(a({type:"click",intent:"play",targetUri:e.uri}),c.play({uri:t.uri,pages:[{items:[{type:n.p.EPISODE,uri:e.uri,uid:null,metadata:r,provider:null}]}]},{referrerIdentifier:c.getReferrer(),featureIdentifier:"episode"},l))}),[m,s,d,c,a,t,e])}},38894:(e,t,a)=>{a.d(t,{g:()=>r});var n=a(65858),l=a(29255);const r=()=>(0,n.v9)(l.Gg).isAnonymous},20238:(e,t,a)=>{a.d(t,{o:()=>G});var n=a(59713),l=a.n(n),r=a(67294),i=a.n(r),o=a(20657);const c="HgmoeCHU_9h5vx7D18zG",s="yESljNddXp41kiNApg__",m="GIWVU6wtoZ_4hhd1JF6V",d="ON_vaJsJgBLBciEts6TM";var u=a(69559),g=a(76343),p=a(52865),h=a(58548);const v=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;function b(e){return e.split(v).map((e=>{if(e.match(v)){return`(<time>${e.replace("(","").replace(")","")}</time>)`}return e})).join("")}const E=i().memo((({text:e,onTimeStampClick:t,children:a,className:n,LinkComponent:l,enableTimestamps:o=!1})=>{const c=(0,r.useMemo)((()=>{const a=(0,p.ZU)(e),n=o?b(a):a;return i().createElement(h.NB,{source:n,LinkComponent:l,onTimeStampClick:t})}),[e,o,l,t]);return i().createElement(g.Dy,{as:"p",variant:g.$e.ballad,className:n},c,a)})),f="LzRKvECx_rGXc1_ntGtg",y=i().memo((({text:e,onTimeStampClick:t,onToggle:a,className:n,LinkComponent:l,enableTimestamps:r})=>i().createElement(E,{className:n,text:e,onTimeStampClick:t,LinkComponent:l,enableTimestamps:r},i().createElement("button",{"aria-expanded":!1,className:f,onClick:a},i().createElement(g.Dy,{variant:g.$e.balladBold},"… ",o.ag.get("mwp.see.more")))))),w=(e,t,a)=>{const n=o.ag.get("mwp.see.more").length,l=e.length+n+6;return a<=1&&l<t},N=i().memo((({paragraphs:e,clickHandler:t,maxCharactersPerLine:a,maxLines:n,toggleExpandedState:l,LinkComponent:r,className:c,enableTimestamps:s})=>{let m=!1,d=0;const u=e.map(((u,g)=>{const p=Math.round(u.length/a);if(d+=p>0?p:1,m)return null;const h=n-(d-p);if(g+1===e.length&&(w(u,a,h)||p<=h))return i().createElement(E,{className:c,text:u,onTimeStampClick:t,LinkComponent:r,enableTimestamps:s,key:g});if(d>=n){m=!0;const e=((e,t,a)=>{const n=o.ag.get("mwp.see.more").length;if(w(e,t,a))return e;const l=t*a-n-6;return e.slice(0,l)})(u,a,h);return i().createElement(y,{key:g,text:e,onTimeStampClick:t,onToggle:l,className:c,LinkComponent:r,enableTimestamps:s})}return i().createElement(E,{className:c,text:u,onTimeStampClick:t,LinkComponent:r,enableTimestamps:s,key:g})}));return i().createElement(i().Fragment,null,u)}));var k=a(65598),O=a.n(k),_=a(73012),D=a(67892);const C="EeI0Jqfd7reuXEla1aWp",L="wmnx0LPvMpFdy0OUPjEK",S="o3Nt0Xybwvh6sljlyjPf",x="f76L_JEU2SR2GuaunZer";var P=a(19594);const T=i().memo((({html:e,onTimeStampClick:t,enableTimestamps:a=!1})=>{const n=(0,r.useMemo)((()=>{const n=a?b(e):e;return O()(n,{transform:j(t),dangerouslySetChildren:[]})}),[a,e,t]);return i().createElement("div",{className:C},n)}));function j(e){let t=0;return{p:e=>i().createElement(g.Dy.p,{variant:g.Dy.ballad,color:_.nh1},e.children),a:e=>e.href?i().createElement(D.r,{to:e.href},e.children):i().createElement(i().Fragment,null,e.children),ul:e=>i().createElement("ul",{className:S},e.children),ol:e=>i().createElement("ol",{className:S},e.children),li:e=>i().createElement(g.Dy.li,{variant:g.Dy.ballad,color:_.nh1,className:x},e.children),br:()=>i().createElement("br",null),h1:e=>i().createElement(g.Dy.h1,{variant:g.Dy.balladBold,color:_.nh1,className:L},e.children),h2:e=>i().createElement(g.Dy.h2,{variant:g.Dy.balladBold,color:_.nh1,className:L},e.children),h3:e=>i().createElement(g.Dy.h3,{variant:g.Dy.balladBold,color:_.nh1,className:L},e.children),h4:e=>i().createElement(g.Dy.h4,{variant:g.Dy.balladBold,color:_.nh1,className:L},e.children),h5:e=>i().createElement(g.Dy.h5,{variant:g.Dy.balladBold,color:_.nh1,className:L},e.children),h6:e=>i().createElement(g.Dy.h6,{variant:g.Dy.balladBold,color:_.nh1,className:L},e.children),time:t=>i().createElement(P.E,{onClick:e},t.children),_:(e,a,n)=>{const l=void 0===a?e:n;return i().createElement(i().Fragment,{key:"fragment"+t++},l)}}}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const I={isOpen:!1,contentWidth:0},B=(e,t)=>R(R({},e),t),z=(e="")=>e.split(/[ \u00a0]{2}/).filter(Boolean),G=i().memo((({content:e,htmlContent:t,maxLines:a=2,className:n,onTimeStampClick:l=(()=>{}),LinkComponent:p,onExpanded:h,enableTimestamps:v=!1})=>{const[b,f]=(0,r.useReducer)(B,I),{isOpen:y,contentWidth:w}=b,k=(0,r.useCallback)((()=>{f({isOpen:!y}),h&&h(!y)}),[y,h]);(0,r.useEffect)((()=>{f({isOpen:!1})}),[e]);const O=w?w/7.8:Number.MAX_VALUE,_=(0,r.useRef)(null),D=(0,r.useCallback)((e=>{e&&(_.current=e,f({contentWidth:e.clientWidth}))}),[]),C=(0,r.useMemo)((()=>t?i().createElement(T,{html:t,onTimeStampClick:l,enableTimestamps:v}):((e,t,a,n)=>z(e).map(((e,l)=>i().createElement(E,{className:s,text:e,onTimeStampClick:t,enableTimestamps:a,LinkComponent:n,key:l}))))(e,l,v,p)),[p,e,v,t,l]),L=(0,r.useMemo)((()=>t?((e="")=>e.replace("<p>","").split(/(?:<\/p>)/).filter(Boolean))(t):z(e)),[e,t]);return(0,u.a)((()=>{_.current&&f({contentWidth:_.current.clientWidth})})),i().createElement("div",{className:n},i().createElement("div",{ref:D,className:c},y&&i().createElement(i().Fragment,null,C,i().createElement("button",{"aria-expanded":!0,className:d,onClick:k},i().createElement(g.Dy,{className:m,variant:g.$e.balladBold},o.ag.get("show_less")))),!y&&i().createElement(N,{className:s,paragraphs:L,LinkComponent:p,clickHandler:l,enableTimestamps:v,maxCharactersPerLine:O,maxLines:a,toggleExpandedState:k})))}))},40080:(e,t,a)=>{a.d(t,{D:()=>l});var n=a(67294);function l(e){const t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}},88522:(e,t,a)=>{function n(e){return e.sort(((e,t)=>(t.width||0)-(e.width||0)))}a.d(t,{l:()=>n})},92408:(e,t,a)=>{a.d(t,{E:()=>L,$:()=>C});var n=a(67294),l=a.n(n),r=a(43315),i=a(59713),o=a.n(i);const c="eNli_on6NKVg6goSHat0",s="_W4RNb78q54d8CmYNjxt",m="Mqo4527lttYL3SMlLiDA",d="BKBLI6fo3ZWoLFz_Pwxk";a(45697);class u extends n.PureComponent{render(){const{ariaValueText:e,max:t,current:a}=this.props,n=t&&a?100*Math.min(1,a/t):0,r={transform:`translateX(-${100-n}%)`},i=e||`${Math.round(n)}%`;return l().createElement("div",{className:c,role:"progressbar",tabIndex:0,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":t,"aria-valuetext":i},l().createElement("div",{className:s}),l().createElement("div",{className:m},l().createElement("div",{className:d,style:r})))}}o()(u,"defaultProps",{current:0,max:1});const g=u,p="U6gSOAj8IGII1kbhA7Rt",h="r_Nz_hdLEJPfrC84kCBL",v="uxJXY4rZxjkZGRECwDq0",b="W1ptGHzNzaGHKOClcZpg",E="Ta09tKvKtonCgyFp3XiN",f="ewzp_6hkdrX_8r8oziLc",y="__edKdqo6DUxYm86bD_G";var w=a(40378),N=a(20657),k=a(76343),O=a(94184),_=a.n(O),D=a(6695);let C;!function(e){e[e.LARGE=0]="LARGE",e[e.SMALL=1]="SMALL"}(C||(C={}));const L=e=>{const{resumePositionMs:t=0,releaseDate:a,isPlaying:n,fullyPlayed:i,durationMs:o,size:c=C.SMALL,position:s=t}=e;return l().createElement("div",{className:_()(p,{[h]:c===C.LARGE})},a?l().createElement(k.Dy.p,{variant:k.$e.mesto,className:v},(0,r.rL)((0,r.RX)(a))):null,(()=>{if(i&&!n)return l().createElement("div",{className:E},l().createElement(k.Dy.p,{variant:k.$e.mesto,className:b},N.ag.get("episode.played")),l().createElement(w.R,{iconSize:16,className:y}));if(s>0||n){const e=Math.ceil(Math.max(o-s,0));return l().createElement("div",{className:E},l().createElement(k.Dy.p,{variant:k.$e.mesto,className:b},l().createElement(D.ng,{durationMs:e})))}return l().createElement(k.Dy.p,{variant:k.$e.mesto,className:v},l().createElement(D.nL,{durationMs:o}))})(),!i&&s>0||n?l().createElement("div",{className:f},l().createElement(g,{current:s,max:o,isEnabled:!1})):null)}}}]);
//# sourceMappingURL=295.js.map