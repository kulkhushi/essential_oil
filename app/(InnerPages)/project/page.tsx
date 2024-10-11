
import Breadcrumbs from '@/components/Breadcrumbs'
import MainTabs from '@/components/Layout/MainTabs'
import {Projects} from '@/data.js'

const PageBreadcrumbs = [
  {
    label: "Home",
    url: "/", 
  },
  {
    label: "Projects",
    url: "", 
  }
  ]

const ProjectsPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2500);
  })
  return (
    <>
    <Breadcrumbs imgSrc="Project_us.jpg" pageTitle="Projects" BreadcrumbsPage={PageBreadcrumbs}/>
    <MainTabs tabsContent={Projects}/>
    </>  )
}

export default ProjectsPage