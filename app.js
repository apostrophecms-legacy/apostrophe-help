var site = require('apostrophe-site')({

  // This line is required and allows apostrophe-site to use require() and manage our NPM modules for us.
  root: module,
  shortName: 'apostrophe-help',
  hostName: 'apostrophe-help',
  title: 'Apostrophe Help',
  sessionSecret: 'apostrophe help is awesome',
  adminPassword: 'avocado pretzel',

  // Give users a chance to log in if they attempt to visit a page
  // which requires login
  secondChanceLogin: true,

  locals: require('./lib/locals/index'),

  lockups: {
    left: {
      label: 'Left',
      tooltip: 'Float Small',
      icon: 'icon-arrow-left',
      // Only allows one type of widget
      widgets: [ 'slideshow' ],
      // Override the options for slideshows when they are inside the lockup to get the size right
      slideshow: {
        size: 'one-third'
      },
      video: {
        size: 'one-half'
      }
    },
    right: {
      label: 'Right',
      tooltip: 'Float Right',
      icon: 'icon-arrow-right',
      widgets: [ 'slideshow', 'video' ],
      slideshow: {
        size: 'one-half'
      },
      video: {
        size: 'one-half'
      }
    }
  },

  // Here we define what page templates we have and what they will be called in the Page Types menu.

  // For html templates, the 'name' property refers to the filename in ./views/pages, e.g. 'default'
  // refers to '/views/pages/default.html'.

  // The name property can also refer to a module, in the case of 'blog', 'map', 'events', etc.

  pages: {
    types: [
      { name: 'default', label: 'Default (Two Column)' },
      { name: 'glossary', label: 'Glossary Index' },
      { name: 'home', label: 'Home Page' }
    ]
  },



  // These are the modules we want to bring into the project.
  modules: {
    // Styles required by the new editor, must go FIRST
    'apostrophe-ui-2': {},
    'apostrophe-people': {},
    'apostrophe-groups': {},
    'glossary': {
      extend: 'apostrophe-snippets',
      name: 'glossary',
      label: 'Glossary',
      instance: 'entry',
      instanceLabel: 'Entry',
      removeFields: ['thumbnail', 'hideTitle', 'body'],
      addFields: [
        {
          name: 'description',
          type: 'string',
          textarea: true,
          label: 'Description'
        }
      ]
    },
    // The new editor
    'apostrophe-editor-2': {},
    'apostrophe-blocks': {
      types: [
        {
          name: 'one',
          label: 'One Column'
        },
        {
          name: 'two',
          label: 'Two Column'
        }
      ]
    },
    'apostrophe-schema-widgets': {
      widgets: [
        {
          name: 'proTip',
          label: 'Pro Tip',
          instructions: 'Lay down your pro tip.',
          schema: [
            {
              name: 'body',
              type: 'area',
              label: 'Description',
              required: true,
              options: {
                controls: [ 'style', 'bold', 'italic', 'createLink', 'unlink' ],
                styles: [ { value: 'p', label: 'Normal' }, { value: 'h5', label: 'Title' } ]
              }
            }
          ]
        }
      ]
    }
  },

  // These are assets we want to push to the browser.
  // The scripts array contains the names of JS files in /public/js,
  // while stylesheets contains the names of LESS files in /public/css
  assets: {
    scripts: ['site'],
    stylesheets: ['site']
  },

  // beforeEndAssets: function(callback) {
  //   // Apostrophe already loads these for logged-out users, but we
  //   // want them all the time in this project.
  //   site.apos.pushAsset('script', { name: 'vendor/blueimp-iframe-transport', when: 'always' });
  //   site.apos.pushAsset('script', { name: 'vendor/blueimp-fileupload', when: 'always' });
  //   return callback(null);
  // }
});
