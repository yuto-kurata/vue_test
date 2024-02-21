<template>
    <div id="app" class="font-fantasy text-end border-b border-b-slate-800 md:grid flex md:justify-end justify-center gap-4 p-5">
      <div>
        <p class="md:text-6xl text-lg tracking-widest">{{ date }}</p>
      </div>
      <div>
        <p class="md:text-6xl text-lg tracking-widest">{{ dayOfWeek }}</p>
      </div>
      <div>
      <p class="md:text-6xl text-lg tracking-widest">{{ clock }}</p>
    </div>
  </div>
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