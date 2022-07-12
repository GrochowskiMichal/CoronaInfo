import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get("window");

const colors = {
  accent: "#F3534A",
  primary: 'rgb(205,43,47)',
  secondary: 'rgb(205,43,47)',
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#a8a19e",
  gray2: "#a8a19e"
  // prop 1 rgba(140,10,0,5.9)
  //prop 2 rgba(140,10,50,5.9)
  //half final prop rgb(155,10,5)
  //207 10 5
  //207 28 26
  //primary: 'rgb(205,43,47)',
  //secondary: 'rgb(205,43,47)',
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12
};

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  },
  bold: {
	fontWeight: 'bold'
  },
  italic: {
	fontStyle: 'italic'
  },
  underline: {
	textDecorationLine: 'underline'
  }
};

//przyciski
const buttons = StyleSheet.create({
		//przycisk kliknięty
		buttonEn: {
			borderWidth: 1,
			borderColor: colors.secondary,
			backgroundColor: colors.white,
			color: 'red',
			minWidth: (width - sizes.padding *2 - sizes.base),
			borderRadius: sizes.radius,
			padding: sizes.base + 4,
			marginBottom: sizes.base
		  },
		  //przycisk niekliknięty
		  buttonDi: {
			borderWidth: 1,
			borderColor: colors.white,
			backgroundColor: colors.secondary,
			color: 'white',
			minWidth: (width - sizes.padding * 2 - sizes.base),
			borderRadius: sizes.radius,
			padding: sizes.base + 4,
			marginBottom: sizes.base
		  },
});

//style tab1
const tab1 = {
	styles: StyleSheet.create({
		//biały kolor tekstu
		textWhite: {
			color: colors.white
		},
		//czarny kolor tekstu
		textBlack: {
			color: colors.black
		},
		//nagłówek
		header: {
			paddingHorizontal: sizes.base * 2,
			marginBottom: sizes.base,
			marginTop: sizes.base
		},
		//kontener
		buttons: {
			flexWrap: "wrap",
			paddingHorizontal: sizes.base * 2,
			marginBottom: sizes.base * 5.5,
		  },
	})
}

//style tab3
const tab3 = {
	styles: StyleSheet.create({
		//biały kolor tekstu
		textWhite: {
			color: colors.white
		},
		//czarny kolor tekstu
		textBlack: {
			color: colors.black
		},
		//nagłówek
		header: {
			paddingHorizontal: sizes.base*2,
			marginBottom: sizes.base,
			marginTop: sizes.base
		},
		//kontener
		container: {
			flexWrap: "wrap",
			paddingHorizontal: sizes.base * 2,
			marginBottom: sizes.base * 7.5,
		  },
	})
}

// Tab Menu
const tabMenu = {
	style: StyleSheet.create({
		//tekst
		label: {
			fontWeight: 'bold', 
			fontSize: 14
		},
		//belka
		bar: {
			backgroundColor: 'rgb(170,43,47)',
		},
		//zakładka
		tab: {
			//nic nie wymysliłem
		},
		//wskaznik aktywnosci
		indicator: {
			backgroundColor: 'red',
		},
	}),
	//kolor tekstu gdy aktywny
	activeFontColor: 'white',
	//kolor tekstu gdy nieaktywny
	inactiveFontColor: 'rgba(255,255,255,0.4)',
};

// górna belka nawigacji
const navigation = {
	styles: StyleSheet.create({
		//belka
		header: {
			backgroundColor: colors.secondary,
            elevation: 5
		},
		//tekst na belce
		headerTitle: {
			fontWeight: 'normal'
		}
	})
}

const menu = {
	styles: StyleSheet.create({
		//główny napis
		title: {
			fontSize: 24,
			textAlign: 'center',
			fontWeight: 'bold',
			width: width/1.75,
			paddingLeft: 0,
			paddingVertical: sizes.base,
		},
		//kontener
		container: {
			width: width/1.5,
			height: height,
			backgroundColor: colors.white,
			flexWrap: "wrap",
			paddingHorizontal: sizes.base,
		},
		button: {
			borderWidth: 1,
			borderColor: colors.white,
			backgroundColor: colors.secondary,
			color: colors.white,
			minWidth: width/2,
			borderRadius: sizes.radius,
			padding: sizes.base + 4,
			marginBottom: sizes.base
		  },
		  buttonText: {
			  textAlign: 'center',
			  color: colors.white
		  }
	})
}

export { colors, sizes, fonts, tabMenu, tab1, tab3, navigation, menu, buttons };
