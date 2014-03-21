var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();


var mArray = ['video1','video2','video3','video4','video5','video6','video7','video8','video9','video10','video11','video12','video13','video14'];


var max_video_num = 14;
var mTitleIndex= 0;
var mVideoIndex = 0;
var maxTitleNumber = 7;
function SceneMain() {
	
	
}

var Main =
{
		
};


Main.showvideolist = function(index)
{
				for(i = 0 ;i < maxTitleNumber ; i++)
	{
		if(index+i >= max_video_num)
	{
document.getElementById("MainListTitle"+i).innerHTML = mArray[i+index - max_video_num];

}
	else
	document.getElementById("MainListTitle"+i).innerHTML = mArray[i+index];

	}
	


Main.setHighlight(mTitleIndex);
}
Main.showVideo = function()
{
sf.scene.hide('Main');
sf.scene.show('videoScene');    // pass the index of    articles and array contains article data.
 sf.scene.focus('videoScene');

}
Main.setHighlight = function(index)
{
document.getElementById("MainListTitle"+index).style.color = "#00FFFF";
}
Main.deHighlight = function(index)
{
document.getElementById("MainListTitle"+index).style.color = "#FFFFFF";
}


Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
Main.showvideolist(mVideoIndex);
	
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
			Main.showVideo();
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			break;
		case tvKey.KEY_UP:
			alert("UP");
			
			mVideoIndex--;
			if(mVideoIndex < 0)
			mVideoIndex = max_video_num-1;
			
			
	Main.showvideolist(mVideoIndex);
//			Main.setHighlight(mTitleIndex);
			
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			
		
			mVideoIndex++;
			if(mVideoIndex >= max_video_num)
			mVideoIndex = 0;
			
	Main.showvideolist(mVideoIndex);
			//Main.setHighlight(mTitleIndex);
			
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
