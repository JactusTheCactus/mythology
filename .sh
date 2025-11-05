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
for i in src/*.pug; do
	PUG="$i" node pug.js > "dist/$(basename "$i" .pug).html"
done