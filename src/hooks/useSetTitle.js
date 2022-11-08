import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Online Haircut Service`
    }, [title])
}

export default useSetTitle