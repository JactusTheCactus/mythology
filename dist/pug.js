"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cap(obj) {
    switch (typeof obj === "string"
        ? "string"
        : Array.isArray(obj)
            ? "array"
            : "hash") {
        case "string": return obj
            .split(/\s+/)
            .map((o) => (o[0]?.toUpperCase() ?? "")
            + o.slice(1))
            .join(" ");
        case "array": return obj.map(cap);
        case "hash": return Object.fromEntries(Object.entries(obj)
            .map(([k, v]) => [
            k,
            cap(v)
        ]));
    }
}
const uni = String.fromCodePoint;
const _ = {
    space: uni(0x20),
    _: uni(0x0323),
    acute: uni(0x0301),
    ae: uni(0x00E6),
    dh: uni(0x00F0),
    ng: uni(0x014B),
    s: uni(0x017F),
    th: uni(0x00FE),
    v: "v",
    w: "u",
    oe: uni(0x0153)
};
_.e = "e" + _.acute;
_.i = "i" + _.acute;
_.o = "o" + _.acute;
_.sh = _.s + _.acute;
_.zh = "z" + _.acute;
_.u = "u" + _.acute;
_.deity = {
    dodur: `do${_._ + _.dh}ur`,
    lidin: `li${_._ + _.dh}in`,
    timur: `t${_.i + _._}mur`,
    kwelin: `k${_.w}e${_._}lin`,
    hadin: `ha${_._}din`,
    netur: `ne${_._}tur`,
    eldur: `e${_._}ldur`,
    jodur: `j${_.o + _._}dur`,
    ludin: `l${_.u + _._}din`,
    bradur: `bra${_._ + _.dh}ur`,
    vadin: `${_.v}a${_._}din`,
    fjelur: `fje${_._}lur`,
    kenur: `ke${_._}nur`,
    patin: `pa${_._}tin`,
    dorin: `d${_.o + _._}rin`,
    galdin: `ga${_._}ldin`,
    stridur: `str${_.i + _._ + _.dh}ur`,
    formur: `f${_.o + _._}rmur`,
    fridin: `fri${_._ + _.dh}in`,
    furlin: `fu${_._}rlin`,
    felkilur: `fe${_._}lkilur`,
    helin: `h${_.e + _._}lin`,
    golgemin: `g${_.o + _._}lgemin`,
    efkimin: `efki${_._}min`,
    skimzur: `ski${_._}m${_.zh}ur`,
    djur: `dju${_._}r`,
    opfin: `o${_._}pfin`,
    onlegur: `o${_._}nlegur`,
    eksprenur: `ek${_.s}pre${_._ + _.ng}ur`,
    strefnur: `stre${_._}fnur`,
    lakbin: `la${_._}kbin`,
    kogur: `ko${_._}gur`,
    ravin: `ra${_._}vin`,
    brainur: `bra${_.i + _._}nur`,
    frekur: `fre${_._}kur`,
    purlin: `pu${_._}rlin`,
    kufnur: `k${_.oe + _._}fnur`,
    pikin: `p${_.i + _._}kin`,
    sirilur: `s${_.i + _._}rilur`,
    upgodin: `u${_._}pgo${_.dh}in`,
    dolin: `do${_._}lin`,
    jordin: `j${_.o + _._}rdin`,
    sodur: `${_.sh + _.o + _._}dur`,
    oditur: `o${_._}ditur`,
    pukin: `p${_.u + _._}kin`,
    grendur: `gr${_.e + _._}ndur`,
    skopkin: `sko${_._}pkin`,
    stinur: `s${_.th}i${_._}nur`,
    arktin: `a${_._}rktin`,
    bisur: `bi${_._ + _.s}ur`,
    sprinur: `spri${_._ + _.ng}ur`,
    kartlin: `ka${_._}rtlin`,
    nokvur: `no${_._}k${_.v}ur`,
    skurdin: `sku${_._}r${_.dh}in`,
    mecur: `me${_._}t${_.sh}ur`,
    ristilin: `ri${_._ + _.s}tilin`,
    molin: `m${_.o + _._}lin`
};
_.deity = Object.fromEntries(Object.entries(_.deity)
    .map(([k, v]) => [k,
    v
    //.replace(//g, "")
]));
_.makra = `ma${_._}kra`;
_.the = {
    makra: `the ${_.makra}`
};
_.hadru = `ha${_._ + _.dh}r${_.u}`;
_.halrit = `ha${_._}lri${_.th}`;
_.dodin = `do${_._ + _.dh + _.i}n`;
_.lidin = `li${_._ + _.dh + _.i}n`;
_.dolidin = `do${_._}li${_.dh + _.i}n`;
_.dolita = `the do${_._}lita`;
_.jurla = `the ju${_._}rla`;
_.doda = `the do${_._ + _.dh}a`;
_.istaga = `the i${_.s}ta${_._}ga`;
_.kinslada = `the kin${_.s}la${_._ + _.dh}a`;
_.mena = `the me${_._}na`;
_.fristila = `the fri${_.s}ti${_._}la`;
_.valda = `the ${_.v}a${_._}lda`;
_.midva = `the mi${_._}d${_.v}a`;
_.furda = `the fu${_._}r${_.dh}a`;
_.fokra = `the fo${_._}kra`;
console.log(require('pug')
    .renderFile(process.env.PUG, cap(_))
    .normalize('NFD'));
