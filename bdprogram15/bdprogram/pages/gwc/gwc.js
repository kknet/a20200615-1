(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gwc/gwc"],{"09ab":function(t,a,n){"use strict";n.r(a);var e=n("55c1"),i=n("bc62");for(var s in i)"default"!==s&&function(t){n.d(a,t,function(){return i[t]})}(s);n("c15d");var o,c=n("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);a["default"]=r.exports},4559:function(t,a,n){},5332:function(t,a,n){"use strict";(function(t){n("d28f");e(n("66fd"));var a=e(n("09ab"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("5486")["createPage"])},5389:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("88e4"),i={data:function(){return{$imgurl:this.$imgurl,needAuth:!1,needBind:!1,page_signs:"/pages/gwc/gwc",baseinfo:{},take_self:1,nav:3,mygwc:[],normal_total:0,invalid_total:0,allxz:0,allprice:0,jiesuan:0,manage_statue:0,gwc_ids:"",gwc_nodata:!1,system_w:0,suid:"",pull:0,isIphoneX:"",ps_name:"快递配送",zq_name:"到店自取"}},onLoad:function(a){var n=this;t.getSystemInfo({success:function(t){var a=t,e=a.model;-1!=e.search("iPhone X")&&(n.isIphoneX=!0)}}),this._baseMin(this);var i=t.getStorageSync("systemInfo");i.system.indexOf("iOS")>=0&&(this.is_ios=1),this.system_w=parseInt(i.windowWidth);var s=0;a.fxsid&&(s=a.fxsid),this.fxsid=s;var o=t.getStorageSync("suid");if(o&&(this.suid=o),o)e.bdLogin(s,function(){n.getmygwc()});else{this.getmygwc();var c=t.getStorageSync("baidu_userinfo");c?this.needBind=!0:this.needAuth=!0}},onPullDownRefresh:function(){this.pull=1,this.getmygwc(),t.stopPullDownRefresh()},methods:{cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},revisenav:function(t){var a=this.nav,n=t.currentTarget.dataset.nav;a!=n&&(1==n?this.mygwc=this.express_data:2==n?this.mygwc=this.take_data:3==n&&(this.mygwc=this.all_support_data),this.normal_total=this.mygwc.normal.length,this.invalid_total=this.mygwc.invalid.length,this.normal_total+this.invalid_total>0?this.gwc_nodata=!0:this.gwc_nodata=!1,this.nav=n,this.allprice=0,this.manage_statue=0,this.allxz=0,this.gwc_nodata?this.allxuanz():this.jiesuan=0)},getmygwc:function(){var a=this;t.setNavigationBarTitle({title:"购物车"});var n=this.suid;t.request({url:a.$host+"/api/mainwxapp/doPagegetmygwc",data:{uniacid:a.$uniacid,suid:n},success:function(t){t.data.data.ps_name&&(a.ps_name=t.data.data.ps_name),t.data.data.zq_name&&(a.zq_name=t.data.data.zq_name),a.take_self=t.data.data.take_self,1==a.take_self&&(a.nav=1),a.express_data=t.data.data.express_data,a.take_data=t.data.data.take_data,a.all_support_data=t.data.data.all_support_data,1==a.nav?a.mygwc=t.data.data.express_data:2==a.nav?a.mygwc=t.data.data.take_data:3==a.nav&&(a.mygwc=t.data.data.all_support_data),a.normal_total=a.mygwc.normal.length,a.invalid_total=a.mygwc.invalid.length,a.normal_total+a.invalid_total>0&&(a.gwc_nodata=!0),1==a.pull&&(a.allxz=0),a.allxuanz()}})},allxuanz:function(){var t=this,a=t.allxz,n=t.mygwc.normal,e=t.allprice;if(1==a){a=0;for(var i=0;i<n.length;i++)e=(100*e-n[i]["num"]*n[i]["pro_info"]["discount_price"]*100)/100,n[i]["ck"]=0;this.jiesuan=0}else{e=0,a=1;for(i=0;i<n.length;i++)e=(100*e+n[i]["num"]*n[i]["pro_info"]["discount_price"]*100)/100,n[i]["ck"]=1;this.jiesuan=1}e=100*e*.01,e=e<0?0:e,t.allxz=a,t.allprice=e.toFixed(2),t.mygwc.normal=n},addbtn:function(a){var n=this,e=a.currentTarget.dataset.index,i=n.mygwc.normal,s=i[e].num,o=i[e]["pro_info"]["kc"],c=i[e]["id"];if(s++,s>o)return t.showModal({title:"提醒",content:"您的购买数量超过了库存！",showCancel:!1}),s--,!1;i[e].num=s,t.request({url:n.$baseurl+"doPageduogwcchange",data:{uniacid:n.$uniacid,id:c,num:s},success:function(a){if(0==a.data.error){for(var o=0,c=0;c<i.length;c++)1==i[c]["ck"]&&(o=1*o+i[c]["num"]*i[c]["pro_info"]["discount_price"]);n.mygwc.normal=i,o=.01*parseInt(100*o),n.allprice=o.toFixed(2)}else t.showModal({title:"提醒",content:a.data.msg,showCancel:!1}),s--,i[e].num=s}})},delbtn:function(a){var n=this,e=a.currentTarget.dataset.index,i=n.mygwc.normal,s=i[e].num,o=(i[e]["pro_info"]["kc"],i[e]["id"]);s--,0==s&&s++,i[e].num=s,t.request({url:n.$baseurl+"doPageduogwcchange",data:{uniacid:n.$uniacid,id:o,num:s},success:function(t){for(var a=0,e=0;e<i.length;e++)1==i[e]["ck"]&&(a=1*a+i[e]["num"]*i[e]["pro_info"]["discount_price"]);a=parseInt(100*a)/100,n.mygwc.normal=i,n.allprice=a.toFixed(2)}})},manage:function(){var t=this.manage_statue;this.manage_statue=0==t?1:0;for(var a=this.mygwc.normal,n=0;n<a.length;n++)a[n]["ck"]=0;this.jiesuan=0,this.allxz=0,this.allprice=0,this.mygwc.normal=a},delgwcs:function(a){var n=this,e="",i=[],s=a.currentTarget.dataset.type;if(1==s){i=this.mygwc.invalid;for(var o=0;o<i.length;o++)e+=i[o]["id"]+","}else{i=this.mygwc.normal;for(o=0;o<i.length;o++)1==i[o]["ck"]&&(e+=i[o]["id"]+",")}e?t.showModal({title:"提示",content:"该操作不可逆，确定删除吗？",success:function(a){if(!a.confirm)return!1;t.request({url:n.$host+"/api/mainwxapp/doPageDelGwcs",data:{uniacid:n.$uniacid,suid:n.suid,gwc_ids:e},success:function(a){0==a.data.data.error?t.showModal({title:"提示",content:"删除成功",showCancel:!1,success:function(t){n.getmygwc()}}):t.showModal({title:"提示",content:"删除失败",showCancel:!1})}})}}):t.showModal({title:"提示",content:"请先选择删除商品",showCancel:!1})},deldata:function(a){var n=this,e=a.currentTarget.dataset.id,i=a.currentTarget.dataset.index,s=n.mygwc.normal;t.showModal({title:"提醒",content:"您确定要删除该商品？",success:function(a){a.confirm&&t.request({url:n.$baseurl+"doPagedelmygwc",data:{uniacid:n.$uniacid,id:e},success:function(t){s.splice(i,1);for(var a=0,e=0;e<s.length;e++)a=1*a+s[e]["num"]*s[e]["pro_info"]["discount_price"];a=parseInt(100*a)/100,n.mygwc.normal=s,n.allprice=a.toFixed(2)}})}})},topay:function(a){var n=this,e=n.mygwc.normal,i=n.allprice;if(0==i)return t.showModal({title:"提醒",content:"请先选择结算的商品！",showCancel:!1}),!1;for(var s=[],o=0;o<e.length;o++)if(1==e[o]["ck"]){var c="";c=e[o]["pvid"]+"|"+e[o]["pid"]+"|"+e[o]["num"],s.push(c)}t.setStorageSync("buydata",s),t.navigateTo({url:"/pages/order_down/order_down?from_gwc=1&nav="+n.nav})},xuanz:function(t){var a=this,n=t.currentTarget.dataset.index,e=(t.currentTarget.dataset.id,t.currentTarget.dataset.num,t.currentTarget.dataset.price),i=a.mygwc.normal,s=a.allprice,o=i[n]["ck"];0==o?(i[n]["ck"]=1,s=1*s+1*e):(i[n]["ck"]=0,e>0&&(s=.01*(100*s-100*e)),a.allxz=0);for(var c=0,r=0;r<i.length;r++)c=1*i[r]["ck"]+c;c==i.length&&(a.allxz=1),i[0].uid=i[0].uid+1,a.mygwc.normal=i,a.allprice=s<=0?0:s.toFixed(2),1==a.manage_statue&&c>0?a.jiesuan=1:a.jiesuan=s<=0?0:1}}};a.default=i}).call(this,n("5486")["default"])},"55c1":function(t,a,n){"use strict";var e={auth:()=>Promise.all([n.e("common/vendor"),n.e("components/auth/auth")]).then(n.bind(null,"a32a")),bindPhone:()=>Promise.all([n.e("common/vendor"),n.e("components/bindPhone/bindPhone")]).then(n.bind(null,"9bb9")),myfooter:()=>n.e("components/myfooter/myfooter").then(n.bind(null,"6bab"))},i=function(){var t=this,a=t.$createElement;t._self._c},s=[];n.d(a,"b",function(){return i}),n.d(a,"c",function(){return s}),n.d(a,"a",function(){return e})},bc62:function(t,a,n){"use strict";n.r(a);var e=n("5389"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);a["default"]=i.a},c15d:function(t,a,n){"use strict";var e=n("4559"),i=n.n(e);i.a}},[["5332","common/runtime","common/vendor"]]]);