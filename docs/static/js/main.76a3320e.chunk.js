(this["webpackJsonpreact-redux-context-hooks"]=this["webpackJsonpreact-redux-context-hooks"]||[]).push([[0],{24:function(t,e,n){t.exports=n(40)},34:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=n(10),u=n(6),l=n(20),m=(n(34),n(4)),s=n(5),d=n(7),p=n(8),f=n(42),h=n(44),E=n(22),b=n(43),O=(n(35),function(t){return r.a.createElement("header",{className:"main-navigation"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.a,{to:"/"},"Products")),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/cart"},"Cart (",t.cartItemNumber,")")))))}),v=(n(37),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{cartItemNumber:this.props.cartItemCount}),r.a.createElement("main",{className:"products"},r.a.createElement("ul",null,this.props.products.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,e.title)," - $",e.price),r.a.createElement("div",null,r.a.createElement("button",{onClick:t.props.addProductToCart.bind(t,e)},"Add to Cart")))})))))}}]),n}(a.Component)),y=Object(u.b)((function(t){return{products:t.products,cartItemCount:t.cart.reduce((function(t,e){return t+e.quantity}),0)}}),(function(t){return{addProductToCart:function(e){return t(function(t){return function(e){setTimeout((function(){e({type:"ADD_PRODUCT_TO_CART",payload:t})}),700)}}(e))}}}))(v),j=(n(38),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"handleRemoveProduct",value:function(t){var e;this.props.dispatch((e=t,function(t){setTimeout((function(){t({type:"REMOVE_PRODCUT_FROM_CART",payload:e})}),700)}))}},{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{cartItemNumber:this.props.cartItemCount}),r.a.createElement("main",{className:"cart"},this.props.cartItems.length<=0&&r.a.createElement("p",null,"No Item in the Cart!"),r.a.createElement("ul",null,this.props.cartItems.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,e.title)," - $",e.price," (",e.quantity,")"),r.a.createElement("div",null,r.a.createElement("button",{onClick:t.handleRemoveProduct.bind(t,e.id)},"Remove from Cart")))})))))}}]),n}(a.Component)),C=Object(u.b)((function(t){return{cartItems:t.cart,cartItemCount:t.cart.reduce((function(t,e){return t+e.quantity}),0)}}))(j),R=(n(39),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,{path:"/",component:y,exact:!0}),r.a.createElement(E.a,{path:"/cart",component:C,exact:!0})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(9),k=n(16),I={products:[{id:"p1",title:"Gaming Mouse",price:29.99},{id:"p2",title:"Harry Potter 3",price:9.99},{id:"p3",title:"Used plastic bottle",price:.99},{id:"p4",title:"Half-dried plant",price:2.99}],cart:[],cartSum:0},T=function(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PRODUCT_TO_CART":if((e=(t=Object(k.a)(n.cart)).findIndex((function(t){return t.id===a.payload.id})))<0)t.push(Object(g.a)({},a.payload,{quantity:1}));else{var r=Object(g.a)({},t[e]);r.quantity++,t[e]=r}return Object(g.a)({},n,{cart:t});case"REMOVE_PRODCUT_FROM_CART":e=(t=Object(k.a)(n.cart)).findIndex((function(t){return t.id===a.payload}));var c=Object(g.a)({},t[e]);return c.quantity--,c.quantity<=0?t.splice(e,1):t[e]=c,Object(g.a)({},n,{cart:t});default:return n}},_=Object(i.c)(T,Object(i.a)(l.a));o.a.render(r.a.createElement(u.a,{store:_},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.76a3320e.chunk.js.map