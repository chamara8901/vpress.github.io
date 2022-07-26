module.exports={
    title:'Grrow Blog',
    description:'Design Your Project',
    themeConfig:{
        nav:[
            {text:'Home',link:'/'},
            {text:'docs',link:'/docs/'},
            {text:'blog',link:'/blog/'},
            {text:'categories',link:'/categories/'},
            {text:'about me',link:'https://github.com'},
        ],
        sidebar:{
                '/docs/':[
                '',
                'frontend',
                'backend'
            ],
            '/blog/':[
                '',
            ],
        plugins: [
                [
                  "/blog/",
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