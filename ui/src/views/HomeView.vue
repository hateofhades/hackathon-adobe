<template>
    <Navbar />
  <v-main>
    <h1 style="margin-left: 20px">Explore Other Parties</h1>
    <v-carousel
      continuous cycle dark hide-delimiters show-arrows-on-hover height="400" style="margin: 20px"
    >
      <template v-for="(item, index) in items">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1" 
          :key="index"
        >
          <v-row class="flex-nowrap fill-height" justify="center">
            <template v-for="(n,i) in columns">
              <template v-if="(+index + i) < items.length">
                <v-col :key="i" justify="center">
                    <v-card height="100%" class="d-flex flex-column">
                      <v-card-title>{{ items[+index + i].title }}</v-card-title>
                      <v-card-text>{{ items[+index + i].text }}</v-card-text>
                      <v-spacer></v-spacer>
                      <v-card-action>
                        <v-btn style="float:left; margin-left: 10px; margin-bottom: 10px" color="green" @click="join(items[+index + i].id)">Join</v-btn>
                        <v-btn style="float:right; margin-right: 10px; margin-bottom: 10px" color="blue" @click="info(items[+index + i].id)">See more info</v-btn>
                      </v-card-action>
                    </v-card>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
    <h1 style="margin-left: 20px">My Upcoming Parties</h1>
    <v-carousel
      continuous cycle dark hide-delimiters show-arrows-on-hover height="400" style="margin: 20px"
    >
      <template v-for="(item, index) in items">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1" 
          :key="index"
        >
          <v-row class="flex-nowrap fill-height" justify="center">
            <template v-for="(n,i) in columns">
              <template v-if="(+index + i) < items.length">
                <v-col :key="i" justify="center">
                    <v-card height="100%" class="d-flex flex-column">
                      <v-card-title>{{ items[+index + i].title }}</v-card-title>
                      <v-card-text>{{ items[+index + i].text }}</v-card-text>
                      <v-spacer></v-spacer>
                      <v-card-action>
                        <v-btn style="float:left; margin-left: 10px; margin-bottom: 10px" color="red" @click="join(items[+index + i].id)">Leave</v-btn>
                        <v-btn style="float:right; margin-right: 10px; margin-bottom: 10px" color="blue" @click="info(items[+index + i].id)">See more info</v-btn>
                      </v-card-action>
                    </v-card>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
  </v-main>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    drawer: false,
    items: [
      {
        id: 1,
        title: 'Welcome to My App',
        text: 'This is a sample app to show how to use Vuetify with Vue 3',
      },
      {
        id: 2,
        title: 'Vuetify',
        text: 'Vuetify is a Vue UI Library with beautifully handcrafted Material Components',
      },
      {
        id: 3,
        title: 'Vue 3',
        text: 'Vue 3 is the next version of Vue.js',
      },
      {
        id: 4,
        title: 'Vue 3',
        text: 'Vue 3 is the next version of Vue.js',
      },
      {
        id: 5,
        title: 'Vue 3',
        text: 'Vue 3 is the next version of Vue.js',
      },
    ],
    colors: ['primary', 'secondary', 'success', 'info'],
    columns: 3,
  }),
  methods: {
    logout() {
      //this.$store.dispatch('userStore/logout', null, { root: true });
      this.$router.push("/login");
    },
    info(id) {
      this.$router.push("/party/" + id);
    }
  },
  components: {
    Navbar,
  },

});
</script>
