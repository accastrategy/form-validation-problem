class Configuration {
    constructor(options) {
        this.options = options;
    }

    get(key) {
        const prop = this.options[key];
        return prop || this.options;
    }
}

export default Configuration;
