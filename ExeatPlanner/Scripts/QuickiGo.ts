/// <reference path="typings/jquery/jquery.d.ts" />
class FormUpdater {
    public static initialiseBinding(): void {
        this.bindFullName();
        this.bindPurposeOfLetter();
        this.bindSenderAddress();
        this.bindRecipientAddress();
    }

    static bindFullName(): void {
        Binding.bind("#form-fullname", ".letter-fullname");
    }

    static bindPurposeOfLetter(): void {
        Binding.bind("#form-purpose-of-letter", ".letter-purpose");
    }

    static bindSenderAddress(): void {
        Binding.bind("#form-sender-address", ".letter-sender-address");
    }

    static bindRecipientAddress(): void {
        Binding.bind("#form-recipient-address", ".letter-recipient-address");
    }
}

class Binding {
    static bind(elementLocator: string, bindingLocator: string): void {
        $(elementLocator).on("change keyup paste", function () {
            const newValue = this.value.toString();

            $(bindingLocator).each((index, element) => {
                element.innerHTML = newValue;
            });
        });
    }
}

FormUpdater.initialiseBinding();