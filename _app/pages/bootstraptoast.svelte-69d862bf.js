import{S as Jt,i as Nt,s as Ot,e as a,t as n,k as i,c as s,a as l,h as c,d as r,m as p,b as d,K as Qt,g as Ut,I as t,Q as wt}from"../chunks/vendor-9cd11116.js";import{b as Et}from"../chunks/paths-4b3c6e7e.js";function Wt(Ft){let e,_,$,q,h,m,b,A,G,g,Tt,z,u,B,K,Q,x,bt,F,v,J,f,N,O,U,y,Bt=`<script>
  import { toasts, ToastContainer, BootstrapToast }  from "svelte-toasts";
  
  const showToast = () => {
    const toast = toasts.add({
      description: 'Message body',
      component: BootstrapToast, // this will override toast component provided by ToastContainer
    });
  };

<\/script>

<button on:click={showToast}>Show Toast</button>
<ToastContainer {toasts} let:data={data}>
  <BootstrapToast {data} /> <!-- default slot as toast component -->
</ToastContainer>`,W,X,k,Z,tt,P,yt=`<slot name="icon"></slot>
<slot name="extra"></slot>
<slot name="close-icon"></slot>`,et,ot,w,at,st,I,rt,lt,C,kt=`<BootstrapToast data={data}>
  <slot name="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ccc" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  </slot>
</BootstrapToast>`,nt,ct,E,it,pt,S,dt,ht,M,Pt=`<BootstrapToast data={data}>
  <slot name="extra">
    <span class="text-sm text-gray-300">08:15:30 AM</span>
  </slot>
</BootstrapToast>`,mt,ut,T,vt,ft,D,_t,gt,Y,It=`<BootstrapToast data={data}>
  <slot name="close-icon">
    <span class="text-sm text-gray-300">Close</span>
  </slot>
</BootstrapToast>`,xt;return{c(){e=a("div"),_=a("h2"),$=n("BootstrapToast"),q=i(),h=a("div"),m=a("div"),b=a("p"),A=n("Dark Theme"),G=i(),g=a("img"),z=i(),u=a("div"),B=a("p"),K=n("Light Theme"),Q=i(),x=a("img"),F=i(),v=a("p"),J=n(`BootstrapToast component takes "data" prop which is a toast object as described\r
    `),f=a("a"),N=n("here"),O=n(". You can use BootstrapToast like this."),U=i(),y=a("pre"),W=n(Bt),X=i(),k=a("p"),Z=n("BootstrapToast accepts following optional slots:"),tt=i(),P=a("pre"),et=n(yt),ot=i(),w=a("h3"),at=n("Icon Slot"),st=i(),I=a("p"),rt=n("You can provide your own custom icon or any element to be shown as toast icon instead of predefined icons."),lt=i(),C=a("pre"),nt=n(kt),ct=i(),E=a("h3"),it=n("Extra Slot"),pt=i(),S=a("p"),dt=n("You can provide some extra content to be shown below toast message, something like timestamp, some link to other page etc."),ht=i(),M=a("pre"),mt=n(Pt),ut=i(),T=a("h3"),vt=n("Close Icon Slot"),ft=i(),D=a("p"),_t=n("By default, a cross icon is show inside close button but if you want to change this icon, you can provide your own icon or some text."),gt=i(),Y=a("pre"),xt=n(It),this.h()},l(H){e=s(H,"DIV",{class:!0});var o=l(e);_=s(o,"H2",{class:!0});var Ct=l(_);$=c(Ct,"BootstrapToast"),Ct.forEach(r),q=p(o),h=s(o,"DIV",{class:!0});var R=l(h);m=s(R,"DIV",{class:!0});var V=l(m);b=s(V,"P",{});var St=l(b);A=c(St,"Dark Theme"),St.forEach(r),G=p(V),g=s(V,"IMG",{src:!0,alt:!0}),V.forEach(r),z=p(R),u=s(R,"DIV",{class:!0});var j=l(u);B=s(j,"P",{});var Mt=l(B);K=c(Mt,"Light Theme"),Mt.forEach(r),Q=p(j),x=s(j,"IMG",{src:!0,alt:!0}),j.forEach(r),R.forEach(r),F=p(o),v=s(o,"P",{});var L=l(v);J=c(L,`BootstrapToast component takes "data" prop which is a toast object as described\r
    `),f=s(L,"A",{href:!0,class:!0});var Dt=l(f);N=c(Dt,"here"),Dt.forEach(r),O=c(L,". You can use BootstrapToast like this."),L.forEach(r),U=p(o),y=s(o,"PRE",{});var Yt=l(y);W=c(Yt,Bt),Yt.forEach(r),X=p(o),k=s(o,"P",{});var Ht=l(k);Z=c(Ht,"BootstrapToast accepts following optional slots:"),Ht.forEach(r),tt=p(o),P=s(o,"PRE",{});var Rt=l(P);et=c(Rt,yt),Rt.forEach(r),ot=p(o),w=s(o,"H3",{class:!0});var Vt=l(w);at=c(Vt,"Icon Slot"),Vt.forEach(r),st=p(o),I=s(o,"P",{});var jt=l(I);rt=c(jt,"You can provide your own custom icon or any element to be shown as toast icon instead of predefined icons."),jt.forEach(r),lt=p(o),C=s(o,"PRE",{});var Lt=l(C);nt=c(Lt,kt),Lt.forEach(r),ct=p(o),E=s(o,"H3",{class:!0});var $t=l(E);it=c($t,"Extra Slot"),$t.forEach(r),pt=p(o),S=s(o,"P",{});var qt=l(S);dt=c(qt,"You can provide some extra content to be shown below toast message, something like timestamp, some link to other page etc."),qt.forEach(r),ht=p(o),M=s(o,"PRE",{});var At=l(M);mt=c(At,Pt),At.forEach(r),ut=p(o),T=s(o,"H3",{class:!0});var Gt=l(T);vt=c(Gt,"Close Icon Slot"),Gt.forEach(r),ft=p(o),D=s(o,"P",{});var zt=l(D);_t=c(zt,"By default, a cross icon is show inside close button but if you want to change this icon, you can provide your own icon or some text."),zt.forEach(r),gt=p(o),Y=s(o,"PRE",{});var Kt=l(Y);xt=c(Kt,It),Kt.forEach(r),o.forEach(r),this.h()},h(){d(_,"class","text-xl font-semibold"),Qt(g.src,Tt=`${Et}/images/bootstrap-dark.png`)||d(g,"src",Tt),d(g,"alt","Dark"),d(m,"class","text-center"),Qt(x.src,bt=`${Et}/images/bootstrap-light.png`)||d(x,"src",bt),d(x,"alt","Light"),d(u,"class","text-center"),d(h,"class","grid grid-cols-2 gap-3 max-w-xl"),d(f,"href",`${Et}/toast`),d(f,"class","text-sky-600 hover:underline"),d(w,"class","text-xl"),d(E,"class","text-xl"),d(T,"class","text-xl"),d(e,"class","space-y-3")},m(H,o){Ut(H,e,o),t(e,_),t(_,$),t(e,q),t(e,h),t(h,m),t(m,b),t(b,A),t(m,G),t(m,g),t(h,z),t(h,u),t(u,B),t(B,K),t(u,Q),t(u,x),t(e,F),t(e,v),t(v,J),t(v,f),t(f,N),t(v,O),t(e,U),t(e,y),t(y,W),t(e,X),t(e,k),t(k,Z),t(e,tt),t(e,P),t(P,et),t(e,ot),t(e,w),t(w,at),t(e,st),t(e,I),t(I,rt),t(e,lt),t(e,C),t(C,nt),t(e,ct),t(e,E),t(E,it),t(e,pt),t(e,S),t(S,dt),t(e,ht),t(e,M),t(M,mt),t(e,ut),t(e,T),t(T,vt),t(e,ft),t(e,D),t(D,_t),t(e,gt),t(e,Y),t(Y,xt)},p:wt,i:wt,o:wt,d(H){H&&r(e)}}}class te extends Jt{constructor(e){super();Nt(this,e,null,Wt,Ot,{})}}export{te as default};
