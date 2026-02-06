import { Image } from "minista"
import "./MovieBannerCard.scss"
import Button from "../Button"

const MovieBannerCard = (props) => {
  const { title, description, imgSrc } = props
  return (
    <div className="movie-banner-card">
      <Image className="movie-banner-card__image" src={imgSrc} />
      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">{title}</h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <div className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play now"
          />
          <div className="movie-banner-card__actions">
            <Button mode='black-06' iconName="plus" label='Add to playList' isLabelhidden/>
            <Button mode='black-06' iconName="like" label='Like' isLabelhidden/>
            <Button mode='black-06' iconName="volume" label='Mute' isLabelhidden/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieBannerCard
