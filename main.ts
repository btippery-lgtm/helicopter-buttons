input.onButtonPressed(Button.A, function () {
    servos.P0.run(100)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(-100)
})
