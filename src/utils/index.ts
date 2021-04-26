export type cancelFn = (msg?: any) => void
export type DelayObj = ReturnType<typeof getDelay>

export const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const getDelay = () => {
  let cancel = null as null | cancelFn
  const delay = (ms: number) =>
    new Promise<cancelFn>((resolve, reject) => {
      try {
        cancel = (msg) => {
          console.log(msg)
          throw new Error('cancel delay Promise')
        }
        setTimeout(() => resolve(cancel!), ms)
      } catch (err) {
        console.log('promise cancel')
        reject(err)
      }
    })

  return {
    cancel,
    delay,
  }
}
