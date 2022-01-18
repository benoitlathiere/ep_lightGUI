/**
 * @author Benoit Lathiere
 * @sourcefile hooks.js
 * lightGUI plugin for Etherpad-Lite
 * client-side JS hook file
 */
/**
 * Returns value from the key in URL get parameters, or empty value.
 */
var getURLParameter = function(name) {
	if (name===''){
		return '';
	}
	return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g,'%20'))||'';
};
/**
 * see http://etherpad.org/doc/v1.3.0/#index_postaceinit
 */
exports.postAceInit = function(hook, context) {		//context.ace, context.pad
	if (getURLParameter("lightgui")==='1' || getURLParameter('lightgui')==='true'){
		$('#editorcontainer').css('top', '0');
		$('#editbar').css('display', 'none');
		$('#chaticon').css('display', 'none');
		$('#options-linenoscheck').prop('checked',false);
		$('#options-stickychat').prop("checked", false);	//src/static/js/pad.js:522
		pad.changeViewOption('showLineNumbers', false);		//src/static/js/pad.js:313
		pad.changeViewOption('noColors', true);				//src/static/js/pad.js:319
	}
};