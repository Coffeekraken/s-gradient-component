module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-gradient-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <s-gradient colors="['#a3385e','#f2bc2b']" type="radial">
          <h1 class="h3 m-b-small">
            Coffeekraken s-gradient-component
          </h1>
          <p class="p m-b">
            Provide a nice way to apply a gradient on top of some HTMLElements
          </p>
          <p class="p m-b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate facilisis luctus. Nam non erat orci. Curabitur pulvinar elit quis consequat consequat. Curabitur cursus faucibus enim, nec euismod diam venenatis egestas. Duis at volutpat massa. Praesent finibus felis turpis, bibendum rhoncus massa semper et. Aliquam blandit velit elit, a dignissim libero pellentesque at. Fusce sodales rhoncus massa, at consectetur lectus finibus id.
          </p>
          <a class="btn btn--outline" href="#" title="...">
            Do something cool
          </a>
        </div>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'node_modules/coffeekraken-s-button-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();

        @include s-typography-classes();
        @include s-button-classes();

        body {
          padding: s-space(bigger);
        }

        .btn--outline {
          background: none !important;
        }
      `
    },
    js: {
      language: 'js',
      data: `
        import 'webcomponents.js/webcomponents-lite'
        import SGradientComponent from './dist/index'
      `
    }
  }
}
