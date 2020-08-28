#!/usr/bin/env sh
​
# 确保脚本抛出遇到的错误
set -e
​
# 生成静态文件
npm run docs:build
​
# 进入生成的文件夹
cd docs/.vuepress/dist
​
git init
git add -A
git commit -m 'deploy'
​
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://1037055457.github.io/blog
# git push -f git@github.com:1037055457/blog.git master:gh-pages

cd -