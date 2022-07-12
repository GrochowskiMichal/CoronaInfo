import React, { Component } from "react";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import * as Icon from "@expo/vector-icons";

import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    };
  };

  renderGallery() {
    const { product } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.2 }}
          />
        )}
      />
    );
  }

  render() {
    const { product } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            {product.name}
          </Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={25}>
          Pomimo tego, że serwisy informacyjne poświęcają prawie całą swoją uwagę na tematy dotyczące epidemii koronawirusa, brakuje jednego, ale bardzo istotnego aspektu - głębszej analizy danych i prognozy dalszego rozwoju.
          {'\n'}{'\n'}Codziennie jesteśmy informowani o nowych zdiagnozowanych zarażeniach, ale brak na przykład spojrzenia na sytuację z punktu widzenia tempa tego przyrostu.
          {'\n'}{'\n'}Premier Wielkiej Brytanii w komunikacie z 16 marca wyraził przewidywania, że w ciągu najbliższego czasu ilość zarażonych w Anglii będzie się podwajać co 5 dni.
          {'\n'}Patrząc tylko na oficjalne raporty i dokonując prostych obliczeń z okresu wydania tego komunikatu, wynika że w Anglii wówczas podwajanie się przebiega co około 2 dni.{'\n'}W kraju, gdzie świadomie nie wprowadzono praktycznie żadnych środków zapobiegawczych.
          {'\n'}{'\n'}Tymczasem w Polsce, gdzie poddajemy ludzi kwarantannie, zamknęliśmy granice, galerie handlowe, szkoły itd, podwajanie się liczby zarażonych odbywa się... również co około 2 dni.
          {'\n'}Przytoczony komunikat Borisa Johnsona, bez skonfrontowania go z faktami, może wywoływać w odbiorcach i naszego społeczeństwa fałszywy obraz sytuacji - "skoro w Anglii podwaja się co 5 dni, to u nas na pewno dłużej, skoro podejmujemy tyle dziań, których oni nie podejmują".
          {'\n'}{'\n'}Modele matematyczne, na które powołuje się nasz rząd, pozwalają im prognozować liczby na kolejne dni i tygodnie. Dają również możliwość konfrontowania rozwijającej się sytuacji z trajektoriami modeli - pozwalają ocenić, jak skuteczne (bądź nie) są nasze obecne działania zapobiegawcze. Podpowiadają też, kiedy i jakie podjąć kolejne kroki hamujące rozwój epidemii.
Uważam, że takie pogłębione analizowanie przebiegu epidemii, porównywanie tempa rozwoju z innymi krajami, m. in. właśnie wartości okresu podwajania, jest również ważne w debacie publicznej.{'\n'}{'\n'}Z moich amatorskich wyliczeń wynika, że w analogicznej fazie epidemii, jak nasza, okres podwajania się zarażonych wynosi około 2 dni nie tylko dla Polski, ale wszystkich innych krajów, które poddałem analizie. Wygląda to na pewien stały parametr epidemii.
Tymczasem z mediów słyszymy przekaz, że w Polsce nie jest tak źle, jak w innych krajach, zestawiając go z wykresami innych krajów.{'\n'}Błąd polega na tym, że na tych wykresach poszczególne linie krajów są źle ze sobą zestawione.{'\n'}W Polsce postęp wykładniczy nastąpił od pierwszego dnia. Tymczasem w Hiszpanii rozpoczął się po 26 dniach od pierwszego zdiagnozowania, we Włoszech po 22 dniach. Przez cały ten czas w obu tych krajach nie było rozwoju epidemii - te pojedyncze osoby odizolowano, wykładniczy rozwój epidemii rozpoczął się więc z opóźnieniem.
{'\n'}{'\n'}Taki błąd logiczny interpretacji danych może nas kosztować wiele. Poniżej przedstawiam jeden z mnóstwa podobnych przykładów powielania obecnie panującej, powszechnej opinii.{'\n'}</Text><Image source={require('../assets/images/articles/screen12.png')} style={{width: 320, height: 500,  }} />
<Text gray light height={25}>
{'\n'}Nie dostrzegam, aby media czy rząd weryfikowały prawdziwość takich konkluzji. Przeciwnie - czasem są wręcz powielane.{'\n'}Myślę, że przyczyną są po prostu braki w naukowym i eksperckim podejściu do tego problemu. Świadczy o tym praktycznie absolutnie całkowity brak prób głębszej analizy danych w mediach i poświęcanie temu aspektowi uwagi. Szukając jakiegoś porównania, uważam, że poruszamy się we mgle, trzymając w rękach fałszywą mapę.
{'\n'}{'\n'}Minister Zdrowia i Premier powołują się często na swoje modele i prognozy. Nasuwa się pytanie, czy są one pozbawione takich logicznych błędów i fałszywych założeń? Śledząc komunikaty z rządu, odnoszę wrażenie, że jednak niestety nie. Jesteśmy informowani o spodziewanych tysiącach zarażeń w najbliższych tygodniach, ale podjęte obecnie środki zapobiegawcze wydają się być znacząco niewystarczające. Jesteśmy na prostej trajektorii scenariusza włoskiego i hiszpańskiego.
{'\n'}{'\n'}Ponieważ nie zetknąłem się dotąd z tego typu pogłębionymi analizami i prognozami, bazując na swoim wykształceniu (studiowałem matematykę stosowaną), stając w pokorze wobec moich braków z wiedzy na temat epidemii i jego matematycznego modelu, podjąłem się zainicjowania takich analiz, modeli i prognozowań.
Efekty moich dotychczasowych opracowań znajdziecie tutaj: <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://covid19-trajectory.github.io')}>LINK </Text> 
 Dziś wieczorem postaram się tutaj<Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://covid19-trajectory.github.io/#/inne-kraje')}> LINK</Text> dodać opracowanie opisanego powyżej zagadnienia - złego porównywania i interpretacji rozwoju epidemii pomiędzy poszczególnymi krajami, prowadzącego do błędnych konkluzji.{'\n'}Stawiam hipotezę, że do czasu wprowadzenia całkowitej kwarantanny regionów lub wręcz całego państwa (jak w Chinach), rozwój epidemii jest, i będzie, niemal identyczny we wszystkich krajach na świecie.
Załączam jeszcze porównanie rozwoju epidemii w wybranych krajach Europy, które potwierdza moją hipotezę.</Text>
<Image source={require('../assets/images/articles/screen21.png')} style={{width: 320, height: 500,  }} />
<Text>{'\n'}</Text>
<Image source={require('../assets/images/articles/screen233.png')}  />
<Text gray light height={25}>
{'\n'}Dane empiryczne znormalizowałem w ten sposób, że do każdej dziennej liczby zarażeń dodałem offset poszczególnego kraju, aby zestawić ze sobą podobne stadia rozwoju epidemii.
Wykres wskazuje, że epidemia ma niemal identyczny przebieg (tempo przyrostu zakażeń) we wszystkich tych krajach, i wszystkie one zmierzają trajektorią włoską, gdzie epidemia zaczęła się najwcześniej.
W idealnych warunkach prawdopodobnie wykresy byłyby jeszcze bardziej zbieżne, gdyby każde rzeczywiste zarażenie było od razu zdiagnozowane i zarejestrowane.
{'\n'}{'\n'}W skrócie - wszystko wskazuje na to, że epidemia przebiega identycznie w skutkach we wszystkich krajach, różni je jedynie przesunięcie w czasie. A zatem i w Polsce (jak w każdym innym kraju) będzie "zamknięcie wszystkiego".
{'\n'}Tymczasem na przykład TVP Info publikuje <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.tvp.info/47177726/modele-epidemiczne-i-walka-z-koronawirusem-analiza-jak-rosnie-liczba-zakazonych-wieszwiecej')}>taki raport.</Text>{'\n'}Można też znaleźć wiele podobnych, wprowadzających w błąd wykresów porównawczych na twitterze, w portalach internetowych, ale również telewizyjnych wydaniach głównych Wiadomości, Faktów, Teleekspressu itp.
 W dobie fake-newsów, jak nazwać taki przekaz?
 </Text> 
 <Image source={require('../assets/images/articles/screen33.jpg')}/>
 <Text gray light height={25}>
Podzieliłem się moją hipotezą z kadrą naukową mojej uczelni, i pomijając kwestię kilku drobnych nieścisłości w moim opracowaniu, otrzymuję potwierdzenia, że jako taka jest słuszna.
{'\n'}W związku z tym, odstawiając na bok myślenie życzeniowe, na 99,9%:
{'\n'}- wszystkie kraje, które przekroczyły masę krytyczną na zduszenie epidemii w zarodku, czeka ten sam ciąg zdarzeń, co w Chinach (a po drodze Włoch)
{'\n'}- a w związku z tym w Polsce dotrzemy do punktu Włoch za około 2 tygodnie
{'\n'}- a w związku z tym czeka nas rygorystyczna izolacja w domach trwająca 2-3 tygodnie
{'\n'}- a w związku z tym, rozsądne gromadzenie zapasów żywności i inne powiązane działania lepiej przeprowadzić jak najszybciej, gdy zainfekowanych jest logarytmicznie mniej, niż jutro, pojutrze, za tydzień..
{'\n'}- a w związku z tym państwa (w szczególności Polska) powinny wdrożyć strategie oparte na tej trajektorii jak najszybciej (choćby specustawy zamrażająca ceny w sklepach i ograniczające ilość produktów na klienta, jak również wydanie rzetelnego komunikatu obywatelom)
{'\n'}- a w związku z tym ciąży na nas największa dotąd w życiu odpowiedzialność, aby tak się stało
{'\n'}{'\n'}Wierzę, że nie zostaję ze swoją teorią sam - każda pomoc się przyda.
Można zacząć od poddania tej samej analizie, co powyżej, hipotezę, że w każdym kraju, przyrost zgonów miał/ma/będzie mieć to samo tempo przyrostu, co w Chinach.
{'\n'}Spodziewane odchylenie wynika z różnych demografii krajów (społeczeństwa "młode" vs "stare"), dlatego można liczby poszczególnych krajów znormalizować po danych demograficznych, jakie udostępnia np. wikipedia.
</Text>

          <Divider margin={[theme.sizes.padding * 1.9, 0]} />

        
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[0]
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 1,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.0,
    marginRight: theme.sizes.base * 0.525
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  },
});
