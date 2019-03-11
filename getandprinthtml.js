var https = require('https');


function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  let display = ''
  https.get(requestOptions, function(response){
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

getAndPrintHTMLChunks()
