plainTemplate
=============

A simple plain HTML/CSS Template with jQuery, Bootstrap, SASS and other usefull stuff.

Includes
=============

- Bootstrap-sass 3.1.1
- jQuery 1.9 (for IE8 Support)
- Modernizer 2.6.2
- Retina.js 1.1.0

## Retina.JS

Simple JS for Retina Images. <a href="https://imulus.github.io/retinajs/" target="_blank">more Infos</a>.

Official they use LESS, but i made a SASS implementation. The SASS mixing is included in the plainTemplate. The only thing you need to do ist to make two version of every image.

Version of Images:

- blume.jpg (200x100)
- blume&#64;2x.jpg (400x200)

retina.js will replace every image in the HTML with the @2x version if the user has a High-Res Monitor (Retina). For CSS/SASS use the image mixin

## SASS mixins

Example for the Retina mixin:

>=image($image_name, $w: auto, $h: auto, $extention: '.jpg')
>  background-image: url('../images/' + $image_name + $extention)
>  $x2img : $image_name + '@2x' + $extention
>  @media all and (-webkit-min-device-pixel-ratio : 1.5)
>    background-image: url('../images/' + $x2img)
>    background-size: $w $h

in .sass

> +image('blume', 200px, 100px, '.jpg')


Pretty self explanatory.