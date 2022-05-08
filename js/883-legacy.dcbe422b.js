"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[883],{1883:function(t,e,s){s.r(e),s.d(e,{default:function(){return q}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("NavTabs"),t.isLoading?s("Spinner"):[s("h1",{staticClass:"mt-5"},[t._v(" 最新動態 ")]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新餐廳")]),s("NewestRests",{attrs:{rests:t.rests}})],1),s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新評論")]),s("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},n=[],a=s(6198),i=(s(5666),s(1703),s(7327),s(1539),s(1639)),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.rests,(function(e){return s("div",{key:e.id},[s("h4",[s("router-link",{attrs:{to:{name:"rest",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")]),s("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),s("p",[t._v(t._s(e.description))]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),s("hr")])})),0)])},o=[],u=s(8247),d={mixins:[u.q],props:{rests:{type:Array,required:!0}}},l=d,m=s(1001),v=(0,m.Z)(l,c,o,!1,null,"18c5b597",null),_=v.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新評論 ")]),s("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return s("div",{key:e.id},[s("h4",[s("router-link",{attrs:{to:{name:"rest",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),s("p",[t._v(t._s(e.text))]),s("a",{attrs:{href:"#"}},[t._v(" root ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),s("hr")])})),0)])},h=[],p={mixins:[u.q],props:{comments:{type:Array,required:!0}}},C=p,w=(0,m.Z)(C,f,h,!1,null,"2d3db2e2",null),x=w.exports,g=s(1947),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner"},[s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])])}],y={},N=(0,m.Z)(y,b,k,!1,null,"f1f050c2",null),Z=N.exports,R=s(1926),E={data:function(){return{rests:[],comments:[],isLoading:!0}},components:{NavTabs:i.Z,NewestRests:_,NewestComments:x,Spinner:Z},methods:{fetchFeeds:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var s,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.getFeeds();case 3:return s=e.sent,r=s.data,n=s.statusText,e.next=8,g.Z.getFeeds();case 8:if(a=e.sent,console.log(a),"OK"===n){e.next=12;break}throw new Error(n);case 12:t.rests=r.restaurants,t.comments=r.comments.filter((function(t){return t.Restaurant})),t.isLoading=!1,e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),t.isLoading=!1,R.F.fire({icon:"error",title:"無法取得最新動態，請稍後再試"});case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}},created:function(){this.fetchFeeds()}},F=E,$=(0,m.Z)(F,r,n,!1,null,null,null),q=$.exports}}]);
//# sourceMappingURL=883-legacy.dcbe422b.js.map