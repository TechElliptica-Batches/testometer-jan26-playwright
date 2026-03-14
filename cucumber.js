module.exports = {
    default: {
        paths : ["features/*.feature"],
        require: ["stepdef/*.js"],
        format: ["progress"],
        publishQuiet: true
    }
}