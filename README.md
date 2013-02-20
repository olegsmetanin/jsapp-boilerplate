jsapp-boilerplate
=================

domutil+domready+bean+jsface+pubsubjs+reqwest+easyxdm+leaflet plugins
Compile with grunt 0.4


Compile
------

$ git clone git@github.com:olegsmith/jsapp-boilerplate.git  
$ cd jsapp-boilerplate  
$ npm install -g grunt-cli (if grunt-cli is not installed)  
$ npm install grunt@0.4  
$ npm install grunt-contrib-concat  
$ npm install grunt-closure-tools  

Place compiler.jar from http://closure-compiler.googlecode.com/files/compiler-latest.zip to "build" folder

In windows console run "DOSKEY grunt=grunt.cmd $*" (<a href="http://gruntjs.com/frequently-asked-questions#on-windows-why-does-my-js-editor-open-when-i-try-to-run-grunt"><b>FAQ</b></a>)

$ grunt

open in webbrowser example/index.html


Aliases (src/core/alias.js)
------

```javascript
var self = this;

var JSON = self['JSON'];	        // JSON
var Utils=self['Utils'];			// Utils
var Class = self['Class'];	        // Class
var DOM = self['DomUtil'];	        // DOM
var Evt = self['bean'];				// Event
var Bus = self['PubSub'];	        // Bus
var Req = self['reqwest'];	        // Ajax Request
var RPC = self['easyXDM'];	        // RPC


var domready = self['domready'];    //DomReady
```

Usage (src/samples.js)
------

```javascript
var Samples = Class({

    constructor: function () {},
    map: function (div) {
        var self = this;

        self.current = L.map(DOM.get(div)).setView([0, 0], 5);

        L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="http://cloudmade.com">CloudMade</a>'
        }).addTo(self.current);


    },
    dom: function (divclick, appenddiv) {

        Evt.on(DOM.get(divclick), 'click', function () {
            var el = DOM.create('div', 'newdiv', DOM.get(appenddiv));
            el.innerHTML = 'new div';
            el.style.color = 'magenta';

            console.log("Div appended to #" + appenddiv);
        });

    },
    pubsub: function (div) {

        Bus.subscribe('msg', function () {
            console.log("Get msg!");
        });

        Evt.on(DOM.get(div), 'click', function () {
            Bus.publish('msg');
            console.log("Publish msg");
        });

    },
    req: function (div) {

        Evt.on(DOM.get(div), 'click', function () {

            Req({
                url: 'http://ws.geonames.org/searchJSON?q=USA&maxRows=10&callback=?',
                type: 'jsonp',
                success: function (resp) {
                    console.log(JSON.stringify(resp));
                },
                error: function (err) {
                    console.log(JSON.stringify(err));
                }
            });

        });

    }

});

```