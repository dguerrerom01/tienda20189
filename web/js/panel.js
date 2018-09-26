
var panel = ["panel top","panel bottom","panel left","panel right"];
var clase = ["caraPanel traseraPanel","caraPanel frontalPanel","caraPanel izquierdaPanel"];
var altura = 0;
var translate =0;
var ancho = 0;
var creaCara = function(panel,n){
    for (var i=0;i < clase.length;i++){ 
         window['cara'+ i] = document.createElement("div");
			if(clase[i]=="caraPanel frontalPanel"){
				var icono = document.createElement("div");
				icono.className="icon-menu";
				window['cara'+ i].appendChild(icono);
			}
			
			if(clase[i]=="caraPanel traseraPanel"){
				var menu = document.getElementsByClassName("menu");
				for(var j = 0;j < menu.length;j++){
					if(menu[j].parentNode==panel[n]){
						menu[j].style.width = panel[n].parentNode.offsetWidth+"px";
						
						if(menu[j].offsetHeight+"px") {
							altura=menu[j].offsetHeight+"px";
						}
						else if(menu[j].style.pixelHeight+"px"){
							altura=menu[j].style.pixelHeight+"px";
						}
						if( panel[n].parentNode.offsetWidth+"px") {
						ancho= panel[n].parentNode.offsetWidth+"px";
						}
						else if(panel[n].parentNode.style.pixelWidth+"px"){
							ancho=panel[n].parentNode.style.pixelWidth+"px";
						}
						window['cara'+ i].appendChild(menu[j]);
						
					}
						
				}
				
				var regex = /(\d+)/g;
				translate = ancho.match(regex);
				translate = (translate/10);
			}
		 
         window['cara'+ i].className = clase[i];
		 window['cara'+ i].style.height = altura;
		 
		 
		 if(clase[i]=="caraPanel traseraPanel"){
			 // Code for Chrome, Safari, Opera
			 window['cara'+ i].style.WebkitTransform = "rotateY(180deg) translateZ("+translate+"px)";
			 // Code for IE9
			 window['cara'+ i].style.msTransform = "rotateY(180deg) translateZ("+translate+"px)";
			 // Standard syntax
			 window['cara'+ i].style.transform = "rotateY(180deg) translateZ("+translate+"px)";
			 window['cara'+ i].style.width = ancho;
		 }
		 if(clase[i]=="caraPanel izquierdaPanel"){
			 // Code for Chrome, Safari, Opera
			 window['cara'+ i].style.WebkitTransform = "rotateY(-90deg) translateZ("+translate+"px)";
			 // Code for IE9
			 window['cara'+ i].style.msTransform = "rotateY(-90deg) translateZ("+translate+"px)";
			 // Standard syntax
			 window['cara'+ i].style.transform = "rotateY(-90deg) translateZ("+translate+"px)";
			 window['cara'+ i].style.width = translate*2+"px";
		 }
		 if(clase[i]=="caraPanel frontalPanel"){
			 // Code for Chrome, Safari, Opera
			 window['cara'+ i].style.WebkitTransform = "rotateY(0deg) translateZ("+translate+"px)";
			 // Code for IE9
			 window['cara'+ i].style.msTransform = "rotateY(0deg) translateZ("+translate+"px)";
			 // Standard syntax
			 window['cara'+ i].style.transform = "rotateY(0deg) translateZ("+translate+"px)";
			 window['cara'+ i].style.width = ancho;
		 }

         panel[n].appendChild(window['cara'+ i]);  
		 panel[n].style.height = altura;
		 panel[n].style.width = ancho;
		 //  \d indica que quieres que coja números
		//   /g indica que quieres buscar de manera global en todo el string.
		 var regex = /(\d+)/g;
		 var margen = altura.match(regex);
		 margen= margen-((margen*2)-60);
		 panel[n].style.marginTop = margen+"px";		 
    }
	
} 

	for (var i = 0; i<= panel.length; i++){
	  window['panel'+ i] = document.getElementsByClassName(panel[i]); 
		for (var j=0;j < window['panel'+ i].length;j++){
			creaCara( window['panel'+ i],j);
		}   
	}	
	window.onresize = function(){ location.reload(); }