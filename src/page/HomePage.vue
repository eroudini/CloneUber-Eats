<template>
  <div class="homepage">
<restaurant-row />
  </div>
</template>

<script>
// import
import BDD from '../BDD.js'
import {onMounted} from 'vue'
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

      let data_restaurant = []

      const makeDataRestaurant = () => {
        let three_restaurants = [ ]; 
        for (const restaurant of BDD) {
          const new_restaurant = new Restaurant(restaurant.name, new_restaurant.note, new_restaurant.image, new_restaurant.drive_time)

          if (three_restaurants.length === 2) {
            three_restaurants.push(new_restaurant);
            data_restaurant.push(three_restaurants);
            three_restaurants = [];
          } else {
            three_restaurants.push(new_restaurant);
          }
          
        }
      }

      onMounted(makeDataRestaurant);
    },

}
</script>

<style>

</style>