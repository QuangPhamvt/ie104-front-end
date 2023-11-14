export const isExpired = (exp) => {
  if (!exp) return false
  return exp < Date.now() + 1 / 1000
}
