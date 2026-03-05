/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on: Feb 2026
 * This program will be a cookie clicker 
*/

let cookies = 0

// This shows the 'Cookie' icon from your teacher's example
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
})

// This adds a cookie and shows the number (like your image 'a')
input.onButtonPressed(Button.A, function () {
    cookies += 1
    basic.showNumber(cookies)
})

// Initialize the screen with the cookie icon
basic.showLeds(`
    . # # . .
    # . . # .
    # . . # .
    # . . # .
    . # # . .
    `)