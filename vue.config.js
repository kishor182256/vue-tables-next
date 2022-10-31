const { defineConfig } = require('@vue/cli-service')
const fs = require('fs');
var webpack = require('webpack');
const file = './data.json'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,

  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js'
    }
  }
})

