<script setup lang="ts">
import type { IAlumno } from '~/assets/interfaces/index'
import { listAlumnos } from '~/assets/services/alumno'

const alumnos = ref<IAlumno[]>([])

onMounted(async () => {
  alumnos.value = await listAlumnos()
})
</script>

<template>
  <div class="listado-alumnos">
    <h1>Listado de alumnos</h1>
    <ul>
      <li v-for="(item, index) in alumnos" :key="index">
        {{ item.nombre }}
      </li>
    </ul>
  </div>
</template>

<style>
.listado-alumnos {
  height: 100%;
}
</style>
