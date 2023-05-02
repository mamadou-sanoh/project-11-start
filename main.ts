let distance = 0
DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    distance = DFRobotMaqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)
    if (distance < 20) {
        music.ringTone(262)
    } else {
        music.ringTone(392)
    }
})
