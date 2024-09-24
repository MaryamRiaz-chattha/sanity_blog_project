import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'My Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  

    defineField({
      name: 'discription',
      type: 'string',
    }),

  
    defineField({
      name: 'image',
      type: 'image',
    }),
],
})