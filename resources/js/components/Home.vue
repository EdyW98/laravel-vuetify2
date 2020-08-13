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
        <v-list-item link>
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
      <v-container
        class="fill-height"
        fluid
      >
        <v-row>
          <v-col>
            <div class="headline mb-1">Status Saat Ini</div>
            <v-row
              align="center"
              justify="center"
            >
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">Temperature</div>
                      <div>&nbsp;</div>
                      <div>Dummy C</div>
                    </v-card-text>
                  </v-card>
              </v-col>
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">Humidity</div>
                    <div>&nbsp;</div>
                    <div>Dummy %</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">PH</div>
                    <div>&nbsp;</div>
                    <div>Dummy</div>
                  </v-card-text>
                </v-card>
              </v-col>          
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  max-width="344"
                  min-width="168"
                  tile
                  elevation="1"
                >
                  <v-card-text>
                    <div class="headline mb-1">Soil Moisture</div>
                    <div>&nbsp;</div>
                    <div>Dummy %</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        

        <v-row
          align="center"
          justify="center"
        >
          
        </v-row>

        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-card
              class="mx-auto"
              width="fill"
              outlined
            >
              <v-card-title class="headline mb-1">Pesan Hari Ini</v-card-title>
              <v-card-subtitle align="left">Dummy</v-card-subtitle>
              <v-card-text>&nbsp;</v-card-text>
              <v-card-text>Pesan</v-card-text>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
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
  }
</script>