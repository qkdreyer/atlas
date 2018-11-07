import Vue from 'vue';
import {
  isIOS
} from 'tns-core-modules/platform';
import {
  PreviousNextView
} from 'nativescript-iqkeyboardmanager';

if (isIOS) {
  const iqKeyboard = IQKeyboardManager.sharedManager();
  iqKeyboard.shouldResignOnTouchOutside = true;
}

Vue.registerElement('PreviousNextView', () => PreviousNextView);
