export const mockApiRequest = (values: any) => {
  console.log(values)
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('god job')
      // reject('network error')
    }, 2000)
  })
}
