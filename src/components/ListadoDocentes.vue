<script setup lang="ts">
import type { IDocente } from '~/assets/interfaces/index'
import { listDocentes } from '~/assets/services/docente'

const docentes = ref<IDocente[]>([])

onMounted(async () => {
  docentes.value = await listDocentes()
})
</script>

<template>
  <div class="listado-docentes">
    <h1>Listado de docentes</h1>
    <ul>
      <li v-for="(item, index) in docentes" :key="index">
        {{ item.nombre }}
      </li>
    </ul>
  </div>
</template>

<style>
.listado-docentes {
  height: 100%;
}
</style>
