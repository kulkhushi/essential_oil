
import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Aromatic_Chemicals} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Aromatic Chemicals",
    url: "", 
  }
  ]

const AromaticChemicalsPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="aromatic.jpg" pageTitle="Aromatic Chemicals" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Aromatic_Chemicals}/>
    </>  )
}

export default AromaticChemicalsPage