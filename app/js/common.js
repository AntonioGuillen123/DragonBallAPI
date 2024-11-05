const URLBASE = "https://dragonball-api.com/api"

export const fetchDBAPIAsync = async ({ url, params = "" }) => {
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
