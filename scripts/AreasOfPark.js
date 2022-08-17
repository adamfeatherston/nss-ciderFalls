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
    // Get array of park areas from database module
   const areas = getParkAreas()
    let areaHTML = `<article class="areaList">`
    for (const area of areas)
        areaHTML += `<section class="areas">
        <div id="parkArea--${area.id}" class="area__name">${area.name}</div>
        <div class="area__information">${area.areaInfo}</div>
        <div class="area__location">${area.location}</div>
        </section>`
    
    areaHTML += `</article>`
    return areaHTML
}  
