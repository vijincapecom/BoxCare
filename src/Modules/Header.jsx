"use client"

import { usePathname } from "next/navigation"
import HomeHeader from "./childComponent/HomeHeader"

const HeaderComponent = () => {
  const pathname = usePathname()
  const pathValue = pathname.startsWith("/") ? pathname.slice(1) : pathname
  return (
    <>
    <HomeHeader pathValue={pathname} pathDestructured={pathValue} />
    </>
  )
}

export default HeaderComponent
