/**
 * Retorna quantos anos a Salmos está no mercado,
 * atualizando automaticamente a cada virada de ano.
 */
const FOUNDED = 2009

export const yearsActive = new Date().getFullYear() - FOUNDED

// Strings prontas para uso nos componentes
export const YEARS_LABEL  = `+${yearsActive} Anos`          // "+17 Anos"
export const YEARS_MARKET = `Mais de ${yearsActive} anos`   // "Mais de 17 anos"
export const FOUNDED_YEAR = String(FOUNDED)                  // "2009"
export const YEARS_ONLY = `${yearsActive} anos`