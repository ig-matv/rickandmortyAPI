// @ts-check
import { test, expect } from '@playwright/test';

test('Buscar personagens',async({request})=>{
  const response = await request.get(
    'https://rickandmortyapi.com/api/character'
  )
  expect(response.status()).toBe(200)

  const body = await response.json()
  expect(body.results.length).toBeGreaterThan(0)

  console.log(body)
})
test('Buscar personagem especifico',async({request})=>{
  const response = await request.get(
    'https://rickandmortyapi.com/api/character1'
  )
  expect(response.status()).toBe(200)

  const body = await response.json()

  expect(body.id).toBe(1)
  
  console.log(body)
})
test('Buscar locations',async({request})=>{

  const response = await request.get(
    'https://rickandmortyapi.com/api/location'
  )
  expect(response.status()).toBe(200)
  
  const body = await response.json()
  expect (body.results.length).toBeGreaterThan(0)
  console.log(body)
})
test('Buscar uma location especifica',async({request})=>{
  const response = await request.get(
    'https://rickandmortyapi.com/api/location/1'
  )
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect(body.id).toBe(1)
  console.log(body)
})
test('Buscar episodios',async({request})=>{
  const response = await request.get(
    'https://rickandmortyapi.com/api/episode'
  )
  expect(response.status()).toBe(200)
  const body = await response.json()
  expect (body.results.length).toBeGreaterThan(0)
  console.log(body)
})
test('Buscar um episodio especifico',async({request})=>{
  const response = await request.get(
    'https://rickandmortyapi.com/api/episode/1'
  )
  expect(response.status()).toBe(200)

  const body = await response.json()
  expect(body.id).toBe(1)
  console.log(body)
})
test('Buscar endpoints',async({request})=>{
  const response = await request.get(
    'https://rickandmortyapi.com/api'
  )
  expect(response.status()).toBe(200)

  const body = await response.json()
  expect(body.characters).toContain('/character')
  console.log(body)
})