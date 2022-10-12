### Reconnaissez-vous ces tests ?

Ce sont des tests qui permettent de tester le programme des
étudiants.


### Déterminez le type de chaque test (unitaire, intégration ou de bout en bout), et expliquez pourquoi.

Le test ci-dessous permet de vérifier si le programme de l'étudiant renvoie bien l'erreur "please provide a URL" à son lancement sans fournir une URL dans la méthode *runStudentCode*.

On teste si la fonction s'exécute/si elle a été appelé correctement donc ce test est un **test unitaire**.

*(Test n°1)*
```javascript
it(`afficher "please provide a URL" dans la sortie d'erreurs si aucune URL n'est fournie`, async () => {
    const program = await runStudentCode(CODE_FILE);
    expect(program.getErrors().join("").trim())
                  .to.be("please provide a URL");
});
```

Les deuxième test permet de vérifier si le programme de l'étudiant renvoie bien la réponse attendue du fichier /common/expected-reponse.js lorsque l'on fournit à la méthode *runStudentCode* son code et une URL valide. Tandis que le troisième test permet de vérifier si le programme de l'étudiant renvoie bien une erreur lorsque l'on fournit à la méthode *runStudentCode* son code et une URL invalide.

Dans les deux cas, on teste le fonctionnement de la fonction à son exécution donc ces deux tests sont des **tests d'intégration**.

*(Test n°2)*
```javascript
it(`afficher la réponse dans la sortie standard, si une URL valide est fournie`, async () => {
    const program = await runStudentCode(CODE_FILE, {
      args: ["https://jsonplaceholder.typicode.com/photos/1"],
    });
    const response = program.getLogs().join("").trim();
    expect(JSON.parse(response)).to.eql(EXPECTED_RESPONSE);
  });
```
*(Test n°3)*

```javascript
it(`afficher l'erreur dans la sortie d'erreurs, si une URL inexistante est fournie`, async () => {
    const program = await runStudentCode(CODE_FILE, {
      args: ["https://serveur-inexistant.xyz"],
    });
    const error = program.getErrors().join("").trim();
    expect(error).to.match(/^FetchError: /);
    expect(error).to.match(/ENOTFOUND/);
});
```
