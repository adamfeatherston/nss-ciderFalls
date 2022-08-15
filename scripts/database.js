const database = {
    parkInfo: {
        name: "Cider Falls Public Park",
        logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.H2pXkEQ9zaR1xOWV5kj5qgHaFx%26pid%3DApi&f=1",
        phone: "(123) 456-7890",
        email: "cedarfallsinfo@cedarfalls.gov",
        address: "123 Riverside Dr. Cider Falls, IA 12345"
    },
    parkAreas: [{
        id: 1,
        name: "Chamfort River",
        areaInfo: "Access to Chamfort River."    
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        areaInfo: "Access to Lost Wolf trailhead."
    }, {
        id: 3,
        name: "Lodge",
        areaInfo: "Cider Falls Lodge: area also contains hotel and restaurant."
    }, {
        id: 4,
        name: "Gander River",
        areaInfo: "Natural Preserve with access to Gander River."
    }, {
        id: 5,
        name: "Campgrounds",
        areaInfo: "Cider Falls Campgrounds: area also contains the park office and children play areas."
    }, {
        id: 6,
        name: "Pine Bluff Trails",
        areaInfo: "Vast network of trails for all levels of hikers."
    }],
    parkServices: [{
        id: 1,
        service: "rafting"
    }, {
        id: 2,
        service: "canoeing"
    }, {
        id: 3,
        service: "fishing"
    }, {
        id: 4,
        service: "hiking"
    }, {
        id: 5,
        service: "picknicking"
    }, {
        id: 6,
        service: "rock climbing"
    }, {
        id: 7,
        service: "lodging"
    }, {
        id: 8,
        service: "parking"
    }, {
        id: 9,
        service: "information"
    }, {
        id: 10,
        service: "zip lines"
    }], 
    areaServices: [{
        id: 1,
        parkAreaID: 1, 
        parkServicesID: 1
    }, {
        id: 2,
        parkAreaID: 1, 
        parkServicesID: 2
    }, {
        id: 3,
        parkAreaID: 1, 
        parkServicesID: 3
    }, {
        id: 4,
        parkAreaID: 2, 
        parkServicesID: 4
    }, {
        id: 5,
        parkAreaID: 2, 
        parkServicesID: 5
    }, {
        id: 6,
        parkAreaID: 2, 
        parkServicesID: 6
    }, {
        id: 7,
        parkAreaID: 3, 
        parkServicesID: 7
    }, {
        id: 8,
        parkAreaID: 3, 
        parkServicesID: 8
    }, {
        id: 9,
        parkAreaID: 3, 
        parkServicesID: 9
    }, {
        id: 10,
        parkAreaID: 3, 
        parkServicesID: 5
    }, {
        id: 11,
        parkAreaID: 4, 
        parkServicesID: 3
    }, {
        id: 12,
        parkAreaID: 4, 
        parkServicesID: 4
    }, {
        id: 13,
        parkAreaID: 5, 
        parkServicesID: 9
    }, {
        id: 14,
        parkAreaID: 5, 
        parkServicesID: 7
    }, {
        id: 15,
        parkAreaID: 5, 
        parkServicesID: 8
    }, {
        id: 16,
        parkAreaID: 6, 
        parkServicesID: 4
    }, {
        id: 17,
        parkAreaID: 6, 
        parkServicesID: 5
    }, {
        id: 18,
        parkAreaID: 6, 
        parkServicesID: 10
    }    ],
    parkGuests: [{
        id: 1,
        firstName: "Homer",
        lastName: "Simpson",
        parkAreaID: 1,
    }, {
        id: 2,
        firstName: "Marge",
        lastName: "Simpson",
        parkAreaID: 1,
    }, {
        id: 3,
        firstName: "Lisa",
        lastName: "Simpson",
        parkAreaID: 2,
    }, {
        id: 4,
        firstName: "Bart",
        lastName: "Simpson",
        parkAreaID: 2,
    }, {
        id: 5,
        firstName: "Maggie",
        lastName: "Simpson",
        parkAreaID: 3,
    }, {
        id: 6,
        firstName: "Grandpa",
        lastName: "Simpson",
        parkAreaID: 3,
    }, {
        id: 7,
        firstName: "Mike",
        lastName: "Brady",
        parkAreaID: 4,
    }, {
        id: 8,
        firstName: "Carol",
        lastName: "Brady",
        parkAreaID: 4,
    }, {
        id: 9,
        firstName: "Greg",
        lastName: "Brady",
        parkAreaID: 5,
    }, {
        id: 10,
        firstName: "Marcia",
        lastName: "Brady",
        parkAreaID: 5,
    }, {
        id: 11,
        firstName: "Peter",
        lastName: "Brady",
        parkAreaID: 6,
    }, {
        id: 12,
        firstName: "Jan",
        lastName: "Brady",
        parkAreaID: 6,
    }]
}

// export const getParkInfo = () => {
//     return database.parkInfo.map(maininfo => ({...maininfo}))
// } theParkInfo is in InfoOfParks module.  An export function with map only works with an array.  If multiple parks existed (ie. larger project) this would be used to label each park.
export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}
export const getParkServices = () => {
    return database.parkServices.map(parkService => ({...parkService}))
}
export const getParkGuests = () => {
    return database.parkGuests.map(parkGuest => ({...parkGuest}))
}