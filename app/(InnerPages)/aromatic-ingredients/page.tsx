import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {AromaticIngredients} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Aromatic Ingredients",
    url: "", 
  }
  ]

const AromaticIngredientsPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="about_usInside.jpg" pageTitle="Aromatic Ingredients" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={AromaticIngredients}/>
    </>  )
}

export default AromaticIngredientsPage