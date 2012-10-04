# Integracija Draagla v lekarniško ali ambulantno aplikacijo

## Prerekviziti

Nameščen mora biti brskalnik Microsoft Internet Explorer 7 ali novejši ali Firefox 3 ali novejši. Priporoča se brskalnik, ki podpira html5.

## Internet Explorer

Klicanje programa internet explorer iz ukazne vrstice, kot je opisano na [microsoftovi strani](http://msdn.microsoft.com/en-us/library/hh826025(v=vs.85).aspx)

    c:\Program\ Files\Internet\ Explorer\iexplore.exe -k http://si.draagle.com/basket/show/020419+013137?close_button=true  

Opcijo `-k`, ki pomeni, da se ie zažene v načinu kiosk brez vidnega okna in kontrol, lahko izpustite.

## Firefox

Klicanje s programom firefox:

    C:\Program\ Files\Mozilla\ Firefox\Firefox.exe -new-window http://si.draagle.com/basket/show/020419+013137?close_button=true  

Dodamo lahko še opcije `-fullscreen` za celozaslonski prikaz, ali določimo velikost okna z `-width 1024 -height 768`.

Parameter `close_button=true` dodamo zato, da se pojavi gumb za zapiranje aplikacije.


## Firefox na Mac OSX

Na macu se firefox nahaja v `/Applications/Firefox.app/Contents/MacOS/firefox-bin`. Primer klica:

    /Applications/Firefox.app/Contents/MacOS/firefox-bin http://si.draagle.com/ -width 1024 -height 768

## Api

Prikz košarice z zdravili s kodo `drug_id1` in `drug_id2`. Koda `drug_id` je lahko zavodova širfa, šifra nensi ali koda EAN pakiranja zdravila.

    /basket/new/drug_id1+drug_id2/

Dodali bomo še ostale url-je.
