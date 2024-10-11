
import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Absolute_Oil} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Absolute Oil",
    url: "", 
  }
  ]

const Absolute_oilPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="absolute.jpg" pageTitle="Absolute Oil" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Absolute_Oil}/>
    </>  )
}

export default Absolute_oilPage