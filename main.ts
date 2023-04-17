input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Snake)
    basic.pause(1000)
})
