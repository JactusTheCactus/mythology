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
for SCSS in src/*.scss; do
	CSS="${SCSS#src/}"
	CSS="${CSS%.scss}.css"
	node -e "console.log(require(\"sass\").compileString(require(\"fs\").readFileSync(\"$SCSS\",\"utf8\")).css)" > "$CSS"
done
for _PUG in src/_*.pug; do
	HTML="${_PUG#src/_}"
	HTML="${HTML%.pug}.html"
	PUG="page/${_PUG#src/_}"
	cat << EOF > "$PUG"
$(cat "_.pug")
$(cat "_head.pug") $(cat "$_PUG")
$(cat "_foot.pug")
EOF
	node -e "console.log(require(\"pug\").renderFile(\"$PUG\").normalize(\"NFD\"))" > "$HTML"
	rm "$PUG"
done