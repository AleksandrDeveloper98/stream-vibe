const BASE = '/stream-vibe'

export default function Link({ href, className, children, ...props }) {

  const fullHref = href.startsWith('http') 
                  ? href 
                  : BASE + (href.startsWith('/') ? href : '/' + href)
                  
  return (
    <a href={fullHref} className={className} {...props}>
      {children}
    </a>
  )
}