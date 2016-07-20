Timing-Allow-Origin test
=====

This demonstrates using Timing-Allow-Origin with space-separated origins. To run the test:

    git clone https://github.com/MicrosoftEdge/timing-allow-origin-test.git
    cd timing-allow-origin-test
    npm install
    npm start

Then open up `http://localhost:8000` and `http://localhost:8001` in a browser.

### What's going on

A subresource from `localhost:8002` declares `Timing-Allow-Origin: http://localhost:8000 http://localhost:8001`. So a page served from either `localhost:8000` or `localhost:8001` should be able to get its full performance entry without anything zeroed out, assuming the browser supports the space-separated format.

### Initial results

* Chrome 51: passes
* Edge 14: passes
* Firefox 49: fails
