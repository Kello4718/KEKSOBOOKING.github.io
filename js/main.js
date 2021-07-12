import {toShowPhotosForOffer, toShowUsersAvatar} from './avatars.js';
import {toSetFilterChangeHandler} from './filter.js';
import {toGenerateMarkers} from './map.js';
import {toPullData} from './pull-data-from-server.js';
import {toPushData} from './push-data-from-form.js';
import {toCheckValidForm, toActivateForm, toDisableForm} from './work-with-form.js';

toDisableForm();

window.addEventListener('load', () => {
  toPullData();
  toGenerateMarkers();
  toActivateForm();
  toCheckValidForm();
  toPushData();
  toSetFilterChangeHandler();
  toShowUsersAvatar();
  toShowPhotosForOffer();
});
