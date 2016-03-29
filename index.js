'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var User = {
  isLoggedIn: function isLoggedIn() {
    return Boolean(_reactCookie2['default'].load('ec_uid'));
  },
  getUserId: function getUserId() {
    return _reactCookie2['default'].load('ec_uid');
  },
  getUserType: function getUserType() {
    var userInfo = _reactCookie2['default'].load('ec_omniture_user_sub');
    var userType = '';
    if (!userInfo || !userInfo.split('*')[0]) {
      userType = 'anonymous';
    } else {
      // User info could be like this 'digital-subscriber*2016/01/19'
      userType = userInfo.split('*')[0];
      if (userType.indexOf('|') > -1) {
        // Or they could be like this
        // 'registered|ent-product-A*2011/02/16|2014/09/30|ent-product-A'
        userType = userType.split('|')[0];
      }
    }
    return userType;
  },
  canEdit: function canEdit() {
    return _reactCookie2['default'].load('ec_su') !== undefined;
  },
  // Check if the user is a MUL
  isMultiUserLicense: function isMultiUserLicense() {
    return _reactCookie2['default'].load('ec_community') === 10000000000;
  },
  setMultiUserLicense: function setMultiUserLicense() {
    var mul = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    if (mul) {
      _reactCookie2['default'].save('ec_community', 10000000000);
    } else {
      _reactCookie2['default'].remove('ec_community');
    }
  },
  getSubscriberCookie: function getSubscriberCookie() {
    return _reactCookie2['default'].load('ec_omniture_user_sub');
  }
};
exports['default'] = User;
module.exports = exports['default'];