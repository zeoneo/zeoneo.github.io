#!/usr/bin/env bash

set -eu

repo_uri="https://x-access-token:$DEPLOY_TOKEN@github.com/$GITHUB_REPOSITORY"

remote_name="origin"
main_branch="gh-pages"
target_branch="master"
build_dir="public"

cd "$GITHUB_WORKSPACE"

git config user.name "$GITHUB_ACTOR"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

git checkout "$main_branch"

npm install --legacy-peer-deps
npm run build
git add "$build_dir"
date >> version.txt
git add version.txt
git checkout HEAD -- package-lock.json

git commit -m "updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token

git subtree split --prefix $build_dir -b master

git push -f origin "$target_branch":"$target_branch"
