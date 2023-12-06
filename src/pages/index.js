import Contact from "@/components/Pages/Contat"
import AppDownload from "@/components/Pages/AppDownload"
import CountInfo from "@/components/Pages/CountInfo"
import DocumentClints from "@/components/Pages/DocumentClints"
import ServiceApp from "@/components/Pages/ServiceApp"
import Home from "@/components/Pages/Home"

import { WaveSmall } from "@/utils/Wave"

export default function Index() {
    return (
      <>
        <Home id={"home"}/>
        <WaveSmall/>
        <ServiceApp id={"serviceApp"}/>
        <DocumentClints id={"documentsClints"}/>
        <CountInfo id={"countInfor"}/>
        <AppDownload id={"appdownload"}/>
        <WaveSmall/>
        <Contact id={"contact"}/>
      </>
    )
  }