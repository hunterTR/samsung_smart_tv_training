var myVideoIndex;
var ifrm;
var myVideoArray = [];


function ScenevideoScene() {

}



ScenevideoScene.prototype.initialize = function () {
    alert("SceneContents.initialize()");
 this.setVideoArray();
};

ScenevideoScene.prototype.handleShow = function (data) {
    alert("SceneContents.handleShow()");
    myVideoIndex = data.index;
	this.showVideo(myVideoIndex);
};

ScenevideoScene.prototype.handleHide = function () {
    alert("SceneContents.handleHide()");
};

ScenevideoScene.prototype.handleFocus = function () {
    alert("SceneContents.handleFocus()");
    
    
};

ScenevideoScene.prototype.handleBlur = function () {
    alert("SceneContents.handleBlur()");
    
    
};

ScenevideoScene.prototype.showVideo = function(index)
{
ifrm = document.createElement("IFRAME");
ifrm.setAttribute("src", myVideoArray[index]);
ifrm.style.width = 640+"px";
ifrm.style.height = 360+"px";
document.body.appendChild(ifrm);
}

ScenevideoScene.prototype.setVideoArray = function()
{
for ( i = 0 ; i < myJson.length ; i++)
{
myVideoArray[i] = myJson[i].external_id;

}

}

ScenevideoScene.prototype.handleKeyDown = function (keyCode) {
    alert("SceneContents.handleKeyDown(" + keyCode + ")");
    // TODO : write an key event handler when this scene get focued
    switch (keyCode) {
        case sf.key.LEFT:
		
            break;
        case sf.key.RIGHT:
            break;
        case sf.key.UP:
            break;
        case sf.key.DOWN:
            break;
        case sf.key.ENTER:
		ifrm.parentNode.removeChild(ifrm);
		sf.scene.hide('videoScene');
		sf.scene.show('Main');
		sf.scene.focus('Main');
	break;
		case 17:
			
            break;
	
			
    }
};