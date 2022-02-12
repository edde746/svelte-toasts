import{S as lt,i as ct,s as it,e as n,t as o,k as f,c as l,a as c,h as s,d as r,m as v,b as d,g as dt,I as t,Q as J}from"../chunks/vendor-e1b88f46.js";import{b as K}from"../chunks/paths-4b3c6e7e.js";function pt(nt){let e,T,k,g,i,I,p,M,S,h,A,H,u,P,j,y,Y,R,b,L=`<script>
  import { toasts, ToastContainer }  from "svelte-toasts";
  
  const showToast = () => {
    const toast = toasts.add({
      title: 'Hello',
      description: 'Message body',
    });
  };
<\/script>

<button on:click={showToast}>Show Toast</button>
<ToastContainer {toasts} let:data={data}>
  <div class="my-toast {data.type}">
    <button on:click={data.remove}>Close</button>
    <p class="title">{data.title}</p>
    <hr>
    <p class="description">{data.description}</p>
    <div>
      Some other content here.
    </div>
  </div>
</ToastContainer>`,$,B,_,F,q,C,N=`// MyToast.svelte
<script>
  export let data;
<\/script>

<div class="my-toast {data.type}">
  <button on:click={data.remove}>Close</button>
  <p class="title">{data.title}</p>
  <hr>
  <p class="description">{data.description}</p>
  <div>
    <slot>Some other content here.</slot>
  </div>
</div>`,D,Q,w,V,z,x,O=`<script>
  import { toasts, ToastContainer } from "svelte-toasts";
  import MyToast from './MyToast.svelte';
  
  const showToast = () => {
    const toast = toasts.add({
      title: 'Hello',
      description: 'Message body',
    });
  };

<script>

<button on:click={showToast}>Show Toast</button>
<ToastContainer {toasts} let:data={data}>
  <MyToast {data} />
</ToastContainer>`,G;return{c(){e=n("div"),T=n("h2"),k=o("Custom Toast"),g=f(),i=n("p"),I=o("If "),p=n("a"),M=o("FlatToast"),S=o(` or\r
    `),h=n("a"),A=o("BootstrapToast"),H=o(` do not fullfil your needs even\r
    after overriding styles, you can create and use your own toast component. ToastContainer has default slot which acts\r
    as Toast Component template. You can write inline markup or create a stand alone component which takes a "data" prop\r
    which is actually a toast object. You read about toast object\r
    `),u=n("a"),P=o("here"),j=f(),y=n("h2"),Y=o("Inline Template"),R=f(),b=n("pre"),$=o(L),B=f(),_=n("h2"),F=o("Custom Toast Component"),q=f(),C=n("pre"),D=o(N),Q=f(),w=n("p"),V=o("And now you can use that component as toast template"),z=f(),x=n("pre"),G=o(O),this.h()},l(E){e=l(E,"DIV",{class:!0});var a=c(e);T=l(a,"H2",{class:!0});var U=c(T);k=s(U,"Custom Toast"),U.forEach(r),g=v(a),i=l(a,"P",{});var m=c(i);I=s(m,"If "),p=l(m,"A",{href:!0,class:!0});var W=c(p);M=s(W,"FlatToast"),W.forEach(r),S=s(m,` or\r
    `),h=l(m,"A",{href:!0,class:!0});var X=c(h);A=s(X,"BootstrapToast"),X.forEach(r),H=s(m,` do not fullfil your needs even\r
    after overriding styles, you can create and use your own toast component. ToastContainer has default slot which acts\r
    as Toast Component template. You can write inline markup or create a stand alone component which takes a "data" prop\r
    which is actually a toast object. You read about toast object\r
    `),u=l(m,"A",{href:!0,class:!0});var Z=c(u);P=s(Z,"here"),Z.forEach(r),m.forEach(r),j=v(a),y=l(a,"H2",{class:!0});var tt=c(y);Y=s(tt,"Inline Template"),tt.forEach(r),R=v(a),b=l(a,"PRE",{});var et=c(b);$=s(et,L),et.forEach(r),B=v(a),_=l(a,"H2",{class:!0});var at=c(_);F=s(at,"Custom Toast Component"),at.forEach(r),q=v(a),C=l(a,"PRE",{});var ot=c(C);D=s(ot,N),ot.forEach(r),Q=v(a),w=l(a,"P",{});var st=c(w);V=s(st,"And now you can use that component as toast template"),st.forEach(r),z=v(a),x=l(a,"PRE",{});var rt=c(x);G=s(rt,O),rt.forEach(r),a.forEach(r),this.h()},h(){d(T,"class","text-xl font-semibold"),d(p,"href",`${K}/flattoast`),d(p,"class","text-sky-600 hover:underline"),d(h,"href",`${K}/bootstraptoast`),d(h,"class","text-sky-600 hover:underline"),d(u,"href",`${K}/toast`),d(u,"class","text-sky-600 hover:underline"),d(y,"class","text-xl"),d(_,"class","text-xl"),d(e,"class","space-y-3")},m(E,a){dt(E,e,a),t(e,T),t(T,k),t(e,g),t(e,i),t(i,I),t(i,p),t(p,M),t(i,S),t(i,h),t(h,A),t(i,H),t(i,u),t(u,P),t(e,j),t(e,y),t(y,Y),t(e,R),t(e,b),t(b,$),t(e,B),t(e,_),t(_,F),t(e,q),t(e,C),t(C,D),t(e,Q),t(e,w),t(w,V),t(e,z),t(e,x),t(x,G)},p:J,i:J,o:J,d(E){E&&r(e)}}}class mt extends lt{constructor(e){super();ct(this,e,null,pt,it,{})}}export{mt as default};
