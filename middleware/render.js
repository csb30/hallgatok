module.exports = function (viewName) {
    /**
     * Renders a static html
     */
    return function (req, res) {
        //debug
        if(JSON.stringify(req.params) !== '{}'){
            console.log(req.params);
        }
        res.sendFile("C:\\Users\\Balint\\WebstormProjects\\hallgatok\\static\\"+viewName);
    };

};