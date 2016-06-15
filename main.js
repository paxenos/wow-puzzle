(function() {
	var PAX = window;
	PAX._ = _;
	PAX.auditTrail = [];
	PAX.TOGGLE_STATE_ON = "btn btn-success btn-lg";
	PAX.TOGGLE_STATE_OFF = "btn btn-primary-outline btn-lg";

	PAX.initialize = function() {
		toggleColor("btn1");
		toggleColor("btn2");
		toggleColor("btn5");
		toggleColor("btn6");
		toggleColor("btn7");
	}

	PAX.log = function(num) {
		PAX.auditTrail.push(num);
		var message = "<span>You selected: " + num + "</span><br />";
		document.getElementById("auditTrail").innerHtml = message;
		console.log(document.getElementById("auditTrail"));
	}

	PAX.toggle = function(num) {
		PAX.log(num);

		buttons = [];

		if (num == 1) {
			buttons.push(1, 2);
		} else if (num == 8) {
			buttons.push(7, 8);
		} else {
			buttons.push(num - 1, num, num + 1);
		}

		for (i = 0; i < buttons.length; i++) {
			var buttonName = "btn" + buttons[i];
			PAX.toggleColor(buttonName);
		}
	}

	PAX.toggleColor = function(element) {
		var currentState = getElementBackground(element);

		if (currentState != PAX.TOGGLE_STATE_ON) {
			PAX.setElementBackground(element, PAX.TOGGLE_STATE_ON);
		} else {
			PAX.setElementBackground(element, PAX.TOGGLE_STATE_OFF);
		}
	}

	PAX.getElementBackground = function(element) {
		return document.getElementById(element).className;
	}

	PAX.setElementBackground = function(element, classes) {
		document.getElementById(element).className = classes;
	}

	PAX.initialize();
})();