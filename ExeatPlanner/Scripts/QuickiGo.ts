/// <reference path="typings/jquery/jquery.d.ts" />
class FormUpdater {
    public static initialiseBinding(): void {
        Binding.bindFullName();
    }
}

class Binding {
    public static bindFullName(): void {
        $("#form-fullname").on("change keyup paste", function () {
            const newValue = this.value.toString();

            $(".letter-fullname").each((index, elem) => {
                elem.innerHTML = newValue;
            });
        });
    }
}

FormUpdater.initialiseBinding();