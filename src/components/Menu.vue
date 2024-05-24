<script setup>
const router = useRouter()

function navigateTo(path = '/') {
  router.push(`${path}`)
}
</script>

<template>
  <ul class="menu">
    <li @click="navigateTo()">
      Inicio
    </li>
    <li @click="navigateTo('/alumnos')">
      alumnos
    </li>
    <li @click="navigateTo('/docentes')">
      docentes
    </li>
    <li @click="navigateTo('/materias')">
      materias
    </li>
  </ul>
</template>

<style>
.menu {
  height: 100%;
  list-style: none;
  font-size: 2rem;
  padding-top: 4rem;
  text-transform: capitalize;

  > li {
    padding: 1rem;
  }

  > li:hover {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
  }
}
</style>
