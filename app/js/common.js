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
