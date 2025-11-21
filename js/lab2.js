var arrConcerts = [];

arrConcerts[0] = {
    Resp: "Океан Ельзи",
    Data: "2025-11-26",
    Mail: "Палац Спорту, Київ"
};

arrConcerts[1] = {
    Resp: "Imagine Dragons",
    Data: "2025-11-21",
    Mail: ""
};

arrConcerts[2] = {
    Resp: "Бумбокс",
    Data: "2025-12-05",
    Mail: "НСК Олімпійський"
};

arrConcerts[3] = {
    Resp: "The Hardkiss",
    Data: "2025-11-30",
    Mail: "Стадіон Львів Арена"
};

arrConcerts[4] = {
    Resp: "Scorpions",
    Data: "2025-12-10",
    Mail: "Клуб Stereo Plaza"
};

arrConcerts[5] = {
    Resp: "MONATIK",
    Data: "2025-11-27",
    Mail: ""
};

arrConcerts[6] = {
    Resp: "Дзідзьо",
    Data: "2025-11-25",
    Mail: "Літня естрада, Одеса"
};

arrConcerts[7] = {
    Resp: "Плач Єремії",
    Data: "2025-11-26",
    Mail: "Парк «Шевченка», Чернівці"
};

arrConcerts[8] = {
    Resp: "Океан Ельзи",
    Data: "2025-11-19",
    Mail: "Палац Спорту, Київ"
};

function daysToConcert(concertDateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const concertDate = new Date(concertDateStr);
    concertDate.setHours(0, 0, 0, 0);

    const diffTime = concertDate - today;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function makeConcertRow(concert) {
    const days = daysToConcert(concert.Data);
    const venue = concert.Mail.trim();

    let result = `<div class="concert-item" style="padding:15px; margin:15px 0; border-radius:10px; border:2px solid; font-family:Arial,sans-serif; background-color:#f8f9fa;`;

    if (days === 0) {
        result += `background-color:#d4edda; border-color:#28a745;">
            <h3 style="color:#155724; margin:0 0 10px 0;">${concert.Resp}</h3>
            <p><strong>Дата:</strong> ${concert.Data}</p>
            <p><strong>Місце:</strong> ${venue || "<em>невідомо</em>"}</p>
            <div style="margin-top:10px; padding:8px; background:#28a745; color:white; border-radius:5px; font-weight:bold;">
                Сьогодні йде концерт!
            </div>`;
    }
    else if (days === 5) {
        result += `background-color:#fff3cd; border-color:#ffc107;">
            <h3 style="color:#856404; margin:0 0 10px 0;">${concert.Resp}</h3>
            <p><strong>Дата:</strong> ${concert.Data}</p>
            <p><strong>Місце:</strong> ${venue || "<em>невідомо</em>"}</p>
            <div style="margin-top:10px; padding:8px; background:#ffc107; color:#856404; border-radius:5px; font-weight:bold;">
                Сьогодні останній термін придбання квитка!
            </div>`;
    }
    else if (days < 0) {
        result += `background-color:#d1ecf1; border-color:#17a2b8;">
            <h3 style="color:#0c5460; margin:0 0 10px 0;">${concert.Resp}</h3>
            <p><strong>Дата:</strong> ${concert.Data}</p>
            <p><strong>Місце:</strong> ${venue || "<em>невідомо</em>"}</p>
            <div style="margin-top:10px; padding:8px; background:#17a2b8; color:white; border-radius:5px; font-weight:bold;">
                Концерт уже відбувся
            </div>`;
    }
    else {
        result += `background-color:#e8daef; border-color:#6f42c1;">
            <h3 style="color:#452475; margin:0 0 10px 0;">${concert.Resp}</h3>
            <p><strong>Дата:</strong> ${concert.Data}</p>
            <p><strong>Місце:</strong> ${venue || "<em>невідомо</em>"}</p>
            <div style="margin-top:10px; padding:8px; background:#6f42c1; color:white; border-radius:5px; font-weight:bold;">
                Залишилось ${days} ${days === 1 ? "день" : days < 5 ? "дні" : "днів"}
            </div>`;
    }

    if (!venue) {
        result += `<div style="margin-top:10px; padding:8px; background:#f8d7da; color:#721c24; border-radius:5px; font-weight:bold; border:1px solid #f5c6cb;">
                Невідома адреса проведення концерту
            </div>`;
    }

    result += `</div>`;
    return result;
}

function showConcerts() {
    let output = "";

    arrConcerts.forEach(function(concert) {
        output = output + makeConcertRow(concert);
    });

    document.getElementById("concerts").innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showConcerts)