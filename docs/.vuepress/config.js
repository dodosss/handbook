module.exports = {
    title: '开发手册',
    description: '',
    base: '/handbook/',

    themeConfig: {
        docsDir: 'docs',
        sidebar: true,
        search: true,
        lastUpdated: 'Last Updated', // string | boolean

        nav: [{
                text: 'Quick',
                items: [
                    { text: 'Mac', link: '/mac' },
                    { text: 'VSCode', link: '/vscode' },
                    { text: 'Chrome', link: '/chrome' },
                    { text: 'Android Studio', link: '/androidstudio' }
                ]
            },
            {
                text: 'CentOS',
                items: [
                    { text: 'lnmp', link: '/lnmp' },
                    { text: 'server', link: '/server' }
                ]
            },
            { text: 'Github', link: 'https://github.com/dodosss' }
        ]
    }
}