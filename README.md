Timing-Allow-Origin test
=====

This demonstrates using Timing-Allow-Origin with space-separated origins. To run the test:

    git clone https://github.com/MicrosoftEdge/timing-allow-origin-test.git
    cd timing-allow-origin-test
    npm install
    npm start

Then open up `http://localhost:8000` and `http://localhost:8001` in a browser.

### Initial results

* Chrome 51: passes
* Edge 14: passes
* Firefox 49: fails
