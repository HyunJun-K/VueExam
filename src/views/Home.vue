<template>
    <div>
        <h1> Welcome home {{title2}} </h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">Get</button>
         <button type="button" @click="setData">Set</button>
         <select class="form-control" v-model="region" @change="changeregion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
         </select>

         <table class="table border" v-if="tableShow">
         <tr :key="i" :value="d.v" v-for="(d,i) in options"> 
            <td>{{d.v}} </td>
            <td>{{d.t}}</td>
         </tr>
         </table>
    </div>
</template>
<script>
export default{
    data(){
        return {
            title : "Juier dev",
            title2 : "Seoul",
            input1 : "abc",
            options : [
                {v:"S",t:"서울"},
                {v:"J",t:"제주"}
            ],
            region : "S",
            tableShow :true,
        };
    },
    watch:{
        input1(){
            console.log(this.input1);
        }
    },
    methods:{
        getData(){
            alert(this.input1)
        },
        setData(){
            this.input1 = 1234;
        },
        changeregion() {
            alert(this.region);
        }
     
    },

   beforeCreate() {
            console.log("beforeCreate")
        },

        created() {
            console.log("created")
        },

        beforeMount() {
            console.log("beforeMount")
        },
        
        mounted() {
             console.log("mounted")
        },

        beforeUpdate() {
            console.log("beforeUpdate")
        },

        updated(){
            console.log("updated")
        },
        beforeDestory(){
            console.log("beforeDestory")
        },

};
</script>