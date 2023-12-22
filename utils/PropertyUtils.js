const PropertyUtils = {
    property: {},
    getProp: function(key) {
        return this.property[key];
    },
    setProperty: function(property) {
        this.property = property;
    }
}

export default PropertyUtils;