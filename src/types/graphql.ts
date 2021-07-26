export interface GraphqlQuery<T extends {}> {
  site: {
    siteMetadata: T
  }
}
