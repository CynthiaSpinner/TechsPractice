import { defineType } from 'sanity'


// created because had no define type for "code"
export default defineType ({
    name: 'code',
    type: 'object',
    fields: [
      {
        name: 'code',
        type: 'string',
        title: 'Code block',
        description: 'Testing to make things work',
      
      },
   
    ]
  }) 