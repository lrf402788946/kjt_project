<template>
  <div class="wrapper">
    <headers></headers>
    <div class="main" style=" height:1364px !important;">
      <menus></menus>
    </div>
    <div id="bg" style="background:#fff;"></div>
  </div>
</template>
<script>
import headers from '@/components/headers.vue';
import menus from '@/components/menus2.vue';
export default {
  components: {
    menus,
    headers,
  },
};
</script>
