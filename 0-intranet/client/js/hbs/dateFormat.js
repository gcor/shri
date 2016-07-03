module.exports = function(format, date) {
    return moment(date).format(format);
};