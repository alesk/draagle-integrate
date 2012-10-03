# Integracija Draagla v lekarniško ali ambulantno aplikacijo

## Prerekviziti

  1. Firefox 3 ali novejši.

  2. Namesto firefoxa lahko namestite tudi Mozilla Xulrunner, ki je okleščena
izdaja firefoxa namenjena poganjanju spletnih aplikacij. Zadnja verzija je na naslovu:

  https://developer.mozilla.org/en-US/docs/XULRunner


## Klicanje aplikacije Draagle

Če uporabljate firefox, kličite s prvim argumentom `-app`, XulRunner argumenta `-app` ne potrebuje.
Naslednji argument morata biti pot do datoteke `application.ini`, sledi pa naj seznam kod ean ali zavodovih šifer ločenih z 
znakom `+`.

Windows:

    C:\Program\ Files\Mozilla\ Firefox\Firefox.exe -app xulreuner/application.ini 020419+013137

Na Mac OSX:

    /Applications/Firefox.app/Contents/MacOS/firefox-bin -app $PWD/xulrunner/application.ini 020419+013137

