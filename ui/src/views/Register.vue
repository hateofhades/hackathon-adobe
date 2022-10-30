<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title>Register</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn text @click="login">Login</v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="passwordRules"
                                :type="showPassword ? 'text' : 'password'"
                                label="Password"
                                required
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            <v-text-field
                                v-model="password2"
                                :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="password2Rules"
                                :type="showPassword2 ? 'text' : 'password'"
                                label="Confirm Password"
                                required
                                @click:append="showPassword2 = !showPassword2"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="register">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from "vuex";

export default defineComponent({
  name: 'Register',
  data: () => ({
    valid: true,
    email: '',
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false,
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [(v) => !!v || 'Password is required'],
    password2Rules: [(v) => !!v || 'Password is required'],
  }),
  methods: {
    register() {
        if (this.password !== this.password2) {
            this.$refs.form.validate();
            this.password2Rules = [(v) => !!v || 'Passwords must be the same'];
            return;
        }
        if (this.$refs.form.validate()) {
            //if(this.$store.dispatch('userStore/register', { email: this.email, password: this.password }, { root: true }))
                this.$router.push("/dashboard");
        }
    },
    login() {
      this.$router.push('/login');
    },
  },
  computed: {
		...mapGetters({
			userState: "userStore/user"
		})
	},
});
</script>