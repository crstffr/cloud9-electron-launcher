/**
 * Produce an object that holds instances of Angular dependencies.
 * Allows for a less crufty DI implementation when working with
 * Angular in ES6.
 *
 * ***************************************************************
 *
 * Usage:
 *
 * import {DiHelper} from 'app/utils/dihelper';
 *
 * let di = new DiHelper([
 *  '$q',
 *  '$http',
 *  '$location',
 *  '$stateParams'
 * ]);
 *
 * class MyClass {
 *
 *  constructor() {
 *
 *    di.init(arguments);
 *
 *    // the injected dependencies are now mapped into di
 *    // object and can be used throughout the class methods.
 *
 *  }
 *
 *  someMethod() {
 *
 *    // di.$q
 *    // di.$http
 *    // di.$location
 *    // di.$stateParams
 *
 *  }
 * }
 *
 * // Tell Angular to inject the dependencies:
 *
 * MyClass.$inject = di.$inject;
 *
 * ***************************************************************
 *
 * @param {Array} $inject
 */
export class DiHelper {

    constructor ($inject) {
        this.$inject = (Array.isArray($inject)) ? $inject : [];
    }

    /**
     * Init the helper by iterating over the $inject array
     * and mapping the dependencies directly onto this object.
     *
     * @param {Arguments} args
     */
    init (args) {
        this.$inject.forEach((name, i) => {
            this[name] = args[i];
        });
    }

}