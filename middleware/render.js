//const path = require('path');

module.exports = function (viewName) {
    /**
     * Renders a static html
     */
    return function (req, res) {
        console.log("render " + viewName);
        //debug
        if(JSON.stringify(req.params) !== '{}'){
            console.log("render params" + JSON.stringify(req.params));
        }
        //res.sendFile(path.join(__dirname,"..","static",viewName));
        res.render(viewName,res.locals)
    };

};