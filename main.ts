let Reading = 0
basic.forever(function () {
    Reading = input.lightLevel()
    led.plotBarGraph(
    Reading,
    600
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Reading)
    }
})
