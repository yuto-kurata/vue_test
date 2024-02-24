<template>
  <div id="clock" class="flex gap-4 border-y border-y-slate-800 p-5 font-fantasy md:grid md:justify-end md:text-end">
    <div>
      <p class="__stroke text-lg tracking-widest md:text-6xl">{{ date }}</p>
    </div>
    <div>
      <p class="__stroke text-lg tracking-widest md:text-6xl">{{ dayOfWeek }}</p>
    </div>
    <div>
      <p class="__stroke text-lg tracking-widest md:text-6xl">{{ clock }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      clock: '00:00:00',
      date: '',
      dayOfWeek: ''
    };
  },
  created() {
    this.tick();
  },
  methods: {
    tick() {
      const now = new Date();
      this.clock = this.formatTime(now.getHours()) + ':' + this.formatTime(now.getMinutes()) + ':' + this.formatTime(now.getSeconds());
      this.date = `${now.getFullYear()}-${this.formatTime(now.getMonth() + 1)}-${this.formatTime(now.getDate())}`;
      this.dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][now.getDay()];
      setTimeout(this.tick, 1000);
    },
    formatTime(value) {
      return value < 10 ? `0${value}` : value.toString();
    }
  }
};
</script>
