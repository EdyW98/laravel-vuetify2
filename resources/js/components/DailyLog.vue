<template>
  <v-app id="inspire">
    <v-container
      fluid
    >
      <v-row>
        <v-col>
          <v-tabs
            v-model="tab"
            fixed-tabs
          >
            <v-tab
              v-for="(item, i) in items"
              :key="i" ripple
              :href="`#tab-${i}`"
            >
              {{item.tab}}
            </v-tab>

            <!-- menu 1 -->
            <v-tab-item value="tab-0">
              <v-row v-if="tab === 'tab-0'" class="px-0">
                <v-col>
                  <temperature-menu></temperature-menu>
                </v-col>
              </v-row>
            </v-tab-item>

            <!-- menu 2 -->
            <v-tab-item value="tab-1">
              <v-row v-if="tab === 'tab-1'">
                <v-col>
                  <humidity-menu></humidity-menu>
                </v-col>
              </v-row>
            </v-tab-item>

            <!-- menu 3 -->
            <v-tab-item value="tab-2">
              <v-row v-if="tab === 'tab-2'">
                <v-col>
                  <ph-menu></ph-menu>
                </v-col>
              </v-row>
            </v-tab-item>

            <!-- menu 4 -->
            <v-tab-item value="tab-3">
              <v-row v-if="tab === 'tab-3'">
                <v-col>
                  <soil-menu></soil-menu>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>    
    </v-container>
  </v-app>
</template>

<script>
   export default {
    components:{
      'TemperatureMenu': () => import('./DailyLogMenu/Temperature'),
      'HumidityMenu': () => import('./DailyLogMenu/Humidity'),
      'PhMenu': () => import('./DailyLogMenu/Ph'),
      'SoilMenu': () => import('./DailyLogMenu/Soil'),
    },

    props: {
      source: String,
    },

    data: () => ({
      tab: null,
        items: [
          { tab: 'Temperature'},
          { tab: 'Humidity'},
          { tab: 'Ph'},
          { tab: 'Soil'},
        ],
    }),

    methods:{
      
    },

    created(){
    }
  }
</script>