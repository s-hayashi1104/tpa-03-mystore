<template>
  <div class="homepage">
    <h1>My Store</h1>
    <div class="item-list">
      <p v-for="(item) in items" :key="item.id">{{item.name}}</p>
    </div>
    <p>Go to the <a href="#" v-on:click="handleAdminClick">Admin Panel</a></p>
  </div>
</template>

<script>
import api from '../api-service';

export default {
  name: 'Listings',
  data(){
    return { items: [] };
  },
  created: async function(){
    this.items = [];
    const { row } = await api.getItems();
    this.items = row;
  },
  methods: {
    handleAdminClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/admin');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
