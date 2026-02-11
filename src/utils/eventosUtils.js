import { eventos } from "../data/eventosData";

function getPentecostes(ano) {
  const pascoa = getPascoa(ano);
  const pentecostes = new Date(pascoa);
  pentecostes.setDate(pascoa.getDate() + 49);
  return pentecostes;
}

// Cálculo da Páscoa (algoritmo válido universal)
function getPascoa(ano) {
  const f = Math.floor;
  const G = ano % 19;
  const C = f(ano / 100);
  const H =
    (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
  const I =
    H -
    f(H / 28) *
      (1 -
        f(29 / (H + 1)) *
          f((21 - G) / 11));
  const J =
    (ano +
      f(ano / 4) +
      I +
      2 -
      C +
      f(C / 4)) %
    7;
  const L = I - J;
  const mes = 3 + f((L + 40) / 44);
  const dia = L + 28 - 31 * f(mes / 4);
  return new Date(ano, mes - 1, dia);
}

function getPrimeiraSexta(ano, mes) {
  const data = new Date(ano, mes, 1);
  while (data.getDay() !== 5) {
    data.setDate(data.getDate() + 1);
  }
  return data;
}

export function getProximosEventos() {
  const hoje = new Date();
  const ano = hoje.getFullYear();

  const eventosProcessados = eventos.map((evento) => {
    let dataEvento;

    if (evento.tipo === "anual") {
      dataEvento = new Date(ano, evento.mes - 1, evento.dia);

      if (dataEvento < hoje) {
        dataEvento = new Date(ano + 1, evento.mes - 1, evento.dia);
      }
    }

    if (evento.tipo === "pentecostes") {
      dataEvento = getPentecostes(ano);
      if (dataEvento < hoje) {
        dataEvento = getPentecostes(ano + 1);
      }
    }

    if (evento.tipo === "primeira-sexta") {
      dataEvento = getPrimeiraSexta(ano, hoje.getMonth());
      if (dataEvento < hoje) {
        dataEvento = getPrimeiraSexta(ano, hoje.getMonth() + 1);
      }
    }

    return {
      ...evento,
      dataCalculada: dataEvento,
    };
  });

  return eventosProcessados
    .filter((e) => e.dataCalculada)
    .sort((a, b) => a.dataCalculada - b.dataCalculada);
}
