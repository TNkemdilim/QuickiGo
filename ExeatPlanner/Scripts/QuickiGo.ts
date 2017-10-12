/// <reference path="typings/jquery/jquery.d.ts" />
class FormUpdater {
    public static initialiseBinding(): void {
        this.bindFullName();
    }

    static bindFullName(): void {
        Binding.bind("#form-fullname", ".letter-fullname");
    }

    static bindFullName(): void {
        Binding.bind("#form-fullname", ".letter-fullname");
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