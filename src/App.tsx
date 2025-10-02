/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'
import { Detector } from 'detector-js'

type os = { name: string, version: string, versionName: string }

function App() {
  const detector = new Detector();

  useEffect(() => {
    if (detector.os && (detector.os as os).name) {
      const systemDetected = (detector.os as os).name

      if(systemDetected === 'Android') {
        window.location.replace('https://play.google.com/store/apps/details?id=com.kangwru.app&pli=1');
      } else if (systemDetected === 'iOS') {
        window.location.replace('https://apps.apple.com/ao/app/kangwru/id6574340392');
      } else {
        window.location.replace('https://kangwru.com');
      }
    } else {
      window.location.replace('https://kangwru.com');
    }
  }, [])

  return (
    <>
      <p>Redirecting....</p>
    </>
  )
}

export default App
