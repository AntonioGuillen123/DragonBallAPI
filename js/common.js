const URLBASE = "https://dragonball-api.com/api"

const fetchDBAPIAsync = async ({ url, params = "" }) => {
  let data

  try {
    const request = await fetch(`${URLBASE}${url}${params}`)

    if (!request.ok) throw new Error("Connection Error :(")

    data = await request.json()
  } catch (e) {
    console.error(`Error when doing fetch: ${e}`)
  }

  return data
}

export const getAllAsync = async (url) => {
  const searchParams = {
    url: url,
  }

  const fullData = await fetchDBAPIAsync(searchParams)

  const totalItems = fullData?.meta.totalItems

  searchParams.params = `?limit=${totalItems}`

  return await fetchDBAPIAsync(searchParams)
}

export const searchBar = (value, elements) => {
  return elements.filter((item) => item.name.toUpperCase().includes(value.toUpperCase()))
}

export const resultNotFound = () => {
  const mainContainer = document.querySelector('main')
  mainContainer.innerHTML = ''

  const notFoundContainer = document.createElement('div')
  notFoundContainer.classList.add('text-6xl', 'font-bold', 'min-h-[34rem]', 'flex', 'items-center')
  notFoundContainer.innerHTML = 'Result not found :('

  mainContainer.appendChild(notFoundContainer)
}