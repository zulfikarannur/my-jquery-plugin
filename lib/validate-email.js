(function ($) {
	$.fn.emailValidator = function () {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test($(this).val())) {
        return true;
    }
    else {
        return false;
    }
	}
})(jQuery)
