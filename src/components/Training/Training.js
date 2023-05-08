import React, { useState } from "react";
import "./Training.css";
import { useForm } from "react-hook-form";

export default function Training() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [caesarCipherResult, setCaesarCipherResult] = useState("");
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();
  const [caesarDecipherResult, setCaesarDecipherResult] = useState("");

  const ru = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
  ];
  const eng = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  function caesarCipher(data) {
    let tempResult = "";
    let shift = +data.shift;

    while (shift > 26) {
      shift -= 26;
    }

    for (let i of data.text) {
      if (eng.includes(i)) {
        let place = eng.indexOf(i);
        let new_place = place + shift;
        tempResult += eng[new_place];
      } else {
        tempResult += " ";
      }
    }
    return tempResult;
  }

  function caesarDecipher(data) {
    let tempResult = "";
    let shift = +data.shift;

    while (shift > 26) {
      shift -= 26;
    }

    for (let i of data.text) {
      if (eng.includes(i)) {
        let place = eng.lastIndexOf(i);
        let new_place = place - shift;
        tempResult += eng[new_place];
      } else {
        tempResult += " ";
      }
    }
    return tempResult;
  }

  return (
    <div className="ciphers">
      <div className="ciphers__cipher_caesar-cipher cipher caesar-cipher">
        <p className="cipher__title">CAESAR CIPHER</p>
        <div className="cipher__container">
          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">CIPHER</p>
            <form
              onSubmit={handleSubmit((data) => {
                setCaesarCipherResult(caesarCipher(data));
              })}
              key="1"
              className="cipher__form form"
            >
              <input
                {...register("text", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z]([a-zA-Z\s]+[a-zA-Z])*$/,
                    message: "Text should contain only english letters and last char should be a letter",
                  },
                })}
                placeholder="Type text..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors.text?.message}</p>
              <input
                {...register("shift", {
                  required: "This field is required",
                  min: { value: 0, message: "Min value 0" },
                })}
                placeholder="Choose shift"
                type="number"
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors.shift?.message}</p>
              <input type="submit" value="Submit" className="form__submit" />
            </form>
            <div className="form__result">{caesarCipherResult}</div>
          </div>

          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">DECIPHER</p>
            <form
              onSubmit={handleSubmit2((data) => {
                setCaesarDecipherResult(caesarDecipher(data));
              })}
              key="2"
              className="cipher__form form"
            >
              <input
                {...register2("text", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z]([a-zA-Z\s]+[a-zA-Z])*$/,
                    message: "Text should contain only english letters and last char should be a letter",
                  },
                })}
                placeholder="Type text..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors2.text?.message}</p>
              <input
                {...register2("shift", {
                  required: "This field is required",
                  min: { value: 0, message: "Min value 0" },
                })}
                placeholder="Choose shift"
                type="number"
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors2.shift?.message}</p>
              <input type="submit" value="Submit" className="form__submit" />
            </form>
            <div className="form__result">{caesarDecipherResult}</div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
