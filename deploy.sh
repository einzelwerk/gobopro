set -e

git add ./dist/*
git add .
git commit -m "Deploy $1"
git subtree push --prefix dist origin gh-pages
