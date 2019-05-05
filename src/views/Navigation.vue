<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Rhymesaurus',
          page:'/'
        },
        {
          id: 1,
          text: 'Adjective for Noun',
          page:'/adjfornoun'
        },
        {
          id: 2,
          text: "Guess My Word",
          page:'/guessmyword'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
  background-color: black;
  color: white;
  border: 3px solid white;
  outline: 3px solid black;
  text-decoration: none;
}
</style>