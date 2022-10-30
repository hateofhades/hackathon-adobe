<template>
    <Navbar />
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>
                            <h1>{{ party.name }}</h1>
                        </v-card-title>
                        <v-card-text>
                            <h3><v-icon>mdi-calendar</v-icon> Date: {{ party.date }}</h3>
                            <h3><v-icon>mdi-map</v-icon> Location: {{ party.location }}</h3> 
                            <v-carousel
                            continuous cycle dark hide-delimiters show-arrows-on-hover height="400" style="margin: 20px"
                            >
                            <template v-for="(item, index) in party.participants">
                                <v-carousel-item
                                v-if="(index + 1) % columns === 1 || columns === 1" 
                                :key="index"
                                >
                                <v-row class="flex-nowrap fill-height" justify="center">
                                    <template v-for="(n,i) in columns">
                                    <template v-if="(+index + i) < party.participants.length">
                                        <v-col :key="i" justify="center">
                                            <v-card height="100%" class="d-flex flex-column">
                                            <v-card-title>{{ party.participants[+index + i].name }}</v-card-title>
                                            <v-card-text>
                                                <v-img
                                                :src="party.participants[+index + i].photo"
                                                aspect-ratio="1"
                                                contain
                                                ></v-img>
                                            </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </template>
                                    </template>
                                </v-row>
                                </v-carousel-item>
                            </template>
                            </v-carousel>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </v-main>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from "vuex";
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  name: 'Login',
  data: () => ({
    party: {
        name: "Party Name",
        location: "Camin P16",
        date: "20-09-2021 14:00",
        participants: [
            {
                id: 1,
                name: "Vladut",
                photo: "https://i.imgur.com/3AUZ4Hg.jpeg"
            },
            {
                id: 2,
                name: "Participant 2",
                photo: "https://i.imgur.com/9X4X1Zu.jpg"
            },
            {
                id: 3,
                name: "Participant 3",
                photo: "https://i.imgur.com/9X4X1Zu.jpg"
            },
            {
                id: 4,
                name: "Participant 4",
                photo: "https://i.imgur.com/9X4X1Zu.jpg"
            },
            {
                id: 5,
                name: "Participant 5",
                photo: "https://i.imgur.com/9X4X1Zu.jpg"
            },
        ]
    },
    columns: 5,
  }),
  methods: {
  },
  computed: {
		...mapGetters({
			userState: "userStore/user"
		})
	},
    components: {
        Navbar
    }
});
</script>