#!/usr/bin/env bash
set -euo pipefail
flag() {for f in "$@"; do [[ -e ".flags/$f" ]] || return 1; done} if flag local; then :; else npm ci; fi
rm -rf dist/*
mkdir -p dist
npx sass src:dist --no-source-map
for PUG in src/*.pug; do
	node -e "console.log(require('pug').renderFile('dist/${PUG#src/_}').normalize('NFD'))" > "dist/$(basename "${PUG#_}" .pug).html"
done