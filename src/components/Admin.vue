<template>
  <div class="admin">
    <h1>Admin Page</h1>
    <p>See the <a href="#" v-on:click="handleStoreClick">Store</a></p>
    <form @submit.prevent="register">
    <input v-model="name" type="text" placeholder="name" />
    <input v-model="price" type="number" placeholder="price" />
    <input v-model="imageUrl" type="text" placeholder="imageUrl" />
    <button type="submit">submit</button>
  </form>
  </div>
</template>

<script>
import api from '../api-service';

export default {
  name: 'Admin',
  data:() => {
    return {
      name: '',
      price: '',
      imageUrl: '',
    };
  },
  methods: {
    handleStoreClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/');
    },
    register: async function() {
      try{
        await api.createItem({ name: this.name, price: this.price, imageUrl: this.imageUrl });
      } catch(err) {
        console.error(err);
      }
      
    },
  },
};
</script>

<style scoped>

</style>
