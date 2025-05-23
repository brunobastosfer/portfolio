const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function HttpGet(url: string) {
  const response = await fetch(normalizarUrl(`${baseUrl}${url}`))
  return response.json()
}

function normalizarUrl(url: string) {
  const protocolo = url.split("://")[0]
  const restante = url.split("://")[1]
  return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`
}