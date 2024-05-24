import type { IAlumno } from '~/assets/interfaces/index'

export async function listAlumnos() {
  const { data } = await $api.get('/alumno')
  return data as IAlumno[]
}

export async function getAlumnoById(id: number) {
  const { data } = await $api.get(`/alumno/${id}`)
  return data as IAlumno
}

export async function createAlumno(nombre: string) {
  const { data } = await $api.post(`/alumno`, { nombre })
  return data as IAlumno
}

export async function updateAlumno(id: number, nombre: string) {
  const { data } = await $api.patch(`/alumno/${id}`, { nombre })
  return data as IAlumno
}

export async function deleteAlumno(id: number) {
  await $api.delete(`/alumno/${id}`)
  return true
}
