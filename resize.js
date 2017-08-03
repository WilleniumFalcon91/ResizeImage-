const fs = require('fs');
const gm = require('gm').subClass({imageMagick: true});
const request = require('request');

var options = {
    url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    encoding: null
};

request(options, (err, buffer, imageData) => {
    gm('https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png').resizeExact(240, 240)
        .write('resiezedJavaScriptLogo.png', (err, buffer) => {
        // .write('https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png', (err) => {
            if (!err)
                console.log('done');
        // })
        });

});