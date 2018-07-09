import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
import SGradientSvgFilter from 'coffeekraken-sugar/js/filters/SGradientSvgFilter'

/**
 * Provide a nice way to apply a gradient on top of some HTMLElements
 *
 * @example   html
 * <s-gradient colors="['#a3385e','#f2bc2b']" type="radial">
 *   <h1 class="h1 m-b">
 *     Hello World
 *   </h1>
 *   <p class="p m-b">
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate facilisis luctus. Nam non erat orci. Curabitur pulvinar elit quis consequat consequat. Curabitur cursus faucibus enim, nec euismod diam venenatis egestas. Duis at volutpat massa. Praesent finibus felis turpis, bibendum rhoncus massa semper et. Aliquam blandit velit elit, a dignissim libero pellentesque at. Fusce sodales rhoncus massa, at consectetur lectus finibus id.
 *   </p>
 *   <a class="btn btn--outline" href="#" title="...">
 *     Do something cool
 *   </a>
 * </s-gradient>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com>
 */
export default class SGradientComponent extends SWebComponent {
  /**
   * Default props
   * @definition    SWebComponent.defaultProps
   * @protected
   */
  static get defaultProps () {
    return {
      /**
       * The colors wanted for your gradient
       * @prop
       * @type    {Array}
       */
      colors: ['#a3385e', '#f2bc2b'],

      /**
       * The type of gradient wanted
       * @prop
       * @type      {String}
       * @values    linear, radial
       */
      type: 'linear',

      /**
       * The direction wanted for your gradient. This applies only if the type is 'linear'
       * @prop
       * @type    {String}
       * @values  down, left
       */
      direction: 'down',

      /**
       * Specify the resolution of the gradient to generate
       * @prop
       * @type    {Number}
       */
      resolution: 512
    }
  }

  /**
   * Css
   * @protected
   */
  static defaultCss (componentName, componentNameDash) {
    return `
      ${componentNameDash} {
        display : block;
      }
    `
  }

  /**
   * Mount component
   * @definition    SWebComponent.componentMount
   * @protected
   */
  componentMount () {
    super.componentMount()

    let type = this.props.type
    // create a new svg filter
    this._gradientFilter = new SGradientSvgFilter()
    if (type === 'radial') {
      this._gradientFilter.radial(this.props.colors)
    } else {
      // handle settings depending on direction
      let settings = {
        width: this.props.resolution,
        height: this.props.resolution
      }
      switch (this.props.direction) {
        case 'left':
          settings = {
            ...settings,
            x0: 0,
            y0: 0,
            x1: this.props.resolution,
            y1: 0
          }
          break
        case 'down':
        default:
          settings = {
            ...settings,
            x0: this.props.resolution / 2,
            y0: 0,
            x1: this.props.resolution / 2,
            y1: this.props.resolution
          }
          break
      }

      this._gradientFilter.linear(this.props.colors, settings)
    }
    // apply the filter
    this._gradientFilter.applyTo(this)
  }
}
