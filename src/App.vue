<!-- コンポーネント統合 -->
<template>
  <div id="cursor-tracker" :class="{ is_active: hovFlag }"></div>
  <Header />
  <Clock />
</template>

<script>
import Header from './components/Header.vue';
import Clock from './components/Clock.vue';

export default {
  components: {
    Header,
    Clock
  },
  data() {
    return {
      hovFlag: false
    };
  },
  mounted() {
    const stalker = document.getElementById('cursor-tracker');

    document.addEventListener('mousemove', (e) => {
      if (!this.hovFlag) {
        stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    const linkElem = document.querySelectorAll('a:not(.no_stick_)');
    linkElem.forEach((elem) => {
      elem.addEventListener('mouseover', () => {
        this.hovFlag = true;
      });
      elem.addEventListener('mouseout', () => {
        this.hovFlag = false;
      });
    });
  }
};
</script>

<style>
.__stroke {
  -webkit-text-stroke: inherit;
  -webkit-text-fill-color: inherit;
}
@media (min-width: 768px) {
  .__stroke {
    -webkit-text-stroke: 2px black;
    -webkit-text-fill-color: transparent;
  }
}

#cursor-tracker {
  position: fixed;
  top: -30px;
  left: -30px;
  z-index: 9999;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition:
    transform 0.2s,
    -webkit-transform 0.2s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  pointer-events: none;
  mix-blend-mode: difference;
}
#cursor-tracker.is_active {
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  background: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
</style>
