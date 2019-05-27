<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Alatura-te echipei noastre</h1>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="nume"
                  placeholder="Numele tau"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="age"
                  placeholder="Varsta"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="bio"
                  placeholder="Cateva cuvinte despre tine "
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="email"
                  placeholder="Email-ul la care te putem contacta"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary mx-auto" @click="send()">
                Trimite formular
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "JoinUs",
  data() {
    return {
      nume: "",
      bio: "",
      age: "",
      email: ""
    };
  },
  computed: {},
  methods: {
      send() {
          setTimeout(() => {
            this.$router.push("/");              
          }, 500);
      }
  }
};
</script>
