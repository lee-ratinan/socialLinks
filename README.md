# socialLinks
jQuery plugin for generating links to social accounts

## Required
This plugin is built on top of the following:
  * jQuery 3.2.1 (jquery-3.2.1.min.js)
  * BootStrap 4 (bootstrap.min.css, bootstrap.min.js)
  * Popper (required by Bootstrap, popper.min.js)
  
## How to use

<pre>
$("#socialLinks").socialLinks({
    social: {
        key: { id: "...", account: "..." }
    },
    showLabel: true,
    showAccount: true,
    trueColor: true
});
</pre>

There are 4 parameters to be set to socialLinks() jQuery plugin. The first one is the most important. All social networks and other online platforms provide their users the ID and the account name/display name, etc, hence, to show the links for these social networks, you have to specify the ID (to be linked) and account name (to be shown) by replacing <code>key: { id: "...", account: "..." }</code> by the real code, ID, and account name.

For example, Facebook's account owner owns the account ID xyzabc, display name John Doe, to show this account, the following code must be added to the index page.

<pre>
facebook: {id: "xyzabc", account: "John Doe"}
</pre>

### Supported Socials and Others
   * Address (e.g. <code>address: {id: "Sydney+Opera+House", account: "Sydney Opera House"}</code> will produce link to Google Maps.
   * Attachment (e.g. <code>attach: {id: "http://www.example.com/somefile.pdf", account: "Some File"}</code>
   * Email Address
   * Facebook
   * GitHub
   * Google+
   * Google Hangouts
   * Intagram
   * Kakao Talk
   * LINE
   * Google Plus
   * Google Hangouts
   * etc...
