module.exports={
    title:'Grrow Blog',
    description:'Design Your Project',
    themeConfig:{
        nav:[
            {text:'Home',link:'/'},
            {text:'docs',link:'/docs/'},
            {text:'blog',link:'/blog/posts/'},
            {text:'About me',link:'https://github.com'},
        ],
        sidebar:{
                '/docs/':[
                '',
                'frontend',
                'backend'
            ],
            '/blog/posts':[
                '',
            ],
        plugins: [
                [
                  "/blog/posts",
                  {
                    directories: [
                      {
                        id: "blog",
                        dirname: "blog",
                        path: "/blog/*.md",
                        itemPermalink: "/posts/:slug"
                      }
                    ]
                  }
                ]
              ]
        }
    }
}