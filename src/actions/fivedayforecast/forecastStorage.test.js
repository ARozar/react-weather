import Moment from 'moment';
import { isNotExpired, retryPeriod } from './forecastStorage';

describe('Storage isNotExpired', () => {

    it('returns true if lastUpdated less than retryPeriod', () => {

        const recentlyUpdated = Moment.utc().subtract(retryPeriod / 2, 'minute').toISOString();

        const forecast = { lastUpdated: recentlyUpdated };

        const result = isNotExpired(forecast);

        expect(result).toBe(true);
    })

    it('returns false if lastUpdated more that retryPeriod', () => {

        const updatedLongAgo = Moment.utc().subtract(retryPeriod * 2, 'minute').toISOString();

        const forecast = { lastUpdated: updatedLongAgo };

        const result = isNotExpired(forecast);

        expect(result).toBe(false);
    })
});