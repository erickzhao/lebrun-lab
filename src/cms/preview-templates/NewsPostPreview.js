import React from 'react'
import { NewsPostTemplate } from '../../templates/news-post'

const NewsPostPreview = ({ entry, widgetFor }) => (
  <NewsPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default NewsPostPreview
