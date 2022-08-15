import { parkContactList } from './InfoOfPark.js'
let parentHTMLElement=document.querySelector(".contactInfo")
parentHTMLElement.innerHTML=parkContactList()

import { parkAreaList } from './AreasOfPark.js'
parentHTMLElement=document.querySelector(".parkAreaList")
parentHTMLElement.innerHTML=parkAreaList()