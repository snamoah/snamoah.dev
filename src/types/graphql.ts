interface SiteMetadataQuery<T extends {}> {
  site: {
    siteMetadata: T
  }
}

interface AllMdxQuery<T extends {}> {
  allMdx: {
    nodes: T[]
  }
}

export type GraphqlQuery<T extends {}> = SiteMetadataQuery<T> & AllMdxQuery<T>
