#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"; do
		[[ -e ".flags/$f" ]] || return 1
	done
}
if flag local; then
	sass="sass"
	tsc="tsc"
else
	npm ci
	sass="npx sass"
	tsc="npx tsc"
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
if [[ -d "dist" ]]; then
	log "dist/ Cleared:"
	files "*"
	rm -rf dist
fi
mkdir -p dist
echo >> build.log
for i in src/*.scss; do
	$sass "$i:dist/$(basename "$i" .scss).css" --no-source-map
done
log "Generated Stylesheet(s):"
files "*.css"
$tsc
log "Generated Script(s):"
files "*.js"
for i in src/*.pug; do
	PUG="$i" node dist/pug.js > "dist/$(basename "$i" .pug).html"
done
log "Generated Page(s):"
files "*.html"