export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61904367ac6c77eca7c14ccf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6njfedu3',
                  apiId: 'ae2f9e51-0f6e-40fa-ada8-96160e4885ca'
                },
                {
                  buildHookId: '619043669c49c0ad2bbb1537',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7cv7xnmt',
                  apiId: '644f1ac7-7aa9-4171-94d1-aad49f01cc84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timbalicious/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7cv7xnmt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
