import html2canvas from 'html2canvas';
// @ts-ignore
import printJS from 'print-js';

export async function printPDF(elementId: string, type: string = 'image', header: string = ''): Promise<void> {
  if (type === 'html') {
    // @ts-ignore
    await html2canvas(document.querySelector(`#${elementId}`)).then(async (canvas: HTMLCanvasElement) => {
      printJS({
        printable: `${elementId}`,
        header: header,
        type: type
      });
    });
  } else {
    // @ts-ignore
    await html2canvas(document.querySelector(`#${elementId}`)).then(async (canvas: HTMLCanvasElement) => {
      const toImg = canvas.toDataURL();
      printJS({
        printable: `${toImg}`,
        type: type,
        header: header,
        imageStyle: 'width:100%;height:100%;background-size: cover;'
      });
    });
  }
}
