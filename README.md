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
  1. `social` is the object of social medias and other contactable channels, with `id` and `account`.
  2. `showLabel` (boolean) Indicates whether to show the label in the output.
  3. `showAccount` (boolean) Indicates whther to show the account's **name/display name/number**.
  4. `showLink` (boolean) Indicates whether to show the URL.
  5. `trueColor` (boolean) Indicates whether to override the color to the social media's brand color.
  6. `linkTemplate` (html) This is for overriding the template for social medias that can be linked directly to the account specified in `social`.
  7. `popTemplate` (html) This is for overriding the template for social medias that require a popup message with the link for downloading the app and adding the account/id.

## Output

The plugin will add `<ul>` with the list of social medias and contact information to the selected `<div>`.
