import classNames from "classnames"
import "./Socials.scss"
import Button from "../Button"

const Socials = (props) => {
  const { className, links = [] } = props
  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ label, iconName }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              href="/"
              mode="black-10"
              target="_blank"
              label={label}
              isLabelhidden
              iconName={iconName}
              hasFillIcon
              aria-label={label}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
