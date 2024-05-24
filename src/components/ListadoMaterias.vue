<script setup lang="ts">
import type { IMateria } from '~/assets/interfaces/index'
import { listMaterias } from '~/assets/services/materia'

const materias = ref<IMateria[]>([])

onMounted(async () => {
  materias.value = await listMaterias()
})
</script>

<template>
  <div class="listado-materias">
    <h1>Listado de materias</h1>
    <ul>
      <li v-for="(item, index) in materias" :key="index">
        {{ item.nombre }}
      </li>
    </ul>
  </div>
</template>

<style>
.listado-materias {
  height: 100%;
}
</style>
