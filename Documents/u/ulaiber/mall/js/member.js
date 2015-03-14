
	var content=document.getElementById("commodity-list");
	var left=document.getElementById("left");
	var right=document.getElementById("right");

   	function animate (dd){
   	content.style.left = parseInt(content.style.left) + dd + "px";
   
   if(content.style.left > -270){
   		content.style.left = -810 + 'px';
   	}
   
   if(content.style.left < -810){
   		content.style.left = -270 + 'px';
   	}
   }
   
   	right.onclick = function(){
   	
   	animate(-270);
   }
	left.onclick = function () {
	animate(270);
}


