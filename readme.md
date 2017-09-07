# Five day weather #

## This is a react app that shows the 5 day weather forecast for Glasgow. ###

* Uses React and redux and material UI(v1 beta).
* served up using webpack (via create react app)
* deployed at https://wipro-react-app-redux-hftdeqortm.now.sh/

## Deployment

The app was deployed using Ziet.  This deployment process simulates a deployment server as it takes the app contents and runs both the npm install and start scripts.

## How do I get set up? ###

To install dependencies run the following in the command line

    npm install

To then run the app enter

    npm start

There run tests (of which there are one) run

    npm test


## Next steps (with more time) ###

### Deployment
This does not create a production build of the app so there are no build optimizations.  This is one area that could be improved.

Ideally a suite of tests would also run as part of the build process, potentially with project specific linting.

### Test
Generally would look to test:

- reducers
- Test components using Enzyme (only 1 basic test so far) using shallow rendering for isolation
- Potentially do full integration tests instead of shallow renders

### Secrets /  config
Would remove api key from source and use webpack to inject environment variables.

Obtaining this info from the server could be another alternative.

### Front end improvements
* Make List and detail components equal height
* Look at using service worker if available to lower the number of api calls (currently using local storage)
* Configure a sass loader, even if css is being handled on a component level many libraries require sass files to be imported
* Would look at using a more mature grid system than Material UI v1-beta (though it is improving rapidly)
* Implement a more scalable approach for handling API loading and error states such as using custom middleware or a high order compoment that can "decorate" other components with error and loading logic and maybe call some kind of notification popup on error.
* Externalize styles into seperate files.  Am using the withStyles high order component to scope styles to the relevant components but would move style objects to a seperate file in the same folder.
* Would look to seperate out any complicated mapping functions into their own modules.
* Would look at handling api errors with more granularity
