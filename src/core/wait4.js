

function wait4(existsFn, msg) {
	return function (fn) {
		var counter=0;
		function wait() {
			if (existsFn()) {
				counter++;
				if (counter<9) {
					return window.setTimeout(wait,200*Math.pow(2,counter));
				} else {
					throw(msg);
				}
			} else {
				fn();
			}
		}
		wait();
	}
}

var wait4L=wait4(function () {return typeof L==='undefined'}, "Leaflet is not loaded!");

