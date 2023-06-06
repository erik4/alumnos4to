let tarea1 = [Proyecto, "entregarle (algo) a hector", 23 / 5 / 2023],
    tarea2 = [protocolo, "realizar algo a ramiro"],
    tarea3 = [],
    tarea4 = [];

let display = document.getElementById("");
let btAc = document.getElementById("Newpage");
btAc.addEventListener("click", () => {
    display.innerHTML = "text";
});
console.log("anda");

const { MongoClient } = require("mongodb");

//conecion de emi
const uri = "mongodb://localhost:27017"; 
const dbName = "Base de dato de emi "; 


async function conectar() {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Conexión exitosa a MongoDB");

        //devolucion de datos o info
        return client.db(dbName);
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        throw error;
    }
}

