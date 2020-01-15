export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e1ea55db38f91eb1be6fcca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4hjykx39',
                  apiId: '8d9fe80a-896a-4bed-9c4e-845e7bf1413a'
                },
                {
                  buildHookId: '5e1ea55ecd86a3d5d20a71db',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hjkjhdfz',
                  apiId: '210496c9-b35a-4a6f-84df-815cc08f41c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hiba-kwareict/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hjkjhdfz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
