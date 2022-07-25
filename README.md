# Генератор штрих-кодов
> Приложение для генерации штрих-кодов в различных форматах с возможностью кастомизации и системой экспорта
### [Перейти к приложению](https://post-apocalypse.github.io/barcode-generation-app/dist/) ###
![Barcode](https://github.com/post-apocalypse/barcode-gen-app/blob/master/dist/img/icons/android-chrome-maskable-192x192.png?raw=true, 'Barcode')

## Доступные форматы
- EAN 13 — European Article Number — европейский стандарт штрихкода, предназначенный для кодирования идентификатора товара и производителя.
- EAN 8 — То же, что и формат выше, но был введен для использования на небольших упаковках, где штрих-код EAN-13 был бы слишком большим;
- CODE 128 — данный штриховой код включает в себя 107 символов, из которых 103 символа данных, 3 стартовых и 1 остановочный (стоп) символ.
- ITF-14 — Штрих код ITF-14 разработан специально для транспортной упаковки. Он создаётся на основе кодов EAN-8 или EAN-13 и дополнительно несёт в себе один символ «тип упаковки», которым кодируется вариант упаковки.
- MSI — Это непрерывная символика, которая не поддается самоконтролю. MSI используется в основном для управления запасами, маркировки контейнеров и полок на складах.
- Pharmacode — Фармацевтической двоичный код — стандарт штрихового кода, используемый в фармацевтической промышленности в качестве системы контроля упаковок. Может быть читаемым, даже несмотря на ошибки при печати.

## Примеры штрих-кодов
#### Наведите курсор на изображение для просмотра наименования формата 

![Barcode](https://github.com/post-apocalypse/barcode-generation-app/blob/master/src/assets/img/barcode-examples/ean13.png?raw=true, 'EAN 13')
![Barcode](https://github.com/post-apocalypse/barcode-generation-app/blob/master/src/assets/img/barcode-examples/ean8.png?raw=true, 'EAN 8')
![Barcode](https://github.com/post-apocalypse/barcode-generation-app/blob/master/src/assets/img/barcode-examples/code128.png?raw=true, 'CODE 128')

![Barcode](https://github.com/post-apocalypse/barcode-generation-app/blob/master/src/assets/img/barcode-examples/itf14.png?raw=true, 'ITF-14')
![Barcode](https://github.com/post-apocalypse/barcode-generation-app/blob/master/src/assets/img/barcode-examples/msi.png?raw=true, 'MSI')
![Barcode](https://github.com/post-apocalypse/barcode-generation-app/blob/master/src/assets/img/barcode-examples/pharmacode.png?raw=true, 'Pharmacode')

## Варианты экспорта
1. PNG
2. JPG
3. SVG

Также для формата EAN 13 есть возможность экспорта в виде Microsoft Excel Таблицы, но для этого необходимо дополнительно устанавливать соответствующий шрифт

___
### Написано на Vue.js в качестве Pet проекта, по любым вопросам: [Telegram](https://t.me/apocalypsecore)
