import "./styles.css";

const onclickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  // const inputText = document.getElementById("add-text").value;
  // document.getElementById(("add-text".value = ""));

  //div生成
  const div = document.createElement("div");
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd);
