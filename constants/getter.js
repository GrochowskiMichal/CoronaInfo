function getDate(string) {
  
  const descFirst = (string+'').split('{"description":"');
  var aa = descFirst[1]+'';
  const descSecond = aa.split('","data"');
  const date = ((descSecond[0]+'').split(':')[1]+':'+(descSecond[0]+'').split(':')[2]).substr(1,((descSecond[0]+'').split(':')[1]+':'+(descSecond[0]+'').split(':')[2]).length);
  
  
  return date;
}

 function getData(string) {

  const first = (string+'').split('"parsedData":"[');
  var aa = first[1]+'';
  const second = aa.split(']",');
  const third = second[0].replace(/\\"/g, "");
  const fourth = third.replace(/,/g, "#");
  const fifth = fourth.replace(/{/g, "");
  const sixth = fifth.split('}');
  
  const end = {
    t00: {
      name: ((sixth[0]+'').split('#')[0]+'').split(':')[1],
      countOfPatients: ((sixth[0]+'').split('#')[1]+'').split(':')[1]?parseInt(((sixth[0]+'').split('#')[1]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[0]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[0]+'').split('#')[2]+'').split(':')[1], 10):0,
      id: ((sixth[0]+'').split('#')[3]+'').split(':')[1],
      places: ""
    },
    t02: {
      name: ((sixth[1]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[1]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[1]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[1]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[1]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[1]+'').split('#')[4]+'').split(':')[1],
      places: "1. Wałbrzych, Specjalistyczny szpital im. dra Alfreda Sokołowskiego, ul. Batorego 4, (74) 648 98 06\n2. Wrocław - Śródmieście, Uniwersytecki Szpital Kliniczny im. Jana Mikulicza-Radeckiego, ul. Chałubińskiego 2-2A, (71) 770 31 51\n3. Wrocław - Psie Pole, Wojewódzki Szpital Specjalistyczny im. Jerzego Gromkowskiego, ul. Koszarowa 5, kom. 519 338 486\n4. Bolesławiec, Zespół Opieki Zdrowotnej, ul. Jeleniogórska 4, (75) 738 01 20"
    },
    t04: {
      name: ((sixth[2]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[2]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[2]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[2]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[2]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[2]+'').split('#')[4]+'').split(':')[1],
      places: "1. Bydgoszcz, Wojewódzki Szpital Obserwacyjno-Zakaźny im. Tadeusza Browicza, ul. Św. Floriana 12, (52) 325 56 34, (52)325 56 03\n2. Grudziądz, Regionalny Szpital Specjalistyczny im. dra Władysława Biegańskiego, ul. L. Rydygiera 15-17, (56) 641 44 44\n3. Toruń, Wojewódzki Szpital Zespolony im. Ludwika Rydygiera, ul. Krasińskiego 4/4a, (56) 679 55 27\n4. Świecie, NZOZ „Nowy Szpital Sp. z o.o.” Prowadzony przez Nowy Szpital Sp. z o.o., ul. Wojska Polskiego 126, (51) 240 16 32"
    },
    t06: {
      name: ((sixth[3]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[3]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[3]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[3]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[3]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[3]+'').split('#')[4]+'').split(':')[1],
      places: "1. Biłgoraj, Arion Szpitale Sp. z o.o., ul. Pojaska 5, (84) 688 22 55\n2. Lublin, Samodzielny Nr 1, ul. Staszica 16, (81) 534 94 16\n3. Lublin, Samodzielny Publiczny Szpital Wojewódzki im. Jana Bożego, ul. Mieczysława Biernackiego 9, (81) 740 42 75\n 4. Chełm, Samodzielny Publiczny Wojewódzki Szpital Specjalistyczny, ul. Szpitalna 53b/Paw.B, (82) 562 33 61\n5. Łuków, Samodzielny Publiczny Zakład Opieki Zdrowotnej, ul. dra Andrzeja Rogalińskiego 3, (25) 798 20 01 wew. 292\n6. Puławy, Samodzielny Publiczny Zakład Opieki Zdrowotnej, ul. Józefa Bema 1, (81) 450 22 77\n7. Tomaszów Lubelski, Samodzielny Publiczny Zespół Opieki Zdrowotnej, Al. Grunwaldzkie 1, (84) 664 44 11\n8. Biała Podlaska, Wojewódzki Szpital Specjalistyczny, ul. Terebelska 57-65, (83) 414 73 16, (83) 414 71 16"
    },
    t08: {
      name: ((sixth[4]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[4]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[4]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[4]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[4]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[4]+'').split('#')[4]+'').split(':')[1],
      places: "1. Zielona Góra, Szpital Uniwersytecki im. K. Marcinkowskiego Sp. z o.o., ul. Zyty 26, (68) 329 64 78, (68) 329 64 81\n2. Gorzów Wielkopolski, Wielospecjalistyczny Szpital Wojewódzki Sp.z o.o., ul. Walczaka 42"
    },
    t10: {
      name: ((sixth[5]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[5]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[5]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[5]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[5]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[5]+'').split('#')[4]+'').split(':')[1],
      places: "1. Radomsko, Szpital Powiatowy, ul. Jagiellońska 36, (44) 681 08 31, (44) 681 08 22 (SOR), (44) 681 08 23 (SOR)\n2. Bełchatów, Szpital Wojewódzki im. Jana Pawła II, ul. Czapliniecka 123, kom. 512 030 463\n3. Tomaszów Mazowiecki, Tomaszowskie Centrum Zdrowia, ul. Jana Pawła II 35, (44) 725 72 09\n4. Łódź - Bałuty, Wojewódzki Specjalistyczny Szpital im. dra Wł. Biegańskiego, ul. Gen. Kniaziewicza 1/5, kom. 887 877 690\n5. Zgierz, Wojewódzki Szpital Specjalistyczny im. M. Skłodowskiej-Curie, ul. Parzęczewska 35, (42) 714 45 00"
    },
    t12: {
      name: ((sixth[6]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[6]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[6]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[6]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[6]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[6]+'').split('#')[4]+'').split(':')[1],
      places: "1. Kraków, Samodzielny Publiczny Zakład Opieki Zdrowotnej – Szpital Uniwersytecki, ul. Macieja Jakubowskiego 2, (12) 400 20 00, (12) 400 20 21, (12) 400 20 06\n2. Kraków, Szpital Specjalistyczny im. Stefana Żeromskiego, Samodzielny Publiczny Zakład Opieki Zdrowotnej, os. Na Skarpie 66, dorośli: (12) 622 94 03, (12) 622 93 90, (12) 622 94 07, dzieci: (12) 622 95 03, (12) 622 93 44\n3. Kraków, Szpital Specjalistyczny im. Jana Pawła II, ul. Prądnicka 80, (12) 614 23 23, (12) 614 23 22, (12) 614 23 27\n4. Olkusz, Nowy Szpital w Olkuszu Sp. Z o.o., ul. 1000-Lecia 13, (41) 240 12 72, (41) 240 12 76\n5. Myślenice, Samodzielny Publiczny Zakład Opieki Zdrowotnej, ul. Szpitalna 2, (12) 273 03 54, (12) 273 30 50, (12) 273 03 03\n6. Tarnów, Specjalistyczny Szpital im. E. Szczeklika, ul. Szpitalna 13, (14) 631 03 92, (14) 631 03 67, (14) 631 03 10\n7. Wielogłowy, Szpital Specjalistyczny im. Jędrzeja Śniadeckiego w Nowym Sączu, ul. Dąbrowa 1, (18) 433 21 23\n8. Miechów, Szpital Św. Anny, ul. Szpitalna 3, (41) 382 03 64, (41) 382 02 99\n9. browa Tarnowska, Zespół Opieki Zdrowotnej, ul. Szpitalna 1, (14) 644 32 88, (14) 644 32 86\n10. Proszowice, Samodzielny Publiczny Zespół Opieki Zdrowotnej w Proszowicach, ul. Kopernika 13, (12) 386 52 10, (12) 386 52 11, (12) 386 52 03"
    },
    t14: {
      name: ((sixth[7]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[7]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[7]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[7]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[7]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[7]+'').split('#')[4]+'').split(':')[1],
      places: "1. Ostrołęka, Mazowiecki Szpital Specjalistyczny im. dra Józef Psarskiego, al. Jana Pawła II 120A, (29) 765 12 63, (29) 765 12 54, (29)765 21 18\n2. Radom, Radomski Szpital Specjalistyczny im. dra Tytusa Chałubińskiego, ul. Tochtermana 1, (48) 361 52 20\n3. Siedlce, Samodzielny Publiczny Zakład Opieki Zdrowotnej ul. Starowiejska 15, (25) 632 20 61 do 68 wew. 213\n4. Kozienice, Samodzielny Publiczny Zespół Zakładów Opieki Zdrowotnej, Al. W. Sikorskiego 10, (48) 679 72 89, (48) 679 97 96\n5. Ciechanów, Specjalistyczny Szpital Wojewódzki, ul. Powstańców Wielkopolskich 2, (23) 673 02 77\n6. Płock, Wojewódzki Szpital Zespolony, ul. Medyczna 19, (24) 364 68 71, (24) 364 64 03\n7. Warszawa, Wojewódzki Szpital Zakaźny, ul. Wolska 37, (22) 335 52 61\n8. Warszawa, Wojskowy Instytut Medyczny, ul. Szaserów 128, 261 817 519, 810 80 89\n9. Warszawa, Centralny Szpital Kliniczny MSWiA, ul. Wołoska 137, (22) 508 20 00\n10. Warszawa – Ochota, Uniwersyteckie Centrum Kliniczne Warszawskiego Uniwersytetu Medycznego - Dziecięcy Szpital Kliniczny im. Józefa Polikarpa Brudzińskiego w Warszawie, ul. Żwirki i Wigury 63A, (22) 317 92 31"
    },
    t16: {
      name: ((sixth[8]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[8]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[8]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[8]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[8]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[8]+'').split('#')[4]+'').split(':')[1],
      places: "1. Kędzierzyn-Koźle, Samodzielny Publiczny Zespół Opieki Zdrowotnej, ul. Kwietnia 5, (77) 406 25 45\n2. Opole, Szpital Wojewódzki w Opolu Sp. z o.o., ul. Kośnego 53, (77) 443 30 43, (77) 443 30 44\n3. Nysa, Oddział Obserwacyjno-Zakaźny, Zespół Opieki Zdrowotnej, ul. Bohaterów Warszawy 23, (77) 408 79 56"
    },
    t18: {
      name: ((sixth[9]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[9]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[9]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[9]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[9]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[9]+'').split('#')[4]+'').split(':')[1],
      places: "1. Łańcut, Centrum Medyczne w Łańcucie Sp. z o. o., ul. Ignacego Paderewskiego 5, (17) 224 02 92, (17) 224 01 12\n2. Jarosław, Centrum Opieki Medycznej, ul. 3 Maja 70, (16) 624 51 19\n3. Sanok, Samodzielny Publiczny Zespół Opieki Zdrowotnej, ul. 800-lecia 26, (13) 465 62 24\n4. Mielec, Szpital Specjalistyczny im. Edmunda Biernackiego, ul. Żeromskiego 22, (17) 780 03 90\n5. Jasło, Szpital Specjalistyczny, ul. Lwowska 22, (13) 443 75 29\n6. Przemyśl, Wojewódzki Szpital im. Św. Ojca Pio, ul. Rogozińskiego 30, (16) 670 61 07\n7. Dębica, Zespół Opieki Zdrowotnej, ul. Krakowska 91, (14) 680 83 87"
    },
    t20: {
      name: ((sixth[10]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[10]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[10]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[10]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[10]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[10]+'').split('#')[4]+'').split(':')[1],
      places: "1. Augustów, Samodzielny Publiczny Zakład Opieki Zdrowotnej w Augustowie, ul. Szpitalna 12, (87) 644 43 48, (87) 644 42 00\n2. Bielsk Podlaski, Samodzielny Publiczny Zakład Opieki Zdrowotnej w Bielsku Podlaskim, ul. Kleszczelowskiego 1, (85) 833 43 02\n3. Hajnówka, Samodzielny Publiczny Zakład Opieki Zdrowotnej w Hajnówce, ul. doc. Adama Dowgirda 9, kom. 606 996 889\n4. Grajewo, Szpital Ogólny im. dra Witolda Ginela, ul. Konstytucji 3 Maja 34, (86) 272 32 71 wew. 233\n5. Suwałki, Szpital Wojewódzki im. dra Ludwika Rydygiera, ul. Szpitalna 60, (87) 562 92 15\n6. Łomża, Szpital Wojewódzki im. Kardynała Stefana Wyszyńskiego, Al. Marsz. Józefa Piłsudskiego 11, (85) 473 33 58, (85) 473 33 36\n7. Białystok, Uniwersytecki Dziecięcy Szpital Kliniczny im. Ludwika Zamenhofa, ul. Waszyngtona 17, (85) 745 06 93\n8. Białystok, Uniwersytecki Szpital Kliniczny, ul. Żurawia 14, (85) 740 95 73"
    },
    t22: {
      name: ((sixth[11]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[11]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[11]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[11]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[11]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[11]+'').split('#')[4]+'').split(':')[1],
      places: "1. Gdynia, Uniwersyteckie Centrum Medycyny Morskiej i Tropikalnej, ul. Powstania Styczniowego 9B\n2. Gdańsk, 7 Szpital Marynarki Wojennej z Przychodnią SPZOZ im. kontradm. prof. W. Łasińskiego, ul. Polanki 117 (58) 552 63 18, 785 773 020\n3. Gdańsk, Pomorskie Centrum Chorób Zakaźnych i Gruźlicy, ul. Mariana Smoluchowskiego 18, (58) 341 55 47\n4. Kościerzyna, Szpital Specjalistyczny w Kościerzynie Sp. zo.o., ul. Alojzego Piechowskiego 36, (58) 686 01 01, (58) 686 00 00\n5. Wejherowo, Szpitale Pomorskie Sp z o.o. Szpital Specjalistyczny im. F. Ceynowy, ul. dr. Alojzego Jagalskiego 10"
    },
    t24: {
      name: ((sixth[12]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[12]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[12]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[12]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[12]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[12]+'').split('#')[4]+'').split(':')[1],
      places: "1. Tychy, Megrez Sp. z o. o., ul. Edukacji 102, (32) 325 53 04\n2. Zawiercie, Szpital Powiatowy, ul. Miodowa 14, (32) 674 02 89, (32) 674 02 91\n3. Racibórz, Szpital Rejonowy im. dr Józefa Rostka, ul. Gamowska 3, (32) 755 53 72\n4. Bytom, Szpital Specjalistyczny nr 1, al. Legionów 49, (32) 281 92 41 wew. 230\n5. Chorzów, Szpital Specjalistyczny, ul. Zjednoczenia 10, 797 189 603, (32) 346 36 41\n6. Częstochowa, Wojewódzki Szpital Specjalistyczny im. N.M.P., ul. Polskiego Czerwonego Krzyża 7, (34) 367 38 72 lub 73\n7. Cieszyn, Zespół Zakładów Opieki Zdrowotnej, ul. Bielska 4, (32) 854 92 00 wew. 492 lub 493"
    },
    t26: {
      name: ((sixth[13]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[13]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[13]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[13]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[13]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[13]+'').split('#')[4]+'').split(':')[1],
      places: "1. Starachowice, Powiatowy Zakład Opieki Zdrowotnej, ul. Radomska 70, (41) 273 91 45 lub 99-11\n2. Kielce, Wojewódzki Szpital Zespolony, ul. Radiowa 7, (41) 363 71 33\n3. Busko-Zdrój, Zespół Opieki Zdrowotnej, ul. Bohaterów Warszawy 67, (41) 378 24 01 wew. 335 (rejestracja), (41) 378 24 01 wew. 237\n4. Kielce, Wojewódzki Szpital Zaspolony Oddział Zakaźny Dziecięcy, ul. Grunwaldzka 45, (41) 303 32 30 (p. pielęgniarski), (41) 303 32 29 (p. lekarski), (41) 303 32 31 (sekretariat)\n5. Kielce, Świętokrzyskie Centrum Pediatrii działające przy Szpitalu Zespolonym w Kielcach, ul Radiowa 7, (41) 363 71 33"
    },
    t28: {
      name: ((sixth[14]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[14]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[14]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[14]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[14]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[14]+'').split('#')[4]+'').split(':')[1],
      places: "1. Giżycko, „Szpital Giżycki” Sp. z o. o., ul. Warszawska 41, (87) 429 66 91, (87) 429 66 92\n2. Pisz, Samodzielny Publiczny Zakład Opieki Zdrowotnej Szpital Powiatowy, ul. Sienkiewicza 2, (87) 425 45 65, (87) 425 46 44\n3. Ostróda, Szpital w Ostródzie S.A., ul. Jagiełły 1, (89) 646 06 47 (lekarze), (89) 646 06 22 (pielęgniarki)\n4. Elbląg, Szpital miejski św. Jana Pawła II, ul. Żeromskiego 22, (55) 230 42 58\n5. Olsztyn, Wojewódzki Specjalistyczny Szpital Dziecięcy im. prof. dr Stanisława Popowskiego, ul. Żołnierska 18A, (89) 539 34 21 (lekarze), (89) 539 34 25 (pielęgniarki)"
    },
    t30: {
      name: ((sixth[15]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[15]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[15]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[15]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[15]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[15]+'').split('#')[4]+'').split(':')[1],
      places: "1. Poznań - Stare Miasto, Specjalistyczny Zespół Opieki Zdrowotnej nad Matką i Dzieckiem, ul. Nowowiejskiego 56/58, (61) 859 03 36, 539 524 935\n2. Poznań - Jeżyce, Szpital kliniczny im. Karola Jonschera Uniwersytetu Medycznego im. Karola Marcinkowskiego, ul. Szpitalna 27/33, kom. 504 907 994\n3. Poznań - Nowe Miasto, Wielospecjalistyczny Szpital Miejski im. Józefa Strusia z Zakładem Opiekuńczo-Leczniczym. Samodzielny Publiczny Zakład Opieki Zdrowotnej z siedzibą w Poznaniu, ul. Szwajcarska 3, (61) 873 92 95\n4. Konin, Wojewódzki Szpital Zespolony im. dr Romana Ostrzyckiego, ul. Szpitalna 45, (63) 240 44 02\n5. Kalisz, Wojewódzki Szpital Zespolony im. Ludwika Perzyny, ul. Toruńska 7, (62) 757 91 84"
    },
    t32: {
      name: ((sixth[16]+'').split('#')[1]+'').split(':')[1],
      countOfPatients: ((sixth[16]+'').split('#')[2]+'').split(':')[1]?parseInt(((sixth[16]+'').split('#')[2]+'').split(':')[1], 10):0,
      countOfDeaths: ((sixth[16]+'').split('#')[3]+'').split(':')[1]?parseInt(((sixth[16]+'').split('#')[3]+'').split(':')[1], 10):0,
      id: ((sixth[16]+'').split('#')[4]+'').split(':')[1],
      places: "1. Wałcz, 107 Szpital Wojskowy z Przychodnią Samodzielny Publiczny Zakład Opieki Zdrowotnej, ul. Kołobrzeska 44, 261 472 912\n2. Szczecin, Samodzielny Publiczny Wojewódzki Szpital Zespolony, ul. Arkońska 4, (91) 813 94 43, (91) 813 94 54\n3. Koszalin, Szpital Wojewódzki im. Mikołaja Kopernika, ul. Chałubińskiego 7, (94) 348 84 00"
    }
  }
  
  return end;
}

export { getData, getDate};