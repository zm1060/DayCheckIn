<template>
  <div id="app">
    <day-check-in :checkin="checkInData" @checkIn="checkIn" @setMonth="getCheckInData"></day-check-in>
  </div>
</template>
<script>

import DayCheckIn from './components/DayCheckIn.vue'
export default {
  name: 'App',
  components: {
    DayCheckIn
  },
  data () {
    return {
      checkInData: []
    }
  },
  created() {
    var cache = JSON.parse(window.localStorage.getItem('check_data'));
    if(cache != null){
      console.log(cache);
      this.checkInData = cache;
    }
  },
  methods: {
    checkIn (){
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth()+1; //得到月份
      var day = now.getDate();      //得到日期
      var hour= now.getHours();     //得到小时数
      var minute= now.getMinutes(); //得到分钟数
      if(month < 10){
        month = "0"+month;
      }
      if(day < 10){
        day = "0"+day;
      }
      var value = year+"-"+month+"-"+day+" "+hour+":"+minute;
      console.log(value);
      this.checkInData.push({"time":value});
      window.localStorage.setItem("check_data",JSON.stringify(this.checkInData))
    },
    getCheckInData(date,times) {
      console.log(date)
      console.log(times)
    },
  }
}
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
