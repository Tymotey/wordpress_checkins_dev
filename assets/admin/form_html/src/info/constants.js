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

export {
    enabledOptions,
    getEnabledOptions,
    paymentsOptions,
    currenciesOptions,
};
