export const checkUniqueQuery = "SELECT count(*) FROM pokemon WHERE name=? COLLATE NOCASE"  // Returns # of pokemon with a certain name. Used to check whether a name has already been used.

export const addPokemonQuery = `INSERT INTO pokemon
(id, name, description, height, weight, ability1, ability2, type1, type2, hp, attack, defense, spatk, spdef, speed, image)
VALUES
(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)` // Insert new pokemon into table

export const createSearchQuery = ({ // Dynamically generate a query to return the Pokemon whose traits that satisfy the conditions given by the user
    name, hpLowerBound, hpUpperBound, attackLowerBound, attackUpperBound, defenseLowerBound, defenseUpperBound, 
    type1, type2, ability1, ability2, speedLowerBound, speedUpperBound, spatkLowerBound, spatkUpperBound, spdefLowerBound, spdefUpperBound,
    indexLowerBound, indexUpperBound 
    }) => {
    let searchQuery = "SELECT * FROM pokemon WHERE 1=1 "
    const params = {};
    if (name) {
        searchQuery += `AND name LIKE @name `
        params.name = `%${name}%`;
    }
    if (hpLowerBound) {
        searchQuery += `AND hp >= @hpLowerBound `
        params.hpLowerBound = hpLowerBound

    }
    if (hpUpperBound) {
        searchQuery += `AND hp <= @hpUpperBound `
        params.hpUpperBound = hpUpperBound
    }
    if (attackLowerBound) {
        searchQuery += `AND attack >= @attackLowerBound `
        params.attackLowerBound = attackLowerBound

    }
    if (attackUpperBound) {
        searchQuery += `AND attack <= @attackUpperBound `
        params.attackUpperBound = attackUpperBound
    }
    if (defenseLowerBound) {
        searchQuery += `AND defense >= @defenseLowerBound `
        params.defenseLowerBound = defenseLowerBound
    }
    if (defenseUpperBound) {
        searchQuery += `AND defense <= @defenseUpperBound `
        params.defenseUpperBound = defenseLowerBound
    }

    if (type1) {
        searchQuery += `AND type1=@type1 COLLATE NOCASE `
        params.type1 = type1
    }

    if (type2) {
        searchQuery += `AND type2=@type2 COLLATE NOCASE `
        params.type2 = type2
    }
    if (ability1) {
        searchQuery += `AND ability1=@ability1 COLLATE NOCASE `
        params.ability1 = ability1
    }

    if (ability2) {
        searchQuery += `AND ability2=@ability2 COLLATE NOCASE `
        params.ability2 = ability2
    }

    if (speedLowerBound) {
        searchQuery += `AND speed >= @speedLowerBound `
        params.speedLowerBound = speedLowerBound
    }
    if (speedUpperBound) {
        searchQuery += `AND speed <= @speedUpperBound `
        params.speedUpperBound = speedUpperBound
    }
    if (spatkLowerBound) {
        searchQuery += `AND spatk >= @spatkLowerBound `
        params.spatkLowerBound = spatkLowerBound

    }
    if (spatkUpperBound) {
        searchQuery += `AND spatk <= @spatkUpperBound `
        params.spatkUpperBound = spatkUpperBound
    }
    if (spdefLowerBound) {
        searchQuery += `AND spdef >= @spdefLowerBound `
        params.spdefLowerBound = spdefLowerBound
    }
    if (spdefUpperBound) {
        searchQuery += `AND spdef <= @spdefUpperBound `
        params.spdefUpperBound = spdefUpperBound
    }
    if (indexLowerBound) {
        searchQuery += `AND id >= @indexLowerBound `
        params.indexLowerBound = indexLowerBound
    }
    if (indexUpperBound) {
        searchQuery += `AND id <= @indexUpperBound`
        params.indexUpperBound = indexUpperBound
    }

    return { searchQuery, params }
}

export const numRowsQuery = 'SELECT COUNT(*) FROM pokemon' // Get # of Pokemon

export const addReportQuery = 'INSERT INTO reports (pokemonReported, reportDescription, id) VALUES (?, ?, ?)' // Insert report into table

export const allReportsQuery = 'SELECT * FROM reports' // Return all reports

export const removePokemonQuery = 'DELETE FROM pokemon WHERE name=? COLLATE NOCASE' // Delete a specified Pokemon from the table

export const removeReportQuery = 'DELETE FROM reports WHERE id=?' // Delete a report with a specified ID

export const reportInDBQuery = `SELECT count(*) FROM reports WHERE id=?` // Get # of reports

export const removeReportsForPokemonQuery = 'DELETE FROM reports WHERE pokemonReported=? COLLATE NOCASE' // Removes all reports about a specified pokemon

export const updateTableAfterDeletionQuery = 'UPDATE pokemon SET id = id-1 WHERE id > (SELECT id FROM pokemon WHERE name=?)' // Make sure there are no gaps between indexes after removing a Pokemon

