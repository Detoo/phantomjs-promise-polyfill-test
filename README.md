# Testing PhantomJS Promise support

PhantomJS [does not currently support](https://github.com/ariya/phantomjs/issues/12401) native Javascript Promise.
 
This project applies and tests es6-promise polyfill as suggested by kawing-chiu in the thread above.
  
# Usage

To verify the polyfill works, build and run the tests as follows:

```
npm install
npm run build-tests
npm test
```
