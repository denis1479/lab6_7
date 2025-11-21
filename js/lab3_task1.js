function addCountry() {
    const input = document.getElementById("countryInput");
    const output = document.getElementById("countriesOutput");
    
    if (input.value.trim() === "") return;

    const country = input.value.trim();
    const current = output.textContent;

    output.textContent = current ? current + ", " + country : country;
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

document.addEventListener("DOMContentLoaded", initCountryInput())