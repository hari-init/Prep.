<script setup>
import { useRouter } from 'vue-router';
const drinkCategories = [
  { category: 'Cocktail', mood: '🎉 Party' },
  { category: 'Cocktail', mood: '🥂 Celebratory' },
  { category: 'Cocktail', mood: '😌 Relaxing after work' },

  { category: 'Ordinary Drink', mood: '🏠 Casual' },
  { category: 'Ordinary Drink', mood: '🛋️ Everyday' },
  { category: 'Ordinary Drink', mood: '🤗 Comforting' },

  { category: 'Punch / Party Drink', mood: '🎊 Social' },
  { category: 'Punch / Party Drink', mood: '🎈 Festive' },
  { category: 'Punch / Party Drink', mood: '👥 Large Gatherings' },

  { category: 'Shake', mood: '🧃 Nostalgic' },
  { category: 'Shake', mood: '🎠 Fun' },
  { category: 'Shake', mood: '🍨 Sweet Treat' },

  { category: 'Other / Unknown', mood: '🤔 Adventurous' },
  { category: 'Other / Unknown', mood: '🧪 Experimental' },

  { category: 'Cocoa', mood: '☕ Cozy' },
  { category: 'Cocoa', mood: '🔥 Warm' },
  { category: 'Cocoa', mood: '❄️ Relaxing, Winter Mood' },

  { category: 'Shot', mood: '⚡ Exciting' },
  { category: 'Shot', mood: '💃 Energetic' },
  { category: 'Shot', mood: '🌙 Night Out' },

  { category: 'Coffee / Tea', mood: '🎯 Focused' },
  { category: 'Coffee / Tea', mood: '🧘 Calm' },
  { category: 'Coffee / Tea', mood: '💻 Work or Study Mode' },

  { category: 'Homemade Liqueur', mood: '🎨 Creative' },
  { category: 'Homemade Liqueur', mood: '🛠️ Crafty' },
  { category: 'Homemade Liqueur', mood: '🏡 DIY Enthusiast' },

  { category: 'Beer', mood: '🛋️ Laid-back' },
  { category: 'Beer', mood: '🍻 Socializing' },
  { category: 'Beer', mood: '⚽ Sports Watching' },

  { category: 'Soft Drink', mood: '💦 Refreshing' },
  { category: 'Soft Drink', mood: '😎 Chill' },
  { category: 'Soft Drink', mood: '🚫 Non-Alcoholic Alternative' },
]
const router = useRouter()

const onClickHandler = async (cat) => {
  try {
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + cat, {
      method: 'GET',
    })
      .then((response) => {
        return response.json()
      })
      .then(async (res) => {
        const drinkId = res.drinks[Math.floor(Math.random() * res.drinks.length)].idDrink
        // await getDrinkDetails(drinkId)
        router.push(`/drink/${drinkId}`)

      })
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <header class="header">
    <h2>Cocktail Picker</h2>
  </header>
  <main class="main-container">
    <h3>Please pick your mood...</h3>
    <section>
      <ul>
        <li :id="moods.category" @click="() => onClickHandler(moods.category)" class="li-card"
          v-for="moods in drinkCategories" :key="moods.category">
          {{ moods.mood }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
}

.li-card {
  padding: 6px;
  list-style: none;
  border: 1px solid #cfcfcf;
  margin: 4px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
}

.li-card:hover {
  scale: 1.05;
  transition: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

ul {
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.main-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
}
</style>
