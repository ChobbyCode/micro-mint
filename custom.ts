
scene.setBackgroundColor(1)


/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace MicroMint {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function Cutscene(text: string): void {
        let front= sprites.create(assets.image`Back`, SpriteKind.Player)

        front.setScale(10, ScaleAnchor.Middle)

        let front_person= sprites.create(assets.image`Back_person`, SpriteKind.Player)

        front_person.setScale(9, ScaleAnchor.Middle)

        front_person.setPosition(60,50)

    }
}
