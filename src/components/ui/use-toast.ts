export interface UseToastReturn {
  show: (message: string, title?: string) => void
}

export function useToast(): UseToastReturn {
  const show = (message: string, _title?: string) => {
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(message)
    }
  }
  return { show }
}

export default useToast
