/* globals $ */
/* eslint-env node, dirigible */

var request = require('net/http/request');
var response = require('net/http/response');
var mail = require('service/mail');

handleRequest(request, response);

function handleRequest(httpRequest, httpResponse) {
	try {
		dispatchRequest(httpRequest, httpResponse);
	} catch (e) {
		console.error(e);
		sendResponse(httpResponse, httpResponse.BAD_REQUEST, 'text/plain', e);
	}
}

function dispatchRequest(httpRequest, httpResponse) {
	response.setContentType('application/json; charset=UTF-8');
	response.setCharacterEncoding('UTF-8');

	switch (httpRequest.getMethod()) {
		case 'POST':
			handlePostRequest(httpRequest, httpResponse);
			break;
		default:
			handleNotAllowedRequest(httpResponse);
	}
}

function handlePostRequest(httpRequest, httpResponse) {
	var sendMailRequest = getRequestBody(httpRequest);

	var from = sendMailRequest.from;
	var to = sendMailRequest.to;
	var subject = sendMailRequest.subject;
	var content = sendMailRequest.content;
	try {
		mail.send(from, to, subject, content);
		sendResponse(httpResponse, httpResponse.ACCEPTED);
	} catch (e) {
		sendResponse(httpResponse, httpResponse.BAD_REQUEST, 'application/json', JSON.stringify({
			'errorMessage': e
		}));
	}
}

function handleNotAllowedRequest(httpResponse) {
	sendResponse(httpResponse, httpResponse.METHOD_NOT_ALLOWED);
}

function getRequestBody(httpRequest) {
	try {
		return JSON.parse(httpRequest.readInputText());
	} catch (e) {
		return null;
	}
}

function sendResponse(response, status, contentType, content) {
	response.setStatus(status);
	response.setContentType(contentType);
	response.println(content);
	response.flush();
	response.close();	
}
