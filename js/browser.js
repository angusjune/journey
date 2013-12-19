/**
 * @author angus
 */

function browser(message_ie9, message_ie7) {
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	( s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] : ( s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] : ( s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] : ( s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] : ( s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
		
	if(Sys.ie < 9.0) {
		document.write('<div class="browser-warn"><p>' + message_ie9 + '</p></div>');
	} else if(Sys.ie < 7.0) {
		document.write('<div class="browser-warn"><p>' + message_ie7 + '</p></div>');
		document.close();//ie7以下将无法运行
	}

}