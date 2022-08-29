let btnList = document.querySelectorAll(".color-btn__block");
let contentList = document.querySelectorAll(".img-content__block");
btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    //xóa các actived ở các nút rồi lắp actived cho button đc nhấn
    btnList.forEach((_btn) => {
      _btn.classList.remove("actived");
    });
    //thêm actived
    event.target.classList.add("actived");
    //xóa actived cho từng thằng content
    contentList.forEach((content) => {
      content.classList.remove("actived");
    });
    //lấy id của nút vừa nhấn
    let id = event.target.id;
    //dom tới content có data-id trùng với id của btn vừa nhấn
    let contentChecked = document.querySelector(
      `.img-content__block[data-id='${id}']`
    );
    contentChecked.classList.add("actived");
  });
});
