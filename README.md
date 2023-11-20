# Medieinstitutet-Testning-TODO


## Enhetstester med jest

Ladda ner repot och kör:

- `npm install`
- `npm run dev`

För att starta testerna:

- `npm run test`

För att få en code coverage report så kör:

- `npm run coverage`

## Uppgiftsbeskrivning
Bedömningskriterier
På denna uppgiften kan ni få IG/G.

Skapa nedan 7 tester för de funktioner som finns i `functions.ts`. Ni får så klart skapa fler tester om ni vill, men nedan krävs för godkänt. Detta kommer att ge er ett G.

- add todo
  - should add a todo
  - should not add a todo with empty title
  - should not add a todo with title shorter than 3 characters
- toggle todo
  - should toggle a todo
  - should not toggle a todo that does not exist
- delete todo
  - should delete a todo
  - should not delete a todo that does not exist
