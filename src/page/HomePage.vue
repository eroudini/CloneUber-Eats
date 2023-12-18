<template>
  <div class="homepage">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
      <input type="text" placeholder="De quoi avez vous envie ?">
    </div>
    <div class="banniere">

    </div>
<restaurant-row v-for="(data, i) in data_restaurant" :key="i" :three_restaurants="data"/>
  </div>
</template>

<script>
// import
import BDD from '../BDD.js'
import {onMounted, ref} from 'vue'
// components
import RestaurantRow from '../components/RestaurantRow';
export default {
    name: 'HomePage',
    components: { RestaurantRow },

    setup() {
      class Restaurant{
        constructor (name, note, image, drive_time) {
          this.name = name
          this.note = note
          this.image = image
          this.drive_time = drive_time
      
        }
      }

      let data_restaurant = ref([]);

      const makeDataRestaurant = () => {
        let three_restaurants = []
        for (const restaurant of BDD) {
          const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)

          if (three_restaurants.length === 2) {
            three_restaurants.push(new_restaurant);
            data_restaurant.value.push(three_restaurants);
            three_restaurants = [];
          } else {
            three_restaurants.push(new_restaurant);
          }
        }
      }

      onMounted(makeDataRestaurant);
      // return
      return {
        data_restaurant,
      }
    },

}
</script>

<style lang="scss">
.homepage{
  .header{
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
      width: 200px;
    }
    input {
      background-color: #f6f6f6;
      border: none;
      height: 60px;
      width: 400px;
      outline: none;
      padding-left: 40px; 
    }
  }

  .banniere{
    height: 200px;
    width: 100%;
    background-image:url("https://foodgeekandlove.fr/wp-content/uploads/2016/04/ubereats-banniere.png");
    background-size: cover;
    background-position: center center;
  }
}
</style>