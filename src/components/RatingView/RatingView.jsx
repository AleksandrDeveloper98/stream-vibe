import getPath from "@/utils/getPath"
import "./RatingView.scss"

const RatingView = (props) => {
  const { value = 5, label } = props

  const ariaLabel = `Rating ${value} stars`

  return (
    <div
      className="rating-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        "--ratingViewValue": value,
      }}
    >
      <div className="rating-view__stars">
        <img
          src={getPath("/rating/stars-unfilled.svg")}
          width={98}
          height={18}
          alt=""
          className="rating-view__stars-unfilled"
        />
        <img
          src={getPath("/rating/stars-filled.svg")}
          width={98}
          height={18}
          alt=""
          className="rating-view__stars-filled"
        />
      </div>
      {label && <div className="rating-view__label">{label}</div>}
    </div>
  )
}

export default RatingView
