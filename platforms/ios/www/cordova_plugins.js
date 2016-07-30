cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.mbientlab.metawear/www/MWDevice.js",
        "id": "com.mbientlab.metawear.MWDevice",
        "pluginId": "com.mbientlab.metawear",
        "clobbers": [
            "metawear.mwdevice"
        ]
    },
    {
        "file": "plugins/cordova-plugin-ble/ble.js",
        "id": "cordova-plugin-ble.BLE",
        "pluginId": "cordova-plugin-ble",
        "clobbers": [
            "evothings.ble"
        ]
    },
    {
        "file": "plugins/cordova-plugin-eddystone/js/eddystone-plugin.js",
        "id": "cordova-plugin-eddystone.eddystoneplugin",
        "pluginId": "cordova-plugin-eddystone",
        "clobbers": [
            "evothings.eddystone"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.mbientlab.metawear": "0.2.15",
    "cordova-plugin-ble": "1.4.3",
    "cordova-plugin-eddystone": "1.3.0"
}
// BOTTOM OF METADATA
});