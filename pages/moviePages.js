

var createActions = {
    selectStatus: function (status) {
        return this
            .click("@statusSelect")
            .useXpath()
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 2000)
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss()
    },

    createForm: function () {
        return this
            .click("@addButton")
            .waitForElementVisible("@movieForm", 4000)
    },

    insertCast: function (cast) {
        const browser = this

        cast.forEach(actor => {
            browser
                .setValue("@castInput", actor)
                .api.keys(browser.api.keys.TAB)
        })

        return this
    }

}


module.exports = {
    commands: [createActions],
    elements: {
        addButton: ".movie-add",
        movieForm: "#movie-form",
        titleInput: "input[name=title]",
        statusSelect: "input[placeholder=Status]",
        yearInput: "input[name=year]",
        dateInput: "input[name=release_date]",
        castInput: ".cast",
        plotArea: "textarea[name=overview]",
        saveButton: "#create-movie"

    }
}