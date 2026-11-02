import { useState, useEffect } from 'react'

const matchPath = (path, route) => {
    const pathParts =path.split('/')
    const routeParts = route.split('/')

    if (pathParts.length !== routeParts.length) {
        return null
    }

    const params = {}

    for (let i = 0; i < pathParts.length; i++) {
        if (routeParts[i].startsWith(':')) {
            const paramName = routeParts[i].slice(1)
            params[paramName] = pathParts[i]
        } else if (routeParts[i] !== pathParts[i]) {
            return null
        }
    }

    return params
}

export const useRoute = () => {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])

    return path
}

const Router = (props) => {
    const { routes } = props
    const path = useRoute()

   for (const [route, Page] of Object.entries(routes)) {
        if (route === '*') {
            continue
        }

        const params = matchPath(path, route)

        if (params) {
            return <Page params={ params } />
        }
    }

    const NotFoundPage = routes['*']
    return NotFoundPage ? <NotFoundPage /> : null
}

export default Router