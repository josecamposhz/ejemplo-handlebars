const fs = require("fs");

function obtenerTareas() {
    return JSON.parse(fs.readFileSync("./data/tareas.json", "utf8"));
}

function guardarTareas(tareas) {
    fs.writeFileSync("./data/tareas.json", JSON.stringify(tareas));
}

module.exports = {
    obtenerTareas,
    guardarTareas
}