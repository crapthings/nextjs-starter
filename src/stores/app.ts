import _ from 'lodash'
import { create } from 'zustand'

export const useAppState = create(() => ({
  title: 'Next.js Starter'
}))

export const featuresMap = new Map

export const getFeature = (collectionName) => featuresMap.get(collectionName)

export const getColumnDefs = (collectionName) => {
  return featuresMap.get(collectionName).fields
}

export const getFields = (collectionName) => {
  return _.omitBy(featuresMap.get(collectionName).fields, ({ hideOnForm }) => hideOnForm)
}
