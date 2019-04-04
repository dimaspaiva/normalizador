const fs = require("fs");

const normalizar = (column, title) => {
  const tipo = [];
  if (title) {
    column.shift();
  }

  console.time();
  for (i in column) {
    /*/ 
     *   Variável para verificar existência de um tipo,
     *  0 = tipo inexistente
     *  1 = tipo existente
    /*/
    let flag = 0;

    /*/ Se for o primeiro adiciona a array tipo /*/
    if (i === "0") {
      tipo.push(column[i]);
      column[i] = tipo.length;
    } else {
      /*/ Se não for o primeiro procura na array tipo /*/
      for (j in tipo) {
        if (column[i] === tipo[j]) {
          column[i] = parseInt(j);
          flag = 1;
          break;
        }
      }

      /*/ Se não for encontrado na array tipo adiciona na array /*/
      if (flag === 0) {
        tipo.push(column[i]);
        column[i] = tipo.length;
      }
    }
  }
  console.timeEnd();
  console.log(tipo);
  console.log(tipo.length);
  console.log(column);
};

// console.time();
const data = fs.readFileSync("./base2.csv", "UTF-8").split("\r\n");
// console.timeEnd();

const columns = [];

for (i in data) {
  const row = data[i].split(",");
  if (i === "0") {
    for (j in row) {
      columns.push([row[j]]);
    }
  } else {
    for (j in row) {
      columns[j].push(row[j]);
    }
  }
}

normalizar(columns[10], true);
