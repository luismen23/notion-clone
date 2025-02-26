"use client"

import { doc } from "firebase/firestore"
import Link from "next/link"
import React from "react"
import { useDocumentData } from "react-firebase-hooks/firestore"
import { db } from "../../firebase"
import { usePathname } from "next/navigation"

function SidebarOption({ href, id }: { href: string; id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id))
  const pathname = usePathname()
  const isActive = href.includes(pathname) && pathname !== "/"

  if (!data) return null

  return (
    <Link
      href={href}
      className={` border p-2 rounded-md ${isActive ? "bg-gray-300 font-bold text-blue-600 border-black" : "border-gray-400 text-gray-700"}`}
    >
      <p className='truncate'>{data.title}</p>
      {/* truncate recorta el title si es muy largo */}
    </Link>
  )
}

export default SidebarOption
