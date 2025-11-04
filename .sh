#!/usr/bin/env bash
set -euo pipefail
flag() {for f in "$@"; do [[ -e ".flags/$f" ]] || return 1; done} if flag local; then :; else npm ci; fi
rm -rf dist/*
mkdir -p dist
for SCSS in src/*.scss; do
	CSS="$SCSS"
	CSS="${CSS#src/}"
	CSS="${CSS%.scss}"
	CSS="dist/$CSS.css"
	node -e "console.log(require('sass').compile('$SCSS').css)" > "$CSS"
done
for _PUG in src/_*.pug; do
	HTML="${_PUG#src/_}"
	HTML="${HTML%.pug}.html"
	PUG="dist/${_PUG#src/_}"
	cat << EOF > "$PUG"
include _.pug
include _head.pug $(head -n 1 "$_PUG")
	body
		h1 $(cat "$_PUG")
include _foot.pug
EOF
	node -e "console.log(require('pug').renderFile('$PUG').normalize('NFD'))" > "$HTML"
	rm "$PUG"
done