$(document).ready(function(){
	menuFunctionality();
	initMap();
});

function calcularpm() {
	var diametro = $("#diametroa").val();
	var vc = $("#inputvc").val();

	var res = (1000 * vc) / (3.1416 * diametro);

	$("#resultadoa").empty().append("Resultado = " + res.toFixed(2) + " revoluciones por minuto");
}

function calculavc() {
	var diametrob = $("#diametrob").val();
	var rpm = $("#inputrpm").val();

	var resb = (3.1416 * diametrob * rpm) / 1000;
	var resb2 = (3.1416 * diametrob * rpm) / 10 / 2.54;

	$("#resultadob").empty().append("Resultado = " + resb.toFixed(2) + " metros/minuto");
	$("#resultadob").append(" = " + resb2.toFixed(2) + " pulgadas/minuto");
}

function calculatm() {
	var distancia = $("#inputc1").val();
	var vf = $("#inputc2").val();

	var resc = (distancia/vf);
	$("#resultadoc").empty().append("Resultado = " + resc.toFixed(2) + " minutos");
}

function calculavr() {
	var ae = $("#inputd1").val();
	var ap = $("#inputd2").val();
	var vf = $("#inputd3").val();

	var resd = ae * ap * vf;
	var resd2 = resd * 61023.7;
	$("#resultadod").empty().append("Resultado = " + resd.toFixed(2) + " m^3/min");
	$("#resultadod").append(" = " + resd2 + " pulgadas^3/min");
}

function rpm() {
	$("#rpm").show();
	$("#vc").hide();
	$("#tm").hide();
	$("#vr").hide();
}



function vc() {
	$("#vc").show();
	$("#rpm").hide();
	$("#tm").hide();
	$("#vr").hide();
}

function tm() {
	$("#vc").hide();
	$("#rpm").hide();
	$("#tm").show();
	$("#vr").hide();
}

function vr() {
	$("#vc").hide();
	$("#rpm").hide();
	$("#tm").hide();
	$("#vr").show();
}

function menuFunctionality(){
    $("#navprincipal > li").on("click",function(){
        $(".selected").removeClass("selected");
        $(".active").removeClass("active");
        var $currentSelection = $(".currentSelection");
        $currentSelection.removeClass("currentSelection");
        $currentSelection.addClass("hiddenSection");

        var currentSection = $(this).attr("class");
        $("#" + currentSection).addClass("currentSelection").removeClass("hiddenSection");
        $(this).addClass("selected");
        $(this).addClass("active");
    });
}

function initMap() {
        var monterrey = {lat: 25.686613, lng: -100.316116};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: monterrey
        });
        return map;
}

function graficaFabricacion() {
	map = initMap();
	var Fabricacion = [
	{
		nombre: "MIMSA",
		direccion: "Carretera Miguel Aleman, Bodega 8 y 5, CP 66633 Apodaca, N.L.",
		telefono: '01 81 2087 5037',
		pagina: 'http://www.manufacturasintegrales.com/',
		lat: 25.740478,
		lng: -100.207292
	},
	{
		nombre: "Efica Ingeniería",
		direccion: "Santiago Tapia Oriente 1322 Poniente, Centro, 64000 Monterrey, N.L.",
		telefono: '01 81 8372 6541',
		pagina: 'https://www.eficaingenieria.com/',
		lat: 25.680832,
		lng: -100.325665
	},
	{
		nombre: "MYDSA Procesos",
		direccion: "Dirección: Arteaga No. 2111 Oriente, Col. Obrera,, Monterrey, N.L. 64010",
		telefono: '01 81 8355 0967',
		pagina: 'http://www.mydsaprocesos.com/',
		lat: 25.681953,
		lng: -100.293930
	},
	{
		nombre: "Metalizados y Maquinados de México S.A. de C.V.",
		direccion: "Joaquín G. Leal Nte. No. 646, Zona Centro, Monterrey, N.L. 64000",
		telefono: '01 81 8374 1541',
		pagina: 'http://www.mymmsa.com.mx/',
		lat: 25.659439,
		lng: -100.284272
	}
	];
	var marker = [];
	for(var i = 0; i < Fabricacion.length; i++) {
		marker[i] = new google.maps.Marker({
                    position : new google.maps.LatLng(Fabricacion[i].lat, Fabricacion[i].lng),
                    map: map
		});

		google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
                    return function(){
                    	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
                        empresa = Fabricacion[i];
                        var infoEmpresa = getInfoEmpresa(empresa);
                        $("#modalText").empty().append(infoEmpresa);
                        $("#headerModal").empty().append(empresa.nombre);
                        var modal = document.getElementById('myModal');
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];
                        modal.style.display = "block";
                        span.onclick = function(){
                            modal.style.display = "none";
                        }
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        } 
                    }
         })(marker[i], i));
	}
}

