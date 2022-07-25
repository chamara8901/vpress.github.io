module.exports={
    title:'Grrow Blog',
    description:'Design Your Project',
    themeConfig:{
        nav:[
            {text:'Home',link:'/'},
            {text:'docs',link:'/docs/'},
            {text:'posts',link:'/posts/'},
            {text:'About me',link:'https://github.com'},
        ],
        sidebar:{
                '/docs/':[
                '',
                'frontend',
                'backend'
            ],
            '/posts/':[
                '',
            ],
        plugins: [
                [
                  "/posts/",
                  {
                    directories: [
                      {
                        id: "posts",
                        dirname: "posts",
                        path: "/blog/posts/*.md",
                        itemPermalink: "/posts/:slug"
                      }
                    ]
                  }
                ]
              ]
        }
    }
}