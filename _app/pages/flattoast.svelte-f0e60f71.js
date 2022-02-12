import{S as Jt,i as Nt,s as Ot,e as o,t as n,k as i,c as s,a as r,h as c,d as l,m as d,b as h,K as Kt,g as Ut,I as t,Q as wt}from"../chunks/vendor-e1b88f46.js";import{b as Et}from"../chunks/paths-4b3c6e7e.js";function Wt(Qt){let e,_,L,$,p,m,b,q,A,g,Tt,G,u,y,z,K,x,bt,Q,v,J,f,N,O,U,k,yt=`<script>
  import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";
  
  const showToast = () => {
    const toast = toasts.add({
      description: 'Message body',
      component: FlatToast, // this will override toast component provided by ToastContainer
    });
  };

<\/script>

<button on:click={showToast}>Show Toast</button>
<ToastContainer {toasts} let:data={data}>
  <FlatToast {data} /> <!-- default slot as toast component -->
</ToastContainer>`,W,X,F,Z,tt,P,kt=`<slot name="icon"></slot>
<slot name="extra"></slot>
<slot name="close-icon"></slot>`,et,at,w,ot,st,I,lt,rt,C,Ft=`<FlatToast data={data}>
  <slot name="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ccc" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  </slot>
</FlatToast>`,nt,ct,E,it,dt,S,ht,pt,M,Pt=`<FlatToast data={data}>
  <slot name="extra">
    <span class="text-sm text-gray-300">08:15:30 AM</span>
  </slot>
</FlatToast>`,mt,ut,T,vt,ft,D,_t,gt,Y,It=`<FlatToast data={data}>
  <slot name="close-icon">
    <span class="text-sm text-gray-300">Close</span>
  </slot>
</FlatToast>`,xt;return{c(){e=o("div"),_=o("h2"),L=n("FlatToast"),$=i(),p=o("div"),m=o("div"),b=o("p"),q=n("Dark Theme"),A=i(),g=o("img"),G=i(),u=o("div"),y=o("p"),z=n("Light Theme"),K=i(),x=o("img"),Q=i(),v=o("p"),J=n(`FlatToast component takes "data" prop which is a toast object as described\r
    `),f=o("a"),N=n("here"),O=n(". You can use FlatToast like this."),U=i(),k=o("pre"),W=n(yt),X=i(),F=o("p"),Z=n("FlatToast accepts following optional slots:"),tt=i(),P=o("pre"),et=n(kt),at=i(),w=o("h3"),ot=n("Icon Slot"),st=i(),I=o("p"),lt=n("You can provide your own custom icon or any element to be shown as toast icon instead of predefined icons."),rt=i(),C=o("pre"),nt=n(Ft),ct=i(),E=o("h3"),it=n("Extra Slot"),dt=i(),S=o("p"),ht=n("You can provide some extra content to be shown below toast message, something like timestamp, some link to other page etc."),pt=i(),M=o("pre"),mt=n(Pt),ut=i(),T=o("h3"),vt=n("Close Icon Slot"),ft=i(),D=o("p"),_t=n("By default, a cross icon is show inside close button but if you want to change this icon, you can provide your own icon or some text."),gt=i(),Y=o("pre"),xt=n(It),this.h()},l(H){e=s(H,"DIV",{class:!0});var a=r(e);_=s(a,"H2",{class:!0});var Ct=r(_);L=c(Ct,"FlatToast"),Ct.forEach(l),$=d(a),p=s(a,"DIV",{class:!0});var R=r(p);m=s(R,"DIV",{class:!0});var V=r(m);b=s(V,"P",{});var St=r(b);q=c(St,"Dark Theme"),St.forEach(l),A=d(V),g=s(V,"IMG",{src:!0,alt:!0}),V.forEach(l),G=d(R),u=s(R,"DIV",{class:!0});var j=r(u);y=s(j,"P",{});var Mt=r(y);z=c(Mt,"Light Theme"),Mt.forEach(l),K=d(j),x=s(j,"IMG",{src:!0,alt:!0}),j.forEach(l),R.forEach(l),Q=d(a),v=s(a,"P",{});var B=r(v);J=c(B,`FlatToast component takes "data" prop which is a toast object as described\r
    `),f=s(B,"A",{href:!0,class:!0});var Dt=r(f);N=c(Dt,"here"),Dt.forEach(l),O=c(B,". You can use FlatToast like this."),B.forEach(l),U=d(a),k=s(a,"PRE",{});var Yt=r(k);W=c(Yt,yt),Yt.forEach(l),X=d(a),F=s(a,"P",{});var Ht=r(F);Z=c(Ht,"FlatToast accepts following optional slots:"),Ht.forEach(l),tt=d(a),P=s(a,"PRE",{});var Rt=r(P);et=c(Rt,kt),Rt.forEach(l),at=d(a),w=s(a,"H3",{class:!0});var Vt=r(w);ot=c(Vt,"Icon Slot"),Vt.forEach(l),st=d(a),I=s(a,"P",{});var jt=r(I);lt=c(jt,"You can provide your own custom icon or any element to be shown as toast icon instead of predefined icons."),jt.forEach(l),rt=d(a),C=s(a,"PRE",{});var Bt=r(C);nt=c(Bt,Ft),Bt.forEach(l),ct=d(a),E=s(a,"H3",{class:!0});var Lt=r(E);it=c(Lt,"Extra Slot"),Lt.forEach(l),dt=d(a),S=s(a,"P",{});var $t=r(S);ht=c($t,"You can provide some extra content to be shown below toast message, something like timestamp, some link to other page etc."),$t.forEach(l),pt=d(a),M=s(a,"PRE",{});var qt=r(M);mt=c(qt,Pt),qt.forEach(l),ut=d(a),T=s(a,"H3",{class:!0});var At=r(T);vt=c(At,"Close Icon Slot"),At.forEach(l),ft=d(a),D=s(a,"P",{});var Gt=r(D);_t=c(Gt,"By default, a cross icon is show inside close button but if you want to change this icon, you can provide your own icon or some text."),Gt.forEach(l),gt=d(a),Y=s(a,"PRE",{});var zt=r(Y);xt=c(zt,It),zt.forEach(l),a.forEach(l),this.h()},h(){h(_,"class","text-xl font-semibold"),Kt(g.src,Tt=`${Et}/images/flat-dark.png`)||h(g,"src",Tt),h(g,"alt","Dark"),h(m,"class","text-center"),Kt(x.src,bt=`${Et}/images/flat-light.png`)||h(x,"src",bt),h(x,"alt","Light"),h(u,"class","text-center"),h(p,"class","grid grid-cols-2 gap-3 max-w-xl"),h(f,"href",`${Et}/toast`),h(f,"class","text-sky-600 hover:underline"),h(w,"class","text-xl"),h(E,"class","text-xl"),h(T,"class","text-xl"),h(e,"class","space-y-3")},m(H,a){Ut(H,e,a),t(e,_),t(_,L),t(e,$),t(e,p),t(p,m),t(m,b),t(b,q),t(m,A),t(m,g),t(p,G),t(p,u),t(u,y),t(y,z),t(u,K),t(u,x),t(e,Q),t(e,v),t(v,J),t(v,f),t(f,N),t(v,O),t(e,U),t(e,k),t(k,W),t(e,X),t(e,F),t(F,Z),t(e,tt),t(e,P),t(P,et),t(e,at),t(e,w),t(w,ot),t(e,st),t(e,I),t(I,lt),t(e,rt),t(e,C),t(C,nt),t(e,ct),t(e,E),t(E,it),t(e,dt),t(e,S),t(S,ht),t(e,pt),t(e,M),t(M,mt),t(e,ut),t(e,T),t(T,vt),t(e,ft),t(e,D),t(D,_t),t(e,gt),t(e,Y),t(Y,xt)},p:wt,i:wt,o:wt,d(H){H&&l(e)}}}class te extends Jt{constructor(e){super();Nt(this,e,null,Wt,Ot,{})}}export{te as default};
