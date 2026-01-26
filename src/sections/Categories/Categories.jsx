import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import "./Categories.scss"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import categoriesItems from "./CategoryItems"

const Categories = () => {
  

  const sliderNavigationId = 'categories-slider-navigation'

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={
        <SliderNavigation 
          mode='tile'
          id={sliderNavigationId}
        />
      }
      isActionsHiddenOnMobile
    >
      <Slider
      navigationTargetElementId={sliderNavigationId}
      isBeyondTheViewportOnMobileS
      >
        {categoriesItems.map((categoryItem, index) => (
          <CategoryCard {...categoryItem} key={index} />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories
