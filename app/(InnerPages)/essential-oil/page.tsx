
import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Essential_Oil} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Essential Oil",
    url: "", 
  }
  ]

const EssentialOilPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="essinoil.jpg" pageTitle="Essential Oil" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Essential_Oil}/>
    </>  )
}

export default EssentialOilPage