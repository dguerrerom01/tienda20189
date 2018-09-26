//var panel contiene los nombres de la clase de los elementos que podemos encontrar en el html
var panel = ["panelEmilio topEmilio","panelEmilio bottomEmilio","panelEmilio leftEmilio","panelEmilio rightEmilio"];
//var clase le va a adjudicar a los div que se crearan la clase correspondiente al indice de este array
var clase = ["caraPanelEmilio frontalPanelEmilio","caraPanelEmilio traseraPanelEmilio","caraPanelEmilio izquierdaPanelEmilio"];


var creaCara = function(panel,n){
	// 4 cada cara tiene una clase diferente. vamos a crear tantas caras como numero de clases
    for (var i=0;i < clase.length;i++){
		// las almacenamos en otra variable dinamica llamada cara+i = un nuevo div
         window['cara'+ i] = document.createElement("div");
			//si la clase en la posicion i es la frontal añande el icono
			if(clase[i]=="caraPanelEmilio frontalPanelEmilio"){
				var icono = document.createElement("div");
				icono.className="icon-menuEmilio";
				window['cara'+ i].appendChild(icono);
			}
			// si es la trasera busca todos los menu que haya
			if(clase[i]=="caraPanelEmilio traseraPanelEmilio"){
				var menu = document.getElementsByClassName("menu");
				//por cada menu pregunta si el padre es el panel que ha llamado a crear cara
				for(var j = 0;j < menu.length;j++){
					//si el panel que ha llamado a crear caras es el padre del menu correspondiente al array de
					//menus que estamos recorriendo en la posicion j, agrega ese menu a esa cara trasera de ese panel
					if(menu[j].parentNode==panel[n]){
						window['cara'+ i].appendChild(menu[j]);
					}
				}

			}
		// 5 añade la clase de la var clase en la posicion i a la cara creada
         window['cara'+ i].className = clase[i];
		 // 6 añade la cara creada al panel
         panel[n].appendChild(window['cara'+ i]);
    }
}
//  1 por cada tipo de panel declarado en la var panel (linea 2) haremos un getElementClassName que nos devolvera un array con
//     todos los paneles de la clase var panel [i] ejemplo 0 "panel top"
	for (var i = 0; i<= panel.length; i++){
	  window['panel'+ i] = document.getElementsByClassName(panel[i]);
// 2 hemos recogido el array de paneles de la clase var panel [i]
//    en una variable dinamica.  window['panel'+ i]
		for (var j=0;j < window['panel'+ i].length;j++){
			// 3 llamamos a crearCara y le pasamos el array de paneles y el indice de los paneles encontrados con ese nombre de clase
			creaCara( window['panel'+ i],j);
		}
	}
