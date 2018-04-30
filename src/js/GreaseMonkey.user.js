// ==UserScript==
// @name		Common scripts
// @namespace    http://tampermonkey.net/
// @description collection of handy tools
// @author      Wilson Huynh
// @include		*
// @match       http*://*/*
// @version 	1.0
// @run-at 		document-start
// @grant        none
// ==/UserScript==

(function() {
	if (window.top != window.self)  //don't run on frames or iframes
    return;

	// function to add a javascript file to page
	function addScript(url) {
		var element = document.createElement('script');
		element.type ="text/javascript";
		element.src = url;

		addFile(element);
	}

	// function to add a css file to page
	function addStyle(url) {
		var element = document.createElement('link');
		element.type = "text/css";
		element.rel = "stylesheet";
		element.href = url;

		addFile(element);
	}

	function addFile(element) {
		var title = document.getElementsByTagName('head')[0];
		document.head.appendChild(element);
	}


	var jQueryRequired = 1;
	function addUIResources () {
		//check if jQuery is loaded
		if (typeof jQuery=='undefined') {
			if (jQueryRequired == 1) {
				jqueryRequired = 100;
				addScript('//code.jquery.com/jquery-1.12.4.min.js');
			}

			setTimeout(addUIResources, 1000);
		}
		else{
			addStyle('https://cdn.rawgit.com/wilsonhuynh/bookmark/cb7d9a03/src/css/common.css');
			addScript('//cdnjs.cloudflare.com/ajax/libs/Base64/0.3.0/base64.js');
			addScript('https://cdn.rawgit.com/wilsonhuynh/bookmark/cb7d9a03/src/js/Common.js?v=0.1');
		}
	}

	// add page resources when page ready
	document.addEventListener("DOMContentLoaded", addUIResources);
})();



