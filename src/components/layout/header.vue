<template>
  <header class="header-layout">
    <div class="logo">
      <router-link class="logo-link" to="/404">
        {{'测试平台'}}
      </router-link>
    </div>
    <nav class="header-nav">
      <router-link class="header-link"
        v-for="nav in menu"
        :to="{ name: nav.id}"
        :key="nav.id">
        {{nav.title}}
        </router-link>
    </nav>
  </header>
</template>

<script>
import menus from '@/dictionary/menu.js'
export default {
  data(){
    return {
      menu: menus
    }
  },
  computed: {}
}
</script>

<style lang="scss">
  .header-layout {
    position: relative;
    display: flex;
    height: 58px;
    background-color: #182132;
    z-index: 1002;
  }
  .logo {
    flex: 292px 0 0;
    font-size: 0;
    .logo-link {
      display: inline-block;
      vertical-align: middle;
      height: 58px;
      line-height: 58px;
      margin-left: 24px;
      padding-left: 38px;
      color: #ffffff;
      font-size: 16px;
      background: url("../../assets/images/logo.svg") no-repeat 0 center;
    }
  }
  .header-nav {
    flex: 3;
    font-size: 0;
    white-space: nowrap;
    .header-link {
      display: inline-block;
      vertical-align: middle;
      height: 58px;
      line-height: 58px;
      padding: 0 25px;
      color: #979BA5;
      font-size: 14px;
      &:hover {
        background-color: rgba(49, 64, 94, .5);
        color: #fff;
      }
      &.router-link-active {
        background-color: rgba(49, 64, 94, 1);
        color: #fff;
      }
    }
  }
</style>