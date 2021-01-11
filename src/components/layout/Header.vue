<template>
<div> 
  <div class="nav-top ">

    <a class="mr-2">즐겨찾기</a> 
    <a class="mr-2">입점신청</a>
    <a class="float-right ml-2">고객센터</a>
    <a class="float-right ml-2">회원가입</a>
    <a class="float-right">로그인</a>
  </div>

  <div class="home-header ">
        <div class="category-btn bg-white col-2 text-center  float-left">
          <font-awesome-icon icon="bars" class="icons"/> 
          <h6 class="fonts">카테고리</h6>
        </div>

        <div class="category-btn text-center  col-2  float-left">
          <img src="http://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png" width="185" height="40" alt="logo">
        </div>



        <div class="category-serach  col-6 float-left">
            <div class="serach-form border border-success mt-4 ml-4">
              <select class="select-box border">
                <option :key="index" v-for="(item,index) in options">
                {{item.title}}
                </option>
              </select>
              <input type="text" class="input-box  border" placeholder=" 찾고 싶은 상품을 검색해보세요!">
              <button type="button" class="search-btn btn text-center"> <font-awesome-icon icon="search" />   </button>
            </div>

            <div>
            <ul class="ulList">
              <li :key="index" v-for="(item,index) in menu_box">
                <a v-bind:href="item.link">  {{item.menu}} </a>
               </li>
            </ul>
            </div>

        </div>

        <div class="category-myPage  col-1 text-center float-left">
             <font-awesome-icon icon="user" class="icons"/>
             <h6 class="mt-2">마이쿠팡</h6>
        </div>

         <div class="category-myCart  col-1 text-center float-left">

             <div class="cartData">
              {{cartData}} 
             </div>
             <font-awesome-icon icon="shopping-cart" class="icons"/>
             <h6 class="mt-2">장바구니</h6>


        </div>

   
     
  </div>



</div>
</template>

<style>
.nav-top{
  font-size: 11px;
  padding:10px;
  background-color:#F0F0F0;
  
}

.nav-top a{
  cursor:pointer;
  color:black;
}

.nav-top a:hover{
  text-decoration:none;
  color:Green;
}


.home-header{
    height:115px;
}

.category-btn{
  height:115px;
}

.category-btn .icons{
  margin-top :30px;
  font-size:30px;
}

.category-btn .fonts{
  margin-top:5px;
  font-size:13px;
}

.category-serach {
  height:115px;
}

.category-serach .serach-form{
  width:500px;
  height:39px;
}

.category-serach .select-box{
  width:110px;
  padding:10px;
  height:37px;
  font-size:12px;
}
.category-serach .input-box {
  width:388px;
  padding:5px;
  height:37px;

}

.category-serach .search-btn{
  z-index :0;
  position:absolute;
  left : 500px;
}

.ulList {
   list-style: none;
   font-size : 13px;
   
}

.ulList li{
  float:left;
  margin :3px;
  padding: 3px;
}

.ulList li a{
  color:black;
  cursor:pointer;
}
.ulList li a:hover{
   text-decoration:underline;
   color:Green;
}
img {
  margin-top: 30px;
  border : 0;  
}


.category-myPage{
  margin-top : 30px;
}


.category-myPage .icons{
  font-size:40px;
}

.category-myPage h6{
  font-size:13px;
}


.category-myCart{
  margin-top:30px;
}

.category-myCart .icons{
  font-size:40px;
}


.category-myCart h6{
  font-size:13px;
}

.cartData {
  z-index :0;
  position:absolute;
  top:-30px;
  left:45%;
  padding:5px;
}


</style>


<script>
export default {
  data() {
      return {
        options : [
                {v:"all", title:"전체"},
                {v:"man", title:"남성패션"},
                {v:"moman", title:"여성패션"},
                {v:"baby", title:"베이비패션"},
                {v:"momanbaby", title:"여아패션"},
                {v:"manbaby", title:"남아패션"},
                {v:"sport", title:"스포츠패션"},
                {v:"buty", title:"뷰티"},
            ],
        menu_box:[
            {v:"loket", menu:"로켓배송",link:"loket"},
            {v:"loketfresh", menu:"로켓프레시",link:"loketfresh"},
            {v:"loketbuy", menu:"로켓직구",link:"buy"},
            {v:"goldbox", menu:"골드박스",link:"goldbox"},
            {v:"drivery", menu:"정기배송",link:"drivery"},
            {v:"event", menu:"이벤트/쿠폰",link:"event"},
            {v:"plen", menu:"기획전",link:"plan"},
        ],
        cartData : 0,


      }
  },

};
</script>
