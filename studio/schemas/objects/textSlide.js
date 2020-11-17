export default {
  type: 'object',
  name: 'textSlide',
  title: 'Text Slide',
  fields: [
    {
      title: 'Text',
      name: 'textBlock',
      type: 'excerptPortableText'
    }
  ],
  preview: {
    select: {
      blocks: 'textBlock'
    },
    prepare(value) {
      const block = (value.blocks || []).find(block => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter(child => child._type === 'span')
              .map(span => span.text)
              .join('')
          : 'No title'
      }
    }
  }
}
