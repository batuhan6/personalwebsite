import React from 'react'
import { Article, H2, Section } from '../components-styled'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Section>
      <H2>{post.frontmatter.title}</H2>
      <span>{post.frontmatter.author}</span> &mdash;{' '}
      <span>{post.frontmatter.date}</span>
      <Article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Section>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
