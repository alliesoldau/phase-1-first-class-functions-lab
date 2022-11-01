// Code your solution in this file!
const returnFirstTwoDrivers = array => [array[0], array[1]];

const returnLastTwoDrivers = array => [array[array.length - 2], array[array.length - 1]];

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = integer => (fare) => integer * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, funct) {
    return funct(array);
};
