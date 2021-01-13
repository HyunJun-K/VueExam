<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart(slide)"
      @sliding-end="onSlideEnd(slide)"
    >
      <b-carousel-slide
        img-src="https://static.coupangcdn.com/ia/cmg_paperboy/image/1610079757138/C1_PC1_A.jpg"
      ></b-carousel-slide>

      <b-carousel-slide 
      img-src="https://image11.coupangcdn.com/image/cmg/oms/banner/3cd1ae45-3749-47b8-a9a0-358d820ad2c0_1920x450.jpg">
      </b-carousel-slide>
    </b-carousel>

      <div class="titles mt-4 mb-2">
          <h2> 오늘의 발견 </h2>
          <span class="subtitle ">오늘 쿠팡이 엄선한 가장 HOT한 상품!</span> 
      </div>

       <div class="section-content">
            <ul>
              <li id="items"
              :key="index" 
              v-for="(item,index) in itemslist"
              v-bind:class="item.size"
              @mouseover="onShow(index)"
              @mouseout="outshow"
              > 
              <a v-bind:href="item.link">
                <img :src="item.image" class="images"> 
              </a>
                <span class="font-weight-bold float-left mt-1"> {{item.names}} </span>
                <button class="buyButton" v-if="index == dataIndex" v-show="active" > 구매하기 </button>
             </li>
            </ul>
        </div>

        <div class="section-sub">
           <div class="content-sub mt-5"> 
              <h6 class="sub-content-title-sub"> HOT! TREND</h6>
              <H6 class="sub-content-title">카테고리별 <SPAN class="text-primary"> 추천 광고상품 </SPan> </H6>
            </div>
          <hr class="women-title">
            <div class="women-section border">
                  <div class="section-header col-2 border d-inline-block float-left">
                  <img class="mt-3" src="//image10.coupangcdn.com/image/coupang/main/categoryBest/best_title_womanclothe2.png" alt="women" width="114"> <br>
                  <p class="mt-2">바로가기</p> 
                  <div class="mt-5 text-center font-weight-bold"><span>HOT키워드</span></div>
                  <div>
                    <ul>
                      <li
                      :key="index"
                      v-for="(data,index) in womenlist"
                      class="text-center"
                      >
                      {{data.name}}

                      </li>
                    </ul>
                  </div>
                  </div>
          <div class="col-6 float-left">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart(slide)"
              @sliding-end="onSlideEnd(slide)"
              >
              <b-carousel-slide
                img-src="https://static.coupangcdn.com/ia/cmg_paperboy/image/1610079757138/C1_PC1_A.jpg"
              ></b-carousel-slide>

              <b-carousel-slide 
              img-src="https://image11.coupangcdn.com/image/cmg/oms/banner/3cd1ae45-3749-47b8-a9a0-358d820ad2c0_1920x450.jpg">
              </b-carousel-slide>
            </b-carousel>
          </div>





        </div>
      </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        active : false,
        dataIndex : null,
        itemslist :[
          {size:"item-list col-3 ", link:"aa.aa", image: "https://www.costco.co.kr/medias/sys_master/images/ha0/h6c/32161608990750.jpg", names:"보스턴 미백용 BB 크림" },
          { size:"item-list col-3 ", link:"aa.aa", image: "https://img3.tmon.kr/cdn3/deals/2019/05/21/2092791826/2092791826_front_337c7a9f6b.jpg", names:"하늘수 아기 물티슈 향균물티슈"},
          { size:"item-list col-3 ", link:"aa.aa", image: "https://img3.tmon.kr/cdn3/deals/2020/01/15/2969222630/2969222630_front_5fcd7ec78f.jpg", names:"방수형 전기 면도기"},

          { size:"item-list col-3 ", link:"aa.aa", image: "https://gdimg.gmarket.co.kr/1831850183/still/600?ver=1592803068", names:"청정원 포도씨유" },
          { size:"item-list col-3 ", link:"aa.aa", image: "https://image.auction.co.kr/itemimage/17/c4/de/17c4de5856.jpg", names:"저스트본 캣 치킨 고양이 사료"},
          { size:"item-list col-3 ", link:"aa.aa", image: "https://img4.tmon.kr/cdn3/deals/2019/06/21/2192407562/front_37c6c_ocsjz.jpg", names:"해태 뽀로로 아이밀크"},

          { size:"item-list col-3 ", link:"aa.aa", image: "https://image.auction.co.kr/itemimage/13/81/67/1381674ee6.jpg", names:"모션감지 LED 무드등" },
          { size:"item-list col-3 ", link:"aa.aa", image: "https://1125.co.kr/web/product/big/luckybb22_7304.jpg", names:"맛있는 감귤박스 5KG"},
          { size:"item-list col-3 ", link:"aa.aa", image: "https://img2.tmon.kr/cdn3/deals/2019/08/09/1259400946/original_1259400946_front_d2c31_1565314518production.jpg", names:"페브리즈 섬유탈취제 세트"},


        ],
        womenlist :[
          {name:"#니트원피스"},
          {name:"#기모 바지"},
          {name:"#기모 맨투맨"},
          {name:"#마스크걸이"},
          {name:"#아우터"},
          {name:"#앵클부츠"},
        ],

      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      onShow(index){
        this.active = !this.active;
        console.log(index);
        this.dataIndex = index;
      },
      outshow() {
        this.active = false;
      },
    },
  }
</script>

<style>
.section-wrap{
  
}

 .titles {
  display:inline-block;
}
 h2{
  font-size:25px;
  font-weight:bold;
  display:inline-block;
  float:left;
}

.subtitle{
  font-size:14px;
  font-weight:bold;
  padding:5px;
  line-height:20px;
  float:left;
  margin:5px;
}


.section-content ul{
  margin:0px;
  padding:0px;
  top:0;
}



.section-content{
  border : 1px solid #d6d6d6;
  overflow:hidden;
  margin:0;
  padding:0;
}


.section-content ul li:hover{
  border : 1px solid blue;
}

.item-list{
  border : 1px solid #d6d6d6;
  list-style:none;
  float:left;
  display:inline-block;
  margin :10px;
  padding : 10px;
  margin-left:6%;
}



.item-list .images{
  width:250px;
  height:250px;
}


.buyButton{
  background-color:blue;
  border : 0px solid black;
  color: white;
  font-size:12px;
  padding: 10px;
  z-index :0;
  position:absolute;
  left:0;
  top:0;
  margin:5px;
}


/* sub content */

.section-sub .sub-content-title{
  font-weight:bold;
  font-size:28px;
}

.section-sub .sub-content-title-sub{
  font-weight:bold;
  font-size:22px;
}

.section-sub .women-title{
  border-top:3px solid pink;
}

.women-section .section-header h6{
    display:inline-block;  
    float:left;
}
.women-section .section-header p{
  color: gray;
  font-size:11px;
}


.women-section .section-header ul{
  list-style:none;
  margin:0px;
  padding:6px;
  top:0;
}

.women-section .section-header ul li{
  border : 1px solid #d6d6d6;
  color : #f6699e;
  font-weight:bold;
  margin:5px;
  font-size:15px;

      
}
</style>
