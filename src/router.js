import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import AdjForNoun from '@/views/AdjForNoun'
import GuessMyWord from '@/views/GuessMyWord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    },
    {
      path: '/guessmyword',
      name: 'guessmyword',
      component: GuessMyWord
    }
  ]
})
