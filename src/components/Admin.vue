<template>
  <div class="admin">
    <h1>Admin Page</h1>
    <p>See the <a href="#" v-on:click="handleStoreClick">Store</a></p>
    <form @submit.prevent="register">
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    <input v-model="item.name" type="text" placeholder="name" />
    <input v-model="item.price" type="text" placeholder="price" />
    <input v-model="item.image_url" type="text" placeholder="imageUrl" />
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
      errors: [],
      item:{
        name: null,
        price: null,
        image_url: null,
      },
    };
  },
  methods: {
    handleStoreClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/');
    },
    register: async function() {
      this.checkForm();
      try{
        const { name, price, image_url } = this.item;
        await api.createItem({ name, price, image_url });
      } catch(err) {
        console.error(err);
      }
    },
    checkForm: function() {
      const { name, price, image_url } = this.item;
      if (name && price && image_url) {
        return true;
      }
      this.errors = [];
      if (!name) {
        this.errors.push('Name required.');
      }
      if (!price) {
        this.errors.push('Price required.');
      }
      if(!parseInt(price, 10)){
        this.errors.push('Price is Number.');
      }
      if (!image_url) {
        this.errors.push('Image URL required.');
      }
    }
  },
};
</script>

<style scoped>

</style>
