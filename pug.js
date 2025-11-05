const uni = String.fromCodePoint
const _ = {
	space: uni(0x20),
	_: uni(0x0323),
	acc: uni(0x0301),
	ae: uni(0x00E6),
	dh: uni(0x00F0),
	ng: uni(0x014B),
	s: uni(0x017F),
	th: uni(0x00FE),
	oe: uni(0x0153)
}
_.e = "e" + _.acc
_.i = "i" + _.acc
_.o = "o" + _.acc
_.sh = _.s + _.acc
_.Sh = _.sh.toUpperCase()
_.zh = "z" + _.acc
_.u = "u" + _.acc
_.deity = {
	dodur: `Do${_._ + _.dh}ur`,
	lidin: `Li${_._ + _.dh}in`,
	timur: `T${_.i + _._}mur`,
	kwelin: `Kwe${_._}lin`,
	hadin: `Ha${_._}din`,
	netur: `Ne${_._}tur`,
	eldur: `E${_._}ldur`,
	jodur: `J${_.o + _._}dur`,
	ludin: `L${_.u + _._}din`,
	bradur: `Bra${_._ + _.dh}ur`,
	vadin: `Va${_._}din`,
	fjelur: `Fje${_._}lur`,
	kenur: `Ke${_._}nur`,
	patin: `Pa${_._}tin`,
	dorin: `D${_.o + _._}rin`,
	galdin: `Ga${_._}ldin`,
	stridur: `Str${_.i + _._ + _.dh}ur`,
	formur: `F${_.o + _._}rmur`,
	fridin: `Fri${_._ + _.dh}in`,
	furlin: `Fu${_._}rlin`,
	felkilur: `Fe${_._}lkilur`,
	helin: `H${_.e + _._}lin`,
	golgemin: `G${_.o + _._}lgemin`,
	efkimin: `Efki${_._}min`,
	skimzur: `Ski${_._}m${_.zh}ur`,
	djur: `Dju${_._}r`,
	opfin: `O${_._}pfin`,
	onlegur: `O${_._}nlegur`,
	eksprenur: `Ek${_.s}pre${_._ + _.ng}ur`,
	strefnur: `Stre${_._}fnur`,
	lakbin: `La${_._}kbin`,
	kogur: `Ko${_._}gur`,
	ravin: `Ra${_._}vin`,
	brainur: `Bra${_.i + _._}nur`,
	frekur: `Fre${_._}kur`,
	purlin: `Pu${_._}rlin`,
	kufnur: `K${_.oe + _._}fnur`,
	pikin: `P${_.i + _._}kin`,
	sirilur: `S${_.i + _._}rilur`,
	upgodin: `U${_._}pgo${_.dh}in`,
	dolin: `Do${_._}lin`,
	jordin: `J${_.o + _._}rdin`,
	sodur: `${_.Sh + _.o + _._}dur`,
	oditur: `O${_._}ditur`,
	pukin: `P${_.u + _._}kin`,
	grendur: `Gr${_.e + _._}ndur`,
	skopkin: `Sko${_._}pkin`,
	stinur: `S${_.th}i${_._}nur`,
	arktin: `A${_._}rktin`,
	bisur: `Bi${_._ + _.s}ur`,
	sprinur: `Spri${_._ + _.ng}ur`,
	kartlin: `Ka${_._}rtlin`,
	nokvur: `No${_._}kvur`,
	skurdin: `Sku${_._}r${_.dh}in`,
	mecur: `Me${_._}t${_.sh}ur`,
	ristilin: `Ri${_._ + _.s}tilin`,
	molin: `M${_.o + _._}lin`
}
_.makra = `Ma${_._}kra`
_.hadru = `Ha${_._ + _.dh}r${_.u}`
_.halrit = `Ha${_._}lri${_.th}`
_.dodin = `Do${_._ + _.dh + _.i}n`
_.lidin = `Li${_._ + _.dh + _.i}n`
_.dolidin = `Do${_._}li${_.dh + _.i}n`
_.the = {
	makra: _.makra
}
_.dolita = `The Do${_._}lita`
_.jurla = `The Ju${_._}rla`
_.doda = `The Do${_._ + _.dh}a`
_.istaga = `The I${_.s}ta${_._}ga`
_.kinslada = `The Kin${_.s}la${_._ + _.dh}a`
_.mena = `The Me${_._}na`
_.fristila = `The Fri${_.s}ti${_._}la`
_.valda = `The Va${_._}lda`
_.midva = `The Mi${_._}dva`
_.furda = `The Fu${_._}r${_.dh}a`
_.fokra = `The Fo${_._}kra`
console.log(
	require('pug')
		.renderFile(
			process.env.PUG,
			_
		)
		.normalize('NFD')
)