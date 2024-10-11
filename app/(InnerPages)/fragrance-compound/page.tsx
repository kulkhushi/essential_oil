import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Fragrance_Compound} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Fragrance Compound",
    url: "", 
  }
  ]

const FragranceCompoundPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="fragrance.jpg" pageTitle="Fragrance Compound" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Fragrance_Compound}/>
    </>  )
}

export default FragranceCompoundPage