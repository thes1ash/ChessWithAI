$("#board").find("tr").each(function() {
	for (i = 0; i < 8; i++) {
		switch (i) {
			case 0:
				var letter = "A";
				break;
			case 1:
				var letter = "B";
				break;
			case 2:
				var letter = "C";
				break;
			case 3:
				var letter = "D";
				break;
			case 4:
				var letter = "E";
				break;
			case 5:
				var letter = "F";
				break;
			case 6:
				var letter = "G";
				break;
			case 7:
				var letter = "H";
				break;
			default:
				var letter = "Z";
				break;

		}
		$(this).append('<td id=' + letter + $(this).attr("id") + '"></td>');

	}
})