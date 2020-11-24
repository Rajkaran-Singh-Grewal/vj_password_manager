<template>
  <div class="home">
    <loginComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import loginComponent from '@/components/loginComponent.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    loginComponent
  },
});
</script>
