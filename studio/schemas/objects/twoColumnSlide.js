export default {
  type: 'object',
  name: 'twoColumnSlide',
  title: 'Two Column Slide',
  fields: [
    {
      title: 'Left Text',
      name: 'leftTextBlock',
      type: 'excerptPortableText'
    },
    {
      title: 'Right Body Text',
      name: 'rightTextBlock',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      blocks: 'leftTextBlock'
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
