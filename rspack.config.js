module.exports = {
  entry: "./src/index.ts",
  devtool: false,
  mode: 'development',
  output: {
		globalObject: 'self',
		filename: '[name].bundle.js',
  },
  builtins: {
    presetEnv: {
      targets: [ '> 0.01%', 'not dead', 'not op_mini all' ],
      mode: 'entry',
      coreJs: '3.26'
    }
  }
}

