var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
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