# socialLinks
jQuery plugin for generating links to social accounts

## Required
This plugin is built on top of the following:
  * jQuery 3.2.1 (.../jquery-3.2.1.min.js)
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
$('[data-toggle="sl-popover"]').popover({
    html: true
});
</pre>
