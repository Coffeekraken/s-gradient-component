# SGradientComponent

Provide a nice way to apply a gradient on top of some HTMLElements


### Example
```html
	<s-gradient colors="['#a3385e','#f2bc2b']" type="radial">
  <h1 class="h1 m-b">
    Hello World
  </h1>
  <p class="p m-b">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate facilisis luctus. Nam non erat orci. Curabitur pulvinar elit quis consequat consequat. Curabitur cursus faucibus enim, nec euismod diam venenatis egestas. Duis at volutpat massa. Praesent finibus felis turpis, bibendum rhoncus massa semper et. Aliquam blandit velit elit, a dignissim libero pellentesque at. Fusce sodales rhoncus massa, at consectetur lectus finibus id.
  </p>
  <a class="btn btn--outline" href="#" title="...">
    Do something cool
  </a>
</s-gradient>
```
Author : Olivier Bossel <olivier.bossel@gmail.com>

Extends **SWebComponent**




## Attributes

Here's the list of available attribute to set on the element.

### colors

The colors wanted for your gradient

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**

Default : **['#a3385e', '#f2bc2b']**


### type

The type of gradient wanted

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Values : **linear,radial**

Default : **linear**


### direction

The direction wanted for your gradient. This applies only if the type is 'linear'

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Values : **down,left**

Default : **down**


### resolution

Specify the resolution of the gradient to generate

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **512**