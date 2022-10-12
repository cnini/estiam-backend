const expect = require('expect.js')

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1, nombre2) {
    // TODO
}

describe("La fonction somme() est sensée retourner", () => {

    // Avec comme paramètres 1 et 2,
    // la fonction somme() est sensée retourner 3.
    it("3 si comme paramètres on met 1 et 2.", async () => {
        const resultat = await somme(1,2)
        expect(resultat).to.equal(3)
    })


    // Avec uniquement 2 en paramètre,
    // la fonction somme() est sensée retourner 2.
    it("2 si comme paramètres, on met uniquement 2.", async () => {
        const resultat = await somme(2)
        expect(resultat).to.equal(2)
    })


    // Avec comme paramètres 'un' et 2,
    // la fonction somme() est sensée retourner l'erreur "paramètre invalide".
    it("l'erreur \"Paramètre invalide\" si comme paramètres, on met 'un' et 2.", async () => {
        const resultat = await somme('un', 2)
        expect(resultat).to.equal("Paramètre invalide")
    })

})
