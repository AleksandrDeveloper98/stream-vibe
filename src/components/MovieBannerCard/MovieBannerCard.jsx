import { Image } from "minista"
import "./MovieBannerCard.scss"
import Button from "../Button"
import classNames from "classnames"

const MovieBannerCard = (props) => {
  const {
    title,
    description,
    imgSrc,
    TitleTag = "h2",
    titleId,
    isSmallPaddingY = false,
  } = props
  return (
    <div className="movie-banner-card">
      <Image className="movie-banner-card__image" src={imgSrc} />
      <div
        className={classNames("movie-banner-card__inner", {
          "movie-banner-card__inner--small-padding-y": isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag className="movie-banner-card__title h3" id={titleId}>
            {title}
          </TitleTag>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <div className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play now"
            hasFillIcon
          />
          <div className="movie-banner-card__actions">
            <Button
              mode="black-06"
              iconName="plus"
              label="Add to playList"
              isLabelhidden
            />
            <Button
              mode="black-06"
              iconName="like"
              label="Like"
              isLabelhidden
            />
            <Button
              mode="black-06"
              iconName="volume"
              label="Mute"
              isLabelhidden
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieBannerCard
