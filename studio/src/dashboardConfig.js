export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa98a4ea3d8632060202dcc',
                  title: 'Sanity Studio',
                  name: 'akb-site-studio',
                  apiId: '36e20d67-fa30-46ea-b305-9500fac9987b'
                },
                {
                  buildHookId: '5fa98a4ec77f4fef5d73b2d0',
                  title: 'Andreas Website',
                  name: 'akb-site',
                  apiId: '0bde6984-4ca2-469c-9fce-a8b3239c3d11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bichan17/akb-site',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://akb-site.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
