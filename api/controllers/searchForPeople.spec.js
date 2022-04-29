const searchForPeople = require('./searchForPeople');
const axios = require('axios');

const londoners = [
    {
        "id": 135,
        "first_name": "Mechelle",
        "last_name": "Boam",
        "email": "mboam3q@thetimes.co.uk",
        "ip_address": "113.71.242.187",
        "latitude": -6.5115909,
        "longitude": 105.652983
    }, {
        "id": 794,
        "first_name": "Katee",
        "last_name": "Gopsall",
        "email": "kgopsallm1@cam.ac.uk",
        "ip_address": "203.138.133.164",
        "latitude": 5.7204203,
        "longitude": 10.901604
    }
];

const londonLocationUsers = [
    {
        "id": 508,
        "first_name": "Dave",
        "last_name": "Smith",
        "email": "kgopsmith1@cam.ac.uk",
        "ip_address": "203.138.133.164",
        "latitude": 51.51267740338161,
        "longitude": -0.5951894885289725
    }, {
        "id": 794,
        "first_name": "Katee",
        "last_name": "Gopsall",
        "email": "kgopsallm1@cam.ac.uk",
        "ip_address": "203.138.133.164",
        "latitude": 5.7204203,
        "longitude": 10.901604
    }, {
        "id": 283,
        "first_name": "Brian",
        "last_name": "May",
        "email": "kgopsmay1@cam.ac.uk",
        "ip_address": "203.138.133.164",
        "latitude": 51.22066957568871,
        "longitude": 0.39431074463223603
    }
];

describe('searchForPeopleController', () => {
    describe('getLondonUsers', () => {
        it('should exist', function () {
            expect(searchForPeople.getLondonUsers).toBeDefined();
        });

        it('should get users who live in London', function () {

            //Arrange
            axios.get.mockImplementationOnce(() => []);
            //Act
            const result = searchForPeople.getLondonUsers();
            expect(axios.mock).toBeDefined();
        });
    });

    describe('getAllUsers', () => {
        it('should exist', function () {
            expect(searchForPeople.getAllUsers).toBeDefined();
        });

        it('should get all users', function () {

            //Arrange
            searchForPeople.getAllUsers = jest.fn(() => londoners);

            //Act
            const result = searchForPeople.getAllUsers({}, {});

            //Assert
            expect(searchForPeople.getAllUsers).toHaveBeenCalled();
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(result).toEqual(londoners);
        });
    });

    describe('getLondonSet', () => {
        it('should exist', function () {
            expect(searchForPeople.getAllUsers).toBeDefined();
        });

        it.skip('should return all London users and those within 50 miles', function () {

            //Arrange
            const mockSend = jest.fn(result => result);

            const mockRes = {
                status: jest.fn(() => mockSend),
            };
            axios.get = jest.fn();

            searchForPeople.getLondonUsers = jest.fn(() => londoners);
            searchForPeople.getAllUsers = jest.fn(() => londonLocationUsers);

            //Act
            const result = searchForPeople.getLondonSet({}, mockRes);

            //Assert
            expect(mockSend).toHaveBeenCalledWith(londoners);
        });
    });

});
