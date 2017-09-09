import { getFiveDayForecast } from './fiveDayForecastApi';


describe('fiveDayForcastApi with stored data', () => {

    const expectedDateString = '2017-12-08';

    const storedForecast = { lastUpdated: expectedDateString };

    let storage, mockGetForeCast, mockIsNotExpired;

    beforeEach(() => {
        storage = require('./forecastStorage');

        mockGetForeCast = jest.spyOn(storage, 'getForeCast')
            .mockImplementation(() => storedForecast);

        mockIsNotExpired = jest.spyOn(storage, 'isNotExpired')
            .mockImplementation(() => true);

    });

    afterEach(() => {
        mockIsNotExpired.mockRestore();
        mockGetForeCast.mockRestore();
    });

    it('retrieves forcast from storage if no expired', async () => {

        const result = await getFiveDayForecast();

        expect(result).toBe(storedForecast);
        expect(mockGetForeCast).toHaveBeenCalled();
        expect(mockIsNotExpired).toHaveBeenCalled();
    });

    it('has forcast from storage with same lastUpdated value', async () => {

        const result = await getFiveDayForecast();

        expect(result.lastUpdated).toBe(expectedDateString);
    });

});

describe('fiveDayForcastApi with expired data', () => {

    const storedForecast = {};

    const expectedDateString = '2018-09-20';

    const backupFetch = global.fetch;

    const fakeFetch = () => {
        return { then: () => Promise.resolve({}) };
    };


    let storage, mockGetForeCast, mockIsNotExpired, mockUpdateStorage, mockToIsoString;

    beforeEach(() => {

        let moment = require('moment');

        mockToIsoString = jest.spyOn(moment.prototype, 'toISOString')
            .mockImplementation(() => expectedDateString);

        storage = require('./forecastStorage');

        mockGetForeCast = jest.spyOn(storage, 'getForeCast')
            .mockImplementation(() => storedForecast);

        mockIsNotExpired = jest.spyOn(storage, 'isNotExpired')
            .mockImplementation(() => false);

        mockUpdateStorage = jest.spyOn(storage, 'updateStorage')
            .mockImplementation((data) => data);

        global.fetch = fakeFetch;
    });

    afterEach(() => {

        mockToIsoString.mockRestore();

        mockIsNotExpired.mockRestore();
        mockGetForeCast.mockRestore();
        mockUpdateStorage.mockRestore();

        global.fetch = backupFetch;
    });

    it('updates forcast to storage with update date', async () => {

        const result = await getFiveDayForecast();

        expect(mockGetForeCast).toHaveBeenCalled();
        expect(mockUpdateStorage).toHaveBeenCalledWith({lastUpdated: expectedDateString});
    });

    it('adds last updateDate to result', async () => {

        const result = await getFiveDayForecast();
        
        expect(result.lastUpdated).toBe(expectedDateString);
    });
});


