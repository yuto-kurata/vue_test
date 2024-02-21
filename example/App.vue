<template>
  <body>
    <div id="app" class="clock_wrap">
    <div class="today_wrap">
      <div class="date">
        <p>{{ date }}</p>
      </div>
      <div class="week">
        <p>{{ dayOfWeek }}</p>
      </div>
    </div>

    <div class="d-time">
      <p>{{ clock }}</p>
    </div>
    <p>テスト</p>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      clock: "00:00:00",
      date: "",
      dayOfWeek: ""
    };
  },
  created() {
    this.tick();
  },
  methods: {
    tick() {
      const now = new Date();
      this.clock = this.formatTime(now.getHours()) + ":" +
                   this.formatTime(now.getMinutes()) + ":" +
                   this.formatTime(now.getSeconds());
      this.date = `${now.getFullYear()}-${this.formatTime(now.getMonth() + 1)}-${this.formatTime(now.getDate())}`;
      this.dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][now.getDay()];
      setTimeout(this.tick, 1000);
    },
    formatTime(value) {
      return value < 10 ? `0${value}` : value.toString();
    }
  }
};
</script>

<style scoped>
/* style.cssの内容をここに移動 */
body {
background: rgb(209, 209, 209);
}

.clock_wrap .date,
.clock_wrap .week,
.clock_wrap .d-time {
font-size: 4rem;
}
.clock_wrap .date p,
.clock_wrap .week p,
.clock_wrap .d-time p {
font-family: fantasy;
letter-spacing: 4px;
margin: unset;
}/*# sourceMappingURL=style.css.map */
</style>