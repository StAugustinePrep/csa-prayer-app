import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState, useRef, RefObject } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Image } from "react-native-expo-image-cache";

const data = [
  {
    name: "1ª Estación: Jesús sentenciado a muerte",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Sentenciado y no por un tribunal, sino por todos. Condenado por los mismos que le habían aclamado poco antes. Y El calla... Nosotros huímos de ser reprochados. Y saltamos inmediatamente... Dame, Señor, imitarte, uniéndome a Ti por el Silencio cuando alguien me haga sufrir. Yo lo merezco. ¡Ayúdame! Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/1ra-estacion.jpg"),
  },
  {
    name: "2ª Estación: Jesús cargado con la cruz",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Que yo comprenda, Señor, el valor de la cruz, de mis pequeñas cruces de cada día, de mis achaques, de mis dolencias, de mi soledad. Dame convertir en ofrenda amorosa, en reparación por mi vida y en apostolado por mis hermanos, mi cruz de cada día. Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/2da-estacion.jpg"),
  },
  {
    name: "3ª Estación: Jesús cae, por primera vez, bajo el paso de la cruz",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Tú caes, Señor, para redimirme. Para ayudarme a levantarme en mis caídas diarias, cuando después de haberme propuesto ser fiel, vuelvo a reincidir en mis defectos cotidianos. ¡Ayúdame a levantarme siempre y a seguir mi camino hacia Ti! Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/3ra-estacion.jpg"),
  },
  {
    name: "4ª Estación: Encuentro con la Virgen",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Haz Señor, que me encuentre al lado de tu Madre en todos los momentos de mi vida. Con ella, apoyándome en su cariño maternal, tengo la seguridad de llegar a Ti en el último día de mi existencia. ¡Ayúdame Madre! Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria....",
    image: require("@/assets/images/via_crucis/4ta-estacion.jpg"),
  },
  {
    name: "5ª Estación: el Cirineo ayuda al Señor a llevar la Cruz",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Cada uno de nosotros tenemos nuestra vocación, hemos venido al mundo para algo concreto, para realizarnos de una manera particular. ¿Cuál es la mía y cómo la llevo a cabo? Pero hay algo, Señor, que es misión mía y de todos: la de ser Cirineo de los demás, la de ayudar a todos. ¿Cómo llevo adelante la realización de mi misión de Cirineo? Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/5ta-estacion.jpg"),
  },
  {
    name: "6ª Estación: la Verónica enjuga el rostro de Jesús",
    prayer:
      'Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Es la mujer valiente, decidida, que se acerca a Ti cuando todos te abandonan. Yo, Señor, te abandono cuando me dejo llevar por el "qúe dirán", del respeto humano, cuando no me atrevo a defender al prójimo ausente, cuando no me atrevo a replicar una broma que ridiculiza a los que tratan de acercarse a Ti. Y en tantas otras ocasiones. Ayúdame a no dejarme llevar por el respeto humano, por el "qué dirán". Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...',
    image: require("@/assets/images/via_crucis/6ta-estacion.jpg"),
  },
  {
    name: "7ª Estación: Segunda caída en el camino de la Cruz",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Caes, Señor, por segunda vez. El Via Crucis nos señala tres caídas en tu caminar hacia el Calvario. Tal vez fueran más. Caes delante de todos... ¿Cuándo aprenderé yo a no temer el quedar mál ante los demás, por un error, por una equivocación?. ¿Cuándo aprenderé que también eso se puede convertir en ofrenda? Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/7ma-estacion.jpg"),
  },
  {
    name: "8ª Estación: Jesús consuela a las hijas de Jerusalén",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Muchas veces, tendría yo que analizar la causa de mis lágrimas. Al menos, de mis pesares, de mis preocupaciones. Tal vez hay en ellos un fondo de orgullo, de amor propio mal entendido, de egoismo, de envidia. Debería llorar por mi falta de correspondencia a tus innumerables beneficios de cada día, que me manifiestan, Señor, cuánto me quieres. Dame profunda gratitud y correspondencia a tu misericordia. Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/8va-estacion.jpg"),
  },
  {
    name: "9ª Estación: Jesús cae por tercera vez",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Tercera caída. Más cerca de la Cruz. Más agotado, más falto de fuerzas. Caes desfallecido, Señor. Yo digo que me pesan los años, que no soy el de antes, que me siento incapaz. Dame, Señor, imitarte en esta tercera caída y haz que mi desfallecimiento sea beneficioso para otros, porque te lo doy a Ti para ellos. Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/9na-estacion.jpg"),
  },
  {
    name: "10ª Estación: Jesús despojado de sus vestiduras",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Arrancan tus vestiduras, adheridas a Ti por la sangre de tus heridas. A infinita distancia de tu dolor, yo he sentido, a veces, cómo algo se arrancaba dolorosamente de mí por la pérdida de mis seres queridos. Que yo sepa ofrecerte el recuerdo de las separaciones que me desgarraron, uniéndome a tu pasión y esforzándome en consolar a los que sufren, huyendo de mi propio egoismo. Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/10ma-estacion.jpg"),
  },
  {
    name: "11ª Estación: Jesús es clavado en la Cruz",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu Santa Cruz redimiste al mundo. Señor, que yo disminuya mis limitaciones con mi esfuerzo y así pueda ayudar a mis hermanos. Y que cuando mi esfuerzo no consiga disminuirlas, me esfuerce en ofrecértelas también por ellos. Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/11ma-estacion.jpg"),
  },
  {
    name: "12ª Estación: Jesús muere en la Cruz",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Te adoro, mi Señor, muerto en la Cruz por Salvarme. Te adoro y beso tus llagas, las heridas de los clavos, la lanzada del costado... ¡Gracias, Señor, gracias! Has muerto por salvarme, por salvarnos. Dame responder a tu amor con amor, cumplir tu Voluntad, trabajar por mi salvación, ayudado de tu gracia. Y dame trabajar con ahínco por la salvación de mis hermanos. Señor, pequé, ten piedad y misericordia de mí. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/12va-estacion.jpg"),
  },
  {
    name: "13ª Estación: Jesús en brazos de su madre",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Déjame estar a tu lado, Madre, especialmente en estos momentos de tu dolor incomparable. Déjame estar a tu lado. Más te pido: que hoy y siempre me tengas cerca de Ti y te compadezcas de mí. ¡Mírame con compasión , no me dejes, Madre mía! Señor, pequé, ten piedad y misericordia de mí. Amén. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/13ma-estacion.jpg"),
  },
  {
    name: "14ª Estación: Jesús en brazos de su madre",
    prayer:
      "Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo. Déjame estar a tu lado, Madre, especialmente en estos momentos de tu dolor incomparable. Déjame estar a tu lado. Más te pido: que hoy y siempre me tengas cerca de Ti y te compadezcas de mí. ¡Mírame con compasión , no me dejes, Madre mía! Señor, pequé, ten piedad y misericordia de mí. Amén. Padre Nuestro, Ave María y Gloria...",
    image: require("@/assets/images/via_crucis/14ta-estacion.jpg"),
  },
];

