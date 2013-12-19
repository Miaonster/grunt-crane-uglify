var promise = require('../util/promise');

module.exports = function (grunt) {
    var src  = grunt.config('src');
    var dest = grunt.config('dest');
    var minify = grunt.option('compress');

    function Builder (id) {
        this.id = id;
        this.content = grunt.file.read(src + this.id);
    }

    Builder.prototype.build = function () {
        var defer = promise.Deferred();
        var content = '';

        try {
            content = builder(this.id, this.content, minify);
            grunt.file.write(dest + this.id, content);
        } catch (ex) {
            return defer.reject(ex.message);
        }

        return defer.resolve([this.id]);
    };

    return Builder;
};

function builder (id, content, minify) {
    if (minify) {
        return require('uglify-js').minify(content , {fromString:true}).code;
    }

    return content;
}
