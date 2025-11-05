#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"; do
		[[ -e ".flags/$f" ]] || return 1
	done
}
if flag local; then
	NPX=""
else
	NPX="npx"
fi
alias sass="$NPX sass"
alias tsc="$NPX tsc"
log() {
	if flag local; then
		echo -e "$1" >> build.log
	else
		echo -e "$1"
	fi
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
if flag local; then
	echo >> build.log
fi
for i in src/*.scss; do
	sass "$i:dist/$(basename "$i" .scss).css" --no-source-map
done
log "Generated Stylesheet(s):"
files "*.css"
npx tsc
log "Generated Script(s):"
files "*.js"
for i in src/*.pug; do
	PUG="$i" node dist/pug.js > "dist/$(basename "$i" .pug).html"
done
log "Generated Page(s):"
files "*.html"