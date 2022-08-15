// import { getParkInfo } from "./database.js"; not needed as all info is in lines 11-15
//finction to export contact list and convert to HTML string
//difine variable for imported function
//define HTML string
//iterate thru info
//create string within Section "contactInfoList"
//div class ="contact__phone"
//div class="contact__email"
//div class="contact__address"
const parkInfo = {
    name: "Cider Falls Public Park",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H2pXkEQ9zaR1xOWV5kj5qgHaFx%26pid%3DApi&f=1",
    phone: "(123) 456-7890",
    email: "cedarfallsinfo@cedarfalls.gov",
    address: "123 Riverside Dr. Cider Falls, IA 12345"
}
export const parkContactList = () => {
   
    let contactHTML = `<article class="contactList">`
    
        contactHTML += `<section class="contacts">
        <div class="contact__phone">Phone: ${parkInfo.phone}</div>
        <div class="contact__email">Email: ${parkInfo.email}</div>
        <div class="contact__address">Phone: ${parkInfo.address}</div>
        </section>`
    
    contactHTML += `</article>`
    return contactHTML
}