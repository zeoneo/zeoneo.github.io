###  This is source repository of my static website/gatsby blog.

check [here](https://zeoneo.github.io) for live blog

If you like this setup and would like replicate it then follow these commands

## Local Development

- `git clone https://github.com/zeoneo/zeoneo.github.io.git`

- `cd zeoneo.github.io`

- `rm -rf .git  #This will remove all of my git commit history`

- `npm install`

- `gatsby develop`


## How to deploy the blog?

-   First create the public repository with name exactly `{your-username}.github.io`
-   Create `gh-pages` branch in git repo and make it default branch on github.
-   `gh-pages` branch will contain the source code of blog.
-   `master` branch is created on the fly when github actions run on push to `gh-pages`.
-   You will need to generate the personal access key using documentation given [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
-   Add that access token in the repository as secret with name `DEPLOY_TOKEN`
-   Once you push all the set up on `{your-username}.github.io` and branch `gh-pages` your blog should be up at any second. Access it using `https://{your-username}.github.io`


If you have any other questions please contact me on [Twitter](https://twitter.com/ze0ne0).

