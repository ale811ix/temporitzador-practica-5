input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 25; index++) {
        led.unplot(x, y)
        x += -1
        if (x == -1) {
            y += -1
            x += 5
        }
        basic.pause(1000)
    }
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    x += 4
    y += 4
})
let x = 0
let y = 0
y = 4
x = 4
