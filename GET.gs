USERNAME = "{the email address you use to sign in to Toggl Plan}";
PASSWORD = "{the password you use for Toggl Plan}";
AUTH_TOKEN = "Bearer " + "{token}";
WORKSPACE = 788132;
SPREADSHEET_ID = "{the ID of your target spreadsheet}"; // The ID of the template spreadsheet is 19g0nBt3bGQVtuWaTd0b56t4FHwlbzN72HYzIdQ18EU4

function renderJSON() {
  // Import Tasks
  var object = JSON.parse(getTasks().getContentText());
  var headers = Object.keys(object[0]);
  var values = object.map(function(e) {return headers.map(function(f) {return e[f]})});
  values.unshift(headers);
  Logger.log(values);
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Tasks");
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);

  // Import Members
  var object = JSON.parse(getMembers().getContentText());
  var headers = Object.keys(object[0]);
  var values = object.map(function(e) {return headers.map(function(f) {return e[f]})});
  values.unshift(headers);
  Logger.log(values);
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Members");
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);

  // Import Milestones
  var object = JSON.parse(getMilestones().getContentText());
  var headers = Object.keys(object[0]);
  var values = object.map(function(e) {return headers.map(function(f) {return e[f]})});
  values.unshift(headers);
  Logger.log(values);
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Milestones");
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
  
  // Import Groups
  var object = JSON.parse(getGroups().getContentText());
  var headers = Object.keys(object[0]);
  var values = object.map(function(e) {return headers.map(function(f) {return e[f]})});
  values.unshift(headers);
  Logger.log(values);
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Groups");
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
  
  // Import Projects
  var object = JSON.parse(getProjects().getContentText());
  var headers = Object.keys(object[0]);
  var values = object.map(function(e) {return headers.map(function(f) {return e[f]})});
  values.unshift(headers);
  Logger.log(values);
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Projects");
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}

function getTasks() {
	const url = "https://api.plan.toggl.com/api/v5/788132/tasks/"; // /timeline?filter=active";
	const response = UrlFetchApp.fetch(url, {
		"method": "GET",
		"headers": {
			"Authorization": AUTH_TOKEN,
			"username": USERNAME,
			"password": PASSWORD,
			"Content-Type": "application/json"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/json",
	});
	return response;
}

function getProjects() {
	const url = "https://api.plan.toggl.com/api/v5/788132/projects";
	const response = UrlFetchApp.fetch(url, {
		"method": "GET",
		"headers": {
			"Authorization": AUTH_TOKEN,
			"username": USERNAME,
			"password": PASSWORD,
			"Content-Type": "application/json"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/json",
	});
	return response;
}

function getMembers() {
	const url = "https://api.plan.toggl.com/api/v5/788132/members";
	const response = UrlFetchApp.fetch(url, {
		"method": "GET",
		"headers": {
			"Authorization": AUTH_TOKEN,
			"username": USERNAME,
			"password": PASSWORD,
			"Content-Type": "application/json"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/json",
	});
	return response;
}

function getMilestones() {
	const url = "https://api.plan.toggl.com/api/v5/788132/milestones";
	const response = UrlFetchApp.fetch(url, {
		"method": "GET",
		"headers": {
			"Authorization": AUTH_TOKEN,
			"username": USERNAME,
			"password": PASSWORD,
			"Content-Type": "application/json"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/json",
	});
	return response;
}

function getGroups() {
	const url = "https://api.plan.toggl.com/api/v5/788132/groups";
	const response = UrlFetchApp.fetch(url, {
		"method": "GET",
		"headers": {
			"Authorization": AUTH_TOKEN,
			"username": USERNAME,
			"password": PASSWORD,
			"Content-Type": "application/json"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/json",
	});
	return response;
}
