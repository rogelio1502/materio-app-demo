<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-col
        cols="12"
        md="12"
      >
        <v-card>
          <v-card-title>Welcome to my demo!</v-card-title>
          <v-card-text
            style="color:red;"
            v-show="showInvalidCreds"
          >Invalid Credentials</v-card-text>
          <v-card-text
            style="color:red;"
            v-show="showServerError"
          >Error to connect to server</v-card-text>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                :prepend-inner-icon="icons.mdiEmailOutline"
                label="Email"
                outlined
                dense
                placeholder="Email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :prepend-inner-icon="icons.mdiLockOutline"
                label="Password"
                outlined
                dense
                type="password"
                placeholder="password"
              ></v-text-field>
              <v-btn
                block
                color="primary"
                @click="login()"
              > Login </v-btn>

            </v-form>
          </v-card-text>
        </v-card>

      </v-col>
    </div>
    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      :src="require('@/assets/images/misc/tree.png').default"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      :src="require('@/assets/images/misc/tree-3.png').default"
    ></v-img>
  </div>
</template>

<script>
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import AuthService from '../../services/auth.service'

export default {
  methods: {
    login() {
      var bodyFormData = new FormData()
      if (this.email.length > 0 && this.password.length) {
        bodyFormData.append('email', this.email)
        bodyFormData.append('password', this.password)
        AuthService.login(bodyFormData)
          .then(r => {
            localStorage.setItem('user', JSON.stringify(r.data))

            this.$router.push('/')
          })
          .catch(e => {
            if (e.response.request.status == 401) {
              this.showInvalidCreds = true
            } else {
              this.showServerError = true
            }
          })
      }
    },
  },
  watch: {
    isAuth(newV, oldV) {},
    email(newV, oldV) {
      this.showInvalidCreds = false
      this.showServerError = false
    },
    password(newV, oldV) {
      this.showInvalidCreds = false
      this.showServerError = false
    },
  },
  data() {
    return {
      isAuth: false,
      showInvalidCreds: false,
      showServerError: false,
    }
  },
  setup() {
    // const firstname = ref('')
    // const lastname = ref('')
    const email = ref('rogelio15021515@gmail.com')
    const password = ref('susana15')

    return {
      // firstname,
      // lastname,
      email,
      password,
      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@resources/sass/preset/pages/auth.scss';
</style>
