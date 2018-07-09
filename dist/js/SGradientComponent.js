'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SWebComponent2 = require('coffeekraken-sugar/js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _SGradientSvgFilter = require('coffeekraken-sugar/js/filters/SGradientSvgFilter');

var _SGradientSvgFilter2 = _interopRequireDefault(_SGradientSvgFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var SGradientComponent = function (_SWebComponent) {
  _inherits(SGradientComponent, _SWebComponent);

  function SGradientComponent() {
    _classCallCheck(this, SGradientComponent);

    return _possibleConstructorReturn(this, (SGradientComponent.__proto__ || Object.getPrototypeOf(SGradientComponent)).apply(this, arguments));
  }

  _createClass(SGradientComponent, [{
    key: 'componentMount',


    /**
     * Mount component
     * @definition    SWebComponent.componentMount
     * @protected
     */
    value: function componentMount() {
      _get(SGradientComponent.prototype.__proto__ || Object.getPrototypeOf(SGradientComponent.prototype), 'componentMount', this).call(this);

      var type = this.props.type;
      // create a new svg filter
      this._gradientFilter = new _SGradientSvgFilter2.default();
      if (type === 'radial') {
        this._gradientFilter.radial(this.props.colors);
      } else {
        // handle settings depending on direction
        var settings = {
          width: this.props.resolution,
          height: this.props.resolution
        };
        switch (this.props.direction) {
          case 'left':
            settings = _extends({}, settings, {
              x0: 0,
              y0: 0,
              x1: this.props.resolution,
              y1: 0
            });
            break;
          case 'down':
          default:
            settings = _extends({}, settings, {
              x0: this.props.resolution / 2,
              y0: 0,
              x1: this.props.resolution / 2,
              y1: this.props.resolution
            });
            break;
        }

        this._gradientFilter.linear(this.props.colors, settings);
      }
      // apply the filter
      this._gradientFilter.applyTo(this);
    }
  }], [{
    key: 'defaultCss',


    /**
     * Css
     * @protected
     */
    value: function defaultCss(componentName, componentNameDash) {
      return '\n      ' + componentNameDash + ' {\n        display : block;\n      }\n    ';
    }
  }, {
    key: 'defaultProps',

    /**
     * Default props
     * @definition    SWebComponent.defaultProps
     * @protected
     */
    get: function get() {
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
      };
    }
  }]);

  return SGradientComponent;
}(_SWebComponent3.default);

exports.default = SGradientComponent;