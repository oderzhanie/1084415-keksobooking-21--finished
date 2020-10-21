'use strict';

(() => {
  const StatusCode = {
    OK: 200
  };
  // const TIMEOUT_IN_MS = 10000;

  const downloadURL = `https://21.javascript.pages.academy/keksobooking/data`;
  // const uploadURL = `https://21.javascript.pages.academy/keksobooking`;

  // const upload = (data, onSuccess) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.responseType = `json`;

  //   xhr.addEventListener(`load`, () => {
  //     onSuccess(xhr.response);
  //   });

  //   xhr.open(`POST`, uploadURL);
  //   xhr.send(data);
  // };

  const download = (onSuccess, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.open(`GET`, downloadURL);
    xhr.send();

    xhr.addEventListener(`load`, () => {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError(`Мы не смогли загрузить похожие объявления, попробуйте еще раз.`);
      }
    });

  };

  window.load = {
    download,
    // upload
  };
})();
