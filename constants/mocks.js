
const products = [
  {
    id: 1,
    name: "Hipoteza rozwoju koronawirusa covid-19",
    description:"Pomimo tego, że serwisy informacyjne poświęcają prawie całą swoją uwagę na tematy dotyczące epidemii koronawirusa, brakuje jednego, ale bardzo istotnego aspektu - głębszej analizy danych i prognozy dalszego rozwoju.",
    tags: ["polska", "koronawirus", "covid-19"],
    images: [
      
    ]
  },
  {
    id: 2,
    name: "Poradnik jak własnoręcznie zrobić maseczkę",
    description:"empty",
    tags: ["polska", "koronawirus", "covid-19", "maseczka"],
    images: [
      require("../assets/images/artykul2.jpg"),
    ]
  }
];

const explore = [
  // images for articles
  require("../assets/images/explore_1.jpg"),
  require("../assets/images/artykul2.jpg"),
 
];



const virusInfos = [
	{
		id: "akapit1",
		name: "Czym jest Koronawirus?",
		data: "<.</><dic class=\"data\"><center>Oficjalną nazwą koronawirusa z Wuhan jest <b>SARS-CoV-2</b>. Nazwa wirusa wynika z jego genetycznego podobieństwa do wirusa odpowiedzialnego za epidemię ostrej ciężkiej niewydolności oddechowej\n(SARS – Severe Acute Respiratory Syndrome) z 2003 roku. Chorobę, którą wywołuje SARS-CoV-2, nazwano <b>COVID-19</b>.\nKoronawirus zapoczątkował swoją historie w Chinach w mieście Wuhan w prowincji Hubei. Zainfekował on już ponad 1mln osób na całym świecie.</center></div>\n",
		tag: ["Postawowe informacje"]
	},


	{
		id: "akapit2",
		name: "Jakie są objawy zakażenia?",
		data: "<.</><div><center><b>Warto wiedzieć</b>, że objawy mogą się ukazywać dopiero po kilku dniach od zarażenia.\nNajczęściej występującymi objawami są:\n\n<ol type=\"1\">\t<li>Gorączka,</li>\t<li>Męczący kaszel,</li>\t<li>Duszności oraz problemy z oddychaniem.</li></ol>\n\n<b>Warto pamiętać</b>, że objawy mogą się różnić dla osób w różnym wieku, np:\n\n<ol type=\"1\">\t<li>Osoby w młodszym wieku są <u>znacznie mniej</u> podatne na wykazywanie objawów choroby, co nie znaczy, że nie są nosicielami i nie mogą zarazić innych osób.</li>\t<li>Osoby starsze są <u>znacznie bardziej</u> podatne na wykazywanie objawów choroby.</div>\n",
		tag: ["Postawowe informacje"]
	},


	{
		id: "akapit3",
		name: "Jak mogę się uchronić przed zakażeniem?",
		data: "<.</><div><center>Na początku warto wiedzieć, że wirus potrafi utrzymać się w powietrzu przez kilka godzin, a na niektórych powierzchniach około <u>3-4 dni</u>.\nNależy pamiętać o:\n\n<ol type=\"1\">\t<li>Częstym myciu rąk wodą z mydłem,</li>\t<li>Unikaniu dotykania oczu, nosa i ust,</li>\t<li>Unikaniu miejsc w którym znajduje się dużo osób,</li>\t<li>Zakrywaniu ust i nosa zgiętym łokciem lub chusteczką, podczasz kichania lub kasłania,</li>\t<li>Zachowaniu bezpiecznej odległości (1-1,5m) od osoby, która kicha, kaszle lub ma gorączkę.</li></ol></center></div>\n",
		tag: ["Postawowe informacje"]
	},


	{
		id: "akapit4",
		name: "Co zrobić gdy podejrzewam u siebie zarażenie koronawirusem?",
		data: "<.</><div><center>Należy sprawdzić:\n\n1. Czy masz podwyższoną temperaturę,\n2. Czy kaszlesz i masz duszności,\n3. Czy w ciągu ostatnich 14 dni przebywałeś na obszarach objętych wirusem bądź miałeś kontakt z osobą zarażoną.</center></div>\n",
		tag: ["Postawowe informacje"]
	},


	{
		id: "akapit5",
		name: "Co zrobić gdy masz objawy zakażenia i wróciłeś z regionu, w którym występuje koronawirus?",
		data: "<.</><div><center>Na początku <u>warto wiedzieć</u>, że jest możliwość, niewykrycia posiadania wirusa <u>jeśli</u> jest on w bardzo wczesnej fazie rozwoju.\nJeśli w ciągu ostatnich 14 dni wróciłeś\nz kraju, w którym występuje koronawirus\ni masz takie objawy jak:\n\n1. Gorączka,\n2. Kaszel,\n3. Duszności,\nlub miałeś kontakt z osobą, u której potwierdzono zakażenie:\n \n1. Bezzwłocznie powiadom telefonicznie stację sanitarno-epidomiologiczną\n<a>LISTA STACJI EPIDOMIOLOGICZNYCH</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLUB\n\n2. Zgłoś się do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego, gdzie określony zostanie dalszy tryb postępowania medycznego.\n<a>MAPA ODZIAŁÓW ZAKAŹNYCH</a></center></div>\n",
		tag: ["Postawowe informacje"]		
	},


	{
		id: "akapit6",
		name: "Co zrobić gdy masz objawy, ale nie byłeś w kraju lub regionie, w którym występuje koronawirus i nie miałeś kontaktu z osobą zakażoną?",
		data: "<.</><div>Stosuj podstawowe zasady ochrony,\ngdy kaszlesz i kichasz, oraz higieny rąk.\nPozostań w domu do czasu powrotu\ndo zdrowia.</center></div>\n",
		tag: ["Postawowe informacje"]
	},


	{
		id: "akapit7",
		name: "Gdzie do tej pory stwierdzono przypadki zakażenia koronawirusem?",
		data: "<.</><div>Najwięcej potwierdzonych przypadków zakażenia zarejestrowano w Chinach (99%),głównie w prowincji Hubei, Korei Południowej oraz we Włoszech.</center></div>\n",
		tag: ["Postawowe informacje"]
	},
	

	{
		id: "akapit8",
		name: "Dlaczego w profilaktyce koronawirusa ważne jest mycie rąk?",
		data: "<.</><div>Koronawirus jest osłonięty błoną tłuszczową (lipidową).Dlatego można mu zapobiegać przez zastosowanie środków chemicznych, takich jak zwykłe mydło, alkohol minimum 60-70% lub preparaty do dezynfekcji.</center></div>\n",
		tag: ["Postawowe informacje"]
	},


	{
		id: "akapit9",
		name: "Fakty i mity",
    data: "<.</><div>.</div>\n",
		tag: ["Postawowe informacje"]
	},

];


const tabs = [
  {
    id: "tab1",
    name: 'Podstawowe informacje',
  },
  {
    id: 'tab2',
    name: 'Mapa zagrożen',
  },
  {
    id: 'tab3',
    name: 'Szybkie reagowanie',
  },
  {
    id: 'tab4',
    name: 'empty',
  },
]

export { explore, products, virusInfos, tabs };
