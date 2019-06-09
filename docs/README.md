
```shell
npm install -g vuepress
mkdir handbook
cd handbook
npm init -y

mkdir handbook/docs
cd handbook/docs
echo '# Hello VuePress!' > README.md
vuepress dev .
vuepress build .

npm run docs:dev
npm run docs:build

cd ~/docs/handbook/docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dodosss/handbook.git master:gh-pages


```