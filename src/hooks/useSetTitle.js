import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Hairbox Best Premium Men's Salon`
    }, [title])
}

export default useSetTitle