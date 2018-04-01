import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
