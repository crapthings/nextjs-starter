'use client'

import _ from 'lodash'
import Link from 'next/link'

import features from '@/features'
import { featuresMap } from '@/stores/app'

export default function Sidebar () {
  return (
    <div>
      {_.map(features, SidebarItem)}
    </div>
  )
}

function SidebarItem (feature, featureIdx) {
  featuresMap.set(featureIdx, feature.fields)

  return (
    <div key={featureIdx}>
      <Link href={feature.path}>{feature.label}</Link>
    </div>
  )
}
