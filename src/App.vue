<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div>
    <group>
      <cell is-link title="Simple" link="tabbar-simple"></cell>
      <cell is-link title="Switch icons" link="tabbar-icon"></cell>
    </group>
    <tabbar>
      <tabbar-item link="hello">
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">hello</span>
      </tabbar-item>
      <tabbar-item show-dot link="spider">
        <img slot="icon" src="./assets/demo/icon_nav_msg.png">
        <span slot="label">spider</span>
      </tabbar-item>
      <tabbar-item selected link="swiper">
        <img slot="icon" src="./assets/demo/icon_nav_article.png">
        <span slot="label">swiper</span>
      </tabbar-item>
      <tabbar-item badge="2" link="vux">
        <img slot="icon" src="./assets/demo/icon_nav_cell.png">
        <span slot="label">vux</span>
      </tabbar-item>
    </tabbar>
  </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cellk 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
