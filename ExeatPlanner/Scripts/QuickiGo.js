/// <reference path="typings/jquery/jquery.d.ts" />
var FormUpdater = (function () {
    function FormUpdater() {
    }
    FormUpdater.initialiseBinding = function () {
        this.bindFullName();
    };
    FormUpdater.bindFullName = function () {
        Binding.bind("#form-fullname", ".letter-fullname");
    };
    return FormUpdater;
}());
var Binding = (function () {
    function Binding() {
    }
    Binding.bind = function (elementLocator, bindingLocator) {
        $(elementLocator).on("change keyup paste", function () {
            var newValue = this.value.toString();
            $(bindingLocator).each(function (index, element) {
                element.innerHTML = newValue;
            });
        });
    };
    return Binding;
}());
FormUpdater.initialiseBinding();
