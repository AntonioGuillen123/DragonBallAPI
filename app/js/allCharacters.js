import { getAllAsync } from "./common.js"

const URL = '/characters'

const mainAsync = async () => {
  const data = await getAllAsync(URL)

  console.log(data)

  displayCharacters(data.items)
}

const displayCharacters = (characters) => {
  const charactersContainer = document.querySelector('main')

  characters.forEach((item) => {
    const characterImage = item.image
    const characterName = item.name
    const characterBaseKi = item.ki
    const characterMaxKi = item.maxKi
    const characterRace = item.race
    const characterGender = item.gender
    const characterAffiliation = item.affiliation

    const characterContainer = document.createElement('div')
    characterContainer.classList.add('character', 'bg-[#3C3E44]', 'border-[3px]', 'rounded-xl', 'w-60')

    const figure = document.createElement('figure')
    figure.classList.add('relative', 'flex', 'justify-center')

    const img = document.createElement('img')
    img.classList.add('w-max', 'h-[21rem]')
    img.setAttribute('src', characterImage)
    img.setAttribute('alt', `This it´s a image of ${characterName}`)
    
    const figCaption = document.createElement('figcaption')
    figCaption.classList.add('text-[1.35rem]', 'absolute', 'bottom-0', 'font-bold', 'h-0')
    figCaption.innerHTML = characterName

    const dataContainer = document.createElement('div')
    dataContainer.classList.add('m-2', 'mt-8', 'flex', 'flex-col', 'gap-[.5rem]')

    const raceAndGender = document.createElement('p')
    raceAndGender.classList.add('text-center', 'font-bold', 'text-[1.1rem]', 'text-[#D6D7D7]')
    raceAndGender.innerHTML = `${characterRace} - ${characterGender}`

    const battleStats = document.createElement('div')

    const baseKiContainer = document.createElement('div')
    baseKiContainer.classList.add('flex', 'justify-between')

    const baseKi = document.createElement('p')
    baseKi.classList.add('font-bold', 'text-[#F9890F]')
    baseKi.innerHTML = 'Base Ki:'

    const baseKiValue = document.createElement('p')
    baseKiValue.classList.add('text-[.9rem]')
    baseKiValue.innerHTML = characterBaseKi !== '0' ? characterBaseKi : 'Without Ki'

    const maxKiContainer = document.createElement('div')
    maxKiContainer.classList.add('flex', 'justify-between')

    const maxKi = document.createElement('p')
    maxKi.classList.add('font-bold', 'text-[#F9890F]')
    maxKi.innerHTML = 'Total Ki:'

    const maxKiValue = document.createElement('p')
    maxKiValue.classList.add('text-[.9rem]')
    maxKiValue.innerHTML = characterMaxKi !== '0' ? characterMaxKi : 'Without Max Ki'
    
    const affiliationContainer = document.createElement('div')
    affiliationContainer.classList.add('flex', 'justify-between')

    const affiliation = document.createElement('p')
    affiliation.classList.add('font-bold', 'text-[#F9890F]')
    affiliation.innerHTML = 'Affiliation:'

    const affiliationValue = document.createElement('p')
    affiliationValue.classList.add('text-[.9rem]')
    affiliationValue.innerHTML = characterAffiliation

    figure.appendChild(img)
    figure.appendChild(figCaption)

    baseKiContainer.appendChild(baseKi)
    baseKiContainer.appendChild(baseKiValue)
    maxKiContainer.appendChild(maxKi)
    maxKiContainer.appendChild(maxKiValue)
    affiliationContainer.appendChild(affiliation)
    affiliationContainer.appendChild(affiliationValue)

    battleStats.appendChild(baseKiContainer)
    battleStats.appendChild(maxKiContainer)
    battleStats.appendChild(affiliationContainer)

    dataContainer.appendChild(raceAndGender)
    dataContainer.appendChild(battleStats)

    characterContainer.appendChild(figure)
    characterContainer.appendChild(dataContainer)

    charactersContainer.appendChild(characterContainer)
  })
}

mainAsync()