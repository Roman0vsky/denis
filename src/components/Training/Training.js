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

  function caesarCipher(data) {
    let tempResult = "";
    let shift = +data.shift;

    while (shift > 32) {
      shift -= 32;
    }

    for (let i of data.text) {
      if (ru.includes(i)) {
        let place = ru.indexOf(i);
        let new_place = place + shift;
        tempResult += ru[new_place];
      } else {
        tempResult += " ";
      }
    }
    return tempResult;
  }

  function caesarDecipher(data) {
    let tempResult = "";
    let shift = +data.shift;

    while (shift > 32) {
      shift -= 32;
    }

    for (let i of data.text) {
      if (ru.includes(i)) {
        let place = ru.lastIndexOf(i);
        let new_place = place - shift;
        tempResult += ru[new_place];
      } else {
        tempResult += " ";
      }
    }
    return tempResult;
  }
  function vigenereCipher(data) {
    const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
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
    const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
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
        <p className="cipher__title">ШИФР ЦЕЗАРЯ</p>
        <div className="cipher__container">
          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">ШИФРОВАНИЕ</p>
            <form
              onSubmit={handleSubmit((data) => {
                setCaesarCipherResult(caesarCipher(data));
              })}
              key="1"
              className="cipher__form form"
            >
              <input
                {...register("text", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[а-яА-Я]([а-яА-Я\s]*)[а-яА-Я]*$/,
                    message:
                      "Текст может содержать только русские буквы и пробелы",
                  },
                })}
                placeholder="Введите текст..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors.text?.message}</p>
              <input
                {...register("shift", {
                  required: "Заполните поле",
                  min: { value: 0, message: "Минимальное значение 0" },
                })}
                placeholder="Введите ключ..."
                type="number"
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors.shift?.message}</p>
              <input
                type="submit"
                value="Подтвердить"
                className="form__submit"
              />
            </form>
            <div className="form__result">{caesarCipherResult}</div>
          </div>

          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">ДЕШИФРОВАНИЕ</p>
            <form
              onSubmit={handleSubmit2((data) => {
                setCaesarDecipherResult(caesarDecipher(data));
              })}
              key="2"
              className="cipher__form form"
            >
              <input
                {...register2("text", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[а-яА-Я]([а-яА-Я\s]*)[а-яА-Я]*$/,
                    message:
                      "Текст может содержать только русские буквы и пробелы",
                  },
                })}
                placeholder="Введите текст..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors2.text?.message}</p>
              <input
                {...register2("shift", {
                  required: "Заполните поле",
                  min: { value: 0, message: "Минимальное значение 0" },
                })}
                placeholder="Введите ключ..."
                type="number"
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors2.shift?.message}</p>
              <input
                type="submit"
                value="Подтвердить"
                className="form__submit"
              />
            </form>
            <div className="form__result">{caesarDecipherResult}</div>
          </div>
        </div>
        <p className="cipher__title">ШИФР ВИЖЕНЕРА</p>
        <div className="cipher__container">
          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">ШИФРОВАНИЕ</p>
            <form
              onSubmit={handleSubmit3((data) => {
                setVigenereCipherResult(vigenereCipher(data));
              })}
              key="3"
              className="cipher__form form"
            >
              <input
                {...register3("text", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[А-Я]([А-Я\s]*)[А-Я]*$/,
                    message:
                      "Текст может содержать только заглавные русские буквы и пробелы",
                  },
                })}
                placeholder="Введите текст..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors3.text?.message}</p>
              <input
                {...register3("key", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[А-Я][А-Я]*$/,
                    message:
                      "Текст может содержать только заглавные русские буквы",
                  },
                })}
                placeholder="Введите ключ..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors3.key?.message}</p>
              <input
                type="submit"
                value="Подтвердить"
                className="form__submit"
              />
            </form>
            <div className="form__result">{vigenereCipherResult}</div>
          </div>

          <div className="cipher__wrapper">
            <p className="cipher__title-cipher">ДЕШИФРОВАНИЕ</p>
            <form
              onSubmit={handleSubmit4((data) => {
                setVigenereDecipherResult(vigenereDecipher(data));
              })}
              key="4"
              className="cipher__form form"
            >
              <input
                {...register4("text", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[А-Я]([А-Я\s]*)[А-Я]*$/,
                    message:
                      "Текст может содержать только заглавные русские буквы и пробелы",
                  },
                })}
                placeholder="Введите текст..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors4.text?.message}</p>
              <input
                {...register4("key", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[А-Я][А-Я]*$/,
                    message:
                      "Текст может содержать только заглавные русские буквы",
                  },
                })}
                placeholder="Введите ключ..."
                autoComplete="off"
                className="form__input"
              />
              <p className="form__errors">{errors4.key?.message}</p>
              <input
                type="submit"
                value="Подтвердить"
                className="form__submit"
              />
            </form>
            <div className="form__result">{vigenereDecipherResult}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
