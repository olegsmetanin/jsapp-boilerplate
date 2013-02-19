var self=this;

var Class=self['Class'];	// Class
var DOM=self['DomUtil'];	// DOM
var Event=self['bean'];		// Event
var Bus=self['PubSub'];		// Bus
var Req=self['reqwest'];	// Ajax Request
var RPC=self['easyXDM'];	// RPC
var JSON=self['JSON'];		// JSON

var domready=self['domready'];

/**
* Clear namespaces
*/
delete self['Class'];
delete self['DomUtil'];	
delete self['bean'];
delete self['PubSub'];
delete self['reqwest'];
delete self['easyXDM'];
delete self['JSON'];

delete self['jsface'];


