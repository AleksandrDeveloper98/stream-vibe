import Seasons from "@/components/Seasons"
import MovieDetails from "@/sections/MovieDetails"
import ShowsBanner from "@/sections/ShowsBanner"

export const metadata = {
  title: "Shows",
}

export default function () {
  return (
    <>
      <ShowsBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}
