import {blockContentType} from './blockContent'
import {authorType}       from './author'
import {categoryType}     from './category'
import {postType}         from './post'

export const schema = {
  types: [blockContentType, authorType, categoryType, postType],
}