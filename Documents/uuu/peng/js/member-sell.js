$(function(){
	var imgs = new Array(
		'img/boss-54F564DF-6CF1D5A354F564DF04010000476DCF7C.1.jpg',
		'img/22H.png',
		''
	)
	var texts = new Array(
		'<h1>范思哲拼色连衣裙</h1><h1>预售价</h1><h1>$673</h1>',
		'<h1>fdttttttts</h1><h1>fafafaf</h1><h1>fdafs</h1>',
		'<h1>fdttttttts</h1><h1>fafafddd</h1><h1>fdafs</h1>'
	)
	
	var i =0 ;
   
	$("#left").click(function(){
		
		i++
		if(i>imgs.length-1){
			i = 0;
		}
		$("#commodity-list").attr("src",imgs[i]);
		$(".commodity-title").html(texts[i]);
	})
	
	$("#right").tap(function(){
		i--
		if(i<0){
			i = imgs.length - 1
		}
		$("#commodity-list").attr("src",imgs[i]);
		$(".commodity-title").html(texts[i]);
	})
	
	$("#commodity-lists").swipeLeft(function(){
		i++
		if(i>imgs.length-1){
			i = 0;
		}
		$("#commodity-list").attr("src",imgs[i]);
		$(".commodity-title").html(texts[i]);
	})
	
	$("#commodity-list").swipeRight	(function(){
		i--
		if(i<0){
			i = imgs.length - 1
		}
		$("#commodity-list").attr("src",imgs[i]);
		$(".commodity-title").html(texts[i]);
	})
})
