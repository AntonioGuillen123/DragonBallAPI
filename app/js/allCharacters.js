import { fetchDBAPIAsync } from "./common.js"

const mainAsync = async () => {
    console.log(await getAllCharactersAsync())
}

const getAllCharactersAsync = async () => {
  const searchParams = {
    url: "/characters",
  }

  const fullData = await fetchDBAPIAsync(searchParams)

  const totalItems = fullData.meta.totalItems

  searchParams.params = `?limit=${totalItems}`

  return await fetchDBAPIAsync(searchParams)
}

mainAsync()