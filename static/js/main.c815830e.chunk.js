(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{101:function(e,t,n){e.exports={paginator:"Paginator_paginator__2hrN5",page__number:"Paginator_page__number__2c2gs",page__selected:"Paginator_page__selected__3sk80",button:"Paginator_button__2sN4l"}},102:function(e,t,n){e.exports={post_container:"Post_post_container__v3bVU",details__container:"Post_details__container__3-41N",post__text:"Post_post__text__7O1F_",post__like__wrapper:"Post_post__like__wrapper__cBwHY",like:"Post_like__1tYJE"}},148:function(e,t,n){e.exports={header:"Header_header__1qgC_",title:"Header_title__2VfwY",login__button:"Header_login__button__1K9WG"}},175:function(e,t,n){e.exports={form__control:"FormsControls_form__control__mwhBB",error:"FormsControls_error__1VXKM",form__summary_error:"FormsControls_form__summary_error__2itv6"}},178:function(e,t,n){e.exports={users__container:"Users_users__container__aGTZd",users__wrapper:"Users_users__wrapper__1U53-"}},179:function(e,t,n){e.exports={preloader:"Preloader_preloader__3QxHB"}},230:function(e,t,n){e.exports={profile:"Profile_profile__2n60n"}},231:function(e,t,n){e.exports={status:"ProfileStatus_status__2AM9E"}},286:function(e,t,n){},287:function(e,t,n){},37:function(e,t,n){e.exports={menu:"Navbar_menu__t1fqB",link:"Navbar_link__37ms-",item:"Navbar_item__2B-yV",active:"Navbar_active__U22O7"}},413:function(e,t,n){"use strict";n.r(t);var a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,523)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))},r=n(0),s=n.n(r),o=n(23),c=n.n(o),i=(n(286),n(287),n(33)),l=n(25),u=n(13),_="SEND_MESSAGE",d={dialogs:[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"4"},{id:5,name:"5"},{id:6,name:"6"}],messages:[{id:1,message:"Never"},{id:2,message:"Gonna"},{id:3,message:"Give You Up"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var n=t.newMessageBody;return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[{id:4,message:n}])});default:return e}},p=n(43),b=n.n(p),f=n(34),h=n(513),m=n(1),g=function(e){return Object(m.jsx)("div",{className:b.a.dialog__item,children:Object(m.jsx)(f.b,{className:b.a.link,activeClassName:b.a.active,to:"/dialogs/"+e.id,children:Object(m.jsx)(h.a,{sx:{width:56,height:56},children:e.name})})})},O=n(506),x=function(e){return Object(m.jsx)(O.a,{id:"outlined-name",className:b.a.message,value:e.message})},v=n(494),w=n(219),P=n(220),N=function(e){if(!e)return"Field is required!"},C=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," characters")}},y=function(e){return function(t){if(t.length<e)return"Min length is ".concat(e," characters")}},S=n(100),k=n(175),I=n.n(k),U=n(507),E=["input","meta","child"],T=["input","meta","child"],A=["input","meta","child"],L=function(e){e.input;var t=e.meta,n=(e.child,Object(S.a)(e,E)),a=t.touched&&t.error;return Object(m.jsxs)("div",{className:I.a.form__control+" "+(a?I.a.error:""),children:[Object(m.jsx)("div",{children:n.children}),a&&Object(m.jsx)("span",{children:t.error})]})},F=function(e){var t=e.input,n=(e.meta,e.child,Object(S.a)(e,T));return Object(m.jsx)(L,Object(u.a)(Object(u.a)({},e),{},{children:Object(m.jsx)("textarea",Object(u.a)(Object(u.a)({},t),n))}))},M=function(e){var t=e.input,n=(e.meta,e.child,Object(S.a)(e,A));return Object(m.jsx)(L,Object(u.a)(Object(u.a)({},e),{},{children:Object(m.jsx)(U.a,Object(u.a)(Object(u.a)({},t),n))}))},D=(C(50),Object(P.a)({form:"dialog-add-message-form"})((function(e){return Object(m.jsxs)("form",{className:b.a.form__message,onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(w.a,{className:b.a.add__message_field,component:F,placeholder:"Enter your message",name:"newMessageBody"})}),Object(m.jsx)(v.a,{className:b.a.add__message_button,variant:"contained",color:"middle",onClick:e.handleSubmit,children:"Send"})]})}))),z=n(512),B=n(518),G=n(519),R=n(495),H=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(m.jsx)(g,{name:e.name,id:e.id},e.id)})),a=t.messages.map((function(e){return Object(m.jsx)(x,{message:e.message},e.id)}));return e.isAuth?Object(m.jsxs)(z.a,{container:!0,className:b.a.dialogs__container,children:[Object(m.jsx)(z.a,{className:b.a.dialogs__items,item:!0,xs:2,children:n}),Object(m.jsxs)(z.a,{className:b.a.messages__container,item:!0,xs:10,children:[Object(m.jsx)(R.a,{className:b.a.message__item,spacing:2,children:a}),Object(m.jsx)("div",{className:b.a.message__send_field}),Object(m.jsx)(B.a,{position:"fixed",sx:{top:"auto",bottom:0,backgroundColor:"#546e6d"},children:Object(m.jsx)(G.a,{style:{alignSelf:"center"},children:Object(m.jsx)(D,{onSubmit:function(t){e.sendMessage(t.newMessageBody),t.newMessageBody=""}})})})]})]}):Object(m.jsx)(i.a,{to:"/login"})},W=n(30),V=function(e){return{isAuth:e.auth.isAuth}},J=n(27),K=Object(J.d)(Object(W.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:_,newMessageBody:e}}(t))}}})),(function(e){return Object(W.b)(V)((function(t){return t.isAuth?Object(m.jsx)(e,Object(u.a)({},t)):Object(m.jsx)(i.a,{to:"/login"})}))}))(H),Q=n(90),X=n(91),Y=n(144),Z=n(142),q=n(28),$=n.n(q),ee=n(49),te=n(228).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d334ed35-7c2b-4f86-86db-09775214dcba"}}),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return te.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ae=function(e){return te.post("follow/".concat(e))},re=function(e){return te.delete("follow/".concat(e))},se=function(e){return console.warn("Obsolete method. Please profileAPI object."),oe.getProfile(e)},oe={getProfile:function(e){return te.get("profile/"+e)},getStatus:function(e){return te.get("profile/status/"+e)},updateStatus:function(e){return te.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),te.put("profile/photo",t)}},ce=function(){return te.get("auth/me")},ie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return te.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},le=function(){return te.delete("auth/login")},ue=function(){return te.get("security/get-captcha-url")},_e="FOLLOW",de="UNFOLLOW",je="SET_USERS",pe="SET_CURRENT_PAGE",be="SET_TOTAL_USERS_COUNT",fe="TOGGLE_IS_FETCHING",he="TOGGLE_IS_FOLLOWING_PROGRESS",me={users:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},ge=function(e){return{type:_e,userId:e}},Oe=function(e){return{type:de,userId:e}},xe=function(e){return{type:pe,currentPage:e}},ve=function(e){return{type:fe,isFetching:e}},we=function(e,t){return{type:he,isFetching:e,userId:t}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case de:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case je:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case pe:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case be:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case fe:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case he:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Ne=n(10),Ce=n(18),ye=n(101),Se=n.n(ye),ke=n(229),Ie=n.n(ke),Ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,o=e.portionSize,c=void 0===o?5:o,i=Math.ceil(t/n),l=[],u=1;u<=i;u++)l.push(u);var _=Math.ceil(i/c),d=Object(r.useState)(1),j=Object(Ce.a)(d,2),p=j[0],b=j[1],f=(p-1)*c+1,h=p*c;return Object(m.jsxs)("div",{className:Se.a.paginator,children:[p>1&&Object(m.jsx)("button",{className:Se.a.button,onClick:function(){b(p-1)},children:"prev"}),l.filter((function(e){return e>=f&&e<=h})).map((function(e){return Object(m.jsx)("button",{className:Ie()(Object(Ne.a)({},Se.a.page__selected,a===e),Se.a.page__number),onClick:function(t){s(e)},children:e},e)})),_>p&&Object(m.jsx)("button",{className:Se.a.button,onClick:function(){b(p+1)},children:"next"})]})},Ee=n(56),Te=n.n(Ee),Ae=n.p+"static/media/user.db93928b.png",Le=n(496),Fe=n(498),Me=n(497),De=n(149),ze=n(499),Be=["user"],Ge=function(e){var t=e.user,n=Object(S.a)(e,Be);return Object(m.jsxs)(Le.a,{className:Te.a.user__container,children:[Object(m.jsx)(Me.a,{className:Te.a.image__container,title:"user profile",children:Object(m.jsx)(f.b,{to:"/profile/"+t.id,children:Object(m.jsx)("img",{className:Te.a.user__photo,src:null!=t.photos.small?t.photos.small:Ae,alt:"user"})})}),Object(m.jsxs)(Fe.a,{className:Te.a.user__details,children:[Object(m.jsx)(De.a,{className:Te.a.name__wrapper,component:"h3",variant:"h3",children:Object(m.jsx)("div",{className:Te.a.name,children:t.name})}),Object(m.jsx)(De.a,{className:Te.a.status__wrapper,variant:"subtitle1",color:"textSecondary",children:Object(m.jsx)("div",{className:Te.a.status,children:t.status})})]}),Object(m.jsx)(ze.a,{className:Te.a.button__wrapper,children:t.followed?Object(m.jsx)(v.a,{variant:"outlined",color:"middle",className:Te.a.button,disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)},children:"Unfollow"}):Object(m.jsx)(v.a,{variant:"contained",color:"middle",className:Te.a.button,disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)},children:"Follow"})})]})},Re=n(178),He=n.n(Re),We=function(e){return Object(m.jsxs)("div",{className:He.a.users__container,children:[Object(m.jsx)(Ue,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),Object(m.jsx)("div",{className:He.a.users__wrapper,children:e.users.map((function(t){return Object(m.jsx)(Ge,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow},t.id)}))})]})},Ve=n.p+"static/media/preloader.a6f61220.svg",Je=n(179),Ke=n.n(Je),Qe=function(e){return Object(m.jsx)("div",{className:Ke.a.preloader,children:Object(m.jsx)("img",{className:Ke.a.preloader__image,src:Ve,alt:"preloader"})})},Xe=function(e){return e.usersPage.users},Ye=function(e){return e.usersPage.pageSize},Ze=function(e){return e.usersPage.totalUsersCount},qe=function(e){return e.usersPage.currentPage},$e=function(e){return e.usersPage.isFetching},et=function(e){return e.usersPage.followingInProgress},tt=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(Q.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.props.isFetching?Object(m.jsx)(Qe,{}):null,Object(m.jsx)(We,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),nt=Object(J.d)(Object(W.b)((function(e){return{users:Xe(e),pageSize:Ye(e),totalUsersCount:Ze(e),currentPage:qe(e),isFetching:$e(e),followingInProgress:et(e)}}),{follow:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(we(!0,e)),t.next=3,ae(e);case 3:0===t.sent.data.resultCode&&n(ge(e)),n(we(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(we(!0,e)),t.next=3,re(e);case 3:0===t.sent.data.resultCode&&n(Oe(e)),n(we(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:xe,toggleFollowingProgress:we,getUsers:function(e,t){return function(){var n=Object(ee.a)($.a.mark((function n(a){var r;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ve(!0)),a(xe(e)),n.next=4,ne(e,t);case 4:r=n.sent,a(ve(!1)),a((o=r.items,{type:je,users:o})),a((s=r.totalCount,{type:be,count:s}));case 8:case"end":return n.stop()}var s,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(tt),at=n(230),rt=n.n(at),st=n(59),ot=n.n(st),ct=n(231),it=n.n(ct),lt=function(e){var t=Object(r.useState)(!1),n=Object(Ce.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)(e.status),c=Object(Ce.a)(o,2),i=c[0],l=c[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(m.jsxs)("div",{className:it.a.status,children:[!a&&Object(m.jsx)("span",{children:Object(m.jsx)("span",{onDoubleClick:function(){return s(!0)},children:e.status||"----"})}),a&&Object(m.jsx)("span",{children:Object(m.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(i)},autoFocus:!0,value:i})})]})},ut=n(500),_t=n(232),dt=n.n(_t),jt=n(242),pt=n(514),bt=function(e){return Object(m.jsxs)(jt.a,{className:ot.a.profile_info__container,children:[Object(m.jsx)("div",{className:ot.a.photo__block,children:Object(m.jsxs)("div",{className:ot.a.photo__wrapper,children:[e.isOwner&&Object(m.jsxs)("div",{className:ot.a.select__image,children:[Object(m.jsx)("input",{accept:"image/*",className:ot.a.select__image_input,id:"icon-button-file",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),Object(m.jsx)("label",{htmlFor:"icon-button-file",children:Object(m.jsx)(ut.a,{className:ot.a.button__load_image,color:"primary","aria-label":"upload picture",component:"div",children:Object(m.jsx)(dt.a,{})})})]}),Object(m.jsx)("img",{className:ot.a.main__photo,src:null!=e.profile.photos.large?e.profile.photos.large:Ae,alt:""})]})}),Object(m.jsxs)("div",{className:ot.a.details__block,children:[Object(m.jsx)(pt.a,{className:ot.a.name,variant:"h4",gutterBottom:!0,component:"div",children:e.profile.fullName}),Object(m.jsx)(pt.a,{className:ot.a.status,variant:"p",gutterBottom:!0,component:"div",children:Object(m.jsx)(lt,{status:e.status,updateStatus:e.updateStatus})})]})]})},ft="ADD_POST",ht="SET_USER_PROFILE",mt="SET_STATUS",gt="DELETE_POST",Ot="SAVE_PHOTO_SUCCESS",xt={posts:[{id:1,message:"hi",likesCount:12},{id:2,message:"hello",likesCount:5}],profile:null,status:""},vt=function(e){return{type:mt,status:e}},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ft:var n={id:3,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[n]),newPostText:""});case gt:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case Ot:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});case ht:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case mt:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}},Pt=n(98),Nt=n.n(Pt),Ct=C(100),yt=Object(P.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(w.a,{className:Nt.a.add_post__field,component:F,name:"newPostText",validate:[N,Ct]})}),Object(m.jsx)("div",{children:Object(m.jsx)(v.a,{variant:"outlined",onClick:e.handleSubmit,children:"Add post"})})]})})),St=n(102),kt=n.n(St),It=n(233),Ut=n.n(It),Et=n(501),Tt=n(515),At=n(508),Lt=function(e){return Object(m.jsxs)(Le.a,{className:kt.a.post_container,children:[Object(m.jsx)(Et.a,{avatar:Object(m.jsx)(Tt.a,{src:null!=e.profile.photos.large?e.profile.photos.large:Ae,"aria-label":"avatar"}),title:e.profile.fullName,subheader:"few moments ago"}),Object(m.jsxs)("div",{className:kt.a.details__container,children:[Object(m.jsx)(ze.a,{className:kt.a.post__like__wrapper,children:Object(m.jsx)(At.a,{color:"primary","aria-label":"like",component:"span",children:Object(m.jsx)(Ut.a,{className:kt.a.like})})}),Object(m.jsx)(Fe.a,{className:kt.a.post__text,children:e.message})]})]})},Ft=function(e){var t=e.posts.map((function(t){return Object(m.jsx)(Lt,{profile:e.profile,message:t.message,likesCount:t.likesCount})}));return Object(m.jsxs)("div",{className:Nt.a.posts__container,children:[Object(m.jsxs)(Le.a,{className:Nt.a.form_post__container,children:[Object(m.jsx)(pt.a,{variant:"h4",gutterBottom:!0,component:"div",children:"My posts"}),Object(m.jsx)(yt,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}})]}),Object(m.jsx)("div",{className:Nt.a.posts,children:t})]})},Mt=Object(W.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:ft,newPostText:e}}(t))}}}))(Ft),Dt=function(e){return e.profile?Object(m.jsxs)("div",{className:rt.a.profile,children:[Object(m.jsx)(bt,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(m.jsx)(Mt,{users:e.users,profile:e.profile})]}):Object(m.jsx)(Qe,{})},zt=s.a.memo(Dt),Bt=Object(J.d)(Object(W.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se(e);case 2:a=t.sent,n((r=a.data,{type:ht,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.getStatus(e);case 2:a=t.sent,n(vt(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(vt(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(ee.a)($.a.mark((function t(n){var a;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:Ot,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}),i.f)((function(e){return Object(r.useEffect)((function(){var t=e.match.params.userId;t||(t=e.authorizedUserId)||e.history.push("/login"),e.getUserProfile(t),e.getStatus(t)})),Object(m.jsx)(zt,Object(u.a)(Object(u.a)({},e),{},{isOwner:!e.match.params.userId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto}))})),Gt=n(148),Rt=n.n(Gt),Ht=n(502),Wt=n(503),Vt=n(234),Jt=n.n(Vt),Kt=n(235),Qt=n.n(Kt),Xt=n(516),Yt=n(238),Zt=n(509),qt=n(37),$t=n.n(qt),en=function(e){return Object(m.jsxs)("nav",{className:$t.a.menu,children:[Object(m.jsx)("div",{className:$t.a.item,children:Object(m.jsx)(f.b,{className:$t.a.link,activeClassName:$t.a.active,onClick:e.onClose(),to:"/profile",children:"Profile"})}),Object(m.jsx)("div",{className:$t.a.item,children:Object(m.jsx)(f.b,{className:$t.a.link,activeClassName:$t.a.active,onClick:e.onClose(),to:"/dialogs",children:"Messages"})}),Object(m.jsx)("div",{className:$t.a.item,children:Object(m.jsx)(f.b,{className:$t.a.link,activeClassName:$t.a.active,onClick:e.onClose(),to:"/users",children:"Users"})}),Object(m.jsx)("div",{className:$t.a.item,children:Object(m.jsx)(f.b,{className:$t.a.link,activeClassName:$t.a.active,onClick:e.onClose(),to:"/weather",children:"Weather"})}),Object(m.jsx)("div",{className:$t.a.item,children:Object(m.jsx)(f.b,{className:$t.a.link,activeClassName:$t.a.active,onClick:e.onClose(),to:"/converter",children:"Currency"})}),Object(m.jsx)("div",{className:$t.a.item,children:Object(m.jsx)(f.b,{className:$t.a.link,activeClassName:$t.a.active,onClick:e.onClose(),to:"/alarm",children:"Alarm"})})]})},tn=function(e){var t=Object(r.useState)(null),n=Object(Ce.a)(t,2),a=n[0],s=n[1],o=Boolean(a),c=Object(r.useState)(!1),i=Object(Ce.a)(c,2),l=i[0],u=i[1],_=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&u(e)}};return Object(m.jsx)("header",{children:Object(m.jsx)(Ht.a,{className:Rt.a.header,position:"static",children:Object(m.jsxs)(Wt.a,{children:[Object(m.jsx)(ut.a,{onClick:_(!0),edge:"start",color:"inherit","aria-label":"open drawer",children:Object(m.jsx)(Jt.a,{})}),Object(m.jsx)(Zt.a,{open:l,onClose:_(!1),onOpen:_(!0),children:Object(m.jsx)(en,{onClose:_})}),Object(m.jsx)(De.a,{variant:"h6",className:Rt.a.title,children:"HydroBee"}),Object(m.jsxs)("div",{className:Rt.a.login__block,children:[Object(m.jsx)(ut.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(m.jsx)(Qt.a,{})}),Object(m.jsx)(Yt.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:function(){s(null)},children:e.isAuth?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.b,{to:"/profile",children:Object(m.jsx)(Xt.a,{onClick:function(){s(null)},children:"Profile"})}),Object(m.jsx)(Xt.a,{onClick:e.logout,children:"Log out"})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f.b,{to:"/login",children:Object(m.jsx)(Xt.a,{onClick:function(){s(null)},children:"Login"})})})})]})]})})})},nn=n(87),an="SET_USER_DATA",rn="GET_CAPTCHA_URL_SUCCESS",sn={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},on=function(e,t,n,a){return{type:an,payload:{userId:e,email:t,login:n,isAuth:a}}},cn=function(e){return{type:rn,payload:{captchaUrl:e}}},ln=function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){var n,a,r,s,o;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,s=a.login,o=a.email,t(on(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},un=function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){var n,a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:n=e.sent,a=n.data.url,t(cn(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case an:case rn:return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},dn=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"render",value:function(){return Object(m.jsx)(tn,Object(u.a)({},this.props))}}]),n}(s.a.Component),jn=Object(W.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(ee.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:0===e.sent.data.resultCode&&t(on(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(dn),pn=n(60),bn=n.n(pn),fn=C(20),hn=y(4),mn=y(8),gn=Object(P.a)({form:"login"})((function(e){return Object(m.jsx)("div",{className:bn.a.login__container,children:Object(m.jsx)(jt.a,{className:bn.a.login__wrapper,children:Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)("div",{className:bn.a.name_field__wrapper,children:Object(m.jsx)("h1",{children:"Login"})}),Object(m.jsx)("div",{className:bn.a.email__text_field,children:Object(m.jsx)(w.a,{placeholder:"Email",name:"email",component:M,label:"Email",id:"outlined-basic",variant:"outlined",validate:[N,fn,hn]})}),Object(m.jsx)("div",{className:bn.a.password__text_field,children:Object(m.jsx)(w.a,{placeholder:"Password",name:"password",type:"password",component:M,label:"Password",id:"outlined-basic",variant:"outlined",validate:[N,fn,mn]})}),Object(m.jsxs)("div",{className:bn.a.checkbox,children:[Object(m.jsx)(w.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),e.captchaUrl&&Object(m.jsxs)("div",{className:bn.a.captcha__container,children:[Object(m.jsx)("img",{src:e.captchaUrl,alt:"captcha"}),Object(m.jsx)(w.a,{placeholder:"Symbols from image",name:"captcha",component:M,label:"Captcha",id:"outlined-basic",variant:"outlined",validate:[N]})]}),e.error&&Object(m.jsx)("div",{className:bn.a.form__summary_error,children:e.error}),Object(m.jsx)("div",{className:bn.a.button__wrapper,children:Object(m.jsx)("button",{className:bn.a.button,children:"Login"})})]})})})})),On=Object(W.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(ee.a)($.a.mark((function r(s){var o,c;return $.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ie(e,t,n,a);case 2:0===(o=r.sent).data.resultCode?s(ln()):(10===o.data.resultCode&&s(un()),c=o.data.messages.length>0?o.data.messages[0]:"Some error",s(Object(nn.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(m.jsx)(i.a,{to:"/profile"}):Object(m.jsx)("div",{children:Object(m.jsx)(gn,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})})})),xn="INITIALIZED_SUCCESS",vn={initialized:!1},wn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xn:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},Pn={},Nn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn;return e},Cn=n(236),yn=n(221),Sn=Object(J.c)({profilePage:wt,dialogsPage:j,sidebar:Nn,usersPage:Pe,auth:_n,form:yn.a,app:wn}),kn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,In=Object(J.e)(Sn,kn(Object(J.a)(Cn.a))),Un=n(504),En=n(237),Tn=n(505),An=n(517),Ln=function(e){return Object(m.jsx)(jt.a,{style:{width:"100%",height:"90vh"},children:Object(m.jsx)(pt.a,{style:{paddingLeft:"1em",paddingTop:"1em"},variant:"h3",gutterBottom:!0,component:"div",children:Object(m.jsx)(An.a,{href:"https://hydrobee3000.github.io/weather/",children:"Weather"})})})},Fn=function(e){return Object(m.jsx)(jt.a,{style:{width:"100%",height:"90vh"},children:Object(m.jsx)(pt.a,{style:{paddingLeft:"1em",paddingTop:"1em"},variant:"h3",gutterBottom:!0,component:"div",children:Object(m.jsx)(An.a,{href:"https://hydrobee3000.github.io/converter/",children:"Currency converter"})})})},Mn=function(e){return Object(m.jsx)(jt.a,{style:{width:"100%",height:"90vh"},children:Object(m.jsx)(pt.a,{style:{paddingLeft:"1em",paddingTop:"1em"},variant:"h3",gutterBottom:!0,component:"div",children:Object(m.jsx)(An.a,{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",children:"Alarm"})})})},Dn=Object(En.a)({palette:{primary:{main:"#2b7a78"},secondary:{main:"#f6fdfc"}}}),zn=Object(W.b)((function(e){return{initialized:e.app.initialized}}),{inititalizeApp:function(){return function(e){e(ln()).then((function(){e({type:xn})}))}}})((function(e){return Object(r.useEffect)((function(){e.inititalizeApp()})),e.initialized?Object(m.jsx)("div",{className:"app-wrapper",children:Object(m.jsxs)(Un.a,{container:!0,children:[Object(m.jsx)(Un.a,{item:!0,xs:12,children:Object(m.jsx)(jt.a,{children:Object(m.jsx)(jn,{})})}),Object(m.jsx)(Un.a,{item:!0,xs:12,children:Object(m.jsx)(jt.a,{color:"#f6fdfc",children:Object(m.jsxs)("div",{className:"app-wrapper-content",children:[Object(m.jsx)(i.b,{exact:!0,path:"/",children:Object(m.jsx)(i.a,{to:"/profile"})}),Object(m.jsx)(i.b,{path:"/profile/:userId?",render:function(){return Object(m.jsx)(Bt,{})}}),Object(m.jsx)(i.b,{path:"/dialogs",render:function(){return Object(m.jsx)(K,{})}}),Object(m.jsx)(i.b,{path:"/users",render:function(){return Object(m.jsx)(nt,{})}}),Object(m.jsx)(i.b,{path:"/login",render:function(){return Object(m.jsx)(On,{})}}),Object(m.jsx)(i.b,{path:"/weather",render:function(){return Object(m.jsx)(Ln,{})}}),Object(m.jsx)(i.b,{path:"/converter",render:function(){return Object(m.jsx)(Fn,{})}}),Object(m.jsx)(i.b,{path:"/alarm",render:function(){return Object(m.jsx)(Mn,{})}})]})})})]})}):Object(m.jsx)(Qe,{})})),Bn=function(e){return Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(f.a,{basename:"/social-network",children:Object(m.jsx)(W.a,{store:In,children:Object(m.jsx)(Tn.a,{theme:Dn,children:Object(m.jsx)(zn,{})})})})})};c.a.render(Object(m.jsx)(Bn,{}),document.getElementById("root")),a()},43:function(e,t,n){e.exports={dialogs__container:"Dialogs_dialogs__container__3YAGs",dialogs__items:"Dialogs_dialogs__items__3pOfC",dialog__item:"Dialogs_dialog__item__8oPjS",link:"Dialogs_link__H-dq0",messages__container:"Dialogs_messages__container__2p-C5",message__item:"Dialogs_message__item__10xUV",message:"Dialogs_message__2t6gf",message__send_field:"Dialogs_message__send_field__1KUlR",form__message:"Dialogs_form__message__14rZo",add__message_field:"Dialogs_add__message_field__3NNCC",add__message_button:"Dialogs_add__message_button__1llDe"}},56:function(e,t,n){e.exports={user__container:"User_user__container__2znBy",image__container:"User_image__container__3OPrH",user__photo:"User_user__photo__cIoex",user__details:"User_user__details__3OmXh",name__wrapper:"User_name__wrapper__2S3RC",name:"User_name__1EQay",status__wrapper:"User_status__wrapper__2ZJR-",status:"User_status__3hEK0",button__wrapper:"User_button__wrapper__2sjZ9"}},59:function(e,t,n){e.exports={profile_info__container:"ProfileInfo_profile_info__container__1vFZ_",photo__block:"ProfileInfo_photo__block__2GliM",photo__wrapper:"ProfileInfo_photo__wrapper__Fr4XE",select__image:"ProfileInfo_select__image__9cbOX",select__image_input:"ProfileInfo_select__image_input__2ZWw7",button__load_image:"ProfileInfo_button__load_image__1JmQg",main__photo:"ProfileInfo_main__photo__3Wqxx",details__block:"ProfileInfo_details__block__f-DIg",name:"ProfileInfo_name__2HzSR",status:"ProfileInfo_status__dGaxY"}},60:function(e,t,n){e.exports={login__container:"Login_login__container__1WodL",login__wrapper:"Login_login__wrapper__2UsLk",name_field__wrapper:"Login_name_field__wrapper__DmpDo",email__text_field:"Login_email__text_field__hajkM",password__text_field:"Login_password__text_field__2QwJK",checkbox:"Login_checkbox__53ahI",button__wrapper:"Login_button__wrapper__2M0Lc",button:"Login_button__2rSVP",form__summary_error:"Login_form__summary_error__vMQtn"}},98:function(e,t,n){e.exports={posts__container:"MyPosts_posts__container__33aHP",posts__wrapper:"MyPosts_posts__wrapper__1JKCc",posts:"MyPosts_posts__2alx6",form_post__container:"MyPosts_form_post__container__2zLws",add_post__field:"MyPosts_add_post__field__DMB_t"}}},[[413,1,2]]]);
//# sourceMappingURL=main.c815830e.chunk.js.map