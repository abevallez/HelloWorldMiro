/* eslint-disable require-jsdoc */
const waitOneSec = () => new Promise((r) => setTimeout(r, 2000));

function run() {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Amazon AWS',
        svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        onClick: () => {
          alert('Hi!');
        },
      },
    },
  });
}

async function helloWorld() {
  const sticker = (await miro.board.widgets.create({type: 'sticker', text: 'Hello'}))[0];
  await miro.board.viewport.zoomToObject(sticker);
  await waitOneSec(); // timeout only for demo purpose
  await miro.board.widgets.update({id: sticker.id, text: 'world!', style: {stickerBackgroundColor: '#7ac673'}}); // update sticker
  await waitOneSec();
  await miro.board.widgets.deleteById(sticker.id); // delete sticker
}

miro.onReady(run);
