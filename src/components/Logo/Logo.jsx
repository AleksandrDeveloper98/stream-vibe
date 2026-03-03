import getPath from "@/utils/getPath"
import Link from "../Link"
import "./Logo.scss"
import classNames from "classnames"

const Logo = (props) => {
  const { className, loading = "lazy" } = props
  const title = "Home"

  return (
    <Link
      href="/"
      className={classNames(className, "logo")}
      title={title}
      aria-label={title}
    >
      <img
        alt=""
        src={getPath("/logo.svg")}
        height={60}
        width={200}
        className="logo__image"
        loading={loading}
      />
    </Link>
  )
}

export default Logo
