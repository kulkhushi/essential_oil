
import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Floral_Water} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Floral Water",
    url: "", 
  }
  ]

const FloralWaterPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="floral.jpg" pageTitle="Floral Water" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Floral_Water}/>
    </>  )
}

export default FloralWaterPage