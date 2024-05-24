import type { IDocente } from '~/assets/interfaces/index'

export async function listDocentes() {
  const { data } = await $api.get('/docente')
  return data as IDocente[]
}

export async function getDocenteById(id: number) {
  const { data } = await $api.get(`/docente/${id}`)
  return data as IDocente
}

export async function createDocente(payload: IDocente) {
  const { data } = await $api.post(`/alumno`, payload)
  return data as IDocente
}

export async function updateAlumno(id: number, payload: IDocente) {
  const { data } = await $api.patch(`/alumno/${id}`, payload)
  return data as IDocente
}

export async function deleteAlumno(id: number) {
  await $api.delete(`/alumno/${id}`)
  return true
}
