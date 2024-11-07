import { getAllAsync } from "./common.js"

const URL = '/planets'

const mainAsync = async () => {
  const data = await getAllAsync(URL)

  console.log(data)

  displayPlanets(data.items)
}

const displayPlanets = (planets) => {
  const planetsContainer = document.querySelector('main')

  planets.forEach((item) => {
    const planetImage = item.image
    const planetName = item.name
    const planetIsDestroyed = item.isDestroyed
    const planetDescription = item.description

    const planetContainer = document.createElement('div')
    planetContainer.classList.add('character', 'bg-[#3C3E44]', 'border-[3px]', 'rounded-xl', 'w-[26rem]', 'h-[42rem]')

    const figure = document.createElement('figure')
    figure.classList.add('relative', 'flex', 'justify-center')

    const img = document.createElement('img')
    img.classList.add('w-full', 'h-[21rem]', 'rounded-t-xl')
    img.setAttribute('src', planetImage)
    img.setAttribute('alt', `This it´s a image of Planet ${planetName}`)
    
    const figCaption = document.createElement('figcaption')
    figCaption.classList.add('text-[1.35rem]', 'absolute', 'bottom-0', 'font-bold', 'h-0')
    figCaption.innerHTML = planetName

    const dataContainer = document.createElement('div')
    dataContainer.classList.add('m-2', 'mt-8', 'flex', 'flex-col', 'gap-[.5rem]')

    const isDestroyed = document.createElement('p')
    isDestroyed.classList.add('text-center', 'font-bold', 'text-[1rem]', 'text-[#D6D7D7]')
    isDestroyed.innerHTML = planetIsDestroyed ? 'Is Destroyed :(' : 'Is not Destroyed :)'

    const description = document.createElement('div')
    description.innerHTML = planetDescription

    figure.appendChild(img)
    figure.appendChild(figCaption)

    dataContainer.appendChild(isDestroyed)
    dataContainer.appendChild(description)

    planetContainer.appendChild(figure)
    planetContainer.appendChild(dataContainer)

    planetsContainer.appendChild(planetContainer)
  })
}

mainAsync()