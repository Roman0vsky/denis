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
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm();
  const [vigenereCipherResult, setVigenereCipherResult] = useState("");
  const {
    register: register4,
    handleSubmit: handleSubmit4,
    formState: { errors: errors4 },
  } = useForm();
  const [vigenereDecipherResult, setVigenereDecipherResult] = useState("");

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
  function vigenereCipher(data) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numAlphabet = {};
    for (let i = 0; i < alphabet.length; i++) {
      numAlphabet[alphabet[i]] = i;
    }
    const key = data.key.trim();
    const text = data.text.trim();
    let code = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        code += " ";
      } else {
        code +=
          alphabet[
            (numAlphabet[text[i]] + numAlphabet[key[i % key.length]]) %
              alphabet.length
          ];
      }
    }
    return code;
  }
  function vigenereDecipher(data) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numAlphabet = {};
    for (let i = 0; i < alphabet.length; i++) {
      numAlphabet[alphabet[i]] = i;
    }
    const key = data.key.trim();
    const text = data.text.trim();
    let code = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        code += " ";
      } else {
        code +=
          alphabet[
            (numAlphabet[text[i]] -
              numAlphabet[key[i % key.length]] +
              alphabet.length) %
              alphabet.length
          ];
      }
    }
    return code;
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
                    value: /^[a-zA-Z]([a-zA-Z\s]*)[a-zA-Z]*$/,
                    message:
                      "Text should contain only english letters and spaces",
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
                    value: /^[a-zA-Z]([a-zA-Z\s]*)[a-zA-Z]*$/,
                    message:
                      "Text should contain only english letters and spaces",
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
        <p className="cipher__title">VIGENERE CIPHER</p>
        <div className="cipher__container">
          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">CIPHER</p>
            <form
              onSubmit={handleSubmit3((data) => {
                setVigenereCipherResult(vigenereCipher(data));
              })}
              key="3"
              className="cipher__form form"
            >
              <input
                {...register3("text", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z]([A-Z\s]*)[A-Z]*$/,
                    message:
                      "Text should contain only english capital letters and spaces",
                  },
                })}
                placeholder="Type text..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors3.text?.message}</p>
              <input
                {...register3("key", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z][A-Z]*$/,
                    message:
                    "Text should contain only english capital letters",
                  },
                })}
                placeholder="Type key..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors3.key?.message}</p>
              <input type="submit" value="Submit" className="form__submit" />
            </form>
            <div className="form__result">{vigenereCipherResult}</div>
          </div>

          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">DECIPHER</p>
            <form
              onSubmit={handleSubmit4((data) => {
                setVigenereDecipherResult(vigenereDecipher(data));
              })}
              key="4"
              className="cipher__form form"
            >
              <input
                {...register4("text", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z]([A-Z\s]*)[A-Z]*$/,
                    message:
                      "Text should contain only english capital letters and spaces",
                  },
                })}
                placeholder="Type text..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors4.text?.message}</p>
              <input
                {...register4("key", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z][A-Z]*$/,
                    message:
                      "Text should contain only english capital letters",
                  },
                })}
                placeholder="Choose shift"
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors4.key?.message}</p>
              <input type="submit" value="Submit" className="form__submit" />
            </form>
            <div className="form__result">{vigenereDecipherResult}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
