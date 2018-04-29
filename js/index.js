$(document).ready(function(){
	menuFunctionality();
	initMap();
});

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

function getInfoEmpresa(empresa) {
	var infoEmpresa =
	'<div class="center">' +
	'<p>Direccion: ' + empresa.direccion + '</p>' + 
	'<p>Teléfono: ' + empresa.telefono + '</p>' + 
	'<p>Página: <a target="_blank" href="' + empresa.pagina + '"> ' + empresa.pagina + '</a></p>' +
	'</div>'
	return infoEmpresa;
}


