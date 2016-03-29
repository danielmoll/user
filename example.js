/* eslint-disable id-match */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    'h1',
    null,
    'Reading your cookie (Change your host with wwww.economist.com to see real results).'
  ),
  _react2['default'].createElement(
    'ul',
    null,
    _react2['default'].createElement(
      'li',
      null,
      'Are you logged in? ',
      _index2['default'].isLoggedIn() ? 'Yes' : 'No'
    )
  )
);
module.exports = exports['default'];