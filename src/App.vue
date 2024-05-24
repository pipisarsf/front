<script setup lang="ts">
const isLogged = ref<boolean>(true)
</script>

<template>
  <main>
    <RouterView v-if="!isLogged" />

    <table v-else id="layout">
      <tr>
        <td id="header" colspan="2">
          <h1>Pipi system</h1>
        </td>
      </tr>
      <tr>
        <td id="menu">
          <Menu />
        </td>
        <td id="pagina">
          <RouterView />
        </td>
      </tr>
    </table>
  </main>
</template>

<style>
#layout {
  width: 100%;
  border: 8px double blue;
  height: 100%;

  #header {
    min-height: 10rem;
    height: 10rem;
    text-align: center;
  }

  #menu {
    width: 15rem;
  }

  #pagina {
    min-width: calc(100% - 20rem);
    padding: 2rem;
    border-top: 8px double blue;
    border-left: 8px double blue;
  }
}
</style>
