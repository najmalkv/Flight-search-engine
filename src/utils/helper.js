export function  convertStringToDate(dateString) {
		let parts = dateString.split('-')
		return new Date(parts[0], (parts[1]-1), parts[2], 0, 0, 0, 0)
	}

export function formatAMPM(time) {
  // Check correct time format and split into components
  time = time.toString().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

export function getParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

export function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function getMonthName(monthNumber, short) {
	if(monthNumber < 12)
	return short  ? monthNames[monthNumber].substr(0, 3) : monthNames[monthNumber]

}

export function minMax(items, key) {
    return items.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val[key] < acc[0] ) ? val[key] : acc[0]
        acc[1] = ( acc[1] === undefined || val[key] > acc[1] ) ? val[key] : acc[1]
        return acc;
    }, []);
}