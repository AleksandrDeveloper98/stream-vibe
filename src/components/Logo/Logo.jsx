import "./Logo.scss"
import classNames from "classnames"

const Logo = (props) => {
  const { className, loading = "lazy" } = props
  const title = "Home"

  return (
    <a
      href="/"
      className={classNames(className, "logo")}
      title={title}
      aria-label={title}
    >
      <img
        alt=""
        src="/icons/logo.svg"
        height={60}
        width={200}
        className="logo__image"
        loading={loading}
      />
    </a>
  )
}

export default Logo
