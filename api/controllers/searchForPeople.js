const axios = require('axios');
const _ = require('lodash');
const {findUsersWithinRange, deduplicatedUsers} = require('../helpers/geolocation');

async function getLondonUsers (req, res) {
    const getLondonersUrl = 'https://bpdts-test-app.herokuapp.com/city/London/users';

    try {
        const response = await axios.get(getLondonersUrl);
        return response.data;
    } catch (err) {
        console.error('getLondonUsers call failed with error: ', err);
        res.status(500).send('getLondonUsers call failed');
    }
}

async function getAllUsers (req, res) {
    const getAllUsersUrl = 'https://bpdts-test-app.herokuapp.com/users';

    try {
        const response = await axios.get(getAllUsersUrl);
        return response.data;
    } catch (err) {
        console.error('getAllUsers call failed with error: ', err);
        res.status(500).send('getAllUsers call failed');
    }
}

async function getLondonSet (req, res) {
    const londoners = await getLondonUsers(req, res);

    const allUsers = await getAllUsers(req, res);

    const usersInRange = findUsersWithinRange(allUsers);

    const matchingUsers = deduplicatedUsers(londoners, usersInRange);

    res.status(200).send(matchingUsers);
}

module.exports = {
    getLondonUsers,
    getAllUsers,
    getLondonSet
};
