<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link :to="{path: '/'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/dht'}">
          <v-list-item-action>
            <v-icon>mdi-coolant-temperature</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>DHT Sensor</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/ph'}">
          <v-list-item-action>
            <v-icon>mdi-water-percent</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>PH Sensor</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/soil'}">
          <v-list-item-action>
            <v-icon>mdi-sprout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Soil Sensor</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{path: '/dailylog'}">
          <v-list-item-action>
            <v-icon>mdi-book-open-page-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Log Harian</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="Logout">
          <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green darken-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Aquaponik IoT</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer
      color="green darken-1"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),

    methods: {
      isLogin(){
          var session = localStorage.getItem('userid');
          if(session == null){
              this.$router.replace({path: "/login"});
          }
      },

      Logout(){
       localStorage.removeItem('userid');
       this.$router.replace({path: "/login"});
      },
    },

    mounted(){
      this.isLogin();
    },
  }
</script>