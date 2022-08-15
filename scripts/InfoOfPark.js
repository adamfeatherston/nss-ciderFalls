import { getParkInfo } from "./database";
//finction to export contact list and convert to HTML string
//difine variable for imported function
//define HTML string
//iterate thru info
//create string within Section "contactInfoList"
//div class ="contact__phone"
//div class="contact__email"
//div class="contact__address"
export const parkContactList = () => {
    const infos = getParkInfo()
    let contactHTML = `<article class="contactList">`
    for (const info of infos) {
        contactHTML += `<section class="contacts">
        <div class="contact__phone">Phone: ${info.phone}</div>
        <div class="contact__email">Email: ${info.email}</div>
        <div class="contact__address">Phone: ${info.address}</div>
        </section>`
    }
    contactHTML += `</article>`
    return contactHTML
}