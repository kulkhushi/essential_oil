import Breadcrumbs from "@/components/Breadcrumbs"
import MainTabs from "@/components/Layout/MainTabs"
import { About_Us } from "@/data"

const PageBreadcrumbs = [
{
  label: "Home",
  url: "/", 
},
{
  label: "About Us",
  url: "", 
}
]


const AboutUs = () => {
  return (
    <div>     
        <Breadcrumbs imgSrc="about_usInside.jpg" pageTitle="About Us" BreadcrumbsPage={PageBreadcrumbs}/>
        <MainTabs tabsContent={About_Us}/>
    </div>
  )
}

export default AboutUs