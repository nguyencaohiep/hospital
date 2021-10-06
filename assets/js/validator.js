function Validator(options) {
    function validate(input, check, rule) {
        var mess = rule.test(input.value);
        if (mess) {
            check.style.color = "#ee7896";
            input.classList.remove('valid');
            input.classList.add('invalid');
        } else {
            check.style.color = "#00bfa6";
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
        return !mess;
    }

    var formatElement = document.querySelector(options.form);
    if (formatElement) {
        formatElement.onsubmit = function(e) {
            e.preventDefault();
            var isFormValid = true;
            options.rules.forEach(function(rule) {
                var field = formatElement.querySelector(rule.selector);
                var check = field.querySelector(".check");
                var input = field.getElementsByTagName("input")[0];
                var isValid = validate(input, check, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            // get information from signup form
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var fields = formatElement.querySelectorAll('.input-field');
                    var formValue = Array.from(fields).reduce(function(value, field) {
                        var input = field.getElementsByTagName("input")[0];
                        return (value[field.id] = input.value) && value;
                    }, {});
                    options.onSubmit(formValue);
                } else {
                    formatElement.submit();
                }
            }
        }

        options.rules.forEach(function(rule) {
            var field = formatElement.querySelector(rule.selector);
            var check = field.querySelector(".check");

            if (field) {
                var input = field.getElementsByTagName("input")[0];
                if (input) {
                    // xử lí blur
                    input.onblur = function() {
                            validate(input, check, rule);
                        }
                        // xử lí oninput(user nhập thông tin)
                    input.oninput = function() {
                        input.classList.remove('invalid');
                        input.classList.add('valid');
                    }
                }
            }
        });
    }
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'error';
        }
    };
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'error';
        }
    }
}


Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : 'error';
        }
    }
}

Validator.cnfPass = function(selector, getPass, minLen) {
    return {
        selector: selector,
        test: function(value) {
            if (value != "" & value.length >= minLen)
                return value === getPass() ? undefined : 'error';
            else
                return 'error';
        }
    }
}