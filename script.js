function requestJSON(nama = "") {
	fetch("https://swapi.co/api/planets/")
		.then(resnponse => {
			return resnponse.json();
		})
		.then(data => {
			var arrayJSON = data.results;
			console.log(arrayJSON);
			var konten =
				'<thead><tr class="bg-warning"><th scope="col">Name</th><th scope="col">Rotation Period</th><th scope="col">Orbital Period</th><th scope="col">Diameter</th><th scope="col">Climate</th><th scope="col">Gravity</th><th scope="col">Terrain</th></tr></thead>';
			for (var i = 0; i < arrayJSON.length; i++) {
				console.log(i);
				console.log(arrayJSON[i].name);
				if (nama !== "") {
					if (arrayJSON[i].name.includes(nama)) {
						konten +=
							'<tr class="table-warning"><td>' +
							arrayJSON[i].name +
							"</td>" +
							"<td>" +
							arrayJSON[i].rotation_period +
							"</td>" +
							"<td>" +
							arrayJSON[i].orbital_period +
							"</td>" +
							"<td>" +
							arrayJSON[i].diameter +
							"</td>" +
							"<td>" +
							arrayJSON[i].climate +
							"</td>" +
							"<td>" +
							arrayJSON[i].gravity +
							"</td>" +
							"<td>" +
							arrayJSON[i].terrain +
							"</td>" +
							"</tr>";
					}
				} else {
					konten +=
						'<tr class="table-warning"><td>' +
						arrayJSON[i].name +
						"</td>" +
						"<td>" +
						arrayJSON[i].rotation_period +
						"</td>" +
						"<td>" +
						arrayJSON[i].orbital_period +
						"</td>" +
						"<td>" +
						arrayJSON[i].diameter +
						"</td>" +
						"<td>" +
						arrayJSON[i].climate +
						"</td>" +
						"<td>" +
						arrayJSON[i].gravity +
						"</td>" +
						"<td>" +
						arrayJSON[i].terrain +
						"</td>" +
						"</tr>";
				}
			}

			console.log(konten);

			document.querySelector("#data").innerHTML = konten;
		});
}

requestJSON("");

document.querySelector("#btnCari").addEventListener("click", function() {
	var nama = document.querySelector("#inputNama").value;
	requestJSON(nama);
	console.log(nama);
});
