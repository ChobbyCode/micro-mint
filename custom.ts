game.splash("This Software Uses Micro Mint GitHub Edition Click A To Continue.")
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
     * Creates A Cutscene Using The Default People
     */
    //% block
    export function Cutscene(text: string): void {
        let front= sprites.create(assets.image`Back`, SpriteKind.Player)

        front.setScale(10, ScaleAnchor.Middle)

        let front_person= sprites.create(assets.image`Back_person`, SpriteKind.Player)

        front_person.setScale(9, ScaleAnchor.Middle)

        front_person.setPosition(60,50)

        let back_person = sprites.create(assets.image`front_person`, SpriteKind.Player)

        back_person.setScale(3, ScaleAnchor.Middle)
        back_person.setPosition(130, 50)

        let back_person_bottom =sprites.create(assets.image`front_person_bottom`, SpriteKind.Player)

        back_person_bottom.setScale(3, ScaleAnchor.Middle)
        back_person_bottom.setPosition(130,70)

        
        game.showLongText(text, DialogLayout.Bottom)

        

    }
}
