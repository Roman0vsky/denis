import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div>
      <p>
        Решётка Кардано - инструмент кодирования и декодирования, представляющий
        собой специальную прямоугольную (в частном случае - квадратную)
        таблицу-карточку, часть ячеек которой вырезана. <br />
        Решетка Кардано сделана из листа картона или пергамента, или же из
        тонкого металла. Чтобы обозначить линии письма, бумагу разлиновывают, и
        между этими линиями вырезают прямоугольные области через интервалы
        произвольной длины. <br />
        Шифратор помещает решетку на лист бумаги и пишет сообщение в
        прямоугольных отверстиях, в которых помещается отдельный символ, слог
        или целое слово. При передвижении решётки фрагменты заполняются, образуя
        запись, искажающую исходное сообщение. <br />
        У получателя сообщения должна быть такая же решетка. Копии решетки
        вырезаются из первичного шаблона, однако для взаимно-однозначного
        соответствия можно было бы сделать множество других шаблонов. Решетку
        можно разместить в 4 положениях - лицом вверх, лицом вниз, вертикально и
        в перевернутом положении, что вчетверо увеличивает число возможных
        размещений сетки. <br />
        Чтобы прочитать закодированное сообщение, необходимо наложить решётку
        Кардано на текст нужное число раз и прочитать буквы, расположенные в
        вырезанных ячейках. Решётки Кардано представляют собой квадратные
        таблицы, где четверть ячеек прорезана так, что при четырёх поворотах они
        показывают весь квадрат. Вписание в прорезанные ячейки текста и повороты
        решётки продолжаются до тех пор, пока весь квадрат не будет заполнен.{" "}
        <br />
        Например, текст «Скоро_будет_зима» таким образом превратится в<br />
        <br />
      </p>
      <table>
        <tr>
          <td>С</td>
          <td>З</td>
          <td>Д</td>
          <td>О</td>
        </tr>
        <tr>
          <td>_</td>
          <td>Е</td>
          <td>И</td>
          <td>К</td>
        </tr>
        <tr>
          <td>Т</td>
          <td>Б</td>
          <td>О</td>
          <td>М</td>
        </tr>
        <tr>
          <td>А</td>
          <td>Р</td>
          <td>У</td>
          <td>_</td>
        </tr>
      </table>
    </div>
  );
}
