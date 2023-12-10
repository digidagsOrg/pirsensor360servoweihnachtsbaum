function licht_aus () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function licht_an () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function _369servo_an () {
    servos.P2.run(10)
}
function _360Servo_aus () {
    servos.P2.stop()
}
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(60000)
basic.showNumber(0)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
        licht_an()
        _369servo_an()
        basic.pause(5000)
    } else {
        _360Servo_aus()
        licht_aus()
    }
})