export default function ViaCrucis() {
  const [indexNum, setIndexNum] = useState(1);
  const listRef = useRef<FlatList | null>(null);

  const handlePrev = (listRef: RefObject<FlatList>) => {
    if (listRef.current) {
      listRef.current.scrollToIndex({ index: indexNum });
      setIndexNum(indexNum - 1);
    }
  };

  const handleNext = (listRef: RefObject<FlatList>) => {
    if (listRef.current) {
      listRef.current.scrollToIndex({ index: indexNum });
      setIndexNum(indexNum + 1);
    }
  };

  return (
    <View className="flex-1">
      <FlatList
        ref={listRef}
        horizontal={true}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{width: 300, maxHeight: 530, marginTop: 60, marginRight: 10}}>
            <Image
              style={{ width: 300, height: 300, objectFit: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              source={item.image}
            />
            <View style={{backgroundColor: "white", padding: 4, flexGrow: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10}} className="w-full gap-2 h-fit rounded-b-lg p-4 grow">
              <Text className="font-bold text-black text-lg lg:text-xl">{item.name}</Text>
              <Text className="text-black lg:text-base">{item.prayer}</Text>
            </View>
          </View>
          // <View className="w-[320px] max-h-[530px] mx-3 lg:max-h-[730px] max-w-[360px] mt-2">
          //   <Image
          //     className="w-full object-cover rounded-t-lg max-h-[230px] lg:max-h-[300px] max-w-full"
          //     source={item.image}
          //   />
          //   <View className="bg-white gap-2 h-fit rounded-b-lg p-4 grow">
          //     <Text className="font-bold lg:text-xl">{item.name}</Text>
          //     <Text className="lg:text-base">{item.prayer}</Text>
          //   </View>
          // </View>
        )}
      />

      {/* {indexNum >= 0 && (
        <Pressable
          onPress={() => handlePrev(listRef)}
          className="hidden bg-slate-400 w-16 h-16 rounded-full absolute -bottom-[-10px] -left-[-10px] mr-1 mb-1 items-center justify-center text-sm"
        >
          <Text>Previous</Text>
        </Pressable>
      )}

      <Pressable
        onPress={() => handleNext(listRef)}
        className="hidden bg-slate-400 w-16 h-16 rounded-full absolute bottom-[10px] right-[10px] mr-1 mb-1 items-center justify-center text-sm"
      >
        <Text>Next</Text>
      </Pressable> */}
    </View>
  );
}
