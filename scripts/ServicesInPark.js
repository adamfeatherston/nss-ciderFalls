//Function to display the services in the park.
//define variable for imported function
//define HTML string
//iterate thru info
//create string within Section "contactInfoList"
//create id class = <div class="services"
//clickEvent that list what areas have the service the user clicks
import { getParkServices } from "./database.js"

export const parkServicesList = () => {
   const services = getParkServices()
     let servicesHTML = `<article class="serviceList">ParkServices:`
    for (const service of services){
       servicesHTML += `<section id="parkSevice--${service.id}" class="services">
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
