set -e

git add ./dist/*
git commit -m "Deploy $1"
git push origin `git subtree split --prefix dist main`:gh-pages --force