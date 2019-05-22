<template lang="html">
  <div id="test">
    <superslide :options="options" class="slideBox">
      <!-- slides -->
      <div class="bd">
        <ul>
          <li>
            <a href="javascript:;"><img :src="url"/></a>
          </li>
          <li>
            <a href="javascript:;"><img :src="url"/></a>
          </li>
          <li>
            <a href="javascript:;"><img :src="url"/></a>
          </li>
        </ul>
      </div>

      <!-- Optional controls slots -->
      <!-- slot="titCell" -->
      <div class="hd" slot="titCell">
        <ul>
          <li class="on">1</li>
          <li class="">2</li>
          <li class="">3</li>
        </ul>
      </div>

      <!-- slot="prev" -->
      <a class="prev" href="javascript:void(0)" slot="prev"></a>
      <!-- slot="next" -->
      <a class="next" href="javascript:void(0)" slot="next"></a>

      <!-- slot="pageStateCell" -->
      <span class="pageState" slot="pageStateCell"></span>
    </superslide>
  </div>
</template>

<script>
export default {
  name: 'test',
  components: {},
  data() {
    return {
      options: {
        mainCell: '.bd ul',
        autoPlay: true,
      },
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.slideBox {
    width: 450px;
    height: 230px;
    overflow: hidden;
    position: relative;
    border: 1px solid #ddd;
  }
  .slideBox .hd {
    height: 15px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 1;
  }
  .slideBox .hd ul {
    overflow: hidden;
    zoom: 1;
    float: left;
  }
  .slideBox .hd ul li {
    float: left;
    margin-right: 2px;
    width: 15px;
    height: 15px;
    line-height: 14px;
    text-align: center;
    background: #fff;
    cursor: pointer;
  }
  .slideBox .hd ul li.on {
    background: #f00;
    color: #fff;
  }
  .slideBox .bd {
    position: relative;
    height: 100%;
    z-index: 0;
  }
  .slideBox .bd li {
    zoom: 1;
    vertical-align: middle;
  }
  .slideBox .bd img {
    width: 450px;
    height: 230px;
    display: block;
  }

  /* 下面是前/后按钮代码，如果不需要删除即可 */
  .slideBox .prev,
  .slideBox .next {
    position: absolute;
    left: 3%;
    top: 50%;
    margin-top: -25px;
    display: block;
    width: 32px;
    height: 40px;
    /* background: url(../assets/images/slider-arrow.png) -110px 5px no-repeat; */
    filter: alpha(opacity=50);
    opacity: 0.5;
  }
  .slideBox .next {
    left: auto;
    right: 3%;
    background-position: 8px 5px;
  }
  .slideBox .prev:hover,
  .slideBox .next:hover {
    filter: alpha(opacity=100);
    opacity: 1;
  }
  .slideBox .prevStop {
    display: none;
  }
  .slideBox .nextStop {
    display: none;
  }
</style>
