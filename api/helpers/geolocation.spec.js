const {stringToNumber, calculateDistance, isWithinRange, findUsersWithinRange, deduplicatedUsers} = require("./geolocation");

const swindonUser = {
    "id": 734,
    "first_name": "Katee",
    "last_name": "Gopsall",
    "email": "kgopsallm1@cam.ac.uk",
    "ip_address": "203.138.133.164",
    "latitude": 51.56352947040591,
    "longitude": -1.786572700312729
};

const edinburghUser = {
    "id": 894,
    "first_name": "Katee",
    "last_name": "Gopsall",
    "email": "kgopsallm1@cam.ac.uk",
    "ip_address": "203.138.133.164",
    "latitude": 55.957528377127105,
    "longitude": -3.1881738858447646
};

const sloughUser = {
    "id": 798,
    "first_name": "Katee",
    "last_name": "Gopsall",
    "email": "kgopsallm1@cam.ac.uk",
    "ip_address": "203.138.133.164",
    "latitude": 51.51267740338161,
    "longitude": -0.5951894885289725
};

const peckhamUser = {
    "id": 394,
    "first_name": "Katee",
    "last_name": "Gopsall",
    "email": "kgopsallm1@cam.ac.uk",
    "ip_address": "203.138.133.164",
    "latitude": 51.22066957568871,
    "longitude": 0.39431074463223603
};




describe('Function: stringToNumber', () => {
    it('should return a converted string', function () {
        const stringFloat = '51.234567809';
        const result = stringToNumber(stringFloat);

        expect(result).toEqual(51.234567809);
        expect(typeof result).toEqual('number');
    });
})
describe('Function: calculateDistance', () => {

    it('should exist', () => {
        expect(calculateDistance).toBeDefined();
    });

    it('should calculate a nil distance between two identical coordinates', () => {

        //Arrange
        const london = {
            latitude: 51.50853,
            longitude: -0.12574
        };

        //Act
        const result = calculateDistance(london);

        //Assert
        expect(result).toEqual(0);
        expect(typeof result).toEqual('number');
    });

    it('should calculate distance correctly', () => {

        //Arrange
        const aMileAway = {
            latitude: 51.49385738794235,
            longitude: -0.1251635427498418
        };

        //Act
        const result = calculateDistance(aMileAway);

        //Assert
        expect(result).toEqual(1.0153205281158035);
        expect(typeof result).toEqual('number');
    });
});

describe('Function: isWithinRange', () => {
    it('should return false if user in Swindon', () => {

        //Act
        const result = isWithinRange(swindonUser);

        //Assert
        expect(result).toEqual(false);
    });

    it('should return false if user in Edinburgh', () => {

        //Act
        const result = isWithinRange(edinburghUser);

        //Assert
        expect(result).toEqual(false);
    });

    it('should return true if user in Slough', () => {

        //Act
        const result = isWithinRange(sloughUser);

        //Assert
        expect(result).toEqual(true);
    });

    it('should return true if user in East Peckham', () => {

        //Act
        const result = isWithinRange(peckhamUser);

        //Assert
        expect(result).toEqual(true);
    });
});

describe('Function: findUsersWithinRange', () => {
    it('should return users within 50 miles of London', () => {

        //Arrange
        const mockUserArray = [
            swindonUser,
            sloughUser,
            edinburghUser,
            peckhamUser
        ];

        const expectedResult = [
            sloughUser,
            peckhamUser
        ];

        //Act
        const result = findUsersWithinRange(mockUserArray);

        //Assert
        expect(result).toEqual(expectedResult);
    });
});

