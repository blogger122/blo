var imagenes=new Array( 
	
	['http://foto-erotica.es/fuegodevida/desktop/42.gif','http://www.lawebdelprogramador.com/cursos/'], 
	['http://foto-erotica.es/fuegodevida/desktop/11.gif','http://www.lawebdelprogramador.com/foros/'], 
	['http://foto-erotica.es/fuegodevida/desktop/72.gif','http://www.lawebdelprogramador.com/pdf/'], 
	['http://foto-erotica.es/fuegodevida/desktop/42.gif','http://www.lawebdelprogramador.com/utilidades/'] 

	); function rotarImagenes() { var index=Math.floor((Math.random()*imagenes.length));   document.getElementById("imagen").src=imagenes[index][0]; document.getElementById("link").href=imagenes[index][1]; }  onload=function() { setInterval(rotarImagenes,5000); }