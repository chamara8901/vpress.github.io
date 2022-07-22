module.exports={
    title:'Grrow Blog',
    description:'Design Your Project',
    themeConfig:{
        nav:[
            {text:'Home',link:'/'},
            {text:'docs',link:'/docs/'},
            {text:'blog',link:'/blog/'},
            {text:'About me',link:'https://github.com'},
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
                        path: "/bolg/posts/*.md",
                        itemPermalink: "/posts/:slug"
                      }
                    ]
                  }
                ]
              ]
        }
    }
}