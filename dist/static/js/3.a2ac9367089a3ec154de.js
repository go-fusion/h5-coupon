webpackJsonp([3],{Dilz:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAACO0lEQVRYw+2Y23mDMAxG/xEYgRHYoIzABmGDsEG8QbMBbJBsYDYgG8AGsIH6EGNk8JW0b3WfavzpyJKsS4C4leMKiQEEwgCJK3L82sohQZY/+TuQmyF0wmT8f/tU/EMJWtCg0LsFBBb1pf1EfKuECGSHbxnEp4hG6V45T9QK0ZwRn2EGgVB7T70Rs+WGwXUHgdAFz3UgEO7pgLf+eUQQv++QuCoQCM+os08QCGUaQETY3/SDOOOBOK3KM17oQSD2tHyrAIHQW758uaOrT75Bf3D+AIL0+6BKCAix25vVI/Q67p7gLx4Q3ywdeqN7jAKMxovJVdWwAEqMmPXBV6QX3h54afGraWrlx0PebwwjySBAGgZqVNUodKCoxLbWrBcLrCU62S0sRT7RKRkaUOpricRMmXszrgLUumaVjiNuMw3OJ8YApA5l1je6eGpWqxTLw4BXsGYJR/T7fMQAffAZ7QVd1e49mM+CgLVm8RZlbQa6iIQZAdgQbYL4JABHPCLFJwI2RKz4ZMCaBuL7oGQAUGLCFF3eTwDOlN1/wGeAChKXvwJsg9OY2haGAdlucCLIExAnoFJ9AmFCw2ayR+LQN9gAfKJcB6eaQdpIyKYkA3DD9DtB29A34xaYZ0pDSQ3ghqmsI5UJcbUBLVOyAKBnd9I1ytdFbDl1PAQwtwDLWDxW+oiGPVcTzT6Ab7r5WczySvbtgJV7I4Av2rzLcaZegoZxp+79rxedLcYKiMhJxtbUTEnmPbUEFl8R+gGGWxuCYKQlXQAAAABJRU5ErkJggg=="},NWtr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=s("Dd8w"),a=s.n(n),i=s("bOdI"),r=s.n(i),c=(s("eqfM"),s("/QYm")),d=(s("Oxcr"),s("deBG")),l=(s("f4F5"),s("9JZw")),u=Object(l.a)({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("cell-group",{class:e.b()},[s("cell",{attrs:{title:e.title||e.$t("title"),value:e.value,"is-link":e.editable},on:{click:function(t){e.$emit("click")}}})],1)},name:"coupon-cell",model:{prop:"chosenCoupon"},props:{title:String,coupons:{type:Array,default:function(){return[]}},chosenCoupon:{type:Number,default:-1},editable:{type:Boolean,default:!0}},computed:{value:function(){var e=this.coupons,t=e[this.chosenCoupon];return t?"-￥"+(t.value/100).toFixed(2):0===e.length?this.$t("tips"):this.$t("count",e.length)}}}),h=(s("mMXg"),s("qYlo")),p=(s("i0mo"),s("Hkar")),m=s("1fWZ"),g=s("3nlj"),v=s("Hj6f"),f=s("NYxO"),A={data:function(){return{allCoach:0,havePage:!1,mainarea:!1,slidename:"slide-go",showList:!1,chosenCoupon:-1,cellTip:"",isChooseCard:!1,chooseCard:{},coupons:[{available:1,discount:0,denominations:0,origin_condition:0,reason:"",value:100,name:"123456789",start_at:1489104e3,end_at:1514592e3}],disabledCoupons:[]}},components:(o={Headersec:g.a,Nopage:v.a},r()(o,m.a.name,m.a),r()(o,p.a.name,p.a),r()(o,h.a.name,h.a),r()(o,u.name,u),r()(o,d.a.name,d.a),r()(o,c.a.name,c.a),o),computed:a()({},Object(f.mapGetters)(["this.$store.state.orders","this.$store.state.chooseaddress","this.$store.state.defaultaddress","this.$store.state.comname"]),{currentAddress:function(){var e="";return e=""!==this.$store.state.chooseaddress?this.$store.state.chooseaddress:this.$store.state.defaultaddress,e}}),mounted:function(){if(this.cellTip="你有"+this.coupons.length+"个可用兑换卡",this.mainarea=!0,void 0===this.$store.state.orders)this.havePage=!1;else{this.havePage=!0;var e=[];this.$store.state.orders.forEach(function(t){e.push(t.GoodsPrice*t.GoodsNum)});for(var t=0;t<e.length;t++)this.allCoach+=parseInt(e[t])}"goodsdetail"===this.$store.state.comname||"cart"===this.$store.state.comname?this.slidename="slide-go":this.slidename="slide-back",this.setComname("orderwait")},methods:a()({onOrder:function(){this.currentAddress?this.isChooseCard?(this.$router.push("./order"),this.setPays(this.$store.state.orders)):Object(c.a)("请选择兑换卡"):Object(c.a)("请选择收货地址")},onAddress:function(){this.$router.push("./address")},onChange:function(e){this.showList=!1,this.chosenCoupon=e,this.isChooseCard=!0,this.chooseCard=this.coupons[e],this.cellTip=this.coupons[e].name},onExchange:function(e){this.cellTip=e}},Object(f.mapMutations)({setPays:"SET_PAYS",setIschoose:"SET_ISCHOOSE",setComname:"SET_COMNAME"}))},C={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page"},[o("headersec",{attrs:{tabname:"订单详情"}}),e._v(" "),o("transition",{attrs:{name:e.slidename}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.mainarea,expression:"mainarea"}],staticClass:"container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.havePage,expression:"!havePage"}]},[o("nopage")],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.havePage,expression:"havePage"}]},[o("div",{staticClass:"chooseAddress",on:{click:function(t){e.onAddress()}}},[o("div",{staticClass:"flex-align-center chooseBox"},[o("img",{attrs:{src:s("Dilz")}}),e._v(" "),o("div",{staticClass:"flex-align-center flex-between"},[o("p",{directives:[{name:"show",rawName:"v-show",value:!e.currentAddress,expression:"!currentAddress"}]},[e._v("选择送货地址")]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:e.currentAddress,expression:"currentAddress"}]},[e._v(e._s(e.currentAddress))]),e._v(" "),o("img",{attrs:{src:s("SR5j"),alt:""}})])])]),e._v(" "),e._l(e.$store.state.orders,function(t){return o("div",{staticClass:"orderItem flex"},[o("img",{staticClass:"goodsImg",attrs:{src:t.GoodsImage}}),e._v(" "),o("div",[o("p",{staticClass:"goods-name"},[e._v(e._s(t.GoodsName))]),e._v(" "),o("p",{staticClass:"goods-num"},[e._v("x"+e._s(t.GoodsNum))]),e._v(" "),o("p",{staticClass:"goods-price"},[e._v("¥"+e._s(t.GoodsPrice))])])])}),e._v(" "),o("van-cell-group",[o("van-cell",{attrs:{title:"兑换卡",value:e.cellTip},on:{click:function(t){e.showList=!0}}})],1),e._v(" "),o("div",{staticClass:"orderBottom flex-between"},[o("span",[e._v("总金额:"+e._s(e.allCoach))]),e._v(" "),o("span",{on:{click:e.onOrder}},[e._v("结算")])])],2)])]),e._v(" "),o("van-popup",{attrs:{position:"bottom"},model:{value:e.showList,callback:function(t){e.showList=t},expression:"showList"}},[o("van-coupon-list",{attrs:{"show-exchange-bar":!1,"show-close-button":!1,coupons:e.coupons,"chosen-coupon":e.chosenCoupon,"disabled-coupons":e.disabledCoupons},on:{change:e.onChange,exchange:e.onExchange}})],1)],1)},staticRenderFns:[]};var b=s("VU/8")(A,C,!1,function(e){s("nSDD")},"data-v-5bf30661",null);t.default=b.exports},Oxcr:function(e,t,s){"use strict";var o=s("f4F5"),n=(s.n(o),s("/eQD")),a=(s.n(n),s("Tidh"));s.n(a)},SR5j:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAmUlEQVRYw+2WWw3DMBDADKEQAiEQBmEQxqCFMCYLhDFoGbRMEga3nwWCqz1iALZ0inIHg8HgP8gkU38nqGQvUAiCys0KJBpBEF4ic9iJ6czE7CceXmKzE/3R/kpiZbITu5dY3onypYE+osMZUddvrl4eTnG+itXV7+foF1evLJzs6hPVXZdPgqBxNQ+vZh5ecHFPx8Fg8Pm8ADaBbRp1+1HzAAAAAElFTkSuQmCC"},Tidh:function(e,t){},deBG:function(e,t,s){"use strict";var o=s("9JZw"),n=Object(o.a)({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.b({disabled:e.disabled})},[s("div",{class:e.b("head")},[s("div",{class:e.b("lines")}),s("div",{class:e.b("gradient")},[s("h2",{domProps:{innerHTML:e._s(e.faceAmount)}}),s("p",[e._v(e._s(e.conditionMessage))])])]),s("div",{class:e.b("body")},[s("h2",[e._v(e._s(e.data.name))]),s("span",[e._v(e._s(e.validPeriod))]),e.disabled&&e.data.reason?s("p",[e._v(e._s(e.data.reason))]):e._e(),e.chosen?s("div",{class:e.b("corner")},[s("icon",{attrs:{name:"success"}})],1):e._e()])])},name:"coupon-item",props:{data:Object,chosen:Boolean,disabled:Boolean},computed:{validPeriod:function(){return this.getDate(this.data.start_at)+"-"+this.getDate(this.data.end_at)},faceAmount:function(){return 0!==this.data.denominations?"<span>¥</span> "+this.formatAmount(this.data.denominations):0!==this.data.discount?this.formatDiscount(this.data.discount):""},conditionMessage:function(){var e=this.data.origin_condition;return e=e%100==0?Math.round(e/100):(e/100).toFixed(2),0===this.data.origin_condition?this.$t("unlimited"):this.$t("condition",e)}},methods:{getDate:function(e){var t=new Date(1e3*e);return t.getFullYear()+"."+this.padZero(t.getMonth()+1)+"."+this.padZero(t.getDate())},padZero:function(e){return(e<10?"0":"")+e},formatDiscount:function(e){return this.$t("discount",""+(e/10).toFixed(e%10==0?0:1))},formatAmount:function(e){return(e/100).toFixed(e%100==0?0:e%10==0?1:2)}}}),a=s("0zAV"),i=s("SSsa");t.a=Object(o.a)({render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.b()},[e.showExchangeBar?s("cell-group",{class:e.b("top")},[s("field",{staticClass:"van-hairline--surround",class:e.b("field"),attrs:{clearable:"",placeholder:e.inputPlaceholder||e.$t("placeholder"),maxlength:20},model:{value:e.currentCode,callback:function(t){e.currentCode=t},expression:"currentCode"}}),s("van-button",{class:e.b("exchange"),attrs:{size:"small",type:"danger",text:e.exchangeButtonText||e.$t("exchange"),loading:e.exchangeButtonLoading,disabled:e.buttonDisabled},on:{click:e.onClickExchangeButton}})],1):e._e(),s("div",{ref:"list",class:e.b("list",{"with-exchange":e.showExchangeBar})},[e._l(e.coupons,function(t,o){return s("coupon-item",{key:t.id||t.name,ref:"card",refInFor:!0,attrs:{data:t,chosen:o===e.chosenCoupon},nativeOn:{click:function(t){e.$emit("change",o)}}})}),e.disabledCoupons.length?s("h3",[e._v(e._s(e.disabledListTitle||e.$t("disabled")))]):e._e(),e._l(e.disabledCoupons,function(e){return s("coupon-item",{key:e.id||e.name,attrs:{disabled:"",data:e}})}),e.coupons.length||e.disabledCoupons.length?e._e():s("div",{class:e.b("empty")},[s("img",{attrs:{src:"https://img.yzcdn.cn/v2/image/wap/trade/new_order/empty@2x.png"}}),s("p",[e._v(e._s(e.$t("empty")))])])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showCloseButton,expression:"showCloseButton"}],staticClass:"van-hairline--top",class:e.b("close"),domProps:{textContent:e._s(e.closeButtonText||e.$t("close"))},on:{click:function(t){e.$emit("change",-1)}}})],1)},name:"coupon-list",components:{VanButton:i.a,Field:a.a,CouponItem:n},model:{prop:"code"},props:{code:String,closeButtonText:String,inputPlaceholder:String,disabledListTitle:String,exchangeButtonText:String,exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean,exchangeMinLength:{type:Number,default:1},chosenCoupon:{type:Number,default:-1},coupons:{type:Array,default:function(){return[]}},disabledCoupons:{type:Array,default:function(){return[]}},displayedCouponIndex:{type:Number,default:-1},showExchangeBar:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0}},data:function(){return{currentCode:this.code||""}},computed:{buttonDisabled:function(){return!this.exchangeButtonLoading&&(this.exchangeButtonDisabled||this.currentCode.length<this.exchangeMinLength)}},watch:{code:function(e){this.currentCode=e},currentCode:function(e){this.$emit("input",e)},displayedCouponIndex:function(e){this.scrollToShowCoupon(e)}},mounted:function(){this.scrollToShowCoupon(this.displayedCouponIndex)},methods:{onClickExchangeButton:function(){this.$emit("exchange",this.currentCode),this.code||(this.currentCode="")},scrollToShowCoupon:function(e){var t=this;-1!==e&&this.$nextTick(function(){var s=t.$refs,o=s.card,n=s.list;n&&o&&o[e]&&(n.scrollTop=o[e].$el.offsetTop-100)})}}})},eqfM:function(e,t,s){"use strict";var o=s("f4F5"),n=(s.n(o),s("Cj3+")),a=(s.n(n),s("5kWq"));s.n(a)},i0mo:function(e,t,s){"use strict";var o=s("f4F5");s.n(o)},mMXg:function(e,t,s){"use strict";var o=s("f4F5"),n=(s.n(o),s("Cj3+"));s.n(n)},nSDD:function(e,t){}});