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
            <v-row
              align="left"
              justify="center"
            >
              <v-col class="text-center" lg="3">
                <v-card
                  class="mx-auto"
                  max-width="350"
                  outlined
                >
                  <v-row justify="center">
                    <v-col>
                      <v-date-picker v-model="picker"></v-date-picker>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col>
                      <v-text-field v-model="picker" label="Date range" prepend-icon="mdi-calendar" readonly></v-text-field>
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-btn text>OK</v-btn>
                    <v-btn text>Cencel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col class="text-center">
                <v-card
                  class="mx-auto"
                  width="fill"
                  outlined
                >
                  <v-data-table
                    :headers="headers"
                    :items="dht"
                    :page.sync="page"
                    :items-per-page="15"
                    hide-default-footer
                    class="elevation-1"
                    @page-count="pageCount = $event"
                  ></v-data-table>
                  <div class="text-center pt-2">
                    <v-pagination v-model="page" :length="pageCount" :total-visible="7"></v-pagination>
                  </div>
                </v-card>
              </v-col>
            </v-row>
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
      page: 1,
      pageCount: 0,
      picker: new Date().toISOString().substr(0, 10),
      headers: [
          { text: 'Media Tanam', value: 'soil' },
          { text: 'Tanggal', value: 'dateCreate' },
      ],
      dht: [
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
        {
          soil: '70',
          dateCreate: '2020-08-13',
        },
        {
          soil: '76',
          dateCreate: '2020-08-13',
        },
        {
          soil: '71',
          dateCreate: '2020-08-13',
        },
      ]
    }),
  }
</script>