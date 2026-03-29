import {defineType, defineArrayMember} from 'sanity'

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal',    value: 'normal'},
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Quote',     value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet',   value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold',          value: 'strong'},
          {title: 'Italic',        value: 'em'},
          {title: 'Underline',     value: 'underline'},
          {title: 'Strike',        value: 'strike-through'},
          {title: 'Code',          value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    }),
    // Image block inside rich text
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'Describe the image for accessibility and SEO',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    // Code block
    defineArrayMember({
      type: 'object',
      name: 'codeBlock',
      title: 'Code Block',
      fields: [
        {
          name: 'language',
          title: 'Language',
          type: 'string',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'HTML',       value: 'html'},
              {title: 'CSS',        value: 'css'},
              {title: 'Python',     value: 'python'},
              {title: 'Bash',       value: 'bash'},
              {title: 'JSON',       value: 'json'},
            ],
          },
        },
        {
          name: 'code',
          title: 'Code',
          type: 'text',
        },
      ],
      preview: {
        select: {language: 'language', code: 'code'},
        prepare({language, code}) {
          return {
            title: `Code Block — ${language ?? 'plain'}`,
            subtitle: code?.slice(0, 60),
          }
        },
      },
    }),
  ],
})