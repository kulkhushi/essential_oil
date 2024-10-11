import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Carrier_Oil} from '@/data.js'


const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Carrier Oil",
    url: "", 
  }
  ]

const CarrierOilPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="carrier.jpg" pageTitle="Carrier Oil" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Carrier_Oil}/>
    </>  )
}

export default CarrierOilPage