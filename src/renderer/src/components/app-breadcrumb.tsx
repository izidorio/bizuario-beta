import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@renderer/components/ui/breadcrumb'

import { NavLink, useLocation } from 'react-router-dom'
import { items } from './_menu-items'
import { useEffect, useState } from 'react'

export function AppBreadcrumb() {
  const { pathname } = useLocation()
  const [current, setCurrent] = useState<{ title: string } | null>(null)
  const [parent, setParent] = useState<{ title: string } | null>(null)

  function findUrl(items, targetUrl) {
    for (const item of items) {
      setParent(null)

      if (item.path === targetUrl) {
        setCurrent(item)
        return item
      }
      if (item.subItems) {
        const found = findUrl(item.subItems, targetUrl)
        if (found) {
          setParent(item)
          setCurrent(found)
          return
        }
      }
    }
    return null
  }

  useEffect(() => {
    findUrl(items, pathname)
  }, [pathname])

  return (
    <Breadcrumb className="ml-1 select-none">
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:flex">
          <NavLink to="/">
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        {parent && (
          <>
            <BreadcrumbSeparator className="hidden md:flex" />
            <BreadcrumbItem className="hidden md:flex">
              <BreadcrumbPage>{parent.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        {current && (
          <>
            <BreadcrumbSeparator className="hidden md:flex" />
            <BreadcrumbItem>
              <BreadcrumbPage>{current.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
