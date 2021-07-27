# Overview

The goal of this project is to be used as a **"Mail Proxy"** (REST API).

# Config

#### SAP CP
- Create a **"Mail"** [destination](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/a191df7fa8f84be18578b3da3dd10654.html) named **"Destination"**
- Add the following SMTP(S) [properties](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/e70a574cbb57101494a781920e3c9d64.html#loioe70a574cbb57101494a781920e3c9d64__section_testCloud)

# Usage

POST @ [{host}/services/js/mail/proxy/service.js]({host}/services/js/mail/proxy/service.js)

```javascript
{
	"from": "from.address@example.com",
	"to": "to.address@example.com",
	"subject": "Mail Proxy",
	"content": "This is the content sent by the Mail Proxy (https://github.com/dirigiblelabs/mail_proxy)"
}
```
