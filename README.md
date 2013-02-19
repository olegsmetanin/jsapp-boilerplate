jsapp-boilerplate
=================

domutil+domready+bean+jsface+pubsubjs+reqwest+easyxdm+leaflet plugins
Compile with grunt 0.4


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
