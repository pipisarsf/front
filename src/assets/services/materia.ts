import type { IMateria } from '~/assets/interfaces/index'

export async function listMaterias() {
  const { data } = await $api.get('/materia')
  return data as IMateria[]
}

export async function getMateriaById(id: number) {
  const { data } = await $api.get(`/materia/${id}`)
  return data as IMateria
}

export async function createMateria(nombre: string, id_profesor: number) {
  const { data } = await $api.post(`/materia`, { nombre, id_profesor })
  return data as IMateria
}

export async function updateMateria(id: number, nombre: string) {
  const { data } = await $api.patch(`/materia/${id}`, { nombre })
  return data as IMateria
}

export async function deleteMateria(id: number) {
  await $api.delete(`/materia/${id}`)
  return true
}
