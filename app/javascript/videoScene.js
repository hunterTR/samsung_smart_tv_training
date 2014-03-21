var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();


var max_video_num = 14;
var mTitleIndex= 0;
var mVideoIndex = 0;
var maxTitleNumber = 7;



function SceneMain() {
	
	
}

function SceneContents() {
}

SceneContents.prototype.initialize = function () {
    alert("SceneContents.initialize()");}

SceneContents.prototype.handleShow = function (data) {
    alert("SceneContents.handleShow()");
	
	mVideoIndex = data.index;

}


var Main =
{
};

Main.handleShow = function (data) {
    alert("SceneContents.handleShow()");
	
	mVideoIndex = data.index;

	
}

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};




Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			widgetAPI.sendReturnEvent();
			
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			break;
		case tvKey.KEY_UP:
			alert("UP");

			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			
			
			
			break;
		default:
			alert("Unhandled key");
			break;
	}
	
};
