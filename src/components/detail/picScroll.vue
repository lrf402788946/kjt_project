<template lang="html">
  <div id="picScroll">
    <div class="spec-scroll" id="spec-n5">
      <superslide :options="slideOptions" class="slideBox">
        <a class="prev">&lt;</a>
        <div class="items" id="spec-list">
          <ul class="list-h" ref="imgList">
            <li v-for="(item, index) in picList" :key="index" @click="changePic(index)"><img :src="item.url" /></li>
          </ul>
        </div>
        <a class="next">&gt;</a>
      </superslide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'picScroll',
  components: {},
  props: {
    picList: { type: Array, default: () => [] },
  },
  data() {
    return {
      slideOptions: { autoPlay: false, mainCell: '.items ul', effect: 'left', vis: 5, defaultIndex: 0 },
    };
  },
  computed: {},
  methods: {
    changePic(index) {
      this.$emit('changePic', index);
    },
  },
};
</script>

<style lang="css" scoped></style>
