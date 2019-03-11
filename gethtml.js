var https = require('https');

function getHTML (options, callback) {
    let display = ''

  /* Add your code here */
   https.get(options, function(response){
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    display += data
  })

  response.on('end', function() {
    callback(display);
  });

  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)
