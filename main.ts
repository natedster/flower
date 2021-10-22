input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 60)
    music.playMelody("B A E F E C5 A D ", 120)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 60)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    music.playMelody("B A E F E C5 A D ", 120)
})
basic.forever(function () {
	
})
