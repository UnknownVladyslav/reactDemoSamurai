(this["webpackJsonpreact-kamasutra"]=this["webpackJsonpreact-kamasutra"]||[]).push([[4],{291:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),c=t(0),i=t(17),r=t(2),d=t.n(r),j=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{className:d.a.dialogItem+""+d.a.active,children:Object(c.jsxs)(i.b,{to:s,children:[" ",e.name," "]})})},o=function(e){return Object(c.jsxs)("div",{className:d.a.messageItem,children:[" ",e.message," "]})},u=t(87),b=t(128),l=t(12),m=t(44),O=Object(m.a)(50),g=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{component:l.b,validate:[O],name:"dialogAddMessageForm",placeholder:"Enter your message"})}),Object(c.jsx)("button",{children:"Send message"})]})})})),h=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(c.jsx)(j,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return Object(c.jsx)(o,{message:e.message},e.id)}));return Object(c.jsxs)("div",{className:d.a.Dialogs,children:[Object(c.jsx)("div",{className:d.a.dialogsItems,children:t}),Object(c.jsx)("div",{className:d.a.messages,children:Object(c.jsx)("div",{className:d.a.messageItems,children:Object(c.jsx)("div",{children:a})})}),Object(c.jsx)("div",{children:Object(c.jsx)(g,{onSubmit:function(s){e.sendMessage(s.dialogAddMessageForm)}})})]})},f=t(127),x=t(14),v=t(5),p=t(35),A=t(36),N=t(38),k=t(37),M=t(11),I=function(e){return{isAuth:e.auth.isAuth}},S=function(e){var s=function(s){Object(N.a)(a,s);var t=Object(k.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(v.a)({},this.props)):Object(c.jsx)(M.a,{to:"/login"})}}]),a}(n.a.Component);return Object(x.b)(I)(s)},y=t(8),F=Object(y.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(f.a)(s))}}})),S)(h);s.default=F}}]);
//# sourceMappingURL=4.2b65a4a2.chunk.js.map