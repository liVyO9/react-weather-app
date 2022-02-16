BIN=./node_modules/.bin

build:
	${BIN}/webpack --config ./webpack/webpack.prod.js

start:
	${BIN}/webpack serve --open --config ./webpack/webpack.dev.js

