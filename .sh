#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"; do
		[[ -e ".flags/$f" ]] || return 1
	done
}
if flag local; then
	:
else
	npm ci
fi
rm -rf dist/*
mkdir -p dist
for i in src/*.scss; do
	sass "$i:dist/$(basename "$i" .scss).css" --no-source-map
done
for PUG in src/*.pug; do
	node -e "console.log(require('pug').renderFile('"$PUG"').normalize('NFD'))" > "dist/$(basename "$PUG" .pug).html"
done