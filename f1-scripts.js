let resultsContainer = document.getElementById("results");

fetch("https://ergast.com/api/f1/current/last/results.json")
    .then(function (response) {
        return response.json();
    })

    .then(function (json) {
        let raceResults = json.MRData.RaceTable.Races[0].Results;

        raceResults.forEach(function (result) {
            let position = result.position;
            let driver = result.Driver.givenName + " " + result.Driver.familyName;
            let time = result.Time.time;

            let card = document.createElement("div");
            card.className = "race-card";
            card.innerHTML = `
                <div>
                    <p>Position: ${position}</p>
                    <p>Driver: ${driver}</p>
                    <p>Time: ${time}</p>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    })