describe('Function: deduplicatedUsers', () => {
    it('should merge and deduplicate two arrays of users', function () {

        //Arrange
        const mockUserArray = [
            {
                id: 266,
                first_name: 'Ancell',
                last_name: 'Garnsworthy',
                email: 'agarnsworthy7d@seattletimes.com',
                ip_address: '67.4.69.137',
                latitude: 51.6553959,
                longitude: 0.0572553
            },
            {
                id: 322,
                first_name: 'Hugo',
                last_name: 'Lynd',
                email: 'hlynd8x@merriam-webster.com',
                ip_address: '109.0.153.166',
                latitude: 51.6710832,
                longitude: 0.8078532
            },
            {
                id: 554,
                first_name: 'Phyllys',
                last_name: 'Hebbs',
                email: 'phebbsfd@umn.edu',
                ip_address: '100.89.186.13',
                latitude: 51.5489435,
                longitude: 0.3860497
            }
        ];

        const mockLondonerArray = [
            {
                id: 266,
                first_name: 'Ancell',
                last_name: 'Garnsworthy',
                email: 'agarnsworthy7d@seattletimes.com',
                ip_address: '67.4.69.137',
                latitude: 51.6553959,
                longitude: 0.0572553
            },
            {
                id: 135,
                first_name: 'Mechelle',
                last_name: 'Boam',
                email: 'mboam3q@thetimes.co.uk',
                ip_address: '113.71.242.187',
                latitude: -6.5115909,
                longitude: 105.652983
            },
            {
                id: 396,
                first_name: 'Terry',
                last_name: 'Stowgill',
                email: 'tstowgillaz@webeden.co.uk',
                ip_address: '143.190.50.240',
                latitude: -6.7098551,
                longitude: 111.3479498
            },
            {
                id: 520,
                first_name: 'Andrew',
                last_name: 'Seabrocke',
                email: 'aseabrockeef@indiegogo.com',
                ip_address: '28.146.197.176',
                latitude: '27.69417',
                longitude: '109.73583'
            },
            {
                id: 658,
                first_name: 'Stephen',
                last_name: 'Mapstone',
                email: 'smapstonei9@bandcamp.com',
                ip_address: '187.79.141.124',
                latitude: -8.1844859,
                longitude: 113.6680747
            },{
                id: 322,
                first_name: 'Hugo',
                last_name: 'Lynd',
                email: 'hlynd8x@merriam-webster.com',
                ip_address: '109.0.153.166',
                latitude: 51.6710832,
                longitude: 0.8078532
            },
            {
                id: 554,
                first_name: 'Phyllys',
                last_name: 'Hebbs',
                email: 'phebbsfd@umn.edu',
                ip_address: '100.89.186.13',
                latitude: 51.5489435,
                longitude: 0.3860497
            },
            {
                id: 688,
                first_name: 'Tiffi',
                last_name: 'Colbertson',
                email: 'tcolbertsonj3@vimeo.com',
                ip_address: '141.49.93.0',
                latitude: 37.13,
                longitude: -84.08
            },
            {
                id: 794,
                first_name: 'Katee',
                last_name: 'Gopsall',
                email: 'kgopsallm1@cam.ac.uk',
                ip_address: '203.138.133.164',
                latitude: 5.7204203,
                longitude: 10.901604
            }
        ];

        const expectedResult = [
            {
                id: 266,
                first_name: 'Ancell',
                last_name: 'Garnsworthy',
                email: 'agarnsworthy7d@seattletimes.com',
                ip_address: '67.4.69.137',
                latitude: 51.6553959,
                longitude: 0.0572553
            },
            {
                id: 135,
                first_name: 'Mechelle',
                last_name: 'Boam',
                email: 'mboam3q@thetimes.co.uk',
                ip_address: '113.71.242.187',
                latitude: -6.5115909,
                longitude: 105.652983
            },
            {
                id: 396,
                first_name: 'Terry',
                last_name: 'Stowgill',
                email: 'tstowgillaz@webeden.co.uk',
                ip_address: '143.190.50.240',
                latitude: -6.7098551,
                longitude: 111.3479498
            },
            {
                id: 520,
                first_name: 'Andrew',
                last_name: 'Seabrocke',
                email: 'aseabrockeef@indiegogo.com',
                ip_address: '28.146.197.176',
                latitude: '27.69417',
                longitude: '109.73583'
            },
            {
                id: 658,
                first_name: 'Stephen',
                last_name: 'Mapstone',
                email: 'smapstonei9@bandcamp.com',
                ip_address: '187.79.141.124',
                latitude: -8.1844859,
                longitude: 113.6680747
            },{
                id: 322,
                first_name: 'Hugo',
                last_name: 'Lynd',
                email: 'hlynd8x@merriam-webster.com',
                ip_address: '109.0.153.166',
                latitude: 51.6710832,
                longitude: 0.8078532
            },
            {
                id: 554,
                first_name: 'Phyllys',
                last_name: 'Hebbs',
                email: 'phebbsfd@umn.edu',
                ip_address: '100.89.186.13',
                latitude: 51.5489435,
                longitude: 0.3860497
            },
            {
                id: 688,
                first_name: 'Tiffi',
                last_name: 'Colbertson',
                email: 'tcolbertsonj3@vimeo.com',
                ip_address: '141.49.93.0',
                latitude: 37.13,
                longitude: -84.08
            },
            {
                id: 794,
                first_name: 'Katee',
                last_name: 'Gopsall',
                email: 'kgopsallm1@cam.ac.uk',
                ip_address: '203.138.133.164',
                latitude: 5.7204203,
                longitude: 10.901604
            }
        ];

        //Act
        const result = deduplicatedUsers(mockLondonerArray, mockUserArray);

        //Assert
        expect(result).toEqual(expectedResult);
    });
});
