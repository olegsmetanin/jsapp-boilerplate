var Samples = Class({

    constructor:function () {
    },

    map:function (div) {
        var self = this;

        self.current = L.map(DOM.get(div)).setView([0, 0], 5);

        L.tileLayer(
            'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png',
            {
                maxZoom:18,
                attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery � <a href="http://cloudmade.com">CloudMade</a>'
            }
        ).addTo(self.current);


    },
    dom:function (divclick, appenddiv) {

        Event.on(DOM.get(divclick), 'click', function () {
            var el = DOM.create('div', 'newdiv', DOM.get(appenddiv));
            el.innerHTML = 'new div';
            el.style.color = 'magenta';

            console.log("Div appended in #" + appenddiv);
        });

    },

    pubsub:function (div) {

        Bus.subscribe('msg', function () {
            console.log("Get msg!");
        });

        Event.on(DOM.get(div), 'click', function () {
            Bus.publish('msg');
            console.log("Publish msg");
        });

    },
    req:function (div) {

        Event.on(DOM.get(div), 'click', function () {

            Req({
                url:'http://ws.geonames.org/searchJSON?q=USA&maxRows=10&callback=?',
                type:'jsonp',
                success:function (resp) {
                    console.log(JSON.stringify(resp));
                }, error:function (err) {
                    console.log(JSON.stringify(err));
                }
            });

        });

    }




});