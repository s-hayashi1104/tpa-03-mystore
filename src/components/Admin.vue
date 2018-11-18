<template>
  <div class="admin">
    <h1>Admin Page</h1>
    <p>See the <a href="#" v-on:click="handleStoreClick">Store</a></p>
    <form @submit.prevent="register">
    <input id="name" type="text" placeholder="name" />
    <input id="price" type="number" placeholder="price" />
    <input id="imageUrl" type="text" placeholder="imageUrl" />
    <button type="submit">submit</button>
  </form>
  </div>
</template>

<script>
import api from '../api-service';

export default {
  name: 'Admin',
  methods: {
    handleStoreClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/');
    },
    register: async function(evt) {
      try{
        console.log(evt);
        const name = document.getElementById('name');
        const price = document.getElementById('price');
        const imageUrl = document.getElementById('imageUrl');
        console.log(name.value);
        await api.createItem(name.value, price.value, imageUrl.value);
      } catch(err) {
        console.error(err);
      }
      
    },
  },
};
</script>

<style scoped>

</style>
