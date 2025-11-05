#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"; do
		[[ -e ".flags/$f" ]] || return 1
	done
}
if ! flag local; then
	npm ci
fi
log() {
	echo -e "$1" >> build.log
}
files() {
	log "$(find \
		dist/* \
		-name "$1" \
		-exec echo -e "\t{}" \
	\;)"
}
rm -f build.log
mkdir -p dist
{
	log "dist/ Cleared:"
	files "*"
	rm -rf dist/*
} || :
echo >> build.log
for i in src/*.scss; do
	sass "$i:dist/$(basename "$i" .scss).css" --no-source-map
done
log "Generated Stylesheet(s):"
files "*.css"
tsc
log "Generated Script(s):"
files "*.js"
for i in src/*.pug; do
	PUG="$i" node dist/pug.js > "dist/$(basename "$i" .pug).html"
done
log "Generated Page(s):"
files "*.html"