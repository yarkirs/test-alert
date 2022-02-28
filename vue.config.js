module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/test-alert/'
      : '/'
  }
//git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages