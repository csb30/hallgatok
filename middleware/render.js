const path = require('path');

module.exports = function (viewName) {
    /**
     * Renders a static html
     */
    return function (req, res) {
        //debug
        if(JSON.stringify(req.params) !== '{}'){
            console.log(req.params);
        }
        res.sendFile(path.join(__dirname,"..","static",viewName));
    };

};