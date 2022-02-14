BIN=./node_modules/.bin

build: clear
	${BIN}/webpack
	
clear:
	rm -fr ./dist