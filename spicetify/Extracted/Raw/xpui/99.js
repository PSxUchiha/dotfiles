"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[99],{21127:(e,t,a)=>{a.d(t,{X:()=>B});var n=a(67294),i=a.n(n),s=a(76),l=a(47886),r=a(69518),o=a.n(r),c=a(94184),m=a.n(c);const E={episodeBlock:"g_ZfZ4Xy4SOmgFkVHy1O",isActive:"zcgAo9f2sxdaKrW_e_Oo",title:"QpEdq2xVX4NAl_Kd5HIC",titleLink:"CwIogGeX0Vl_piEG47_U",selected:"_fk8qNllCXD5_lFw_nOZ",topActions:"__2Lx0PUqFYBhwLve2Hy",actions:"pK_TjWtikuMERVfv29eZ",titleContainer:"zrz4qaGq8ViCZ7BOi7NX",musicAndTalkArtistContainer:"bpnK8XE9wKMfgyMhLSV6",musicAndTalkArtists:"Y5ETDiUfbSd5DlHlAEHB",playlistIcon:"zZG7a4c_u7EkmRJswG4Z",noHover:"_YG3ocDZ3MnhDUUP36df",imageContainer:"nQFRYumUjEU41Sofg2Z5",showImage:"FEqRRJNrhtSNeeiIVA1A",description:"bhnmQE6vkuPVtKeqEP__",metadata:"M3_VW4Pkjn_vyVdRDrro",badges:"mtxo79Q_stawG_KPk8cI",medium:"mrVMHBJvmcIHPe_00dM7",large:"cl1RZo9SHmZPwllygLGi",header:"Gbd424MauSPwNzsoJ4Ry",descriptionContainer:"eOctxvRyK0iGwJory2fd",playerActions:"XIwMLkJeoVGcGgV_0CDR"};var d=a(20657),u=a(55911),S=a(76343),_=a(92408),I=a(42781),p=a(44887),Z=a(7469),h=a(37630),g=a(54280);var y=a(28342),w=a(34325),f=a(82772);const v="_5thPoUPKnsYohFCOk31";var N=a(60417),C=a(8716),D=a(22819);const k=i().memo((({onClick:e=(()=>{}),size:t,className:a,uri:s,sharingInfo:l,interactionData:r})=>{const{onCopyLink:o}=(0,D.y)({sharingInfo:l,uri:s,interactionData:r}),c=(0,n.useCallback)((()=>{o(),e()}),[e,o]);return i().createElement(C.E,{ariaLabel:d.ag.get("mwp.list.item.share"),size:t,onClick:c,className:m()(v,a),icon:N.M})}));var b=a(51871),O=a(37483),U=a(24656),P=a(69010),R=a(11414);const x={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},A=i().memo((({episodeUri:e,showUri:t,sharingInfo:a,canDownload:s})=>{const{useDownloading:l}=(0,n.useContext)(U.I),{currentAvailability:r}=l(e),o=[P.V8.YES,P.V8.DOWNLOADING,P.V8.WAITING].includes(r),c=(0,n.useMemo)((()=>i().createElement(O.p,{uri:e,size:O.q.sm,showUri:t,className:m()({[f.Z.visibleDownloadButton]:o})})),[e,t,o]),E=(0,n.useMemo)((()=>i().createElement(k,{uri:e,sharingInfo:a,interactionData:x})),[e,a]),d=(0,n.useMemo)((()=>i().createElement(b.w,{uri:e,size:R.q.sm,className:f.Z.saveButton})),[e]);return i().createElement(i().Fragment,null,E,s&&c,d)}));var M=a(32626),L=a(25988),T=a(95661);const B=i().memo((({uri:e,name:t,showName:a,showUri:r,size:c,description:f,durationMs:v,images:N,badges:C,fullyPlayed:D,releaseDate:k,resumePositionMs:b,isCurrentlyPlaying:O,isPlaying:U,onContextMenu:P,onTouchStart:R,onTouchEnd:x,handlePlaybackClick:B,handleDragStart:H,handleClick:G,position:V,index:z,isPlayable:j,isPaywalled:q,isUserSubscribed:F,episodeSharingInfo:J,playButtonWrapper:K=null,highlightText:W=(e=>e),onMarkAsPlayed:Y})=>{var X;const Q=(0,l.k6)(),$=O&&U,ee=o().from(e).toURLPath(!0),te=null===(X=o().from(r))||void 0===X?void 0:X.toURLPath(!0),ae=function({episodeUri:e}){const[t,a]=(0,n.useState)([]),i=(0,g.G)();return(0,n.useEffect)((()=>{let t=!0;return async function(){const n=await i.getArtists(e);t&&a(n)}(),()=>{t=!1}}),[e,i]),t}({episodeUri:e}),ne=(0,w.G3)(e,k,b,D),ie=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Q.push(ee),G&&G(e)}),[ee,Q,G]),se=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),te&&Q.push(te)}),[te,Q]),le=q&&!F,re=(0,n.useCallback)((e=>{e.stopPropagation(),le||B(e)}),[B,le]),oe=e=>{e.stopPropagation()},ce=le||j,me=d.ag.get("tracklist.a11y.play",t,a),Ee=d.ag.get("tracklist.a11y.pause",t,a),de=i().createElement(u.JM,{size:u.qE.xs,version:u.ul.secondary,onClick:re,isPlaying:$,disabled:!ce,locked:le,ariaPlayLabel:me,ariaPauseLabel:Ee}),ue=K?K(de):de;return i().createElement("div",{className:m()(E.episodeBlock,{[E.isActive]:O,[E.medium]:c===h.Uo.MEDIUM,[E.large]:c===h.Uo.LARGE,[E.noHover]:c===h.Uo.XSMALL}),"data-testid":`episode-${z}`,draggable:!!H,onDragStart:H,onClick:ie,onContextMenu:P,onTouchStart:R,onTouchEnd:x},i().createElement("div",{className:E.imageContainer},i().createElement(p.O,{className:m()(E.entityImage,E.showImage),type:I.p.EPISODE,size:(e=>{switch(e){case h.Uo.LARGE:return Z.m$.SIZE_112;case h.Uo.MEDIUM:return Z.m$.SIZE_64;default:return Z.m$.SIZE_48}})(c),title:t,shape:p.K.ROUNDED_CORNERS,images:N})),i().createElement("div",{className:E.header},i().createElement("div",{className:E.titleContainer},i().createElement(s.rU,{className:E.titleLink,to:ee,onClick:ie},i().createElement(S.Dy.h4,{variant:S.Dy.balladBold,className:E.title,"data-testid":"episodeTitle"},ne&&i().createElement(w.Rd,null),W(t))),ae.length>0&&i().createElement("div",{className:E.musicAndTalkArtistContainer},i().createElement(y.e,{iconSize:16,className:E.playlistIcon}),i().createElement(S.Dy.p,{variant:S.Dy.mesto,className:E.musicAndTalkArtists},W(ae.join(", "))))),a&&te&&i().createElement(s.rU,{className:E.titleLink,to:te,onClick:se},i().createElement(S.Dy.h4,{variant:S.Dy.mestoBold,className:E.title},W(a)))),i().createElement("div",{className:E.descriptionContainer},i().createElement(S.Dy.p,{variant:S.Dy.mesto,className:E.description},W(null!=f?f:""))),i().createElement("div",{className:E.metadata},i().createElement("div",{className:E.badges},C),i().createElement(_.E,{isPlaying:$,fullyPlayed:D,durationMs:v,releaseDate:k,resumePositionMs:b,position:O?V:void 0})),i().createElement("div",{onClick:oe,className:E.topActions,"data-testid":"action-buttons"},i().createElement(M.yj,{menu:i().createElement(L.k,{uri:e,showUri:r,isPlayed:D,onMarkAsPlayed:Y})},i().createElement(T.z,{size:T.q.sm,label:d.ag.get("more.label.context",t)}))),i().createElement("div",{onClick:oe,className:E.actions},i().createElement(A,{episodeUri:e,showUri:null!=r?r:"",sharingInfo:J,canDownload:!q||q&&F})),i().createElement("div",{className:E.playerActions},ue))}))},44887:(e,t,a)=>{a.d(t,{O:()=>v,K:()=>f});var n=a(59713),i=a.n(n),s=a(67294),l=a.n(s),r=a(94184),o=a.n(r),c=a(80418),m=a(7469);const E={xsmall:"BhgGgalJ_Tw9RhHLULnL",small:"vRDvp_8qlFh9hMHvQoF1",medium:"mUNTaB45y_9NWKMMxJxT",large:"o8T0TWMRBvzJhyB5YMTo",square:"D_5KHnFPim7Z0uUZ58hh",circle:"bWZ1J5MuuXiuD8TE_J48",image:"_Wml5lFel3UAq5t6_r1s",imageContainer:"i_5qoRwsCqgB8HGwxxLB",imagePlaceholder:"fWuNbBuPVfLXy38zQFO8"},d="YmZjwhkLpfRHpBkaYGFk",u="hvtJoHFuDehlkMSn3YQp";var S=a(42781),_=a(45322),I=a(68101),p=a(28151),Z=a(60898),h=a(68251);const g=({title:e,type:t,className:a})=>{const n=(e=>{switch(e){case S.p.ALBUM:return l().createElement(_.c,{className:u});case S.p.ARTIST:return l().createElement(I.a,{className:u});case S.p.SHOW:case S.p.EPISODE:return l().createElement(p.J,{className:u});case S.p.USER:return l().createElement(Z.f,{className:u});case S.p.PLAYLIST:default:return l().createElement(h.U,{className:u})}})(t);return l().createElement("div",{"aria-label":e,className:o()(d,a)},n)};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let f;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(f||(f={}));const v=l().memo((({type:e,title:t,images:a=[],shape:n=f.SQUARE,size:i=m.m$.SIZE_56,className:s,onContextMenu:r=(()=>{}),onTouchStart:d=(()=>{}),onTouchEnd:u=(()=>{})})=>{const S=function(e=[]){const t=e.filter((e=>Boolean(e.width))),a=t.filter((e=>e.url&&e.width&&e.width>=m.eM[m.m$.SIZE_56])).sort(((e,t)=>e.width-t.width));return a.length?a:t}(a),_=S.length>0?S[0].url:"",I=S.map((({url:e,width:t})=>`${e} ${t/2}w, ${e} ${t}w`)).join(", "),p=()=>({[E.xsmall]:m.pj.includes(i),[E.small]:m.wL.includes(i),[E.medium]:m.VZ.includes(i),[E.large]:m.B_.includes(i)});return l().createElement("div",{className:o()(E.imageContainer,s),onContextMenu:r,onTouchStart:d,onTouchEnd:u,style:{width:`${m.eM[i]}px`,height:`${m.eM[i]}px`}},l().createElement(c.E,{loading:"lazy",src:_,alt:t,ariaHidden:!0,className:o()(E.image,w({[E.roundedCorners]:n===f.ROUNDED_CORNERS,[E.circle]:n===f.CIRCLE,[E.square]:n===f.SQUARE},p())),srcSet:I||void 0,testid:"entity-image"},l().createElement(g,{title:t,type:e,className:o()(w({[E.roundedCorners]:n===f.ROUNDED_CORNERS,[E.circle]:n===f.CIRCLE,[E.square]:n===f.SQUARE},p()))})))}))},7469:(e,t,a)=>{let n;a.d(t,{m$:()=>n,eM:()=>i,pj:()=>s,wL:()=>l,VZ:()=>r,B_:()=>o}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(n||(n={}));const i={[n.SIZE_48]:48,[n.SIZE_56]:56,[n.SIZE_64]:64,[n.SIZE_72]:72,[n.SIZE_80]:80,[n.SIZE_96]:96,[n.SIZE_104]:104,[n.SIZE_112]:112,[n.SIZE_120]:120,[n.SIZE_128]:128,[n.SIZE_136]:136,[n.SIZE_144]:144,[n.SIZE_152]:152,[n.SIZE_160]:160,[n.SIZE_168]:168,[n.SIZE_176]:176,[n.SIZE_184]:184,[n.SIZE_200]:200,[n.SIZE_232]:232},s=[n.SIZE_48,n.SIZE_56,n.SIZE_64],l=[n.SIZE_72,n.SIZE_80,n.SIZE_96,n.SIZE_104,n.SIZE_112,n.SIZE_120,n.SIZE_128],r=[n.SIZE_136,n.SIZE_144,n.SIZE_152,n.SIZE_160,n.SIZE_168,n.SIZE_176],o=[n.SIZE_184,n.SIZE_200,n.SIZE_232]},33241:(e,t,a)=>{a.d(t,{C:()=>m});var n=a(67294),i=a.n(n),s=a(70131),l=a(94184),r=a.n(l);const o="A2DbnLZllxrV6OfKJAh1",c="HoTgHiisTsEBZK3R92VY",m=i().memo((e=>{const{triggerOnInitialLoad:t=!1,onReachBottom:a,showScrollbar:l=!0,horizontalScroll:m=!1}=e,{ref:E,inView:d}=(0,s.YD)({initialInView:t});return(0,n.useEffect)((()=>{d&&a&&a()}),[d,a]),i().createElement("div",{className:r()({[c]:!l,[o]:m}),"data-testid":"infinite-scroll-list"},e.children,i().createElement("div",{ref:E}))}))},82772:(e,t,a)=>{a.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",ShowPage:"tUV_eK2UPdPrWtAL8eu7",ShowContent:"qkKq_dnuhZmSIoEpLhPO",metadata:"Ny2XIo7ZOiIUmBunyArK",imageContainer:"ocmGJ8quvjGdzLNJ4wUr",episodes:"NkHRgzS5ZW7g2gBwD86W",episodesHeader:"_yJ3yvo7Y7YvmkoZykT7",episodesSort:"_GQSNHyEFSOHAAmRH_VW",episodesFilter:"sdaF_DFIcKxYhm275_ZC",subtitle:"DKsuhuW8FIey2nEJJAHM",sectionTitle:"_bXHFqs5aOW46U0z3TmE",trailer:"ZGpXhUsm8MyLNDUE_Dem",visibleDownloadButton:"C5iH0ljGtSD3tgsngYhJ",moreButton:"E9W2j4ZxeFO30LLrvw0K",saveButton:"FeIToVlerOg3_CzYL4nM"}}}]);
//# sourceMappingURL=99.js.map