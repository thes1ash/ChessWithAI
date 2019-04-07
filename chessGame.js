function translateVerticalPos(num) {
	var letter = "Z";
	switch (num) {
		case 0:
			letter = "A";
			break;
		case 1:
			letter = "B";
			break;
		case 2:
			letter = "C";
			break;
		case 3:
			letter = "D";
			break;
		case 4:
			letter = "E";
			break;
		case 5:
			letter = "F";
			break;
		case 6:
			letter = "G";
			break;
		case 7:
			letter = "H";
			break;
		default:
			letter = "Z";
			break;
	}
	return letter;
}

$("#board").find("tr").each(function() {
	for (i = 0; i < 8; i++) {
		$(this).append(
			'<td id=' +
			translateVerticalPos(i) +
			$(this).attr("id") +
			'">' +
			translateVerticalPos(i) +
			$(this).attr("id") +
			'</td>'
		);
	}
})

function countMovements(origX, origY, vertical, horizontal, diagonal, knight) {
	if (knight == 1) {
		newPositions[8] = {};
	} else {
		newPositions[(vertical) + (horizontal) + (diagonal)] = {};
	}
	if (vertical > 0) {
		for (i = 0; i < 2 * vertical; i++) {
			while (i < vertical) {
				newPosition.push(stranslateVerticalPos(origY - i) + origX);
			}
			newPosition.push(translateVerticalPos(origY + (i - vertical)) + origX);
		}
	}
}

class Pieces {
	constructor(color, positionX, positionY) {
		this.positionY = positionY - 1;
		this.positionX = positionX - 1;
	}
	taken(boolean) {
		if (boolean == 0) {
			let isTaken = false;
		} else {
			let isTaken = true;
		}
	}

}
class King extends Pieces {
	constructor(color, positionX, positionY) {
		let isTaken = false;

	}
}