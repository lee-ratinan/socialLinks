(function ($) {
    $.fn.socialLinks = function(options) {
        var settings = $.extend({}, $.fn.socialLinks.defaults, options);
        this.each(function() {
            var str = '<ul class="socialLinks">';
            $.each(settings.social, function(social, accountInfo) {
                str += processSocial(social, accountInfo.id, accountInfo.account, settings.showLabel, settings.showAccount, settings.showLink, settings.trueColor, settings.linkTemplate, settings.popTemplate);
            });
            str += '</ul>';
            $(this).html(str);
        });
    };
    function processSocial(social, id, accountName, showLabel, showAccount, showLink, trueColor, linkTemplate, popTemplate) {
        var link = ($.fn.socialLinks.links[social]).replace('[[id]]', id),
            colorClass = '',
            label = '',
            account = '',
            spanLink = '';
        if (trueColor) {
            colorClass = 'sl-' + social + '-color';
        }
        if (showLabel) {
            label = $.fn.socialLinks.labels[social];
            if (showAccount || showLink) {
                label += ': ';
            }
        }
        if (showAccount) {
            account = accountName;
        }
        if (showLink) {
            spanLink = link;
        }
        switch (social) {
            case 'hangouts':
            case 'kakao':
            case 'qq':
            case 'wechat':
            case 'whatsapp':
                return popTemplate.replace('[[color_class]]', colorClass).replace('[[link]]', link).replace('[[social]]', social).replace('[[label]]', label).replace('[[account_name]]', account);
                break;
            default:
                return linkTemplate.replace('[[color_class]]', colorClass).replace('[[link]]', link).replace('[[social]]', social).replace('[[label]]', label).replace('[[account_name]]', account).replace('[[span_link]]', spanLink);
                break;

        }
    }
    $.fn.socialLinks.defaults = {
        showLabel: false,
        showAccount: true,
        showLink: false,
        trueColor: true,
        linkTemplate: '<li><a class="sl-link [[color_class]]" href="[[link]]" target="_blank"><i class="slicon-[[social]]"></i> <span class="socialLabel">[[label]]</span> <span class="socialAccountName">[[account_name]]</span> <span class="socialLink">[[span_link]]</span></a></li>',
        popTemplate: '<li><a class="sl-link [[color_class]]" data-toggle="sl-popover" data-content="[[link]]"><i class="slicon-[[social]]"></i> <span class="socialLabel">[[label]]</span> <span class="socialAccountName">[[account_name]]</span></a></li>'
    };
    $.fn.socialLinks.links = {
        address: 'https://www.google.com.sg/maps/place/[[id]]',
        attach: '[[id]]',
        dribbble: 'https://dribbble.com/[[id]]',
        email: 'mailto:[[id]]',
        facebook: 'https://www.facebook.com/[[id]]',
        github: 'https://github.com/[[id]]',
        google_plus: 'https://plus.google.com/+[[id]]',
        instagram: 'https://www.instagram.com/[[id]]',
        line: 'http://line.me/ti/p/[[id]]',
        linkedin: 'https://www.linkedin.com/in/[[id]]/',
        messenger: 'https://m.me/[[id]]/',
        mobile: 'tel:[[id]]',
        paypal: 'https://paypal.me/[[id]]',
        phone: 'tel:[[id]]',
        pinterest: 'https://www.pinterest.com/[[id]]/',
        skype: 'skype:[[id]]?call',
        stackoverflow: 'https://stackoverflow.com/users/[[id]]/',
        tumblr: 'https://[[id]].tumblr.com',
        twitter: 'https://twitter.com/[[id]]',
        web: '[[id]]',
        wordpress: '[[id]]',
        youtube: 'https://www.youtube.com/user/[[id]]',
        hangouts: "Add <em>[[id]]</em> to your contact list and start chating at <a href='https://hangouts.google.com' target='_blank'>https://hangouts.google.com</a>",
        kakao: "Get your <a href='http://kakao.com/talk' target='_blank'>Kakao</a> app and find my kakao<b>account</b>: <em>[[id]]</em>",
        qq: "Get your <a href='http://www.imqq.com' target='_blank'>QQ</a> and search for my ID: <em>[[id]]</em>",
        wechat: "Get your <a href='https://www.wechat.com' target='_blank'>WeChat</a> and search for my ID: <em>[[id]]</em>",
        whatsapp: "Get your <a href='https://www.whatsapp.com' target='_blank'>WhatsApp</a> and add my telephone number to your phone contact: <em>[[id]]</em>"
    };
    $.fn.socialLinks.labels = {
        address: 'Address',
        attach: 'Attachment',
        dribbble: 'Dribbble',
        email: 'Email',
        facebook: 'Facebook',
        github: 'GitHub',
        google_plus: 'Google+',
        instagram: 'Instagram',
        line: 'LINE',
        linkedin: 'LinkedIn',
        messenger: 'Messenger',
        mobile: 'Mobile',
        paypal: 'PayPal Me',
        phone: 'Tel',
        pinterest: 'Pinterests',
        skype: 'Skype',
        stackoverflow: 'StackOverflow',
        tumblr: 'Tumblr',
        twitter: 'Twitter',
        web: 'Website',
        wordpress: 'WordPress',
        youtube: 'YouTube',
        hangouts: 'Hangouts',
        kakao: 'KakaoTalk',
        qq: 'QQ',
        wechat: 'WeChat',
        whatsapp: 'WhatsApp'
    };
}(jQuery));