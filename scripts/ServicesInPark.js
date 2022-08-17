//Function to display the services in the park.
//define variable for imported function
//define HTML string
//iterate thru info
//create string within Section "contactInfoList"
//create id class = <div class="services"
//clickEvent that list what areas have the service the user clicks
import { getParkServices } from "./database.js"
import { getParkAreas } from "./database.js"
import { getAreaServices } from "./database.js"

const areaServices = getAreaServices()
const services = getParkServices()
const areas = getParkAreas()

export const parkServicesList = () => {
  let servicesHTML = `<article class="serviceList">ParkServices:`
  for (const service of services) {
    servicesHTML += `<section id="parkService--${service.id}" class="services">
        ${service.service}</section>`
  }

  servicesHTML += `</article>`
  return servicesHTML
}

//Click Event
//Function to define a click event when user clicks on a service.
//Fuction should return window.alert that reads "service.name is located in area.name (and) area.name"
//within Event: Function to return the area(s) that support that service.
//    1.iterate the different areas and match the services.
//    2. if areaServices.id (import from database.js) matches services.id 
const servicesInEachArea = (areaService) => {
  let servicesInAreaHTML = ``
  for (let service of areaServices) {
    for (let area of areas) {
      if (service.parkServicesID === areaService.id) {
        if (service.parkAreaID === area.id) {
          servicesInAreaHTML += `${area.name}, `
        }
      }
    }
  }
  let modifiedHTML = servicesInAreaHTML.substring(0, servicesInAreaHTML.length - 2)
  modifiedHTML += `.`
  return modifiedHTML
}

document.addEventListener("click",
  (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("parkService")) {
      const [, serviceID] = itemClicked.id.split("--")
      let matchingService = null
      for (const service of services) {
        if (parseInt(serviceID) === service.id) {
          matchingService = service
        }
      }
      const servicesInAreas = servicesInEachArea(matchingService)
      window.alert(`${matchingService.service} is available in ${servicesInAreas}`)
    }
  }
)