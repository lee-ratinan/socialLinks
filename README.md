# socialLinks
jQuery plugin for generating links to social accounts.

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

There are 4 parameters to be set to socialLinks() jQuery plugin. The first one is the most important. All social networks and other online platforms provide their users the ID and the account name/display name, etc, hence, to show the links for these social networks, you have to specify the ID (to be linked) and account name (to be shown) by replacing <code>key: { id: "...", account: "..." }</code> by the real key, ID, and account name.

For example, Facebook's account owner owns the account ID xyzabc, display name John Doe, to show this account, the following code must be added to the index page.

<pre>
facebook: {id: "xyzabc", account: "John Doe"}
</pre>

### Supported Socials
   * Facebook, use key <code>facebook</bode>
   * GitHub, use key <code>github</bode>
   * Google+, use key <code>google_plus</bode>
   * Google Hangouts, use key <code>hangouts</bode>
   * Instagram, use key <code>instagram</bode>
   * Kakao Talk, use key <code>kakao</bode>
   * LINE, use key <code>line</bode>
   * LinkedIn, use key <code>linkedin</bode>
   * Facebook Messenger, use key <code>messenger</bode>
   * Pinterest, use key <code>pinterest</bode>
   * Skype, use key <code>skype</bode>
   * StackOverflow, use key <code>stackoverflow</bode>
   * Tumblr, use key <code>tumblr</bode>
   * Twitter, use key <code>twitter</bode>
   * WhatsApp, use key <code>whatsapp</bode>
   * YouTube, use key <code>youtube</bode>

### Supported Contact Links and Others
  * Address (Generate your address with a link to Google Maps e.g. <code>address: {id: "Sydney+Opera+House", account: "Sydney Opera House"}</code> will produce link to https://www.google.com/maps/place/Sydney+Opera+House labeled "Sydney Opera House", the ID has to be specific enough for Google Maps to recognize, you should test the link before launching it to production), use key <code>address</code>
   * Attachment (Generate the link for downloading the file where <code>id</code> is the path to the file), use key <code>attach</code>
   * Email Address (Generate the link with <code>mailto:</code> protocol where <code>id</code> is the email address), use key <code>email</code>
   * Mobile no. (Generate the link with <code>tel:</code> protocol where <code>id</code> is phone number), use key <code>mobile</code>
   * Phone no. (Generate the link with <code>tel:</code> protocol where <code>id</code> is phone number), use key <code>phone</code>
   * PayPal Me link (Generate the link to your PayPal Me page for requesting money where <code>id</code> is your account's link), use key <code>paypal</code>
   * Personal Website (Generate the link to your website where <code>id</code> is your site's URL), use key <code>web</code>
   * WordPress (Generate the link to your blog where <code>id</code> is your WordPress site's URL), use key <code>wordpress</code>
