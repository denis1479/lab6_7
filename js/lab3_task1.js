function addCountry() {
    const input = document.getElementById("countryInput");
    const output = document.getElementById("countriesOutput");

    const country = input.value.trim();
    if (country === "") return;

    const allowed = [
        "Україна", "Польща", "Німеччина", "Франція", "Іспанія", "Італія", 
        "США", "Канада", "Туреччина", "Єгипет", "Греція", "Чехія", 
        "Угорщина", "Португалія", "Хорватія", "Болгарія", "Грузія", "Таїланд"
    ];

    const found = allowed.find(c => c.toLowerCase() === country.toLowerCase());

    if (!found) {
        return;
    }

    if (output.textContent.toLowerCase().includes(country.toLowerCase())) {
        return;
    }

    const text = output.textContent;
    output.textContent = text ? text + ", " + found : found;
    if (error) error.textContent = "";
    input.value = "";
}

function initCountryInput() {
    document.getElementById("countryInput")
            .addEventListener("keydown", function(e) {
                if (e.key === "Enter") {
                    addCountry();
                }
            });
}

document.addEventListener("DOMContentLoaded", initCountryInput)