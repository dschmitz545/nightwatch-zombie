//import pg from "../../lib/db.js"
// const removeByTitle = require('../../lib/db')

let MovieData = {};


module.exports = {

    before: function (browser) {
        MovieData = {
            title: "Resident Evil",
            status: "Disponível",
            year: 2002,
            releaseDate: "01/05/2002",
            cast: ["Milla Jovovich", "Ali Larter", "Ian Glen", "Shawn Roberts"],
            cover: "resident-evil-2002.jpg",
            plot: "A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente"
        }

        // removeByTitle(MovieData.title)

        let loginElements = browser.page.loginPages();
        let sidebarElements = browser.page.sideBarPages();

        loginElements.loginWith("zumbi@dospalmares.com.br", "pwd123")
        sidebarElements.expectLoggedUser("Quilombo")

    },

    "quando eu faço o cadastro do filme": function (browser) {
        let movieElements = browser.page.moviePages();

        movieElements
            .createForm()
            .setValue("@titleInput", MovieData.title)
            .selectStatus(MovieData.status)
            .setValue("@yearInput", MovieData.year)
            .setValue("@dateInput", MovieData.releaseDate)
            .insertCast(MovieData.cast)
            .setValue("@plotArea", MovieData.plot)
            .click("@saveButton")
            .pause(4000)
    }
}