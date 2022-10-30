<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

}
</script>

<style lang="css">
.raise {
	transition: transform 0.2s;
}
.raise:hover,
.raise:focus {
  /* box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em); */
  transform: scale(1.05);
}
.fill-height{
	padding:0
}
</style>
