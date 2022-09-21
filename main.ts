input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    for (let index = 0; index < 2; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.turn(Direction.Right, 90)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.turn(Direction.Right, 45)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
