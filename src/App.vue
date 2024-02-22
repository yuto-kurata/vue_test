<!-- コンポーネント統合 -->
<template>
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
  }
};
</script>
