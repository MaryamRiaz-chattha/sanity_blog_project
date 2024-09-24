import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType],
}
