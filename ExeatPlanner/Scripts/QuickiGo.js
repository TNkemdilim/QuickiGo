/// <reference path="typings/jquery/jquery.d.ts" />
var FormUpdater = (function () {
    function FormUpdater() {
    }
    FormUpdater.initialiseBinding = function () {
        Binding.bindFullName();
    };
    return FormUpdater;
}());
var Binding = (function () {
    function Binding() {
    }
    Binding.bindFullName = function () {
        $("#form-fullname").on("change keyup paste", function () {
            var newValue = this.value.toString();
            $(".letter-fullname").each(function (index, elem) {
                elem.innerHTML = newValue;
            });
        });
    };
    return Binding;
}());
FormUpdater.initialiseBinding();
