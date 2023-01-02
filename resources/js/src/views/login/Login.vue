<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-col
        cols="12"
        md="12"
      >
        <v-card>
          <v-card-title>Welcome to my demo!</v-card-title>
          <v-card-text>
            <v-form>
              <!-- <v-text-field
            v-model="firstname"
            :prepend-inner-icon="icons.mdiAccountOutline"
            label="First Name"
            outlined
            dense
            placeholder="First Name"
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            :prepend-inner-icon="icons.mdiAccountOutline"
            label="Last Name"
            outlined
            dense
            placeholder="Last Name"
          ></v-text-field> -->
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

export default {
  setup() {
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const password = ref()

    return {
      firstname,
      lastname,
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
