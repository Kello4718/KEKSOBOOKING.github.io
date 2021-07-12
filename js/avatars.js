import {adFormPhoto, FILE_TYPES, inputFilePhotosOffer, inputFileUsersAvatar, usersAvatar} from './const-and-variables.js';


// Аватарка для пользователя

const toShowUsersAvatar = () => {
  inputFileUsersAvatar.addEventListener('change', () => {
    const file = inputFileUsersAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        usersAvatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

// Фото жилья для объявления

const toShowPhotosForOffer = () => {
  inputFilePhotosOffer.addEventListener('change', () => {
    const file = inputFilePhotosOffer.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        adFormPhoto.src = reader.result;
        adFormPhoto.alt = 'Фотография жилья';
      });

      reader.readAsDataURL(file);
    }
  });
};

export {toShowUsersAvatar, toShowPhotosForOffer};
