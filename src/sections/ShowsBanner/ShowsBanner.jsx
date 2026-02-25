import MovieBannerCard from "@/components/MovieBannerCard"

const ShowsBanner = () => {
  const titleId = "shows-banner-title"
  return (
    <section className="container" aria-labelledby={titleId}>
      <MovieBannerCard
        title="Stranger Things"
        TitleTag="h1"
        titleId={titleId}
        isSmallPaddingY
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        imgSrc="/src/assets/images/movie-banner/3.jpg"
      />
    </section>
  )
}

export default ShowsBanner
