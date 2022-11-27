import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const formats = [
    {
      name: 'EAN 13',
      desc: 'The European Article Number is a standard to encode product numbers. The EAN is a special case of a Global Trade Item Number',
      info: [
        'Country-specific part: 1-3 digits',
        'Company part',
        'Article number: 4-5 digits',
        'Checksum digit'
      ],
      correctLength: 12,
      import: 'ean13',
    },
    {
      name: 'EAN 8',
      desc: 'The normal length of an EAN is 13 digits. There is also a shorter version called EAN-8, for small packages, where the full 13-digit number would take too much space on the package',
      info: [
        'Country-specific part: 2-3 digits',
        'Article number: 4-5 digits',
        'Checksum digit'
      ],
      correctLength: 7,
      import: 'ean8'
    },
    {
      name: 'CODE 128',
      desc: "is a high-density linear barcode symbology defined in ISO/IEC. It's used for alphanumeric or numeric-only barcodes.",
      info: [
        'Start symbol',
        'Encoded data',
        'Check symbol',
        'Stop symbol'
      ],
      correctLength: 1,
      import: 'code128'
    },
    {
      name: 'ITF 14',
      desc: 'ITF-14 is the GS1 implementation of an Interleaved 2 of 5 (ITF) bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits.',
      info: [
        'Packaging indicator',
        'The next 12 digits are representing the product number',
        'Checksum digit'
      ],
      correctLength: 13,
      import: 'itf14'
    },
    {
      name: 'MSI',
      desc: 'The code can display only the number 0-9 and has no fixed length. Today this type of code is outdated and is no longer used. Because of this most barcode scanners can not recognize this type of code',
      info: [
        'Can display only the number 0-9'
      ],
      correctLength: 1,
      import: 'msicode'
    },
    {
      name: 'PHARMACODE',
      desc: 'Pharmaceutical Binary Code is a barcode standard, used in the pharmaceutical industry as a packing control system. It is designed to be readable despite printing errors',
      info: [
        'Pharmacode can represent only a single integer from 3 to 131 070',
        'The minimum barcode is 2 bars and the maximum 16'
      ],
      correctLength: 1,
      import: 'pharmacode'
    }
  ]

  return { formats }
})
