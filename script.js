function requestJSON(nama = "") {
	fetch("https://swapi.co/api/people/?format=json&page=1")
		.then(Response => {
			return Response.json();
		})
		.then(data => {
			var arrayJSON = data.results;
			console.log(arrayJSON);

			var konten = "";
		});
}
