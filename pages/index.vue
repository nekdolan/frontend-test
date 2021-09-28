<template>
  <section class="hero is-fullheight has-background-light">
    <div class="hero-body has-text-centered">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-4 is-offset-4">
            <div class="card">
              <form @submit.prevent="checkForm" >
                <header class="card-header">
                  <div class="card-header-icon pr-1 has-text-link">
                    <fa icon="lock"/>
                  </div>
                  <div class="card-header-title has-text-grey pl-1">
                    Login
                  </div>
                </header>
                <div class="card-content has-text-left">
                  <div class="content">
                    <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                        <input v-model="user" class="input" type="text" placeholder="">
                      </div>
                      </div>
                      <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                          <input v-model="password" class="input" type="password" placeholder="">
                        </div>
                      </div>
                      <p class="help is-danger has-text-weight-bold">{{ error }}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <div class="card-footer-item is-justify-content-left">
                    <div class="buttons">
                      <button class="button is-link">Login</button>
                    </div>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: 'admin',
      password: 'Admin123',
      error: ''
    }
  },
  methods: {
    checkForm() {
      this.error = ''
      this.$http.post('/api/login', {
        user: this.user,
        password: this.password
      }).then((result) => {
        return result.json()
      }).then(({ token }) => {
        this.$http.setHeader('x-api-key', token)
        this.$router.push('/data')
      }).catch(() => {
        this.error = 'could not find user'
      })
    }
  }
}
</script>
