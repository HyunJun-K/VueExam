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
              <li 
              :key="index" 
              v-for="(item,index) in itemslist"
              v-bind:class="item.size"
              > 
              <a v-bind:href="item.link">
                <img :src="item.image" class="images"> 
              </a>
             </li>
            </ul>

        </div>
   


  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        itemslist :[
          {
            size:"item-list-frist  border text-center", link:"aa.aa", image:"https://www.lottefoods.co.kr/_upload/product/2013320143015_27370.jpg"
          },
          {size:"item-list-frist   border text-center float-right", link:"aa.aa", image: "https://img.khan.co.kr/news/2020/06/09/khan_NZiEIP.20200608000394.jpg"},
          {size:"item-list  border", link:"aa.aa", image: "https://www.costco.co.kr/medias/sys_master/images/ha0/h6c/32161608990750.jpg" },
          {size:"item-list  border", link:"aa.aa", image: require("../assets/image/product_1.jpg")},
          {size:"item-list  border", link:"aa.aa", image: require("../assets/image/product_1.jpg")},
          {size:"item-list  border", link:"aa.aa", image: require("../assets/image/product_1.jpg")},

        ],
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
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
  line-height:15px;
  float:left;
  margin:5px;
}


.section-content ul{
  margin:0px;
  padding:0px;
  top:0;
}



.section-content{
  border : 0.2px solid black;
  overflow:hidden;
  margin:0;
  padding:0;
}


.item-list{
  list-style:none;
  float:left;
  margin:10px;
  padding:10px;
  width:280px;
}

.item-list-frist{
  width:580px;
  list-style:none;
  float:left;
  padding:5px; 
  margin:13px;
}

.item-list-frist .images{
  width:420px;
  height:250px;
}

.item-list .images{
  width:250px;
  height:250px;
  
}




</style>
