"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[251],{8251:function(t,a,s){s.r(a),s.d(a,{default:function(){return p}});var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container py-5"},[s("NavTabs"),s("h1",{staticClass:"mt-5"},[t._v(" 人氣餐廳 ")]),s("hr"),t._l(t.topRests,(function(a){return s("div",{key:a.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"card-img",attrs:{src:a.image}})])]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(a.name)+" ")]),s("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(a.FavoriteCount))]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(a.description)+" ")]),s("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"rest",params:{id:a.id}}}},[t._v("Show")]),a.isFavorited?s("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.cancelFav(a.id)}}},[t._v(" 移除最愛 ")]):s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFav(a.id)}}},[t._v(" 加到最愛 ")])],1)])])])}))],2)},e=[],i=(s(1703),s(1639)),n=s(1947),o=s(1926),c=s(6017),d={data(){return{topRests:{}}},components:{NavTabs:i.Z},methods:{async addFav(t){try{const{data:a}=await c.Z.addFavorite({restaurantId:t});if("success"!==a.status)throw new Error(a.message);console.log(a),this.topRests.forEach((a=>{a.id===t&&(a.FavoriteCount+=1,a.isFavorited=!0)}))}catch(a){o.F.fire({icon:"error",title:"請稍後再試"})}},async cancelFav(t){try{const{data:a}=await c.Z.deleteFavorite({restaurantId:t});if("success"!==a.status)throw new Error(a.message);this.topRests.forEach((a=>{a.id===t&&(a.FavoriteCount-=1,a.isFavorited=!1)}))}catch(a){o.F.fire({icon:"error",title:"請稍後再試"})}},async fetchTopRestaurants(){try{const{data:t}=await n.Z.getTopRestaurants();console.log(t),this.topRests=t.restaurants}catch(t){o.F.fire({icon:"error",title:"錯誤，請稍後再試"})}}},created(){this.fetchTopRestaurants()}},u=d,l=s(1001),v=(0,l.Z)(u,r,e,!1,null,null,null),p=v.exports}}]);
//# sourceMappingURL=251.4e94d1c1.js.map