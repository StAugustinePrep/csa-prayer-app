import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import TextoExamen from "@/components/ui/TextoExamen";



const ExamenConciencia = () => {
  return (
    <View style={styles.container}>
      {/* <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}> */}
        <Text style={styles.title}>
        Guía para una buena confesión
        </Text>
        
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* <View style={styles.innerContainer}>
            <View style={styles.section}> */}

              <View >
                <Text style={styles.subtitle}> Amarás a Dios sobre todas las cosas... </Text> 
              </View>

              <View style={styles.textContainer}>
                <TextoExamen texto="- ¿Creo todo lo que Dios ha revelado y nos enseña la Iglesia Católica? " />
                <TextoExamen texto="- ¿He dudado o negado las verdades de la fe católica?" />
                <TextoExamen texto="- ¿Doy testimonio de mi fe entre mis amigos?" />
                <TextoExamen texto="- ¿Hago con desgana las cosas que se refieren a Dios?"/>
                <TextoExamen texto="- ¿Rezo con frecuencia y atención?" />
                <TextoExamen texto="- ¿Agradezco a Dios tantas cosas buenas que me ha dado?"/>
                <TextoExamen texto="- ¿Me he acercado indignamente a recibir algún sacramento?"/>
                <TextoExamen texto="- ¿He callado por vergüenza algún pecado mortal en confesiones anteriores?"/>
                <TextoExamen texto="- ¿He dicho palabras irreverentes? ¿He jurado sin verdad o sin
                necesidad, sin prudencia o por cosas de poca importancia?"/>
                <TextoExamen texto="- ¿He faltado a Misa, o la he vivido mal, los domingos o festivos, por
                mi culpa y sin una razón grave? ¿Vivo los días de fiesta y fines de semana como cristiano?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> … y al prójimo como a ti mismo. </Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="- ¿Manifiesto respeto y cariño a mis padres?"/>
                <TextoExamen texto="- ¿Les obedezco con prontitud y alegría?"/>
                <TextoExamen texto="- ¿Colaboro en las tareas de la casa?"/>
                <TextoExamen texto="- ¿Doy buen ejemplo a mis hermanos y les ayudo en sus necesidades?"/>
                <TextoExamen texto="- ¿Riño con ellos o los insulto?"/>
                <TextoExamen texto="- ¿Respeto a los profesores y autoridades?"/>
                <TextoExamen texto="- ¿Respeto mi vida y la de los demás?"/>
                <TextoExamen texto="- ¿He agredido a personas o participado en peleas?"/>
                <TextoExamen texto="- ¿Difundo el cuidado de la vida, también de la de los no nacidos?"/>
                <TextoExamen texto="- ¿He dañado o puesto en peligro mi vida o mi salud:
                incumpliendo las normas de tráfico, o con desorden en el horario de descanso nocturno?"/>
                <TextoExamen texto="- ¿He bebido o comido en exceso, me he emborrachado o tomado drogas?"/>
                <TextoExamen texto="- ¿Deseo el bien a los demás?"/>
                <TextoExamen texto="- ¿Los he perjudicado con engaños, trampas o amenazas?"/>
                <TextoExamen texto="- ¿Tengo envidia, y me molesto cuando a otros les salen las cosas bien o 
                me alegro cuando les salen mal?"/>
                <TextoExamen texto="- ¿Me tomo en serio la amistad, o por el
                contrario me conformo con un trato superficial y frívolo?"/>
                <TextoExamen texto="- ¿Soy leal y sincero con mis amigos?"/>
                <TextoExamen texto="- ¿Rezo por ellos y perdono sus defectos?"/>
                <TextoExamen texto="- ¿Vivo la castidad?"/>
                <TextoExamen texto="- ¿He realizado actos impuros? ¿Solo o con otras personas?"/>
                <TextoExamen texto="- ¿He consentido pensamientos, deseos o sensaciones impuras?"/>
                <TextoExamen texto="- ¿He visto vídeos, programas, revistas o imágenes indecentes?"/>
                <TextoExamen texto="- ¿He asistido a fiestas, diversiones o
                espectáculos que fácilmente me incitaban a pecar?"/>
                <TextoExamen texto="- ¿He incitado a otros a hacer el mal?"/>
                <TextoExamen texto="- ¿He tomado cosas que no son mías? ¿Las he devuelto?"/>
                <TextoExamen texto="- ¿Soy generoso, y pongo mis cosas al servicio de
                los demás, o estoy excesivamente apegado a ellas?"/>
                <TextoExamen texto="- ¿Me quejo cuando no tengo lo que quiero o me falta alguna comodidad?"/>
                <TextoExamen texto="- ¿He malgastado el dinero por capricho, vanidad o envidia?"/>
                <TextoExamen texto="- ¿Colaboro de algún modo con las necesidades de la Iglesia y de la sociedad?"/>
                <TextoExamen texto="- ¿Pienso en tantas personas que padecen hambre, enfermedad o soledad y procuro 
                ayudarles en la medida de mis posibilidades?"/>
                <TextoExamen texto="- ¿Estudio con orden e intensidad y cumplo con mis deberes de estudiante?"/>
                <TextoExamen texto="- ¿Procuro acabar bien el trabajo? "/>
                <TextoExamen texto="- ¿He estorbado el estudio de los demás, interrumpiéndoles,
                dificultando que cumplan su horario o dando mal ejemplo?"/>
                <TextoExamen texto="- ¿He dicho mentiras?"/>
                <TextoExamen texto="- ¿Pienso mal del prójimo y juzgo sin fundamento o sin necesidad?"/>
                <TextoExamen texto="- ¿Hablo mal de los demás: inventando falsedades sobre su comportamiento, 
                revelando sin necesidad sus defectos graves o haciendo eco a chismes?"/>
                <TextoExamen texto="- ¿He reparado el daño que he causado con esas conversaciones?"/>
              </View>
            {/* </View>
          </View> */}

          <View >
            
          </View>
        

        </ScrollView>
      {/* </AppGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003553",
   
  },
  title: {
    color: "#f8f8f8",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 60,
    fontFamily: "Titillium-Regular",
  },
  scrollView: {
    marginTop: 4,
  
    
  },
  // innerContainer: {
  //   height: "100%",
  //   justifyContent: "center",
  // },
  // section: {
  //   height: "80%",
  //   marginTop: 4,
  //   justifyContent: "center",
  // },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24,
    fontFamily: "Humanist521BoldItalicBT",
  },
  textContainer: {
    marginLeft: 11,
    marginRight: 11,
    fontFamily: "Hum521Rm",
    //fontSize: 24,
    //fontFamily: "Hum521Rm",
    //fontWeight: "bold",
    //color: 'red',
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ExamenConciencia;