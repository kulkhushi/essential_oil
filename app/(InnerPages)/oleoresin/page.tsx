
import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Oleoresin} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Oleoresin",
    url: "", 
  }
  ]


const OleoresinPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="banner.jpg" pageTitle="Oleoresin" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Oleoresin}/>
    </>  )
}

export default OleoresinPage