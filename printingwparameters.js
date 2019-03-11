var https = require('https');

function getAndPrintHTML (options) {
    let display = ''

  /* Add your code here */
   https.get(options, function(response){
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    display += data
    console.log('Chunk Received. data:', data, '\n');
  })

  response.on('end', function() {
    console.log('finished: ' + display);
  });

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)
