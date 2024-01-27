import { TCarro, frota } from "./frota"

//Para voltar uma marca opcional podemos apenas colocar um ? na frente, assim como em marca.
function buscarCarrosPorMarca(frota: TCarro[], marca?: string): TCarro[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro: TCarro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota));
