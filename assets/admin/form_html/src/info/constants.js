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
        isFieldOnly: true,
        id: "mode",
        title: "Mode",
        type: "select",
        options: [
            { value: "test", title: "Test", default: true },
            { value: "live", title: "Live" },
        ],
    },
    table: {
        isFieldOnly: true,
        id: "table",
        title: "SQL Table",
        helpDescription: "Name of SQL Table",
        required: true,
    },
    tandc: {
        id: "tandc",
        title: "Terms and Conditions",
        fieldsList: {
            enabled: {
                id: "enabled",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions(),
            },
            text: {
                id: "text",
                title: "Text",
                default:
                    "I agree that my data will be used to better organize this and future events.",
            },
        },
    },
    captcha: {
        id: "captcha",
        title: "CAPTCHA",
        fieldsList: {
            enabled: {
                id: "captcha",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions(),
            },
        },
    },
    payment: {
        id: "payment",
        title: "Payments",
        fieldsList: {
            enabled: {
                id: "enabled",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions(),
            },
            with: {
                id: "with",
                title: "Provider",
                type: "select",
                options: paymentsOptions,
            },
            currency: {
                id: "currency",
                title: "Currency",
                type: "select",
                options: currenciesOptions,
            },
            base_price: {
                id: "base_price",
                title: "Base Price",
                default: "0",
                helpText:
                    "Add 2 at the end of value.<br />Eg: 10EUR should write 1000",
            },
            payment_for: {
                id: "payment_for",
                title: "Payment description",
                default: "BTDEV Inscrieri",
            },
            description: {
                id: "description",
                title: "Description",
                default: "BTDEV Inscrieri - Event register",
            },
        },
    },
    links: {
        id: "links",
        title: "Links",
        fieldsList: {
            success: {
                id: "success",
                title: "Form URL",
                type: "select",
                options: "pagesPublished",
            },
            cancel: {
                id: "cancel",
                title: "Form URL",
                type: "select",
                options: "pagesPublished",
            },
        },
    },
    emails: {
        id: "emails",
        title: "Emails",
        fieldsList: {
            description: {
                id: "description",
                title: "Subject post text",
            },
            list: {
                id: "list",
                title: "Emails list",
                fieldsList: {
                    saved: {
                        id: "saved",
                        title: "Submission saved",
                        fieldsList: {
                            enabled: {
                                id: "enabled",
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                id: "subject",
                                title: "Subject",
                                default: "Submission saved",
                            },
                            content: {
                                id: "content",
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                    done: {
                        id: "done",
                        title: "Submission added",
                        fieldsList: {
                            enabled: {
                                id: "enabled",
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                id: "subject",
                                title: "Subject",
                                default: "Submission succesfully added!",
                            },
                            content: {
                                id: "content",
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                    not_done: {
                        id: "not_done",
                        title: "Submission canceled",
                        fieldsList: {
                            enabled: {
                                id: "enabled",
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                id: "subject",
                                title: "Subject",
                                default: "Submission canceled!",
                            },
                            content: {
                                id: "content",
                                title: "Content",
                                type: "wysiwyg",
                            },
                        },
                    },
                    edit: {
                        id: "edit",
                        title: "Submission edited",
                        fieldsList: {
                            enabled: {
                                id: "enabled",
                                title: "Enabled",
                                type: "select",
                                options: getEnabledOptions(),
                            },
                            subject: {
                                id: "subject",
                                title: "Subject",
                                default: "Submission edited!",
                            },
                            content: {
                                id: "content",
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
        id: "repeater_fields",
        title: "Repeater Fields",
        fieldsList: {
            firstname: {
                id: "firstname",
                title: "Firstname",
                width: "half",
                notDeletable: true,
                order: 0,
            },
            lastname: {
                id: "lastname",
                title: "Lastname",
                width: "half",
                notDeletable: true,
                order: 1,
            },
            total_row: {
                id: "total_row",
                title: "Row total",
                type: "total_row",
                width: "full",
                notDeletable: true,
                order: 1000,
            },
        },
    },
    tables: {
        id: "tables",
        title: "Tables settings",
        fieldsList: {
            entries_public: {
                id: "entries_public",
                fieldsList: {
                    fields: {
                        id: "fields",
                        title: "Fields",
                        type: "select-fields",
                    },
                },
            },
            entries_admin: {
                id: "entries_admin",
                fieldsList: {
                    fields: {
                        id: "fields",
                        title: "Fields",
                        type: "select-fields",
                    },
                },
            },
            submissions: {
                id: "submissions",
                fieldsList: {
                    fields: {
                        id: "fields",
                        title: "Fields",
                        type: "select-fields",
                    },
                },
            },
            checkins: {
                id: "checkins",
                fieldsList: {
                    fields: {
                        id: "fields",
                        title: "Fields",
                        type: "select-fields",
                    },
                },
            },
            presents: {
                id: "presents",
                fieldsList: {
                    fields: {
                        id: "fields",
                        title: "Fields",
                        type: "select-fields",
                    },
                },
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
