function AfficherNombre (num: number) {
    led.setBrightness(luminosité)
    basic.showNumber(num)
    basic.pause(5000)
    for (let index = 0; index <= luminosité; index++) {
        led.setBrightness(luminosité - 1 * index)
        basic.pause(2)
    }
    basic.pause(200)
    led.setBrightness(luminosité)
}
input.onButtonPressed(Button.A, function () {
    luminosité = Math.floor(luminosité - 10)
    if (luminosité < 0) {
        luminosité = 1
    }
    led.plotBarGraph(
    luminosité,
    255
    )
})
function FaireClignoterCarréPlein () {
    for (let index = 0; index <= 1; index++) {
        basic.clearScreen()
        basic.pause(1000)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
    }
}
function AfficherSignature () {
    m = 1
    for (let index = 0; index < 2; index++) {
        AfficherNombre(Math.trunc(hash % (m * 10) / m))
        m = m * 10
    }
}
function InitialiserSignature () {
    for (let index = 0; index < randint(20, 99); index++) {
        CalculerSignature()
    }
}
input.onButtonPressed(Button.B, function () {
    luminosité = Math.floor(luminosité + 10)
    if (luminosité > 255) {
        luminosité = 255
    }
    led.plotBarGraph(
    luminosité,
    255
    )
})
function CalculerSignature () {
    hash = hash * B % N
}
let m = 0
let hash = 0
let N = 0
let B = 0
let luminosité = 0
luminosité = 32
led.setBrightness(luminosité)
B = 2048
N = 7879
let secret = 5
hash = secret
InitialiserSignature()
let cpt = 0
while (true) {
    if (cpt == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1000)
        CalculerSignature()
        AfficherSignature()
    }
    led.plotBarGraph(
    cpt,
    60
    )
    basic.pause(1000)
    cpt += 1
    if (cpt % 60 == 0) {
        cpt = 0
        FaireClignoterCarréPlein()
    }
}
