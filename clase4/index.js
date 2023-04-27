const fs = require("fs");

console.log("Inicio del programa");

const writeFecha = (nombreDelArchivo) => {
  try {
    const date= new Date().toLocaleString()
    // fs.writeFileSync(nobreDelArchivo + ".txt");
    fs.writeFileSync(`${nombreDelArchivo}.txt`, `${date}`);
    return "Archivo con fecha creado";
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

const readFecha = (nombreDelArchivo) => {
    try {
        if (!nombreDelArchivo) throw "Ruta undefined"
        return fs.readFileSync(`${nombreDelArchivo}.txt`, "utf-8");
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(readFecha("fecha"));
console.log(writeFecha("fecha"));
console.log(readFecha("fecha"));


console.log("Fin del programa");
 