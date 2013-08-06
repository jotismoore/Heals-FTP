// used for non-workflow and my account forms

jQuery(document).bind("mobileinit", function(){

	jQuery(".emailSignup form").validate({
        rules: {
            email   : {
                required: true,
                email: true
            }
        },
        messages: {
            email   : {
                required    : Venda.Validate.msg.email,
                email       : Venda.Validate.msg.email_vaild
            }
        }
    });

    jQuery("#formsolrsearch").validate({
        rules: {
            q   : {
                required: true
            }
        },
        messages: {
            q   : {
                required    : Venda.Validate.msg.search
            }
        },
        errorPlacement: Venda.Validate.errorPlacement,
        highlight: Venda.Validate.highlight,
        unhighlight: Venda.Validate.unhighlight
    });

    jQuery("#contactForm").validate({
        rules: {
            field1   : {
                required: true,
                email: true
            },
            field2   : {
                required: true,
                vendainput: true
            },
            field3   : {
                required: true
            }
        },
        messages: {
            field1   : {
                required    : Venda.Validate.msg.email,
                email       : Venda.Validate.msg.email_vaild
            },
            field2   : {
                    required: Venda.Validate.msg.nametxt,
                    maxlength   : jQuery.format(Venda.Validate.msg.max_length + " {0}")
            },
            field3 : Venda.Validate.msg.message
        }
    });

    jQuery("#giftcertificatesform").validate({
        rules: {
            to      : {
                required: true,
                maxlength: 30,
                vendainput: true
            },
            from    : {
                required: true,
                vendainput: true
            },
            email: {
                required: true,
                email: true
            },
            comment : {
                required: true,
                rangelength: [1, 250],
                charactersCount: [250, ".textMsgCount"]
            },
            amount : {
                required: true,
                number: true,
                range: [jQuery('#tag-invtatrminsubsell').text(), jQuery('#tag-invtatrmaxsubsell').text()]
            }
        },
        messages: {
            to      : {
                    required    : Venda.Validate.msg.to,
                    maxlength   : jQuery.format(Venda.Validate.msg.max_length + " {0}")
            },
            from    : Venda.Validate.msg.nametxt,
            email   : {
                required    : Venda.Validate.msg.email,
                email       : Venda.Validate.msg.email_vaild
            },
            comment : {
                //rangelength : jQuery.format(Venda.Validate.msg.least + " {0} " + Venda.Validate.msg.least_two)
            },
            amount  : {
                number      : Venda.Validate.msg.number,
                range       : jQuery.format(Venda.Validate.msg.min_value + " {0} " + Venda.Validate.msg.max_value + " {1}")
            }
        }
    });

    jQuery("#addproductform").validate({
        rules: {
            qty   : {
                required: true
            }
        },
        messages: {
            qty   : {
                required    : Venda.Validate.msg.qty
            }
        },
        errorPlacement: Venda.Validate.errorPlacement,
        highlight: Venda.Validate.highlight,
        unhighlight: Venda.Validate.unhighlight
    });

    jQuery("#emailmebackform").validate({
        rules: {
            bisemail   : {
                required: true,
                email: true
            }
        },
        messages: {
            bisemail   : {
                required    : Venda.Validate.msg.email,
                email       : Venda.Validate.msg.email_vaild
            }
        }
    });

    jQuery("#writereviewform").validate({
        rules: {
            field1 : {
                required: true,
                maxlength: 150,
                vendainput: true
            },
            from   : {
                required: true,
                email: true
            },
            field2  : {
                required: true,
                number: true
            },
            field6  : {
                required: true
            },
            field3  : {
                required: true
            }
        },
        messages: {
            field1   : {
                    required: Venda.Validate.msg.fname,
                    maxlength   : jQuery.format(Venda.Validate.msg.max_length+" {0}")
            },
            from   : {
                required    : Venda.Validate.msg.email,
                email       : Venda.Validate.msg.email_vaild
            },
            field2   : {
                    required: Venda.Validate.msg.phone
            },
            field6   : Venda.Validate.msg.rank,
            field3   : Venda.Validate.msg.review
        }
    });

    jQuery("#tellafriendform").validate({
        rules: {
            fname   : {
                required: true,
                maxlength: 30
            },
            name   : {
                required: true,
                maxlength: 30
            },
            email   : {
                required: true,
                email: true
            },
            field1  : {
                required: true
            }
        },
        messages: {
            fname   : {
                    required: Venda.Validate.msg.fname,
                    maxlength   : jQuery.format(Venda.Validate.msg.max_length + " {0}")
            },
            name   : {
                    required: Venda.Validate.msg.to,
                    maxlength   : jQuery.format(Venda.Validate.msg.max_length + " {0}")
            },
            email   : {
                required    : Venda.Validate.msg.email,
                email       : Venda.Validate.msg.email_vaild
            },
            field1   : Venda.Validate.msg.message
        }
    });

});