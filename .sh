#!/usr/bin/env bash
set -euo pipefail
flag() {for f in "$@"; do [[ -e ".flags/$f" ]] || return 1; done} if flag local; then :; else npm ci; fi
rm -rf dist/*
mkdir -p dist
npx sass src:dist --no-source-map
for SRC in src/*.pug; do
	DIST="dist/${SRC#src/_}"
	node -e "console.log(require('pug').renderFile('$DIST').normalize('NFD'))" > "dist/$(basename "${SRC#_}" .pug).html"
done