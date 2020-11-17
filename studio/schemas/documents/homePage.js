export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [
    { name: 'intro', title: 'Intro' },
    { name: 'clients', title: 'Clients' },
    { name: 'services', title: 'Services' },
    { name: 'work', title: 'Work' }
  ],
  fields: [
    {
      name: 'introCopy',
      type: 'excerptPortableText',
      title: 'Intro Copy',
      description: 'Some words about yourself.',
      fieldset: 'intro'
    },
    {
      name: 'clientsSlides',
      type: 'array',
      title: 'Slides',
      of: [
        {
          type: 'textSlide'
        }
      ],
      fieldset: 'clients'
    },
    {
      name: 'servicesSlides',
      type: 'array',
      title: 'Slides',
      of: [
        {
          type: 'twoColumnSlide'
        },
        {
          type: 'textSlide'
        }
      ],
      fieldset: 'services'
    },
    {
      name: 'workHeadline',
      type: 'excerptPortableText',
      title: 'Headline',
      fieldset: 'work'
    },
    {
      name: 'workSegments',
      type: 'array',
      title: 'Segments',
      of: [
        {
          type: 'downloadSegment'
        }
      ],
      fieldset: 'work'
    }
  ]
}
