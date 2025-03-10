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

              <View style={styles.textContainer}>
                <TextoExamen texto=" "/>
                <TextoExamen texto="Dios perdona como si nunca hubieras pecado. No importa lo que hayas hecho."/>
                <TextoExamen texto="Al absolverte en la santa confesión, tu pecado no sólo es perdonado, sino que:"/>
                <TextoExamen texto="¡YA NO EXISTE! ¡Imagínatelo! ¡Qué liberación!"/>
                <TextoExamen texto="Anímate y deja que Cristo te libere de todo lo que te pesa." />
                
              </View>



              <View >
                <Text style={styles.subtitle}> 1. Amarás a Dios sobre todas las cosas. </Text> 
              </View>

              <View style={styles.textContainer}>
                <TextoExamen texto="Dios quiere tener el primer lugar en tu vida."/>
                <TextoExamen texto="- ¿He postergado mi relación con Él?" />
                <TextoExamen texto="- ¿Rezo solo cuando necesito algo de Él?" />
                <TextoExamen texto="- ¿Cómo es mi vida de oración?" />
                <TextoExamen texto="- ¿Creo que Dios puede ayudarme?"/>
                <TextoExamen texto="- ¿Hay personas más importantes para mí que Dios?" />
                <TextoExamen texto="- ¿He convertido a otras personas en ídolos?"/>
                <TextoExamen texto="- ¿He sido supersticioso, practicando la adivinación o creyendo en horóscopos?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 2. No tomarás el nombre de Dios en vano. </Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Dios solo quiere que seas feliz."/>
                <TextoExamen texto="- ¿Tengo reverencia por Dios?"/>
                <TextoExamen texto="- ¿Me he burlado de Él?"/>
                <TextoExamen texto="- ¿He criticado a la Iglesia?"/>
                <TextoExamen texto="- ¿Soy consciente de que yo también soy parte de la Iglesia y que, como cristiano bautizado, represento a la Iglesia con mis pensamientos, palabras y acciones?"/>
                <TextoExamen texto="- ¿Me resulta difícil mostrarme como cristiano en mi ambiente?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 3. Santificarás las fiestas.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="El domingo es el Día del Señor."/>
                <TextoExamen texto="- ¿Qué importancia tiene la Santa Misa para mí?"/>
                <TextoExamen texto="- ¿Asisto a la Santa Misa los domingos?"/>
                <TextoExamen texto="- ¿He comulgado de manera imprudente sin pensar en quién estoy recibiendo?"/>
                <TextoExamen texto="- ¿La asistencia a la Santa Misa tiene algún impacto en mi vida?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 4. Honrarás a tu padre y a tu madre.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Dios me ha dado padres."/>
                <TextoExamen texto="- ¿Cómo es mi relación con ellos?"/>
                <TextoExamen texto="- ¿Valorizo el contacto con ellos?"/>
                <TextoExamen texto="- ¿Puedo perdonarles?"/>
                <TextoExamen texto="- ¿Rezo por ellos?"/>
                <TextoExamen texto="- ¿Cómo me comporto con aquellos que tienen autoridad sobre mí?"/>
                <TextoExamen texto="- ¿O cómo trato a las personas sobre las que tengo responsabilidad?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 5. No matarás.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Mi cuerpo me ha sido confiado por Dios, pero en última instancia no me pertenece."/>
                <TextoExamen texto="- ¿He puesto en peligro mi vida, mi salud y la de los demás de manera imprudente?"/>
                <TextoExamen texto="- ¿He herido a otros, ya sea con palabras o acciones?"/>
                <TextoExamen texto="- ¿He llevado a otros a cometer actos malvados (aborto, consumo de alcohol, drogas...)?"/>
                <TextoExamen texto="- ¿He sido rencoroso o vengativo?"/>
                <TextoExamen texto="- ¿He estado dispuesto a reconciliarme y a contribuir a la paz?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 6. No cometerás actos impuros.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Dios nos ha dado la sexualidad y desea que tengamos una relación sana con ella."/>
                <TextoExamen texto="- ¿Me he detenido en pensamientos o recuerdos impuros?"/>
                <TextoExamen texto="- ¿He buscado excitación sexual en películas, libros, internet o conversaciones?"/>
                <TextoExamen texto="- ¿He hecho actos impuros, ya sea a través de la masturbación o con otras personas?"/>
                <TextoExamen texto="- Para los casados: ¿He tratado a mi cónyuge en asuntos sexuales con respeto y amor, o solo he buscado mi propio placer?"/>
                <TextoExamen texto="- Para los casados: ¿He mantenido la fidelidad conyugal?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 7. No robarás.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="La propiedad es un derecho humano."/>
                <TextoExamen texto="- ¿He robado?"/>
                <TextoExamen texto="- ¿Qué y cuánto?"/>
                <TextoExamen texto="- ¿He guardado cosas encontradas o prestadas?"/>
                <TextoExamen texto="- ¿He tratado con cuidado la propiedad de los demás o la mía?"/>
                <TextoExamen texto="- ¿He sido avaricioso?"/>
                <TextoExamen texto="- ¿He sido tacaño, envidioso, derrochador?"/>
                <TextoExamen texto="- ¿He evadido impuestos?"/>
                <TextoExamen texto="- ¿He tenido pereza en cumplir los deberes?"/>
                <TextoExamen texto="- ¿Contribuyo mi tiempo, talento, y tesoro para apoyar a los pobres, mi parroquia y el trabajo de la Iglesia?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 8. No dirás falso testimonio ni mentirás.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Dios quiere que sea honesto y que mi hablar no perjudique a los demás."/>
                <TextoExamen texto="- ¿Me esfuerzo por pensar bien de los demás, o hago juicios precipitados?"/>
                <TextoExamen texto="- ¿Doy a los demás la oportunidad de corregir mis prejuicios?"/>
                <TextoExamen texto="- ¿Difamo a otros para obtener una ventaja personal?"/>
                <TextoExamen texto="- ¿Hablo sin amor sobre otros?"/>
                <TextoExamen texto="- ¿He mentido o engañado a otros para obtener una ventaja?"/>
                <TextoExamen texto="- ¿He sido sincero?"/>
                <TextoExamen texto="- ¿He querido destacar y parecer más de lo que realmente soy?"/>
                <TextoExamen texto="- ¿He guardado secretos confiados y he respetado los secretos ajenos?"/>
                <TextoExamen texto="- ¿He cumplido mi palabra?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 9. No consentirás pensamientos ni deseos impuros.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Dios protege la relación de por vida entre el hombre y la mujer en el matrimonio."/>
                <TextoExamen texto="- ¿Cómo es mi comportamiento conyugal, prematrimonial o extramatrimonial?"/>
                <TextoExamen texto="- ¿Soy consciente de que la sexualidad es un regalo de Dios para expresar amor?"/>
                <TextoExamen texto="- ¿Trato a las personas del otro sexo con respeto, o hablo despectivamente de hombres/mujeres?"/>
                <TextoExamen texto="- ¿Me esfuerzo por amar a los demás como deseo ser amado?"/>
              </View>

              <View >
                <Text style={styles.subtitle}> 10. No codiciarás los bienes ajenos.</Text> 
              </View>
        
              <View style={styles.textContainer}>
                <TextoExamen texto="Dios me llama a respetar la propiedad del prójimo."/>
                <TextoExamen texto="- ¿Cómo trato la propiedad de los demás?"/>
                <TextoExamen texto="- ¿Soy agradecido por lo que tengo?"/>
                <TextoExamen texto="- ¿Cedo a mis impulsos o puedo renunciar a algo?"/>
                <TextoExamen texto="- ¿Cuándo fue la última vez que fui generoso con los demás?"/>
                <TextoExamen texto="- ¿Soy arrogante o ambicioso?"/>
                <TextoExamen texto="- ¿Cómo manejo las ofensas?"/>
                <TextoExamen texto="- ¿(Siempre) quiero estar en primer lugar?"/>
                <TextoExamen texto="- ¿Puedo superarme en algo?"/>
                <TextoExamen texto="- ¿Soy celoso?"/>
                <TextoExamen texto="- ¿Me enojo fácilmente?"/>
                <TextoExamen texto="- ¿Exijo mis derechos?"/>
                <TextoExamen texto="- ¿Soy propenso a pelear?"/>
                <TextoExamen texto="- ¿Necesito siempre tener la última palabra?"/>
                <TextoExamen texto="- ¿Me gusta estar en el centro de atención?"/>
                <TextoExamen texto="- ¿Tiendo a justificarme a menudo?"/>
              </View>


              <View >
                <Text style={styles.youcat}>YOUCAT</Text> 
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
    marginTop: 30,
    fontFamily: "Titillium-Bold",
  },
  scrollView: {
    marginTop: 4,
  
    
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24,
    fontFamily: "Titillium-Semibold",
  },
  youcat: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24,
    fontFamily: "Titillium-Semibold",
    textAlign:  "center",
  },
  textContainer: {
    marginLeft: 11,
    marginRight: 11,
    fontSize: 14,
    fontFamily: "Humans-Roman",

  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ExamenConciencia;