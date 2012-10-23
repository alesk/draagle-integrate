# Klicanje Draagla iz lekarniške ali ambulantne aplikacije

## Prerekviziti

Nameščen mora biti eden od podprtih brskalnikov:

  * Microsoft Internet Explorer 7 ali novejši
  * Firefox 3 ali novejši
  * Google Chrome 
  
Priporoča se brskalnik, ki podpira html5.

## Internet Explorer na Windows

Klicanje programa Internet Explorer iz ukazne vrstice:

    "%PROGRAMFILES%\Internet Explorer\iexplore.exe" -k http://si.draagle.com/#!/basket/new/020419+013137/

Opcijo `-k`, ki pomeni, da se ie zažene v načinu kiosk brez vidnega okna in kontrol, lahko izpustite.

## Firefox na Windows

Klicanje s programom firefox:

    "%PROGRAMFILES%\Mozilla Firefox\Firefox.exe" -new-window http://si.draagle.com/#!/basket/new/020419+013137/

Dodamo lahko še opcije `-fullscreen` za celozaslonski prikaz, ali določimo velikost okna z `-width 1024 -height 768`.

## Firefox na Mac OSX

Na macu se firefox nahaja v `/Applications/Firefox.app/Contents/MacOS/firefox-bin`. Primer klica:

    /Applications/Firefox.app/Contents/MacOS/firefox-bin http://si.draagle.com/ -width 1024 -height 768

## Chrome na Windows

    "%USERPROFILE%\Local Settings\Application Data\Google\Chrome\Application\chrome.exe" --kiosk http://si.draagle.com

## Chrome na Mac OSX

    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk --user-data-dir=/tmp --app=http://si.draagle.com/

## Api

### Identifikacija uporabnika

Uporabnika identificirate s parametrom `recipe_id`, ki pa mora biti del `poti` in ne del `fragmenta`. Primer:
 
    http://si.draagle.com/?recipe_id=33090#!/basket/new/020419+013137/?close_button=true

Identifikatorje lekarn ali ambulant nam pošljite vnaprej na naslov [ales.kotnik@draagle.com](mailto:ales.kotnik@draagle.com) , da jim pripravimo uporabniške račune.


### Košarica z zdravili
Prikaz košarice z zdravili s kodo `drug_id1 = 929419`  in `drug_id2 = 013137`. Koda `drug_id` je lahko zavodova širfa, šifra nensi ali koda EAN pakiranja zdravila.

    http://si.draagle.com/?recipe_id=33090#!/basket/new/020419+013137/?close_button=true


Url parameter `close_button=true` dodamo zato, da se pojavi gumb za zapiranje aplikacije.

Dodali bomo še ostale url-je.

## Reference

  1. [Windows Environment Variables](http://www.wilsonmar.com/1envvars.htm)
  2. [Google Chrome command line switches](http://peter.sh/experiments/chromium-command-line-switches/)
  3. [Firefox commandline switches](http://kb.mozillazine.org/Command_line_arguments)
