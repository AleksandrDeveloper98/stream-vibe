const getPath = (path) => {
    const base = '/stream-vibe/'
    const cleanPath = path.startsWith('/') ? path : '/' + path
    return (base + cleanPath).replace(/\/+/g, '/')
}
export default getPath