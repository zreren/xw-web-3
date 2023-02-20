import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(){
            if(window && document) {
              console.log('niming');
              document.oncontextmenu=new Function("event.returnValue=false");
              document.onselectstart=new Function("event.returnValue=false");
            }
          })()
        `
      }} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
