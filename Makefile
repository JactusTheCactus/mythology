.PHONY : all build

all : build

build : $(wildcard *.scss)
	@sass style.scss style.css