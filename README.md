## Local Development Setup:
```
1. $ npm install
2. $ npm run dev
```
## Production Deploy Setup:
```
1. $ npm run build
2. $ npm run start (to test)
3. $ git add . && git commit -m "..."
4. $ git push origin `git subtree split --prefix out master`:gh-pages --force
5. $ git push origin master
```

## Notes
```
- use basePath and assetPath with next.js and github pages: https://wallis.dev/blog/next-js-basepath-and-assetprefix
```
