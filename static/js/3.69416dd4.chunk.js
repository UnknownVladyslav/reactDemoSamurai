(this["webpackJsonpreact-kamasutra"]=this["webpackJsonpreact-kamasutra"]||[]).push([[3],{299:function(e,s,o){e.exports={usersPage:"Users_usersPage__3xdAn",usersList:"Users_usersList__19LBE",paginator:"Users_paginator__1zXC5",pagesListItem:"Users_pagesListItem__2WyC_",selectedPage:"Users_selectedPage__J63sh"}},301:function(e,s,o){e.exports={userCard:"User_userCard__23GC4",userName:"User_userName__3hmRF",followButton:"User_followButton__19eGh"}},302:function(e,s,o){"use strict";o.r(s);var n=o(38),r=o(39),t=o(41),a=o(40),l=o(0),i=o(1),c=o.n(i),u=o(13),g=o(139),f=o(48),d=o(42),j=o(25),p=o(134),h=o(135),b=o(299),P=o.n(b),w=function(e){for(var s=e.currentPage,o=e.onPageChanged,n=e.totalItemsCount,r=e.portionSize,t=void 0===r?10:r,a=Math.ceil(n/t),c=[],u=1;u<=a;u++)c.push(u);var g=Math.ceil(a/t),f=Object(i.useState)(1),d=Object(j.a)(f,2),b=d[0],w=d[1],O=(b-1)*t+1,m=b*t;return Object(l.jsx)("div",{className:P.a.paginator,children:Object(l.jsxs)("ul",{children:[b>1&&Object(l.jsx)("button",{onClick:function(){return w(b-1)},children:Object(l.jsx)(p.a,{icon:h.a,className:P.a.arrowIcon})}),c.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(l.jsx)("li",{className:"".concat(s===e&&P.a.selectedPage," ").concat(P.a.pagesListItem),onClick:function(s){o(e)},children:e},e)})),g>b&&Object(l.jsx)("button",{onClick:function(){return w(b+1)},children:Object(l.jsx)(p.a,{icon:h.b,className:P.a.arrowIcon})})]})})},O=o(16),m=o(70),x=o(301),C=o.n(x),_=function(e){var s=e.user,o=e.followingInProgress,n=e.unfollow,r=e.follow;return Object(l.jsxs)("div",{className:C.a.userCard,children:[Object(l.jsx)("div",{children:Object(l.jsx)(O.b,{to:"/profile/"+s.id,children:Object(l.jsx)("img",{src:null!=s.photos.small?s.photos.small:m.a,alt:"user photo"})})}),Object(l.jsx)("div",{className:C.a.userName,children:s.name}),Object(l.jsx)("div",{children:"country"}),Object(l.jsx)("div",{children:"city"}),Object(l.jsx)("div",{children:s.followed?Object(l.jsx)("button",{disabled:o.some((function(e){return e===s.id})),onClick:function(){n(s.id)},className:C.a.followButton,children:"Unfollow"}):Object(l.jsx)("button",{disabled:o.some((function(e){return e===s.id})),onClick:function(){r(s.id)},className:C.a.followButton,children:"Follow"})})]})},v=function(e){var s=e.followingInProgress,o=e.follow,n=e.unfollow,r=e.users;return Object(l.jsx)("div",{className:P.a.usersList,children:r.map((function(e){return Object(l.jsx)(_,{user:e,followingInProgress:s,follow:o,unfollow:n},e.id)}))})},U=function(e){var s=e.currentPage,o=e.onPageChanged,n=e.totalUsersCount,r=e.pageSize,t=Object(f.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize"]);return t.loading?Object(l.jsx)(d.a,{}):Object(l.jsxs)("div",{className:P.a.usersPage,children:[Object(l.jsx)(w,{currentPage:s,onPageChanged:o,totalItemsCount:n,portionSize:r}),Object(l.jsx)("div",{children:Object(l.jsx)(v,{followingInProgress:t.followingInProgress,follow:t.follow,unfollow:t.unfollow,users:t.users})})]})},I=o(7),N=function(e){return e.usersPage.users},k=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},y=function(e){return e.usersPage.loading},L=function(e){return e.usersPage.followingInProgress},F=function(e){Object(t.a)(o,e);var s=Object(a.a)(o);function o(){var e;Object(n.a)(this,o);for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];return(e=s.call.apply(s,[this].concat(t))).onPageChanged=function(s){var o=e.props.pageSize;e.props.requestUsers(s,o)},e}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this.props,s=e.currentPage,o=e.pageSize;this.props.requestUsers(s,o)}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:this.props.loading?Object(l.jsx)(d.a,{}):Object(l.jsx)(U,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress,loading:this.props.loading})})}}]),o}(c.a.Component);s.default=Object(I.d)(Object(u.b)((function(e){return{users:N(e),pageSize:k(e),totalUsersCount:z(e),currentPage:S(e),loading:y(e),followingInProgress:L(e)}}),{follow:g.b,unfollow:g.f,setCurrentPage:g.d,toggleFollowingProgress:g.e,requestUsers:g.c}))(F)}}]);
//# sourceMappingURL=3.69416dd4.chunk.js.map