function graficaMaquinaria() {
	map = initMap();
	var Fabricacion = [
		{
			nombre: "Mazak",
			direccion: "Spectrum 100, Parque Industrial Finsa, CP 66600, Apodaca, N.L.",
			telefono: '01 81 8221 0910',
			pagina: 'https://www.mazakusa.com/es/technology-centers/mexico/',
			lat:25.789174,
			lng: -100.141772
		},	
		{
			nombre: "Hass",
			direccion: "Boulevard Aeropuerto 4033, Parque Industrial Finsa, CP 66600, Apodaca, N.L.",
			telefono: '01 81 8145 0473 ',
			pagina: 'http://www.haas.com.mx/index.html',
			lat:25.776907,
			lng: -100.142559,
		},	
		{
			nombre: "Famasa",
			direccion: "Calle Gonzalitos 523, Mitras Nte., 64320 Monterrey, N.L.",
			telefono: '01 81 8370 2192',
			pagina: 'http://www.famasa.com/',
			lat: 25.685344,
			lng: -100.342068
		},
		{
			nombre: "Viwa",
			direccion: "Camino a las Cañadas 900-6C Bosque, Bosques de San Isidro, 45133 Zapopan",
			telefono: '01 33 3633 4139',
			pagina: 'http://www.viwacnc.com/',
			lat: 20.748248,
			lng: -103.385162
		},	
		{	
			nombre: "DMG MORI",
			direccion: "Calle Acceso III No 14 Bodega 11, Benito Juárez, 76089 Santiago de Querétaro, Querétaro",
			telefono: '01 442 209 5072',
			pagina: 'https://mx.dmgmori.com/',
			lat: 20.630544,
			lng: -100.435215,
		}
	];
	var marker = [];
	for(var i = 0; i < Fabricacion.length; i++) {
		marker[i] = new google.maps.Marker({
                    position : new google.maps.LatLng(Fabricacion[i].lat, Fabricacion[i].lng),
                    map: map
		});

		google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
                    return function(){
                    	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
                        empresa = Fabricacion[i];
                        var infoEmpresa = getInfoEmpresa(empresa);
                        $("#modalText").empty().append(infoEmpresa);
                        $("#headerModal").empty().append(empresa.nombre);
                        var modal = document.getElementById('myModal');
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];
                        modal.style.display = "block";
                        span.onclick = function(){
                            modal.style.display = "none";
                        }
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        } 
                    }
         })(marker[i], i));
	}
}



