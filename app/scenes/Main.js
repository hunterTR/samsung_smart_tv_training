
  alert("Main");
var myVideoIndex = 0;
var max_title_number;
var max_video_num;
var myJson;
var deneme;

var denemearr = [];


function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}




function SceneMain(options) {



}



SceneMain.prototype.initialize = function () {
    alert("SceneMain.initialize()");
    // this function will be called only once, when the scene manager shows this scene for the first time
    // initialize the scene controls and styles, and initialize your variables here
    // scene HTML and CSS will be loaded before this function is called

var request = makeHttpObject();
request.open("GET", "http://www.wappzapp.tv/api.php?action=getlist&no-cache=1&amount=9&start=0", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
  {myJson = request.responseText;
}
};


}

SceneMain.prototype.handleShow = function () {
    alert("SceneMain.handleShow()");
    // this function will be called when the scene manager shows this scene
max_video_num = myJson.length;
alert(max_video_num);
myTitleIndex= 0;
myVideoIndex = 0;
max_title_number = 7;

this.showVideoList(myVideoIndex);
			
}

SceneMain.prototype.handleHide = function (options) {
    alert("SceneMain.handleHide()");
    // this function will be called when the scene manager hides this scene
	
	
	
}

SceneMain.prototype.handleFocus = function () {
    alert("SceneMain.handleFocus()");
    // this function will be called when the scene manager sets the focus on this scene

	
}

SceneMain.prototype.handleBlur = function () {
    alert("SceneMain.handleBlur()");
    // this function will be called when the scene manager moves the focus to another scene from this scene
	

}

SceneMain.prototype.showVideoList = function(index)
{

					for(var i = 0 ;i < max_title_number ; i++)
		{
			if(index+i >= max_video_num)
		{
		document.getElementById("MainListTitle"+i).innerHTML = myJson[i+index - max_video_num].name;

	}
		else
		document.getElementById("MainListTitle"+i).innerHTML = myJson[i+index].name;

			}
			this.setHighlight(0);
			
}
SceneMain.prototype.setHighlight = function(index)
{
document.getElementById("MainListTitle"+index).style.color = "#00FFFF";
}

SceneMain.prototype.showVideoScene = function(deneme)
{
	sf.scene.hide('Main');
	sf.scene.show('videoScene', {index: deneme , array: myJson}); 
    sf.scene.focus('videoScene');	
}


SceneMain.prototype.handleKeyDown = function (keyCode) {
    alert("SceneMain.handleKeyDown(" +  keyCode + ")");
    // TODO: write a key event handler when this scene gets the focus
    switch (keyCode) {
        case sf.key.LEFT:
            break;
        case sf.key.RIGHT:
        	this.showVideoScene(myVideoIndex);
            break;
        case sf.key.UP:
        	
        	myVideoIndex--;
			if(myVideoIndex < 0)
			myVideoIndex = max_video_num-1;
			
			
	this.showVideoList(myVideoIndex);
            break;
        case sf.key.DOWN:
        	
        	myVideoIndex++;
			if(myVideoIndex >= max_video_num)
			myVideoIndex = 0;
			
	this.showVideoList(myVideoIndex);
	
            break;
        case sf.key.ENTER:
            break;
    }
}



