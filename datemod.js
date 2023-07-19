var today = new Date();

module.exports.getDate = function() {
    var option = { weekday: "long", day: "numeric", month: "long" };
    return today.toLocaleDateString("en-UK", option);
}

module.exports.weekend = function(v) {
    const cday = today.getDay();
    return v == "text" ? cday === 6 || cday === 0 ? "weekend" : "workday" : (cday === 6 || cday === 0);
}