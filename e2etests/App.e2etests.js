import {
  Selector
} from 'testcafe';

fixture `Getting Started`
  .page `http://localhost:3000`;

test('Should have button to get into buyer section', async t => {
    await t
      .click('.buyer');
});

test('Should have button to get into manufacturer section', async t => {
    await t
      .click('.manufacturer');
});