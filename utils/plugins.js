module.exports = {
  prompts: [{
    type: 'checkbox',
    name: 'plugins',
    message: 'Which Cordova plugins would you like to include?',
    choices: [{
      value: 'org.apache.cordova.device',
      name: 'org.apache.cordova.device',
      checked: true
    }, {
      value: 'org.apache.cordova.console',
      name: 'org.apache.cordova.console',
      checked: true
    }, {
      value: 'com.ionic.keyboard',
      name: 'com.ionic.keyboard',
      checked: true
    }, {
      value: 'org.apache.cordova.splashscreen',
      name: 'org.apache.cordova.splashscreen',
      checked: false
    }, {
      value: 'org.apache.cordova.statusbar',
      name: 'org.apache.cordova.statusbar',
      checked: false
    }, {
      value: 'org.apache.cordova.battery-status',
      name: 'org.apache.cordova.battery-status',
      checked: false
    }, {
      value: 'org.apache.cordova.network-information',
      name: 'org.apache.cordova.network-information',
      checked: false
    }, {
      value: 'org.apache.cordova.device-motion',
      name: 'org.apache.cordova.device-motion',
      checked: false
    }, {
      value: 'org.apache.cordova.device-orientation',
      name: 'org.apache.cordova.device-orientation',
      checked: false
    }, {
      value: 'org.apache.cordova.geolocation',
      name: 'org.apache.cordova.geolocation',
      checked: false
    }, {
      value: 'org.apache.cordova.camera',
      name: 'org.apache.cordova.camera',
      checked: false
    }, {
      value: 'org.apache.cordova.media-capture',
      name: 'org.apache.cordova.media-capture',
      checked: false
    }, {
      value: 'org.apache.cordova.media',
      name: 'org.apache.cordova.media',
      checked: false
    }, {
      value: 'org.apache.cordova.file',
      name: 'org.apache.cordova.file',
      checked: false
    }, {
      value: 'org.apache.cordova.file-transfer',
      name: 'org.apache.cordova.file-transfer',
      checked: false
    }, {
      value: 'org.apache.cordova.dialogs',
      name: 'org.apache.cordova.dialogs',
      checked: false
    }, {
      value: 'org.apache.cordova.vibration',
      name: 'org.apache.cordova.vibration',
      checked: false
    }, {
      value: 'org.apache.cordova.contacts',
      name: 'org.apache.cordova.contacts',
      checked: false
    }, {
      value: 'org.apache.cordova.inappbrowser',
      name: 'org.apache.cordova.inappbrowser',
      checked: false
    }]
  }]
};
