# socialLinks
jQuery plugin for easily generating links to social accounts.

## Prerequisites
  1. jQuery 3.2.1
  2. BootStrap4
  3. Popper

## Installing
Download the directory and include `[path_to]/socialLinks.min.js` and `[path_to]/socialLinks.min.css` in your html file.
  
## How to use
Create a `<div>` element and activate `socialLinks` via jQuery.

```
<div id="example1"></div>
<script>
$(function() {
    $("#socialLinks").socialLinks({
        social: {
            mobile: {id: "+65-00000000", account: "+65 0000 0000"},
            email: {id: "john.doe@example.com", account: "john.doe@example.com"},
            address: {id: "Sydney+Opera+House", account: "Sydney Opera House"},
            github: {id: "lee-ratinan", account: "Ratinan Lee"}
        },
        showLabel: false,
        showAccount: true,
        showLink: false,
        trueColor: true,
        linkTemplate: '...',
        popTemplate: '...'
    });
});
</script>
```

Where
  1. `social` is the object of social media and other contactable channels, with `id` and `account`.
  2. `showLabel` (boolean) Indicates whether to show the label in the output. (default: `false`)
  3. `showAccount` (boolean) Indicates whther to show the account's **name/display name/number**. (default: `true`)
  4. `showLink` (boolean) Indicates whether to show the URL. (default: `false`)
  5. `trueColor` (boolean) Indicates whether to override the color to the social media's brand color. (default: `true`)
  6. `linkTemplate` (html) This is for overriding the template for social medias that can be linked directly to the account specified in `social`.
  7. `popTemplate` (html) This is for overriding the template for social medias that require a popup message with the link for downloading the app and adding the account/id.

## Supported Social Media and Others

### Social Media
  1. Dribbble (`dribbble: {id: '', account: ''}`)
  2. Facebook (`facebook: {id: '', account: ''}`)
  3. GitHub (`github: {id: '', account: ''}`)
  4. Google+ (`google_plus: {id: '', account: ''}`)
  5. Hangouts (`hangouts: {id: '', account: ''}`)
  6. Instagram (`instagram: {id: '', account: ''}`)
  7. Kakao (`kakao: {id: '', account: ''}`)
  8. LINE (`line: {id: '', account: ''}`)
  9. LinkedIn (`linkedin: {id: '', account: ''}`)
  10. Messenger (`messenger: {id: '', account: ''}`)
  11. PayPal Me (`paypal: {id: '', account: ''}`)
  12. Pinterest (`pinterest: {id: '', account: ''}`)
  13. QQ (`qq: {id: '', account: ''}`)
  14. Skype (`skype: {id: '', account: ''}`)
  15. StackOverflow (`stackoverflow: {id: '', account: ''}`)
  16. Tumblr (`tumblr: {id: '', account: ''}`)
  17. Twitter (`twitter: {id: '', account: ''}`)
  18. WeChat (`wechat: {id: '', account: ''}`)
  19. WhatsApp (`whatsapp: {id: '', account: ''}`)
  20. YouTube (`youtube: {id: '', account: ''}`)
  
### Contact
  1. Address (`address: {id: '[Query string that is Google Map-friendly]', account: '[What to be displayed if showAccount is true]'}`)
  2. Email (`email: {id: '[Email address]', account: '[Email address]'}`)
  3. Mobile no. (`mobile: {id: '[Phone number, should be in E123 or E164]', account: '[Phone number to be shown]'}`)
  4. Phone no. (`phone: {id: '[Phone number, should be in E123 or E164]', account: '[Phone number to be shown]'}`)
  5. Website (`web: {id: '[URL]', account: '[Website name]'}`)
  6. WordPress (`wordpress: {id: '[URL]', account: '[Website name]'}`)
  
### Others
  1. Attachment (`attach: {id: '[URL of the file]', account: '[Anything to be shown]'}`)

## Output

The plugin will add `<ul>` with the list of social medias and contact information to the selected `<div>`.

## Next in V2.1

The links will be fixed to open the app (if available) first before opening the link in browser.
