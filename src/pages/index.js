import React from "react"
import Link from "gatsby-link"
import { Section } from "../components-styled"

export default ({ data }) => {
  return (
    <Section>
      <h2>Blogs</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>
            {node.frontmatter.author} — {node.frontmatter.date}
          </p>
        </div>
      ))}
    </Section>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 140)
        }
      }
    }
  }
`
