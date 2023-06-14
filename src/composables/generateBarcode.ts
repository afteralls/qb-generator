import JsBarcode from 'jsbarcode'

export const generateBarcode = (selector: string, content: string, set: BarcodeData) => {
  setTimeout(() => {
    JsBarcode(selector, content, {
      format: set.curStandart.codeName,
      background: set.bgColor,
      lineColor: set.codeColor,
      displayValue: set.showData
    })
  }, 1)
}