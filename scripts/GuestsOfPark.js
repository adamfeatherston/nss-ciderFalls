//Function to display the guests who are in the parkand convert to HTML string.
//define variable for imported function
//define HTML string
//iterate thru info
//create string within Section "contactInfoList"
//div class ="contact__phone"
//div class="contact__email"
//div class="contact__address"
import { getParkGuests } from "./database.js"
import { getParkAreas } from "./database.js"
const guests = getParkGuests()
const areas = getParkAreas()

export const parkGuestList = () => {
    let guestHTML = "<ol>"
    for (const guest of guests)
        guestHTML += `<li id="guests--${guest.id}" class="guest__name">${guest.lastName}, ${guest.firstName}</li>`


    guestHTML += `</ol>`
    return guestHTML
}

//function to total the number of guests in each area.

// Pass through the array of guests & the area object

const guestsInEachArea = (guests, area) => {
    let numberOfGuest = 0
    guests = getParkGuests()

    for (const guest of guests) {
        if (area.id === guest.parkAreaID) {
            numberOfGuest++
        }
    }
    return numberOfGuest
}

//Function with clickEvent to display number of guests in the area the user clicks on area name.
document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkArea")) {
            const [,parkAreaID] = itemClicked.id.split("--")
            let matchingArea = null
            let numOfGuest = 0
            for (const area of areas) {
                if (parseInt(parkAreaID) === area.id) {
                    matchingArea = area
                    numOfGuest = guestsInEachArea(guests, area)                 
                }
            }
            window.alert(`There are ${numOfGuest} guests in this area.`)
        }
    }
)