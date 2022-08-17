import { parkContactList } from './InfoOfPark.js'
let parentHTMLElement=document.querySelector(".contactInfo")
parentHTMLElement.innerHTML=parkContactList()

import { parkAreaList } from './AreasOfPark.js'
parentHTMLElement=document.querySelector(".parkAreaList")
parentHTMLElement.innerHTML=parkAreaList()

import { parkGuestList } from './GuestsOfPark.js'
parentHTMLElement=document.querySelector(".parkGuestList")
parentHTMLElement.innerHTML=parkGuestList()

import { parkServicesList } from './ServicesInPark.js'
parentHTMLElement=document.querySelector(".parkServicesList")
parentHTMLElement.innerHTML=parkServicesList()