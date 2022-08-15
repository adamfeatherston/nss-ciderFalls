import { getParkAreas } from "./database.js";


//Function to diplay information about each area and convert to HTML string
//define variable for imported function
//define HTML string
//iterate thru info
//create string within Section "contactInfoList"
//div class ="contact__phone"
//div class="contact__email"
//div class="contact__address"
export const parkAreaList = () => {
   const areas = getParkAreas()
    let contactHTML = `<article class="areaList">`
    for (const area of areas)
        contactHTML += `<section class="areas">
        <div class="area__name">${area.name}</div>
        <div class="area__information">${area.areaInfo}</div>
        <div class="area__location">${area.location}</div>
        </section>`
    
    contactHTML += `</article>`
    return contactHTML
}