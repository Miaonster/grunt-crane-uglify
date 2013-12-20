# Grunt-Crane-Uglify

Builder for grunt-crane, which uglify when --compress

## Installation

This plugin requires Grunt `~0.4.2` and grunt-crane `~0.5.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-crane-uglify --save-dev
```

## Usage

Once the plugin has been installed, specify your file with this builder:

```javascript
builder: [
    ["some.js", require("grunt-crane-uglify/builder/uglify")]
]
```