<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const suggestionDrink = ref({})
const ingredients = ref([])

onMounted(() => {
  getDrinkDetails(route.params.id)
})

watch(suggestionDrink, () => {
  ingredients.value = new Array(15)
    .fill()
    .map((count, index) => suggestionDrink.value[`strIngredient${index + 1}`])
})

const getDrinkDetails = async (id) => {
  try {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .then((response) => response.json())
      .then((data) => (suggestionDrink.value = data.drinks[0]))
  } catch (error) { }
}

</script>
<template>
  <button class="button" @click="$router.push('/')">Back</button>
  <section v-if="suggestionDrink && suggestionDrink.strDrink" class="suggestion">
    <div class="image-container">
      <img :src="suggestionDrink.strDrinkThumb" alt="Drink Thumb" />
    </div>
    <div class="details-container">
      <h2>{{ suggestionDrink.strDrink }}</h2>
      <p><span class="heading">Type:</span> {{ suggestionDrink.strAlcoholic }}</p>
      <p><span class="heading">Served in:</span> {{ suggestionDrink.strGlass }}</p>
      <p>
        <span class="heading">Ingredient:</span>
        <span v-for="ingredient in ingredients">{{ ingredient ? ingredient + ', ' : null }}</span>
      </p>
      <p>
        <span class="heading">How it's made:</span>
        {{ suggestionDrink.strInstructions }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.suggestion {
  margin-top: 20px;
  width: 70%;
  display: flex;
  justify-content: center;
  margin: 50px auto;
  border: 1px solid grey;
  padding: 6px;
}

.heading {
  font-weight: bold;
}

.button {
  padding: 10px;
  list-style: none;
  border: 1px solid #cfcfcf;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  position: fixed;
}

.suggestion h2 {
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid grey;
}

.image-container {
  width: 50%;
  overflow: hidden;
  display: flex;
}

.image-container img {
  width: 100%;
  object-fit: contain;
}

.details-container {
  width: 60%;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .suggestion {
    flex-direction: column;
    width: 80%;
  }

  .image-container {
    width: auto;
  }

  .details-container {
    width: auto;

  }
}
</style>
