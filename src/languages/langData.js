export const en = {
  nav: {
    name: 'Barcode Generator',
    darkMode: 'Dark Mode'
  },
  home: {
    homeSec: {
      title: 'Barcode Generator',
      subTitle: 'Application for generating your own barcodes',
      desc: {
        one: 'Create Barcodes in a couple of clicks in your own design,',
        two: 'use the desired standard and export in the desired format.',
        three: 'Save templates, share and use them at any time'
      },
      btn: 'Go to Generator'
    },
    tempSec: {
      create: 'Create a new template',
      noDesc: 'No description',
      tip: {
        title: 'The templates you create will appear in this section, try creating the first one!',
        desc: 'Just generate several types of barcodes and the system will prompt you to save the settings'
      },
      template: {
        name: 'Name',
        desc: 'Description',
        date: 'Date'
      }
    },
    libSec: {
      title: 'Not sure which barcode format you need?',
      desc: {
        one: 'You can see the formats available for generation',
        two: 'and choose the one that suits your needs best'
      },
      btn: 'Learn more'
    }
  },
  generator: {
    settings: {
      content: 'Content',
      quantity: 'Quantity',
      quan_plh: 'Digits (2000)',
      example: 'Example',
      invalid: 'Enter valid content',
      bg: 'Background color',
      bg_plh: "'#ffffff' or 'transparent'",
      showTxt: 'Show text / code',
      color: 'Code color',
      color_plh: "'#000000' or 'black'",
      export: {
        name: 'Export Format',
        generate: 'Generate',
        fileName: 'File Name',
        arcName: 'Archive Name (.zip)',
        downloadBtn: 'Download',
        saveTempBtn: 'Save Template'
      }
    },
    preview: {
      prev: 'Preview',
      info: "This window is a preview for your barcodes, but you haven't generated them yet...",
      code: 'Barcode'
    },
    modal: {
      name: 'Name',
      desc: 'Description',
      exName: 'Example Name',
      exDesc: 'Example Description',
      tempName: 'Template Name',
      tempName_ph: 'Name (12)',
      tempDesc: 'Template Description',
      temDesc_ph: 'Important info (or not...)',
      saveBtn: 'Save',
      cancelBtn: 'Cancel'
    }
  },
  library: {
    desc: 'Description',
    structure: 'Structure',
    standarts: {
      ean13: {
        name: 'EAN 13',
        desc: 'The European Article Number is a standard to encode product numbers. The EAN is a special case of a Global Trade Item Number',
        info: [
          'Country-specific part: 1-3 digits',
          'Company part',
          'Article number: 4-5 digits',
          'Checksum digit'
        ],
        corLength: 12,
        placeholder: 'Digits (12)',
        max: 12,
        codeName: 'ean13',
        import: 'ean13'
      },
      ean8: {
        name: 'EAN 8',
        desc: 'The normal length of an EAN is 13 digits. There is also a shorter version called EAN-8, for small packages, where the full 13-digit number would take too much space on the package',
        info: [
          'Country-specific part: 2-3 digits',
          'Article number: 4-5 digits',
          'Checksum digit'
        ],
        corLength: 7,
        placeholder: 'Digits (7)',
        max: 7,
        codeName: 'ean8',
        import: 'ean8'
      },
      code128: {
        name: 'CODE 128',
        desc: "is a high-density linear barcode symbology defined in ISO/IEC. It's used for alphanumeric or numeric-only barcodes.",
        info: [
          'Start symbol',
          'Encoded data',
          'Check symbol',
          'Stop symbol'
        ],
        corLength: 1,
        placeholder: 'Text (50)',
        max: 50,
        codeName: 'code128',
        import: 'code128'
      },
      itf14: {
        name: 'ITF 14',
        desc: 'ITF-14 is the GS1 implementation of an Interleaved 2 of 5 (ITF) bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits.',
        info: [
          'Packaging indicator',
          'The next 12 digits are representing the product number',
          'Checksum digit'
        ],
        corLength: 13,
        placeholder: 'Digits (13)',
        max: 13,
        codeName: 'itf14',
        import: 'itf14'
      },
      msi: {
        name: 'MSI',
        desc: 'The code can display only the number 0-9 and has no fixed length. Today this type of code is outdated and is no longer used. Because of this most barcode scanners can not recognize this type of code',
        info: [
          'Can display only the number 0-9'
        ],
        corLength: 1,
        placeholder: 'Digits (50)',
        max: 50,
        codeName: 'msi',
        import: 'msicode'
      },
      pharmacode: {
        name: 'PHARMACODE',
        desc: 'Pharmaceutical Binary Code is a barcode standard, used in the pharmaceutical industry as a packing control system. It is designed to be readable despite printing errors',
        info: [
          'Pharmacode can represent only a single integer from 3 to 131 070',
          'The minimum barcode is 2 bars and the maximum 16'
        ],
        corLength: 1,
        placeholder: 'Digits (3 — 131 070)',
        max: 6,
        codeName: 'pharmacode',
        import: 'pharmacode'
      }
    }
  }
}

