const typedoc = require('typedoc');

exports.load = function (app) {
  app.converter.on(
    typedoc.Converter.EVENT_CREATE_DECLARATION,
    (_context, reflection, _node) => {
      if (
        !reflection.parent ||
        !reflection.parent.name ||
        (reflection.name !== 'default' && reflection.name !== 'export=')
      )
        return;

      // Removes the folder name
      const name = reflection.parent.name.split('/').pop();
      if (name) {
        reflection.name = name;
      }
    }
  );
};
