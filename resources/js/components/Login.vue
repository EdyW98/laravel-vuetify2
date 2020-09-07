<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="Login">Login</v-btn>
              </v-card-actions>
            </v-card>
            <v-alert
              v-model="alert"
              dismissible
              text
              prominent
              type="error"
            >
            Username atau password salah
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    data: () => ({
      alert: false,
      userID: null,
      username: null,
      password: null,
    }),

    methods: {
      isLogin(){        
        var session = localStorage.getItem('userid');
          if(session>0){
              this.$router.replace({path: "/"});
          }
      },

      Login(){
        if(this.username == "admin" && this.password == "admin"){
          localStorage.setItem('userid', 1);
          this.$router.replace({path: "/"});
        }
        else{
          this.alert = true;
        }
      },
    },
    
    mounted(){
      this.isLogin();
    },
  }
</script>