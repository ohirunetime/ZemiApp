<template>
<div id="app">
  <h1>卒業制作</h1>
  <div v-show="loading" class="loader">Now loading...</div>
  <div v-show="!loading" class="itemContainer">

    <div v-for="(pref, index) in pref_list" :key='index'>
      <h2>{{ pref['@name'] }}</h2>

      <div v-for="(data, index) in data_list" :key='index'>


        <div v-if="data['@area'] === pref['@code']">
          <p>{{data['@time'].slice(0,4)}}年 : {{data['$']}} {{data['@unit']}}</p>
        </div>

        <!-- <div v-if="data['@area'] === pref['@code']">

        </div> -->

      </div>
    </div>
  </div>


  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      pref_list: null,
      data_list: null,
      cat_list:null,
      loading: true,
      title: null
    }
  },
  mounted() {
    let url = "http://api.e-stat.go.jp/rest/3.0/app/json/getStatsData?appId=dbbdf86180b1dcaa41549024ac5edd074f35d6db&lang=J&statsDataId=0003001298&metaGetFlg=Y&cntGetFlg=N&explanationGetFlg=Y&annotationGetFlg=Y&sectionHeaderFlg=1";

    axios.get(url)
      .then(response => {
        this.pref_list = response.data.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ[3].CLASS;
        this.data_list = response.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE;
        this.cat_list = response.data.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ.CLASS;


        console.log(response.data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE);
        this.loading = false;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
