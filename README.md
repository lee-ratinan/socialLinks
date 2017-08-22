# socialLinks
jQuery plugin for generating links to social accounts.

## Required
This plugin is built on top of the following:
  * jQuery 3.2.1 (jquery-3.2.1.min.js)
  * BootStrap 4 (bootstrap.min.css, bootstrap.min.js - if you have Hangouts, Kakao Talk, or WhatsApp in the list)
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

For Hangouts, Kakao Talk, and WhatsApp, you have to add the following code to activate the popover. Feel free to modify the looks and feel of the popover by modify the options to this Bootstrap's popover function.

<pre>
$('[data-toggle="sl-popover"]').popover({
    html: true
});
</pre>

### Supported Socials
   * Facebook, use key <code>facebook</code>
   * GitHub, use key <code>github</code>
   * Google+, use key <code>google_plus</code>
   * Google Hangouts, use key <code>hangouts</code>
   * Instagram, use key <code>instagram</code>
   * Kakao Talk, use key <code>kakao</code>
   * LINE, use key <code>line</code>
   * LinkedIn, use key <code>linkedin</code>
   * Facebook Messenger, use key <code>messenger</code>
   * Pinterest, use key <code>pinterest</code>
   * Skype, use key <code>skype</code>
   * StackOverflow, use key <code>stackoverflow</code>
   * Tumblr, use key <code>tumblr</code>
   * Twitter, use key <code>twitter</code>
   * WhatsApp, use key <code>whatsapp</code>
   * YouTube, use key <code>youtube</code>

### Supported Contact Links and Others
  * Address (Generate your address with a link to Google Maps e.g. <code>address: {id: "Sydney+Opera+House", account: "Sydney Opera House"}</code> will produce link to https://www.google.com/maps/place/Sydney+Opera+House labeled "Sydney Opera House", the ID has to be specific enough for Google Maps to recognize, you should test the link before launching it to production), use key <code>address</code>
   * Attachment (Generate the link for downloading the file where <code>id</code> is the path to the file), use key <code>attach</code>
   * Email Address (Generate the link with <code>mailto:</code> protocol where <code>id</code> is the email address), use key <code>email</code>
   * Mobile no. (Generate the link with <code>tel:</code> protocol where <code>id</code> is phone number), use key <code>mobile</code>
   * Phone no. (Generate the link with <code>tel:</code> protocol where <code>id</code> is phone number), use key <code>phone</code>
   * PayPal Me link (Generate the link to your PayPal Me page for requesting money where <code>id</code> is your account's link), use key <code>paypal</code>
   * Personal Website (Generate the link to your website where <code>id</code> is your site's URL), use key <code>web</code>
   * WordPress (Generate the link to your blog where <code>id</code> is your WordPress site's URL), use key <code>wordpress</code>
