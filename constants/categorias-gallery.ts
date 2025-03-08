import images from "@/constants/categorias-images";
import { Asset } from "expo-asset";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { ImageBackground } from "react-native";



const CATEGORIAS_GALLERY = [
  {
    title: "Oraciones Diarias",
    id: "1", // Ensure this is a number
    data: [
      {
        id: "1",
        title: "Ofrecimiento del día",
        text: "Te doy gracias Señor por este nuevo día. \nEn unión con el Santo sacrificio de la misa en todo el mundo, te ofrezco mis oraciones, mi trabajo, mis alegrías y mis sufrimientos. \nTe lo ofrezco todo por las intenciones del sagrado Corazón de tu hijo Jesús, en reparación del daño hecho por el pecado, por la conversión del mundo y por las intenciones del Santo Padre. \nAmén",
        image: "assets/images/csaSacredHeart3.jpeg",
      },
      {
        id: "2",
        title: "Lecturas de misa del día",
        text: "Oracion del dia Texto",
        image: "https://scontent.fmga11-1.fna.fbcdn.net/v/t39.30808-6/408465946_338611048923309_1659716105039643308_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DadnQXtSvwcQ7kNvgEfoZye&_nc_oc=Adh2W2iPqR_KyM1eR7P50yezaE_JKXB8qYGJ05DLZ_lJYO_Q4eFX5F-cvgjEJl4box0&_nc_zt=23&_nc_ht=scontent.fmga11-1.fna&_nc_gid=ApNkWX5AgyOFp-uJfeBplNE&oh=00_AYDgfIZ5EYyzGcOS4tGEPyPTbQK3RojfEV7F2UdOYIfNvw&oe=67CDF6C6",
      },
      {
        id: "3",
        title: "Ángelus",
        text: "V.El Ángel del Señor anunció a María.R.Y ella concibió por obra del Espíritu Santo. \n Ave María. \n V. He aquí la esclava del Señor. R. Hágase en mí según tu palabra. \n Ave María. \n V. La palabra se hizo carne. R. Y acampó entre nosotros. \nAve María. \nV.Ruega por nosotros, Santa Madre de Dios.R.Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. \nOremos \n \nDerrama, Señor tu gracia sobre nosotros, que, por el anuncio del ángel, hemos conocido la encarnación de tu Hijo, para que lleguemos por su pasión y su cruz a la gloria de la resurrección. \nPor Cristo, nuestro Señor. \nAmén",
        image: "https://theroadtorighteousness.org/wp-content/uploads/2020/10/Annunciation-Bartolome.jpg",
      },
      {
        id: "4",
        title: "Bendición de la comida",
        text: "Bendice Señor estos alimentos que por tu infinita misericordia tenemos hoy en esta mesa, dale Señor pan a los que no tienen y danos hambre de ti a los que tenemos pan",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/459305688_509820241802388_4405288637325728114_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ypTrKt0duEYQ7kNvgH3d-rD&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=A0Q6WCIPv7NnyRrSNDrEmvJ&oh=00_AYHTAgiFZsBq0f7TdyY-wtUz2-HrK9OQktO99H4EZYOyPA&oe=67D108D3",
      },
      {
        id: "5",
        title: "\nExamen de Conciencia Diario",
        text: "1. Presencia: Pide a Dios su gracias y ayuda en este momento de oración. \n 2. Gratitud: Evoca los momentos que te sucedieron hoy de los cuales estoy especialmente agradecido y disfruta de ellos. Agradece a Dios por estos regalos. \n 3. Repaso del día: Revisa tu día de principio a fin identificando donde experimentaste la presencia de Dios. \n 4. Arrepentimiento: ¿Has pecado hoy o has hecho algo de lo que te arrepientes? Expresa tu pena a Dios y pídele perdón. Si el pecado es grave, ora buscando el perdón de la persona ofendida y el sacramento de la reconciliación. \n 5. Gracias: Al finalizar la oración, pídele a Dios la gracia necesaria para el siguiente día",
      
        image: "https://scontent.fmga11-2.fna.fbcdn.net/v/t39.30808-6/348555350_252306120887136_7409057443388102482_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K9CIS0STsNIQ7kNvgFjcEwm&_nc_oc=AdjMcIO9w7hpKQbdbUOva8SVQsLbCSe4LjfBBV_UTfunswv3uhagplUaHCdIvGd-9DE&_nc_zt=23&_nc_ht=scontent.fmga11-2.fna&_nc_gid=ALDn7O9xQsC69ZM22E498kU&oh=00_AYCyLqflT11JRWadG86PMNCFd3KedAll4gqtGFaocdWcKA&oe=67CDEA77",
      },
      
    ],
  },
  {
    title: "Devociones",
    id: "2",
    data: [
      {
        id: "1",
        title: "Rosario",
        text: "Inicio.\nPor la señal de la Santa Cruz, de nuestros enemigos líbranos Señor Dios Nuestro; \n\nEn el nombre del Padre, del Hijo y del Espíritu Santo; \n\nAmén.\nActo de contrición.\nSeñor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío; \n\nPor ser Tú quién eres, bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido, también me pesa que puedes castigarme con las penas del infierno\n\n- Ayudado de tu divina gracia propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta, \n\nAmén.\nSe reza 1 Padre Nuestro en las cuentas grandes.\nSe reza 10 Ave Marías en las cuentas pequeñas.\nSe reza un Gloria al finalizar.\nAl finalizar el Rosario: \nDios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra.\nDios te salve.\nA Ti clamamos los desterrados hijos de Eva, a Ti suspiramos, gimiendo y llorando en este valle de lágrimas. \nEa, pues, Señora Abogada Nuestra, vuelve a nosotros tus ojos misericordiosos, y después de este destierro, muéstranos a Jesús,fruto bendito de tu vientre. \nOh, clemente, oh piadosa, oh dulce Virgen María. \nRuega por nosotros, \n\nSanta Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.\nAmén.\nMisterios Gozosos (lunes y sábado).\n1- La encarnación del Hijo de Dios. 2 - La visita de Nuestra Señora a Santa Isabel. 3 - El nacimiento del Hijo de Dios. 4 - La Presentación del Señor Jesús en el templo. 5 - La Pérdida del Niño Jesús y su hallazgo en el templo.\n\nMisterios Dolorosos (martes y viernes).\n1 - La Oración de Nuestro Señor en el Huerto de Getsemaní. 2 - La Flagelación del Señor. 3 - La Coronación de espinas. 4 - El Camino del Monte Calvario cargando la Cruz. 5 - La Crucifixión y Muerte de Nuestro Señor.\n\nMisterios Gloriosos (miércoles y domingo).\n1 - La Resurrección del Señor. 2 - La Ascensión del Señor. 3 - La Venida del Espíritu Santo. 4 - La Asunción de Nuestra Señora a los Cielos. 5 - La Coronación de la Santísima Virgen.Misterios Luminosos (jueves). 1 - El Bautismo en el Jordán. 2 - La autorrevelación en las bodas de Caná. 3 - El anuncio del Reino de Dios invitando a la conversión. 4 - La Transfiguración. 5 - La Institución de la Eucaristía, expresión sacramental del misterio pascual",
        // image: images.ofrecimiento,
        image: "https://www.josepets.org/wp-content/uploads/2023/12/Josepets-como-rezar-el-rosario.jpg",
      },
      {
        id: "2",
        title: "Via Crucis",
        text: "Via Crucis texto",
        // image: images.ofrecimiento,
      },
      // {
      //   id: "3",
      //   title: "Coronilla de la Divina Misericordia",
      //   text: "Utilizando cuentas de rosario normales (o tus diez dedos), sigue esta estructura:\n\n1.Comienza con la señal de la cruz.\nEn el nombre del Padre, del Hijo y del Espíritu Santo. Amén.\n\n2.Prepara tu corazón y tu mente.\nExpiraste, Jesús, pero la fuente de la vida brotó para las almas, y el océano de la misericordia se abrió para el mundo entero. Oh Fuente de Vida, Divina Misericordia insondable, envuelve el mundo entero y vacíate sobre nosotros.\n\n3.Reza la oración de Santa Faustina.\nEn cada una de las tres cuentas pequeñas, reza:\nOh Sangre y Agua, que brotasteis del Corazón de Jesús como fuente de misericordia para nosotros, ¡en Vos confío! (x3)\n\n4.Reza un Padre Nuestro.\n\n5.Reza un Ave María.\n\n6.Reza el Credo de los Apóstoles.\n\n7.Primera decena\nEn la primera cuenta grande:\nPadre eterno, te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de tu amadísimo Hijo, nuestro Señor Jesucristo, en expiación de nuestros pecados y los del mundo entero.\nEn las diez cuentas pequeñas:\nPor su dolorosa Pasión, ten piedad de nosotros y del mundo entero. (x10)\n\n8.Repite este patrón cuatro veces.\nPara cada decena: comienza con la oración «Padre Eterno» , y luego reza «Por el bien» diez veces.\n\n9.Después de cinco decenas, reza por misericordia.\nRepite la siguiente oración tres veces:\nSanto Dios, Santo Poderoso, Santo Inmortal, ten piedad de nosotros y del mundo entero. (x3)\n\n10.Cierra tu tiempo en oración.\nOremos: Dios eterno, en quien la misericordia no tiene fin y el tesoro de la compasión es inagotable, míranos con bondad y aumenta Tu misericordia en nosotros, para que en los momentos difíciles no desesperemos ni nos desanimemos, sino que con gran confianza nos sometamos a Tu santa voluntad, que es el Amor y la Misericordia mismos.\n\nConcluye con la señal de la cruz.\nEn el nombre del Padre, del Hijo y del Espíritu Santo,\nAmén\n\n",
      //   // image: images.ofrecimiento,
      // },
    ],
  },
  {
    title: "Mensaje del Director",
    id: "3",
    data: [
      {
        id: "1",
        title: "Mensaje del Director",
        text: " Señor, ten piedad Cristo, ten piedad Señor, ten piedad. Cristo, óyenos. Cristo, escúchanos. Dios, Padre celestial, ten piedad de nosotros. Dios, Hijo, Redentor del mundo,  Dios, Espíritu Santo,  Santísima Trinidad, un solo Dios, Santa María,  ruega por nosotros. Santa Madre de Dios, Santa Virgen de las Vírgenes, Madre de Cristo,  Madre de la Iglesia,  Madre de la misericordia,  Madre de la divina gracia,  Madre de la esperanza,  Madre purísima, Madre castísima, Madre siempre virgen, Madre inmaculada,  Madre amable,  Madre admirable, Madre del buen consejo, Madre del Creador, Madre del Salvador, Virgen prudentísima, Virgen digna de veneración, Virgen digna de alabanza, Virgen poderosa, Virgen clemente, Virgen fiel, Espejo de justicia, Trono de la sabiduría, Causa de nuestra alegría, Vaso espiritual, Vaso digno de honor, Vaso de insigne devoción, Rosa mística, Torre de David, Torre de marfil, Casa de oro, Arca de la Alianza, Puerta del cielo, Estrella de la mañana, Salud de los enfermos, Refugio de los pecadores, Consuelo de los migrantes,Consoladora de los afligidos, Auxilio de los cristianos, Reina de los Ángeles, Reina de los Patriarcas, Reina de los Profetas, Reina de los Apóstoles, Reina de los Mártires, Reina de los Confesores, Reina de las Vírgenes, Reina de todos los Santos, Reina concebida sin pecado original, Reina asunta a los Cielos, Reina del Santísimo Rosario, Reina de la familia, Reina de la paz. Cordero de Dios, que quitas el pecado del mundo, perdónanos, Señor. Cordero de Dios, que quitas el pecado del mundo, escúchanos, Señor. Cordero de Dios, que quitas el pecado del mundo, ten misericordia de nosotros. Ruega por nosotros, Santa Madre de Dios.  Para que seamos dignos de las promesas de Cristo. ORACIÓN. Te rogamos nos concedas, Señor Dios nuestro, gozar de continua salud de alma y cuerpo, y por la gloriosa intercesión de la bienaventurada siempre Virgen María, vernos libres de las tristezas de la vida presente y disfrutar de las alegrías eternas. Por Cristo nuestro Señor. Amén",
        // image: images.ofrecimiento,
      },
      {
        id: "2",
        title: "Mensaje del Director 2",
        text: " Señor, misericordia. Jesucristo, misericordia. Señor, misericordia. Jesucristo, óyenos. Jesucristo, escúchanos. Dios Padre celestial, Ten piedad de nosotros Dios Hijo, Redentor del mundo, Dios Espíritu Santo, Santísima Trinidad un solo Dios, Corazón de Jesús, Hijo del Eterno Padre, Corazón de Jesús, Formado por el Espíritu Santo en el Seno de María Corazón de Jesús, unido sustancialmente al Verbo, Corazón de Jesús, de Majestad infinita Corazón de Jesús, santo Templo de Dios Corazón de Jesús, Tabernáculo del Altísimo Corazón de Jesús, casa de Dios y puerta del Cielo Corazón de Jesús, horno de encendido amor Corazón de Jesús, receptáculo de la justicia y amor Corazón de Jesús, lleno de bondad y amor Corazón de Jesús, abismo de todas las virtudes Corazón de Jesús, dignísimo de toda alabanza Corazón de Jesús, Rey y centro de toda alabanza Corazón de Jesús, en quien están todos los tesoros de sabiduría y ciencia Corazón de Jesús, en quien habita la plenitud de la Divinidad Corazón de Jesús, en quien el Padre se ha complacido Corazón de Jesús, de cuya plenitud todos hemos recibido Corazón de Jesús deseo de los collados eternos Corazón de Jesús, paciente y de mucha misericordia Corazón de Jesús, rico para todos los que lo invocan Corazón de Jesús, fuente de vida y santidad Corazón de Jesús, propiciación de nuestros pecados Corazón de Jesús, saturado de oprobios Corazón de Jesús, oprimido por nuestras maldades Corazón de Jesús, hecho obediente hasta la muerte Corazón de Jesús, traspasado por la lanza Corazón de Jesús, fuente de todo consuelo, Corazón de Jesús, vida y resurrección nuestra Corazón de Jesús, paz y reconciliación nuestra Corazón de Jesús, víctima de los pecadores Corazón de Jesús, salvación de los que esperan en Ti Corazón de Jesús, esperanza de los que en Ti mueren Corazón de Jesús, delicia de todos los santos, Cordero de Dios, que quitas los pecados del mundo. Perdónanos, Señor. Cordero de Dios que quitas los pecados del mundo, Escúchanos, Señor. Cordero de Dios que quitas los pecados del mundo, Ten misericordia de nosotros.  Jesús Manso y humilde de corazón, Haz nuestro corazón semejante al tuyo Oración: Omnipotente y sempiterno Dios, mira al Corazón de tu muy amado Hijo y a las alabanzas y satisfacciones que te tributa en nombre de los pecadores; concede benigno el perdón a los que invocamos tu misericordia, en el nombre del mismo Jesucristo, tu Hijo, que contigo vive y reina en unión del Espíritu Santo Dios, por todos los siglos de los siglos. Amén",
        // image: images.ofrecimiento,
      },
    ],
  },
  {
    title: "Colección de Oraciones",
    id: "4",
    data: [
      {
        id: "1",
        title: "Bajo tu amparo",
        text: "Bajo tu amparo nos acogemos, santa Madre de Dios; \n\nno deseches las súplicas que te dirigimos en nuestras necesidades, \n\nantes bien, líbranos de todo peligro, \n\n¡oh siempre Virgen, gloriosa y bendita!",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/470158056_576757825108629_8222727361652677072_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=weRr4MkZbe4Q7kNvgHH1jof&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=AUCKuS96eY8TzX-7FvwvWym&oh=00_AYFvfdR4gRhwGVK-9IgNfCvb5K19k8pQez0qlzsmhA40PA&oe=67D0EEE9",
      },
      {
        id: "2",
        title: "Bendita sea tu pureza",
        text: "Bendita sea tu pureza y eternamente lo sea, pues todo un Dios se recrea en tan graciosa belleza.\nA Ti, celestial Princesa, Virgen Sagrada María, \n\nyo te ofrezco en este día alma, vida y corazón.\nMírame con compasión, \n\nno me dejes, Madre mía.\nAmén",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/470235815_576471768470568_5192268785806772883_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Ks663f5luAcQ7kNvgFL4cEL&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=AvA-ODk3-Lht3aWcResxOAo&oh=00_AYFkJQP4DxF_BYJwo73o4qUQGXHuwwrxUGhL1NWiEUPH-g&oe=67D0DE90",
      },
      {
        id: "3",
        title: "Yo confieso",
        text: "Yo confieso ante Dios Todopoderoso, y ante ustedes hermanos \n\nque he pecado mucho de pensamiento, palabra, obra y omisión.\nPor mi culpa, por mi culpa, por mi gran culpa.\nPor eso ruego a Santa María siempre Virgen, a los ángeles, a los santos y a ustedes hermanos, \n\nque intercedan por mí ante Dios, Nuestro Señor.\nAmén",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/468354612_18104463166454349_8821090176080866544_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=714c7a&_nc_ohc=3xqaqO0kKLMQ7kNvgHg5q_Z&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=AJfr7H2F5BdJaTwYwT_gr1o&oh=00_AYFB0sfUULgPuZPxeA4UhzRmJZa46uolvBRNpLTP5W3csQ&oe=67D0DA8E",
      },
      // {
      //   id: "4",
      //   title: "Oración del Jubileo 2025",
      //   text: "Padre que estás en el cielo, la fe que nos has donado en tu Hijo Jesucristo, nuestro hermano, y la llama de caridad infundida en nuestros corazones por el Espíritu Santo, despierten en nosotros la bienaventurada esperanza en la venida de tu reino.Tu gracia nos transforme en dedicados cultivadores de las semillas del Evangelio que fermentan la humanidad y el cosmos, en espera confiada de los cielos nuevos y de la tierra nueva, cuando vencidas las fuerzas del mal, se manifestará para siempre tu gloria.La gracia del jubileo revive en nosotros, peregrinos de esperanza, el anhelo de los bienes celestiales y derrame en el mundo entero la alegría y la paz de nuestro redentor.A ti, Dios bendito eternamente, sea la alabanza y la gloria por los siglos.Amén",
      //   // image: images.ofrecimiento,
      // },
      {
        id: "5",
        title: "Memorare",
        text: "Acordaos, oh piadosísima Virgen María, que jamás se ha oído decir que alguno de cuantos han acudido a vuestra protección, implorando vuestro socorro o pidiendo vuestra intercesión, haya sido desamparado.\nAnimado por esta confianza, acudo a ti, oh Virgen de las vírgenes, Madre mía.A ti vengo, ante ti me presento, pecador y dolorido.\nOh Madre del Verbo Encarnado, no desprecies mis súplicas, antes bien, escúchame y respóndeme en tu misericordia.\nAmén",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/468356159_18104462845454349_4516363081869849369_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kOlktUpcVeQQ7kNvgHnNURO&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=Ab2yw_Qx2xZWTxgl_HyrR9k&oh=00_AYEX71L1Nyru_9Tp3yYoIlWEfcNAL-mkrcWmYVJ6aH6RjQ&oe=67D0F859",
      },
      {
        id: "6",
        title: "Dios te salve",
        text: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra: Dios te salve. \nA ti llamamos los desterrados hijos de Eva; \n\na ti suspiramos, gimiendo y llorando en este valle de lágrimas. \nEa, pues, Señora abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. \n¡Oh clementísima! ¡oh piadosa! ¡oh dulce Virgen María!\n\nV: \nRuega por nosotros santa Madre de Dios.R: \nPara que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo. \nAmén",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/406508349_336883252429422_3877447810857730535_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=714c7a&_nc_ohc=2NEuT0-rG9YQ7kNvgEfzjKa&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=A-kgs4bnqRVkwsNop6Xwg0x&oh=00_AYEZ868-uDeUjPyRJZNpv_npQSEA000BTU6KZ7-7DRCb3A&oe=67D0F34E",
      },
      {
        id: "7",
        title: "\nLetanías de la Virgen María",
        text: "Señor, ten piedad Cristo, ten piedad Señor, ten piedad. \nCristo, óyenos. \nCristo, escúchanos.\nDios, Padre celestial, ten piedad de nosotros.\nDios, Hijo, Redentor del mundo,  Dios, Espíritu Santo,  Santísima Trinidad, un solo Dios, Santa María,  ruega por nosotros. \nSanta Madre de Dios, \nSanta Virgen de las Vírgenes, \nMadre de Cristo,  \nMadre de la Iglesia,  \nMadre de la misericordia,  \nMadre de la divina gracia,  \nMadre de la esperanza,  \nMadre purísima, \nMadre castísima, \nMadre siempre virgen, \nMadre inmaculada,  \nMadre amable,  \nMadre admirable, \nMadre del buen consejo, \nMadre del Creador, \nMadre del Salvador, \nVirgen prudentísima, \nVirgen digna de veneración, \nVirgen digna de alabanza, \nVirgen poderosa, \nVirgen clemente, \nVirgen fiel, \nEspejo de justicia, \nTrono de la sabiduría, \nCausa de nuestra alegría, \nVaso espiritual, \nVaso digno de honor, \nVaso de insigne devoción, \nRosa mística, \nTorre de David, \nTorre de marfil, \nCasa de oro, \nArca de la Alianza, \nPuerta del cielo, \nEstrella de la mañana, \nSalud de los enfermos, \nRefugio de los pecadores, \nConsuelo de los migrantes,\nConsoladora de los afligidos, \nAuxilio de los cristianos, \nReina de los Ángeles, \nReina de los Patriarcas, \nReina de los Profetas, \nReina de los Apóstoles, \nReina de los Mártires, \nReina de los Confesores, \nReina de las Vírgenes, \nReina de todos los Santos, \nReina concebida sin pecado original, \nReina asunta a los Cielos, \nReina del Santísimo Rosario, \nReina de la familia, \nReina de la paz. \nCordero de Dios, que quitas el pecado del mundo, perdónanos, Señor. \nCordero de Dios, que quitas el pecado del mundo, escúchanos, Señor. \nCordero de Dios, que quitas el pecado del mundo, ten misericordia de nosotros. \nRuega por nosotros, Santa Madre de Dios.  \nPara que seamos dignos de las promesas de Cristo. \nORACIÓN. \nTe rogamos nos concedas, Señor Dios nuestro, gozar de continua salud de alma y cuerpo, y por la gloriosa intercesión de la bienaventurada siempre Virgen María, \n\nvernos libres de las tristezas de la vida presente y disfrutar de las alegrías eternas. \nPor Cristo nuestro Señor. \nAmén",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/468147881_18104462875454349_5869693132963812891_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IRSjgr_uIhYQ7kNvgHU9Clm&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=AA211YMGPXT2jll6xVpTRqL&oh=00_AYHQq4sGRdSeH6hLW-QzThXvf_LKP9Z6LVUouzwLlU56Ew&oe=67D10E05",
      },
      {
        id: "8",
        title: "Sagrado Corazón de Jesús",
        text: " Señor, misericordia. Jesucristo, misericordia. Señor, misericordia. Jesucristo, óyenos. Jesucristo, escúchanos. \nDios Padre celestial, Ten piedad de nosotros \nDios Hijo, Redentor del mundo, \nDios Espíritu Santo, Santísima Trinidad un solo Dios, \nCorazón de Jesús, Hijo del Eterno Padre, \nCorazón de Jesús, Formado por el Espíritu Santo en el Seno de María \nCorazón de Jesús, unido sustancialmente al Verbo, \nCorazón de Jesús, de Majestad infinita \nCorazón de Jesús, santo Templo de Dios \nCorazón de Jesús, Tabernáculo del Altísimo \nCorazón de Jesús, casa de Dios y puerta del Cielo \nCorazón de Jesús, horno de encendido amor \nCorazón de Jesús, receptáculo de la justicia y amor \nCorazón de Jesús, lleno de bondad y amor \nCorazón de Jesús, abismo de todas las virtudes \nCorazón de Jesús, dignísimo de toda alabanza \nCorazón de Jesús, Rey y centro de toda alabanza \nCorazón de Jesús, en quien están todos los tesoros de sabiduría y ciencia \nCorazón de Jesús, en quien habita la plenitud de la Divinidad \nCorazón de Jesús, en quien el Padre se ha complacido \nCorazón de Jesús, de cuya plenitud todos hemos recibido \nCorazón de Jesús deseo de los collados eternos \nCorazón de Jesús, paciente y de mucha misericordia \nCorazón de Jesús, rico para todos los que lo invocan \nCorazón de Jesús, fuente de vida y santidad \nCorazón de Jesús, propiciación de nuestros pecados \nCorazón de Jesús, saturado de oprobios \nCorazón de Jesús, oprimido por nuestras maldades \nCorazón de Jesús, hecho obediente hasta la muerte \nCorazón de Jesús, traspasado por la lanza \nCorazón de Jesús, fuente de todo consuelo, \nCorazón de Jesús, vida y resurrección nuestra \nCorazón de Jesús, paz y reconciliación nuestra \nCorazón de Jesús, víctima de los pecadores \nCorazón de Jesús, salvación de los que esperan en Ti \nCorazón de Jesús, esperanza de los que en Ti mueren \nCorazón de Jesús, delicia de todos los santos, \nCordero de Dios, que quitas los pecados del mundo. \nPerdónanos, Señor. \nCordero de Dios que quitas los pecados del mundo, Escúchanos, Señor. \nCordero de Dios que quitas los pecados del mundo, \nTen misericordia de nosotros.  \nJesús Manso y humilde de corazón, Haz nuestro corazón semejante al tuyo \n\nOración: \nOmnipotente y sempiterno Dios, mira al Corazón de tu muy amado Hijo y a las alabanzas y satisfacciones que te tributa en nombre de los pecadores; \n\nconcede benigno el perdón a los que invocamos tu misericordia, en el nombre del mismo Jesucristo, tu Hijo, que contigo vive y reina en unión del Espíritu Santo Dios, por todos los siglos de los siglos.\nAmén",
        image: "https://scontent.fmga8-1.fna.fbcdn.net/v/t39.30808-6/481704611_634057189378692_3968709170507837786_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=9_XUdf3xISEQ7kNvgEZ0yNt&_nc_zt=23&_nc_ht=scontent.fmga8-1.fna&_nc_gid=A0LYvLGv9NF7uO6OjO9l6xp&oh=00_AYEoJ1yIP4FETbtaC7Mky7dqhnfRJT3KsNDDd098N03OXA&oe=67D0DFE9",
      },
      {
        id: "9",
        title: "\nOración al angel de la guarda",
        text: "Ángel de mi guarda, dulce compañía, no me desampares, ni de noche ni de día. \n No me dejes solo, que me perdería. \n Hasta que amanezca, en los brazos de Jesús, José y María",
        // image: images.ofrecimiento,
      },
      {
        id: "10",
        title: "Oración a Jesus niño",
        text: "Jesusito de mi vida eres niño como yo, \n por eso te quiero tanto y te doy mi corazón. \n Cuatro esquinitas tiene mi cama, cuatro angelitos guardan mi alma. \n Jesús, José y María os doy mi corazón y el alma mía. \n Con Dios me acuesto, con Dios me levanto, con la Virgen Maria y el Espiritu Santo",
        // image: images.ofrecimiento,
      },
      {
        id: "11",
        title: "Morning Prayer",
        text: "God our Father, at the beginning of this day, we praise you and thank you for the wonders of your creation. \nWe ask you to bless us in our learning and our playing togueter. \nLet everything we do be for your greather glory and the greather good of our broders and sisters. \nTeach us today and always to love truth and to love truly. \nWe ask this in the name of Jesus, your Son and our true teacher. \nAmen \n\nSaint Sugustine, pray for us. \nSaint Monica, pray for us",
        // image: images.ofrecimiento,
      },
      {
        id: "12",
        title: "Dismissal Prayer",
        text: "God, our Father, at the end of this school day, we thank you for all the blessings we have received.\nWe ask you to forgive us our failings and to grant us the grace to come back tomorrow, willing to be better disciples of your son Jesus.\nGuide and protect us during the rest of this day. \nWe ask this in the name of Jesus, your Son, and our true Teacher. \nAmen.\nSaint Augustine, pray for us.\nSaint Monica, pray for us",
        // image: images.ofrecimiento,
      },
      {
        id: "13",
        title: "Alma de Cristo",
        text: "Alma de Cristo, santifícame.Cuerpo de Cristo, sálvame.Sangre de Cristo, embriágame.Agua del costado de Cristo, lávame.Pasión de Cristo, confórtame.¡Oh, buen Jesús, óyeme!\nDentro de tus llagas, escóndeme.No permitas que me aparte de ti.Del enemigo maligno, defiéndeme.En la hora de mi muerte, llámame\ny mándame ir a ti,\npara que con tus santos te alabe,\npor los siglos de los siglos.Amen",
        // image: images.ofrecimiento,
      },
    ],
  },
  {
    title: "Salmos para Orar",
    id: "5",
    data: [
      {
        id: "1",
        title: "Deseo de Dios",
        text: "- SALMO 63:\n\nOh Dios tu eres mi Dios, a ti te busco, mi alma tiene sed de ti.\n2.Oh Dios, tú eres mi Dios, a ti te busco, mi alma tiene sed de ti; en pos de ti mi carne languidece cual tierra seca, sedienta, sin agua.\n3.Por eso vine a verte en el santuario para admirar tu gloria y tu poder.\n4.Pues tu amor es mejor que la vida, mis labios tu gloria cantarán.\n5.Quiero bendecirte mientras viva y las manos en alto invocar tu Nombre.\n6.Mi alma está repleta, pingüe y blanda, y te alaba mi boca con labios jubilosos.\n7.Cuando estoy en mi cama pienso en ti, y durante la noche en ti medito,\n8.pues tú fuiste un refugio para mí y salto de gozo a la sombra de tus alas.\n9.Mi alma se estrecha a ti con fuerte abrazo y tu diestra me toma de la mano.\n10.Los que en vano quieren perderme irán a parar debajo de tierra.\n11.Serán muertos al filo de la espada, servirán de festín a los chacales.\n12.El rey se sentirá feliz en Dios, y cuantos juran por él se gloriarán: 'Por fin se acalló a los mentirosos'.\n\n\n\n- SALMO 42:\n\nComo anhela la cierva corrientes de agua, así mi alma te anhela a ti, Dios mío.\n2.Como anhela la cierva estar junto al arroyo, así mi alma desea, Señor, estar contigo.\n3.Sediento estoy de Dios, del Dios de vida; ¿cuándo iré a contemplar el rostro del Señor?\n\n4.Lágrimas son mi pan de noche y día, cuando oigo que me dicen sin cesar: '¿Dónde quedó su Dios?'\n\n5.Es un desahogo para mi alma, acordarme de aquel tiempo, en que iba con los nobles hasta la casa de Dios, entre vivas y cantos de la turba feliz.\n6.¿Qué te abate, alma mía; ¿por qué gimes en mí? Pon tu confianza en Dios que aún le cantaré a mi Dios Salvador.\n7.Mi alma está deprimida, por eso te recuerdo desde el Jordán y el Hermón a ti, humilde colina.\n8.El eco de tus cascadas resuena en los abismos, tus torrentes y tus olas han pasado sobre mí.\n9.Quiera Dios dar su gracia de día, y de noche a solas le cantaré, oraré al Dios de mi vida.\n10.A Dios, mi Roca, le hablo: ¿Por qué me has olvidado? ¿Por qué debo andar triste, bajo la opresión del enemigo?\n\n11.Mis adversarios me insultan y se me quiebran los huesos al oír que a cada rato me dicen: '¿Dónde quedó tu Dios?'\n\n12.¿Qué te abate, alma mía; por qué gimes en mí? Pon tu confianza en Dios que aún le cantaré a mi Dios salvador",
        image: "https://www.primeros15.org/wp-content/uploads/2019/07/9.24.jpg",
      },
      {
        id: "2",
        title: "Agradecimiento a Dios",
        text: "- Salmo 139:\nMe has tejido en el vientre de mi madre; te doy gracias por tantas maravillas.\n\n- Salmo 145:\nGrande es el Señor, muy digno de alabanza, y no puede medirse su grandeza",
        // image: images.ofrecimiento,
      },
      {
        id: "3",
        title: "Confianza en Dios",
        text: "- Salmo 23:\nEl Señor es mi pastor, nada me falta.\n\n- Salmo 62:\nSolo en Dios he puesto mi confianza.\n\n- Salmo 138:\nEl Señor lo hará todo por mí, Señor, tu amor perdura para siempre",
        // image: images.ofrecimiento,
      },
      {
        id: "4",
        title: "Para pedir perdón por nuestros pecados",
        text: "- Salmo 51:\nCrea en mí, Señor, un corazón puro.\n\n- Salmo 25:\nHaz, Señor, que conozca tus caminos, muéstrame tus senderos",
        // image: images.ofrecimiento,
      },
      {
        id: "5",
        title: "Para momentos difíciles y de sufrimiento",
        text: "- Salmo 130:\nGuarda mi alma en la paz, junto a ti Señor.\n\n- Salmo 55:\nEn ti descargo lo que me agobia.\n\n- Salmo 62:\nDesahoga tu corazón en su presencia.\n\n- Salmo 25:\nAcuérdate, Señor, que tu amor y tu ternura son eternos",
        // image: images.ofrecimiento,
      },
      {
        id: "6",
        title: "Si nos encontramos en peligro",
        text: "- Salmo 27:\nEl Señor es mi luz y mi salvación, ¿a quién temeré? El Señor es el refugio de mi vida, ¿por quién he de temblar?.\n\n- Salmo 57:\nYo clamo al Dios Altísimo, al Dios que de mí cuida",
        // image: images.ofrecimiento,
      },
      {
        id: "7",
        title: "Para enfrentar la tristeza",
        text: "- Salmo 119:\nSeñor que tu amor me consuele.",
        // image: images.ofrecimiento,
      },
    ],
  },
];

export default CATEGORIAS_GALLERY;
