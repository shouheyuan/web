<template>
  <div id="nav">
    <div>
      <router-link v-for="item in comsList" :to="item.path" :key="item.path">{{item.name}}</router-link> 
    </div>
  </div>
  <router-view/>

</template>
<script>
export default {
  setup() {
    comsList: []
  },
  created() {
     const { routes } = this.$router.options
    this.comsList = routes.map(r => {
      const path = r.path
      const name = path.slice(1)
      return { name, path }
    })
  },
  methods: {
   
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
