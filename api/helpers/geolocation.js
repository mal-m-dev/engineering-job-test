const geolib = require('geolib');
const _ = require('lodash');

stringToNumber = (item) => {
    return typeof item === "string" ? Number.parseFloat(item) : item;
}

calculateDistance = (user) => {

    // London coordinates source: https://latitudelongitude.org/gb/london/
    const londonCoordinates = {
        latitude: 51.50853,
        longitude: -0.12574
    };

    const parsedLocation = {
        latitude: stringToNumber(user.latitude),
        longitude: stringToNumber(user.longitude)
    };

    const distance = geolib.getDistance(londonCoordinates, parsedLocation);

    const distanceInMiles = geolib.convertDistance(distance, 'mi');

    return distanceInMiles;
}

isWithinRange = (user) => {
    const rangeInMiles = 50;
    return calculateDistance(user) < rangeInMiles ? true : false;

}

findUsersWithinRange = (users) => {
    return _.filter(users, (user) => isWithinRange(user));
};

deduplicatedUsers = (londoners, usersInRange) => {
    return _.unionWith(londoners, usersInRange, _.isEqual);
};

module.exports = {
    stringToNumber,
    calculateDistance,
    isWithinRange,
    findUsersWithinRange,
    deduplicatedUsers
};