function graficaHerramientas() {
	map = initMap();
	var Herramientas = [
		{
			nombre: "Herramental Monterrey",
			direccion: "Prol. Madero 3852, Fierro, 64590 Monterrey, N.L.",
			telefono: '01 81 8126 5150',
			pagina: 'http://www.herramental.com.mx',
			lat: 25.683573,
			lng: -100.275230
		},
		{
			nombre: "Travers Tools",
			direccion: "Av. Alfonso Reyes No. 2823, Col. Del Prado, Monterrey, N.L. 64410",
			telefono: '01 81 83 80 66 10',
			pagina: '01 81 83 80 66 10',
			lat: 25.703281,
			lng: -100.315383
		},	
		{
			nombre: "TecnoTroqueles",
			direccion: "64500, Dolores Ladrón de Guevara 402, Del Nte., Monterrey, N.L.",
			telefono: '01 81 8331 2441',
			pagina: 'http://www.tecnotroqueles.com/espanol/index.html',
			lat:25.712386,
			lng: -100.306528
		}
	];
	var marker = [];
	for(var i = 0; i < Herramientas.length; i++) {
		marker[i] = new google.maps.Marker({
                    position : new google.maps.LatLng(Herramientas[i].lat, Herramientas[i].lng),
                    map: map
		});

		google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
                    return function(){
                    	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
                        empresa = Herramientas[i];
                        var infoEmpresa = getInfoEmpresa(empresa);
                        $("#modalText").empty().append(infoEmpresa);
                        $("#headerModal").empty().append(empresa.nombre);
                        var modal = document.getElementById('myModal');
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];
                        modal.style.display = "block";
                        span.onclick = function(){
                            modal.style.display = "none";
                        }
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        } 
                    }
         })(marker[i], i));
	}
}

function graficaMetodos() {

	var mexico = {lat: 22.686613, lng: -100.316116};
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: mexico
        });
	var Metodos = [
	{
		nombre: "Alta Tecnologia En Mecanizado S.A. de C.V.",
		direccion: "Dr. Mora Ote., México, Del Nte., 64500 Monterrey, N.L.",
		telefono: '01 81 8331 1040',
		pagina: 'http://www.atm-mx.com/',
		lat: 25.705208,
		lng: -100.309080
	},
	{
		nombre: "FamaTools.",
		direccion: "Calle C No. 18, Col. Parque Industrial Puebla 2000, Puebla, Pue 72225",
		telefono: '(222) 28 28 893',
		pagina: 'https://www.famatools.com',
		lat: 19.074235,
		lng: -98.153111
	},
	{
		nombre: "Hainbuch Mexico S. de R. L. de C. V.",
		direccion: "38000, Blvrd Adolfo López Mateos 901, Col. Centro, Celaya, Gto.",
		telefono: '01 461 216 4064',
		pagina: 'http://www.hainbuch.es/es/home/hainbuch-mexico.html',
		lat: 20.519993,
		lng: -100.823906
	},
	{
		nombre: "Roehm Products México S. de R.L. de C.V.",
		direccion: "Emilio Garza Melendez 6606, Campestre Mederos, 64970 Monterrey, N.L.",
		telefono: '01 81 9627 0686',
		pagina: 'http://www.rohm-products.com/index.php?id=home0&L=1',
		lat: 25.598005,
		lng: -100.264201
	}
	];
	var marker = [];
	for(var i = 0; i < Metodos.length; i++) {
		marker[i] = new google.maps.Marker({
                    position : new google.maps.LatLng(Metodos[i].lat, Metodos[i].lng),
                    map: map
		});

		google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
                    return function(){
                    	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
                        empresa = Metodos[i];
                        var infoEmpresa = getInfoEmpresa(empresa);
                        $("#modalText").empty().append(infoEmpresa);
                        $("#headerModal").empty().append(empresa.nombre);
                        var modal = document.getElementById('myModal');
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];
                        modal.style.display = "block";
                        span.onclick = function(){
                            modal.style.display = "none";
                        }
                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        } 
                    }
         })(marker[i], i));
	}
}

function getInfoEmpresa(empresa) {
	var infoEmpresa =
	'<div class="center">' +
	'<p>Direccion: ' + empresa.direccion + '</p>' + 
	'<p>Teléfono: ' + empresa.telefono + '</p>' + 
	'<p>Página: <a target="_blank" href="' + empresa.pagina + '"> ' + empresa.pagina + '</a></p>' +
	'</div>'
	return infoEmpresa;
}