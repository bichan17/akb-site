export default {
  type: 'object',
  name: 'downloadSegment',
  title: 'Download Segment',
  fields: [
    {
      title: 'Body Text',
      name: 'textBlock',
      type: 'bodyPortableText'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      description: 'Leave blank to use default icon.'
    },
    {
      title: 'Download Asset',
      name: 'download',
      type: 'file',
      description: 'Optional'
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
