"use client"

import { type PropsWithChildren, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import cn from "classnames"

export default function NavLink(props: PropsWithChildren<{ href: string }>) {
  const currentPath = usePathname()

  const active = useMemo(() => currentPath === props.href, [currentPath])

  return (
    <Link href={props.href} className={cn({ active })}>
      {props.children}
    </Link>
  )
}
