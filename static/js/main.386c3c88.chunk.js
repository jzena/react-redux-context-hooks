(this["webpackJsonpreact-redux-context-hooks"]=this["webpackJsonpreact-redux-context-hooks"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=a(6),l=a(4),u=a(25),s=(a(39),a(7)),m=a(8),p=a(15),d=a(12),h=a(46),E=a(48),f=a(27),v=a(9),b=a(10),O=a(13),y=a(16),C=a(47),j=(a(40),function(e){return r.a.createElement("header",{className:"main-navigation"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(C.a,{to:"/"},"Products")),r.a.createElement("li",null,r.a.createElement(C.a,{to:"/cart"},"Cart (",e.cartItemNumber,")")),r.a.createElement("li",null,r.a.createElement(C.a,{to:"/visualizer"},"visualizer")))))}),g=(a(22),function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{cartItemNumber:this.props.cartItemCount}),r.a.createElement("main",{className:"products"},r.a.createElement("ul",null,this.props.products.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",null,r.a.createElement("strong",null,t.title)," - $",t.price),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.props.addProductToCart.bind(e,t)},"Add to Cart")))})))))}}]),a}(n.Component)),I=Object(l.b)((function(e){return{products:e.products,cartItemCount:e.cart.reduce((function(e,t){return e+t.quantity}),0)}}),(function(e){return{addProductToCart:function(t){return e(function(e){return function(t){setTimeout((function(){t({type:"ADD_PRODUCT_TO_CART",payload:e})}),700)}}(t))}}}))(g),R=(a(42),function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"handleRemoveProduct",value:function(e){var t;this.props.dispatch((t=e,function(e){setTimeout((function(){e({type:"REMOVE_PRODCUT_FROM_CART",payload:t})}),700)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{cartItemNumber:this.props.cartItemCount}),r.a.createElement("main",{className:"cart"},this.props.cartItems.length<=0&&r.a.createElement("p",null,"No Item in the Cart!"),r.a.createElement("ul",null,this.props.cartItems.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",null,r.a.createElement("strong",null,t.title)," - $",t.price," (",t.quantity,")"),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.handleRemoveProduct.bind(e,t.id)},"Remove from Cart")))})))))}}]),a}(n.Component)),T=Object(l.b)((function(e){return{cartItems:e.cart,cartItemCount:e.cart.reduce((function(e,t){return e+t.quantity}),0)}}))(R),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{cartItemNumber:this.props.cartItemCount}),r.a.createElement("main",{className:"visualizer"},"hi visualizer:",r.a.createElement("br",null),r.a.createElement("visualiser-360",{colors:'[{"colorcode":"XGJ"},{"colorcode":"DAP"},{"colorcode":"GAT"}]',isProduction:"true",componentID:"Nav123456",stickyNavId:"Nav123456",drivemode:"rhd",visualiserBodyCopy:"BodyCopy for Visualiser360 component",ctaLabel:"CTA Text",ctalink:"https://google.com",visualiserLogo:"/content/dam/NISSAN/ARIYA-logo.png",visualiserLogoAlt:"*",ctaMore:"X MORE COLOURS",ctaLess:"X LESS COLOURS",ctaButton:"Drive Ariya",ctaLights:"Toggle Lights"})))}}]),a}(n.Component),A=(a(43),"/".concat(window.location.pathname.split("/")[1])),N=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:A},r.a.createElement(E.a,null,r.a.createElement(f.a,{path:"/",component:I,exact:!0}),r.a.createElement(f.a,{path:"/cart",component:T,exact:!0}),r.a.createElement(f.a,{path:"/visualizer",component:k,exact:!0})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(5),_=a(20),w={products:[{id:"p1",title:"Gaming Mouse",price:29.99},{id:"p2",title:"Harry Potter 3",price:9.99},{id:"p3",title:"Used plastic bottle",price:.99},{id:"p4",title:"Half-dried plant",price:2.99}],cart:[],cartSum:0},x=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_PRODUCT_TO_CART":if((t=(e=Object(_.a)(a.cart)).findIndex((function(e){return e.id===n.payload.id})))<0)e.push(Object(P.a)({},n.payload,{quantity:1}));else{var r=Object(P.a)({},e[t]);r.quantity++,e[t]=r}return Object(P.a)({},a,{cart:e});case"REMOVE_PRODCUT_FROM_CART":t=(e=Object(_.a)(a.cart)).findIndex((function(e){return e.id===n.payload}));var c=Object(P.a)({},e[t]);return c.quantity--,c.quantity<=0?e.splice(t,1):e[t]=c,Object(P.a)({},a,{cart:e});default:return a}},D=Object(i.c)(x,Object(i.a)(u.a));o.a.render(r.a.createElement(l.a,{store:D},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.386c3c88.chunk.js.map