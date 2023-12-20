.<template>
    <p>{{ restaurant.name }}</p>
</template>

<script>
import BDD from '../BDD'
import {useRoute} from 'vue-router'
 
export default {
   name: 'RestaurantPage',
   setup () {
    const route = useRoute()
    const restaurant = BDD.find((restaurant)=> restaurant.name === route.params.name)
    return {
        restaurant
    } 
    
   }
}
</script>

<style>
</style>
