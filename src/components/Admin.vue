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
    <input v-model="name" type="text" placeholder="name" />
    <input v-model="price" type="number" placeholder="price" min="0" />
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
      errors: [],
      name: null,
      price: null,
      imageUrl: null,
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
        await api.createItem({ name: this.name, price: this.price, imageUrl: this.imageUrl });
      } catch(err) {
        console.error(err);
      }
    },
    checkForm: function(e) {
      if (this.name && this.price && this.imageUrl) {
        return true;
      }
      this.errors = [];
      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.price) {
        this.errors.push('Price required.');
      }
      if (!this.imageUrl) {
        this.errors.push('Image URL required.');
      }
      e.preventDefault();
    }
  },
};
</script>

<style scoped>

</style>
