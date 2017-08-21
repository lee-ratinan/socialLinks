(function ( $ ) {
    var socialLinkTemplates = {
        address: '<li><a class="sl-link[[color]]" href="https://www.google.com.sg/maps/place/[[id]]" target="_blank"><i class="slicon-address"></i>[[label]] [[account]]</a></li>',
        attach: '',
        dribbble: '',
        dropbox: '',
        email: '<li><a class="sl-link[[color]]" href="mailto:[[id]]" target="_blank"><i class="slicon-email"></i>[[label]] [[account]]</a></li>',
        facebook: '<li><a class="sl-link[[color]]" href="https://www.facebook.com/[[id]]" target="_blank"><i class="slicon-facebook"></i>[[label]] [[account]]</a></li>',
        flickr: '',
        github: '<li><a class="sl-link[[color]]" href="https://github.com/[[id]]" target="_blank"><i class="slicon-github"></i>[[label]] [[account]]</a></li>',
        google_plus: '<li><a class="sl-link[[color]]" href="https://plus.google.com/+[[id]]" target="_blank"><i class="slicon-google-plus"></i>[[label]] [[account]]</a></li>',
        hangouts: '<li><a class="sl-link[[color]]" href="#" data-toggle="sl-popover" data-content="Add <b>[[id]]</b> to your contact list and start chating at <a href=\'https://hangouts.google.com\' target=\'_blank\'>hangouts.google.com</a>"><i class="slicon-hangouts"></i>[[label]] [[account]]</a></li>',
        instagram: '<li><a class="sl-link[[color]]" href="https://www.instagram.com/[[id]]" target="_blank"><i class="slicon-instagram"></i>[[label]] [[account]]</a></li>',
        kakao: '',
        line: '<li><a class="sl-link[[color]]" href="http://line.me/ti/p/[[id]]" target="_blank"><i class="slicon-line"></i>[[label]] [[account]]</a></li>',
        linkedin: '<li><a class="sl-link[[color]]" href="https://www.linkedin.com/in/[[id]]/" target="_blank"><i class="slicon-linkedin"></i>[[label]] [[account]]</a></li>',
        messenger: '<li><a class="sl-link[[color]]" href="https://m.me/[[id]]/" target="_blank"><i class="slicon-messenger"></i>[[label]] [[account]]</a></li>',
        mobile: '<li><a class="sl-link[[color]]" href="tel:[[id]]" target="_blank"><i class="slicon-mobile"></i>[[label]] [[account]]</a></li>',
        paypal: '',
        phone: '<li><a class="sl-link[[color]]" href="tel:[[id]]" target="_blank"><i class="slicon-phone"></i>[[label]] [[account]]</a></li>',
        pinterest: '',
        qq: '',
        reddit: '',
        skype: '<li><a class="sl-link[[color]]" href="#" data-toggle="sl-popover" data-content="Get your <a href=\'https://www.skype.com/en/download-skype/\' target=\'_blank\'>Skype</a> and add my ID: <b>[[id]]</b>"><i class="slicon-skype"></i>[[label]] [[account]]</a></li>',
        stackoverflow: '',
        tumblr: '',
        twitter: '<li><a class="sl-link[[color]]" href="https://twitter.com/[[id]]" target="_blank"><i class="slicon-twitter"></i>[[label]] [[account]]</a></li>',
        vimeo: '',
        web: '<li><a class="sl-link[[color]]" href="[[id]]" target="_blank"><i class="slicon-web"></i>[[label]] [[account]]</a></li>',
        wechat: '',
        whatsapp: '<li><a class="sl-link[[color]]" href="#" data-toggle="sl-popover" data-content="Get your <a href=\'https://www.whatsapp.com\' target=\'_blank\'>WhatsApp</a> and add my telephone number to your phone contact: <b>[[id]]</b>"><i class="slicon-whatsapp"></i>[[label]] [[account]]</a></li>',
        wordpress: '<li><a class="sl-link[[color]]" href="[[id]]" target="_blank"><i class="slicon-wordpress"></i>[[label]] [[account]]</a></li>',
        youku: '',
        youtube: '<li><a class="sl-link[[color]]" href="https://www.youtube.com/user/[[id]]" target="_blank"><i class="slicon-youtube"></i>[[label]] [[account]]</a></li>'
    };
    var socialLinkLabels = {
        address: 'Address',
        attach: 'Attachment',
        dribbble: 'Dribbble',
        dropbox: 'Dropbox',
        email: 'Email Address',
        facebook: 'Facebook',
        flickr: 'Flickr',
        github: 'GitHub',
        google_plus: 'Google+',
        hangouts: 'Google Hangouts',
        instagram: 'Instagram',
        kakao: 'KakaoTalk',
        line: 'LINE',
        linkedin: 'LinkedIn',
        messenger: 'Messenger',
        mobile: 'Mobile no.',
        paypal: 'PayPal',
        phone: 'Phone no.',
        pinterest: 'Pinterest',
        qq: 'QQ',
        reddit: 'Reddit',
        skype: 'Skype',
        stackoverflow: 'StackOverflow',
        tumblr: 'Tumblr',
        twitter: 'Twitter',
        vimeo: 'Vimeo',
        web: 'Personal Website',
        wechat: 'WeChat',
        whatsapp: 'WhatsApp',
        wordpress: 'Wordpress',
        youku: 'Youku',
        youtube: 'YouTube'
    };
    $.fn.socialLinks = function(options) {
        var str = "<ul class='socialLinks'>";
        $.each(options.social, function (i, v) {
            var colorCls = '';
            if (options.trueColor) {
                colorCls = ' sl-' + i + '-color';
            }
            str += processSocial(i, v.id, v.account, options.showLabel, options.showAccount, colorCls);
        });
        str += "</ul>";
        this.html(str);
    };
    function processSocial(key, accountId, accountName, label, account, colorCls) {
        var str = socialLinkTemplates[key].replace('[[color]]', colorCls).replace('[[id]]', accountId);
        if (label) {
            var sep = '';
            if (account) {
                sep = ': ';
            }
            str = str.replace('[[label]]', socialLinkLabels[key] + sep);
        } else {
            str = str.replace('[[label]]', '');
        }
        if (account) {
            str = str.replace('[[account]]', accountName);
        } else {
            str = str.replace('[[account]]', '');
        }
        return str;
    }
}(jQuery));