// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    let firstTwoArrayItems = driverArray.slice(0, 2)
    return firstTwoArrayItems 
 }

 const returnLastTwoDrivers = function(driverArray){
     let lastTwoArrayItems = driverArray.slice(length-2)
     return lastTwoArrayItems
 }

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function rideFare(integer){
        return integer ** 2;
    }
}

const fareDoubler = function(fare){
    return fare * 2
}

createFareMultiplier(fareDoubler(4))

const fareTripler = function(fare){
    return fare * 3
}

createFareMultiplier(fareTripler(3))

function selectDifferentDrivers(drivers, calling){
    return calling(drivers)
}


