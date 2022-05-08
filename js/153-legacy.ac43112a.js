"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[153],{4153:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v(" 美食達人 ")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"col-3"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:t.image,width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(t.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(t.FollowerCount))]),r("p",{staticClass:"mt-3"},[t.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.cancelFollow(t.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.follow(t.id)}}},[e._v(" 追蹤 ")])])])})),0)],1)},s=[],a=r(3019),o=r(6198),u=(r(5666),r(1249),r(8309),r(1703),r(1639)),i=r(6017),c=r(1926),l={data:function(){return{users:[]}},components:{NavTabs:u.Z},methods:{fetchUsers:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,followerCount:e.FollowerCount,isFollowed:e.isFollowed}})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),c.F.fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},follow:function(e){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.addFollowing({userId:e});case 3:if(n=r.sent,s=n.data,console.log("data",s),"success"===s.status){r.next=8;break}throw new Error(s.message);case 8:t.users=t.users.map((function(t){return t.id!==e?t:(0,a.Z)((0,a.Z)({},t),{},{followerCount:t.followerCount+1,isFollowed:!0})})),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),c.F.fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},cancelFollow:function(e){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.deleteFollowing({userId:e});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:t.users=t.users.map((function(t){return t.id!==e?t:(0,a.Z)((0,a.Z)({},t),{},{followerCount:t.followerCount-1,isFollowed:!1})})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c.F.fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},created:function(){this.fetchUsers()}},f=l,p=r(1001),d=(0,p.Z)(f,n,s,!1,null,null,null),w=d.exports},1249:function(e,t,r){var n=r(2109),s=r(2092).map,a=r(1194),o=a("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=153-legacy.ac43112a.js.map