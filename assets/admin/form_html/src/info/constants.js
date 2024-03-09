const enabledOptions = [
    { value: "true", title: "Enabled" },
    { value: "false", title: "Disabled" },
];

const getEnabledOptions = function (defaultValue = true) {
    return enabledOptions;
};

const paymentsOptions = [
    { value: "stripe", title: "Stripe", default: true },
    { value: "ordinPlata", title: "Ordin de Plata" },
];

const currenciesOptions = [
    { value: "EUR", title: "EUR", default: true },
    { value: "RON", title: "RON" },
    { value: "USD", title: "USD" },
];

const formStructure = {
    mode: {
        singleInput: false,
        title: "Mode",
        type: "select",
        options: [
            { value: "test", title: "Test", default: true },
            { value: "live", title: "Live" },
        ],
    },
    table: {
        singleInput: false,
        title: "SQL Table",
        required: true,
    },
    tandc: {
        title: "Terms and Conditions",
        fields: {
            enabled: {
                title: "Enabled",
                type: "select",
                options: getEnabledOptions(),
            },
            text: {
                title: "Text",
                default:
                    "I agree that my data will be used to better organize this and future events.",
            },
        },
    },
    captcha: {
        title: "CAPTCHA",
        fields: {
            enabled: {
                title: "Enabled",
                type: "select",
                options: getEnabledOptions(),
            },
        },
    },
    payment: {
        title: "Payments",
        fields: {
            enabled: {
                title: "Enabled",
                type: "select",
                options: getEnabledOptions(),
            },
            with: {
                title: "Provider",
                type: "select",
                options: paymentsOptions,
            },
            currency: {
                title: "Currency",
                type: "select",
                options: currenciesOptions,
            },
            base_price: {
                title: "Base Price",
                default: "0",
                helpText:
                    "Add 2 at the end of value.<br />Eg: 10EUR should write 1000",
            },
            payment_for: {
                title: "Payment description",
                default: "BTDEV Inscrieri",
            },
            description: {
                title: "Description",
                default: "BTDEV Inscrieri - Event register",
            },
        },
    },
    links: {
        title: "Links",
        fields: {
            success: {
                title: "Form URL",
                type: "select",
                options: "pagesPublished",
            },
            cancel: {
                title: "Form URL",
                type: "select",
                options: "pagesPublished",
            },
        },
    },
    emails: {
        title: "Emails",
        fields: {
            description: {
                title: "Subject post text",
            },
            list: {
                title: "Emails list",
                fields: {
                    saved: {
                        title: "Submission saved",
                        fields: {
                            enabled: {
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                title: "Subject",
                                default: "Submission saved",
                            },
                            content: {
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                    done: {
                        title: "Submission added",
                        fields: {
                            enabled: {
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                title: "Subject",
                                default: "Submission succesfully added!",
                            },
                            content: {
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                    not_done: {
                        title: "Submission canceled",
                        fields: {
                            enabled: {
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                title: "Subject",
                                default: "Submission canceled!",
                            },
                            content: {
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                    edit: {
                        title: "Submission edited",
                        fields: {
                            enabled: {
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                title: "Subject",
                                default: "Submission edited!",
                            },
                            content: {
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                },
            },
        },
    },
    repeater_fields: {
        title: "Repeater Fields",
        fields: {
            firstname: {
                title: "Firstname",
                width: "half",
                notDeletable: true,
                order: 0,
            },
            lastname: {
                title: "Lastname",
                width: "half",
                notDeletable: true,
                order: 1,
            },
            total_row: {
                title: "Row total",
                type: "total_row",
                width: "full",
                notDeletable: true,
                order: 1000,
            },
        },
    },
    tables: {
        title: "Tables settings",
        entries_public: {
            fields: {
                id: "fields",
                title: "Fields",
                type: "select-fields",
            },
        },
        entries_admin: {
            fields: {
                title: "Fields",
                type: "select-fields",
            },
        },
        submissions: {
            fields: {
                title: "Fields",
                type: "select-fields",
            },
        },
        checkins: {
            fields: {
                title: "Fields",
                type: "select-fields",
            },
        },
        presents: {
            fields: {
                title: "Fields",
                type: "select-fields",
            },
        },
    },
};

export {
    enabledOptions,
    getEnabledOptions,
    paymentsOptions,
    currenciesOptions,
    formStructure,
};
