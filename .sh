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
for SCSS in page/*.scss; do
	CSS="${SCSS#page/}"
	CSS="${CSS%.scss}.css"
	node -e "console.log(require(\"sass\").compileString(require(\"fs\").readFileSync(\"$SCSS\",\"utf8\")).css)" > $CSS
done
for _PUG in page/_*.pug; do
	HTML=${_PUG#page/_}
	HTML=${HTML%.pug}.html
	PUG=page/${_PUG#page/_}
	cat << EOF > $PUG
$(cat "_.pug")
$(cat "_head.pug") $(cat "$_PUG")
$(cat "_foot.pug")
EOF
	node -e "console.log(require(\"pug\").renderFile(\"$PUG\").normalize(\"NFD\"))" > $HTML
done