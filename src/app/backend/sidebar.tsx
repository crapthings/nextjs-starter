'use client'

import _ from 'lodash'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import features from '@/features'
import { featuresMap } from '@/stores/app'

export default function Sidebar () {
  const pathname = usePathname()

  const getActiveCls = (targetPath, currentPath) => classNames({
    'rounded-md bg-white shadow': targetPath === currentPath
  }, 'block p-4 py-2')

  return (
    <div className='h-full p-4 rounded-md bg-[#fafafa]'>
      {_.map(features, SidebarItem({ pathname, getActiveCls }))}
    </div>
  )
}

const SidebarItem = ({ pathname, getActiveCls }) => (feature, featureIdx) => {
  featuresMap.set(featureIdx, feature)

  return (
    <div key={featureIdx}>
      <Link href={feature.path} className={getActiveCls(feature.path, pathname)}>{feature.sidebarLabel || feature.label}</Link>
    </div>
  )
}
