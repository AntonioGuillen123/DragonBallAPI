import { getAllAsync } from "./common.js"

const URL = '/characters'

const mainAsync = async () => {
  console.log(await getAllAsync(URL))
}

mainAsync()
