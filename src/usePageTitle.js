import { useEffect } from 'react'

const DEFAULT = 'Saral Softworks — Simple technology for everyday life'

export default function usePageTitle(title = DEFAULT) {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = DEFAULT
    }
  }, [title])
}
