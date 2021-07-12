import {CACHED_DATA, errorMessageBlock, mapCanvas, URL_PULL} from './const-and-variables.js';

// Функция, отвечающая за появление сообщения в случае ошибки загрузки

const toShowLoadFailMessage = (message) => {
  errorMessageBlock.style.cssText = `
    position: relative;
    margin: 10px auto;
    display: flex;
    width: 70%;
    height: 10%;
    align-items: center;
    justify-content: center;
    background-color: #f0f0ea;
    border-radius: 20px;
    border: 1px solid #cb2020;
    z-index: 999;
    color: #353535;
    text-align: center;
    font-size: 2em;
    line-height: 1em;
    font-weight: bold;
  `;
  errorMessageBlock.innerText = message;
  mapCanvas.appendChild(errorMessageBlock);
};

// Функция, отвечающая за получение данных от сервера

const toPullData = async () => {
  const result = await fetch(URL_PULL)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(`Ошибка ${response.status}, не удалось получить данные с сервера...`);
      }
    })
    .then((response) => response.json())
    .then((serverArray) => {
      serverArray.forEach((item) => {
        CACHED_DATA.push(item);
      });
      return serverArray;
    })
    .catch((error) => toShowLoadFailMessage(error.message));
  return await result || [];
};


export {toPullData, toShowLoadFailMessage};
