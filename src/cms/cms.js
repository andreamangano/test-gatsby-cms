import CMS from 'netlify-cms'

import YoutubeWidget from './widgets/Youtube'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerEditorComponent(YoutubeWidget)

CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
