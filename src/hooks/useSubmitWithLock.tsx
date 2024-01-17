import { useLockFn } from 'ahooks'

export const useSubmitWithLock = () => {
  const submitWithLock = useLockFn(async (ownApi: () => Promise<string>) => {
    return await ownApi()
  })

  return submitWithLock
}
