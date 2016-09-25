(function(module) {

    var bust = {};
    var systemLocate = System.locate;
    var systemNormalize = System.normalize;

    var chksums = module.exports.chksums = {
    "bundles/angular.min.js": "d9a6b6542823aa1399d834ac5fe0871d5aecf9f9",
    "bundles/jquery.min.js": "5147c6b944c84f1d17b2d1545ac49c2ef44d5308",
    "bundles/vendor/semantic.min.js": "c63e9d9b177dc4f74453b1a4fab8e9dd662fe2a4",
    "bundles/app/app.min.js": "5bb3227c8d008e8f3c68d7b76d1306b7ab8c843e"
};

    var bundles = module.exports.bundles = {
    "bundles/angular.min.js": [
        "npm:angular@1.5.8.js",
        "npm:angular@1.5.8/angular.js"
    ],
    "bundles/jquery.min.js": [
        "npm:jquery@2.2.4.js",
        "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "bundles/vendor/semantic.min.js": [
        "vendor/semantic.js",
        "vendor/semantic@2.2.4/semantic.min.js",
        "vendor/semantic@2.2.4/semantic.min.css!github:systemjs/plugin-css@0.1.29.js"
    ],
    "bundles/app/app.min.js": [
        "app/app.module.js",
        "app/app.controller.js"
    ]
};

    System.config({bundles: bundles});

    System.normalize = function (name, pName, pAddress) {
        return systemNormalize.call(this, name, pName, pAddress).then(function (address) {
            var chksum = chksums[name];
            if (chksums[name]) { bust[address] = chksum; }
            return address;
        });
    };

    System.locate = function (load) {
        return Promise.resolve(systemLocate.call(this, load)).then(function (address) {
            var chksum = bust[address];
            return (chksum) ? address + '?' + chksum : address;
        });
    };

})((typeof module !== 'undefined') ? module : {exports: {}}, this);