export const ru = {
  nav: {
    name: 'Генератор штрих-кодов',
    darkMode: 'Тёмная тема'
  },
  home: {
    homeSec: {
      title: 'Генератор штрих-кодов',
      subTitle: 'Приложение для генерации ваших собственных штрих-кодов',
      desc: {
        one: 'Создавайте штрих-коды за пару кликов в своём собственном дизайне,',
        two: 'используйте необходимый стандарт и экспортируйте в удобном формате',
        three: 'Сохраняйте шаблоны, делитесь и используйте их  в любое время'
      },
      btn: 'Перейти к Генератору'
    },
    tempSec: {
      create: 'Создать новый шаблон',
      noDesc: 'Нет описания',
      tip: {
        title: 'Шаблоны, которые вы создадите, будут попадать в эту секцию. Попробуйте разработать первый!',
        desc: 'Просто сгенерируйте необходимый стандарт, добавьте нужные настройки и система позволит вам сохранить результат'
      },
      template: {
        name: 'Название',
        desc: 'Описание',
        date: 'Дата'
      }
    },
    libSec: {
      title: 'Не уверены какой стандарт штрих-кодов вам нужен?',
      desc: {
        one: 'Вы можете просмотреть доступные стандарты для генерации',
        two: 'и выбрать наиболее подходящий под ваши нужды'
      },
      btn: 'Подробнее'
    }
  },
  generator: {
    settings: {
      content: 'Содержание',
      quantity: 'Количество',
      quan_plh: 'Числа (2000)',
      example: 'Пример',
      invalid: 'Введите корректное содержание',
      bg: 'Цвет заднего фона',
      bg_plh: "'#ffffff' или 'transparent'",
      showTxt: 'Показать текст / код',
      color: 'Цвет штрих-кода',
      color_plh: "'#000000' или 'black'",
      export: {
        name: 'Формат экспорта',
        generate: 'Генерировать',
        fileName: 'Название файла',
        arcName: 'Название архива (.zip)',
        downloadBtn: 'Скачать',
        saveTempBtn: 'Сохранить'
      }
    },
    preview: {
      prev: 'Предпросмотр',
      info: "Данное окно — превью для ваших штрих-кодов, но вы их пока не сгенерировали...",
      code: 'Barcode'
    },
    modal: {
      name: 'Название',
      desc: 'Описание',
      exName: 'Пример названия',
      exDesc: 'Пример описания',
      tempName: 'Название шаблона',
      tempName_ph: 'Название (12)',
      tempDesc: 'Описание шаблона',
      temDesc_ph: 'Что-то важное (или нет...)',
      saveBtn: 'Сохранить',
      cancelBtn: 'Отменить'
    }
  },
  library: {
    desc: 'Описание',
    structure: 'Структура',
    standarts: {
      ean13: {
        name: 'EAN 13',
        desc: 'European Article Number — европейский стандарт штрихкода, предназначенный для кодирования идентификатора товара и производителя',
        info: [
          '1-я группа (2-3 цифры) – код страны-производителя товара',
          '2-я группа (4-6 цифр) – это регистрационный номер компании',
          '3-я группа (3-5 цифр) – порядковый номер продукта',
          'Последняя цифра — контрольная, вычисляется автоматически'
        ],
        placeholder: 'Числа (12)',
        import: 'ean13'
      },
      ean8: {
        name: 'EAN 8',
        desc: 'Был введен для использования на небольших упаковках, где штрих-код EAN-13 был бы слишком большим; например, на сигаретах, карандашах и пачках жевательной резинки',
        info: [
          '1-я группа (3 цифры) – код страны-производителя товара',
          '2-я группа (4 цифры) – порядковый номер продукта',
          'Последняя цифра — контрольная, вычисляется автоматически'
        ],
        placeholder: 'Числа (7)',
        import: 'ean8'
      },
      code128: {
        name: 'CODE 128',
        desc: "Штриховой код Code 128 включает в себя 107 символов, из которых 103 символа данных, 3 стартовых и 1 остановочный (стоп) символ",
        info: [
          'Стартовый символ (Start)',
          'Кодированная информация',
          'Проверочный символ (контрольный знак)',
          'Остановочный (Stop) символ'
        ],
        placeholder: 'Текст (50)',
        import: 'code128'
      },
      itf14: {
        name: 'ITF 14',
        desc: 'Штрих код ITF-14 разработан специально для транспортной упаковки. Он создаётся на основе кодов EAN-8 или EAN-13 и дополнительно несёт в себе один символ «тип упаковки», которым кодируется вариант упаковки',
        info: [
          'Первая цифра показывает тип упаковки',
          'Группа далее (12 цифр) – код стандарта EAN 13',
          'Последняя цифра — контрольная, вычисляется автоматически'
        ],
        placeholder: 'Числа (13)',
        import: 'itf14'
      },
      msi: {
        name: 'MSI',
        desc: 'Это непрерывная символика, которая не поддается самоконтролю. MSI используется в основном для управления запасами, маркировки контейнеров и полок на складах',
        info: [
          'Представляет собой только цифры 0–9',
          'Не поддерживает буквы и символы',
          'Каждая цифра преобразуется в 4 двоично-десятичный код биты. Затем добавляется 1 бит и два 0 бита'
        ],
        placeholder: 'Числа (50)',
        import: 'msicode'
      },
      pharmacode: {
        name: 'PHARMACODE',
        desc: 'Фармацевтической двоичный код — стандарт штрихового кода, используемый в фармацевтической промышленности в качестве системы контроля упаковок. Может быть читаемым, даже несмотря на ошибки при печати',
        info: [
          'Может представляться только одним целым числом от 1 до 131 070',
          'Минимальная длина штрихкода — 1 узкая полоса и максимальная — 16 широких'
        ],
        placeholder: 'Числа (3 — 131 070)',
        import: 'pharmacode'
      }
    }
  }
}
