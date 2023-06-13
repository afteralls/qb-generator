import JSZip from 'jszip'
// @ts-ignore
import { saveAs } from 'file-saver'

const getZip = (folder: JSZip, name: string) => {
  folder.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, `${name || 'Barcodes'}.zip`)
  })
}

/**
 * Parses all necessary graphics (png, jpg) from the DOM tree and downloads them
 * @param flag
 * @param name
 * @param format
 * @param quantity
 */
export const getGraphics = (flag: boolean, name: string, format: string, quantity: string) => {
  const zip = new JSZip()
  let counter = 0
  const preview: HTMLDivElement | null = document.querySelector('.preview')
  const barcodeCollection = preview!.querySelectorAll('[data-num]')
  const { width, height } = (barcodeCollection[0] as SVGAElement)!.getBBox()

  barcodeCollection.forEach((node, i) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(node)
    const svg = new Blob([svgString], { type: 'image/svg+xml; charset=utf-8' })
    const url = URL.createObjectURL(svg)
    const img = new Image()

    img.onload = () => {
      ctx!.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)

      canvas.toBlob((blob) => {
        if (flag) {
          saveAs(blob, `${name || 'Barcode'}.${format}`)
        } else {
          zip.file(`Barcode-${i + 1}.${format}`, blob!, { base64: true })
          counter++
          if (+quantity <= counter) {
            getZip(zip, name)
          }
        }
      }, `image/${format}`)
    }
    img.src = url
  })
}

/**
 * Parses all necessary svg from the DOM tree and downloads them
 * @param flag
 * @param name
 * @param quantity
 */
export const getSvgs = (flag: boolean, name: string, quantity: string) => {
  const zip = new JSZip()
  const preview: HTMLDivElement | null = document.querySelector('.preview')
  if (flag) {
    const blob = new Blob([preview!.querySelector(`[data-num="1"]`)!.outerHTML], {
      type: 'image/svg+xml'
    })
    saveAs(blob, `${name || 'Barcode'}.svg`)
  } else {
    for (let i = 1; i <= +quantity; i++) {
      zip.file(
        `Barcode-${i}.svg`,
        new Blob([preview!.querySelector(`[data-num="${i}"]`)!.outerHTML], {
          type: 'image/svg+xml'
        })
      )
    }
    getZip(zip, name)
  }
}

export const getQr = async (name: string, qr: string) => {
  const base64Response = await fetch(qr);

  const blob = await base64Response.blob()
  saveAs(blob, `${name}.png`)
}
