import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export function getPngOrJpg () {
  const flag = this.count
  const zip = new JSZip()

  for (let i = 1; i <= this.count; i++) {
    const canvas = document.createElement('canvas')
    const { width, height } = document.querySelector('[data-num]').getBBox()
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    const serializer = new XMLSerializer()

    const svgString = serializer.serializeToString(document.querySelector(`[data-num="${i}"]`))
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svg)
    const img = new Image()

    img.onload = function () {
      ctx.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)

      canvas.toBlob(function (blob) {
        zip.file(`BC-${i}.png`, blob, { base64: true })

        zip.generateAsync({ type: 'blob' }).then(function (content) {
          if (i >= flag) {
            saveAs(content, 'collection.zip')
          }
        })
      }, 'image/png')
    }
    img.src = url
  }
}