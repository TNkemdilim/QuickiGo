/// <reference path="typings/jquery/jquery.d.ts" />
var FormUpdater = (function () {
    function FormUpdater() {
    }
    FormUpdater.initialiseBinding = function () {
        this.bindFullName();
        this.bindPurposeOfLetter();
        this.bindSenderAddress();
        this.bindRecipientAddress();
    };
    FormUpdater.bindFullName = function () {
        Binding.bind("#form-fullname", ".letter-fullname");
    };
    FormUpdater.bindPurposeOfLetter = function () {
        Binding.bind("#form-purpose-of-letter", ".letter-purpose");
    };
    FormUpdater.bindSenderAddress = function () {
        Binding.bind("#form-sender-address", ".letter-sender-address");
    };
    FormUpdater.bindRecipientAddress = function () {
        Binding.bind("#form-recipient-address", ".letter-recipient-address");
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
