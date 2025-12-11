import classNames from "classnames"
import "./Button.scss"
import Icon from "../Icon"

const Button = (props) => {
  const {
    label,
    isLabelhidden = false,
    className,
    type = "button",
    href,
    target,
    iconName,
    /**
     * "" (default)  | 'transparent' | black-10
     */
    mode = '',
    /**
     * "before" | 'after'
     */
    iconPosition = "before",
    hasFillIcon,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelhidden ? label : undefined
  const IconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon}/>
  )

  return (
    <Component
      title={title}
      aria-label={title}
      className={classNames(className, "button", {
        [`button--${mode}`] : mode,
      })}
      {...specificProps}
    >
      {iconPosition === "before" && IconComponent}
      {!isLabelhidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && IconComponent}
    </Component>
  )
}

export default Button
