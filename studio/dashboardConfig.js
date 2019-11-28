export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ddffc5585e19975848175fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6bgw1oha',
                  apiId: '24ddbd05-358c-4717-b514-c79e8ba6c2ea'
                },
                {
                  buildHookId: '5ddffc5507c96854e53dabc6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oq2jqfoj',
                  apiId: '50028f3d-688a-4fed-9378-cdb0257fa313'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarunranka/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oq2jqfoj.netlify.com', category: 'apps'}
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
