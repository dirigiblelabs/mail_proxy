# Usage

POST @ [{host}/services/js/mail/proxy/service.js]({host}/services/js/mail/proxy/service.js)

```javascript
{
	"from": "from.address@example.com",
	"to": "to.address@example.com",
	"subject": "Mail Proxy",
	"content": "<h1>This is the content sent by the Mail Proxy<h1><hr><a href=\"https://github.com/dirigiblelabs/mail_proxy\">Mail Proxy</a> GitHub Repository!",
	"type": "html"
}
```

The **type** property refers to the desired content type:
- html
- plain
- ...
