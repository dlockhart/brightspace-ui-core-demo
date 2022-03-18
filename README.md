# brightspace-ui-core-demo

This repo is a demonstration of how to use several [@brightspace-ui/core](https://github.com/BrightspaceUI/core/) web components.

## Setup

After cloning the repo and setting up a current version of Node.js, run:

```bash
npm install
```

## Starting the demo

To launch a web server that runs the demo found in `index.html`:

```bash
npm start
```

## How it works

At D2L, we use a browser platform feature called [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to build reusable UI components to use within our applications. Web components essentially let you define your own custom tags, and are [supported across all modern browsers](https://caniuse.com/?search=web%20components) without the need for any polyfills.

To use a particular component or set of components from `@brightspace-ui/core`, import the file(s) you need (typically in your document's `<head>`) and then use their tags in your markup:

```html
<script type="module">
	import '@brightspace-ui/core/components/button/button.js';
</script>
<d2l-button>I'm a D2L button</d2l-button>
```

### Development server

While developing, we use [@web/dev-server](https://modern-web.dev/guides/dev-server/getting-started/), which helps automatically resolve bare module imports that look like `@brightspace-ui/core/some/path.js` to its proper location in `node_modules/@brightspace-ui/core/some/path.js`. It also has nice features like hot reloading whenever you change a file.

### Building for production

In production, you can use a bundler [like rollup.js](https://rollupjs.org/guide/en/) to build your project so that you don't need any type of special web server.

This demo project contains a script which will use Rollup to do a production build:

```bash
npm run build
```

The output goes to the `build` directory, and can be served as static files by any static web server.
