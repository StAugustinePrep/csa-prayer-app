import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import TextoExamen from "@/components/ui/TextoExamen";

const ExamenConciencia = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <Text className="text-zinc-50 text-3xl font-bold mt-3">
          Examenes de conciencia
        </Text>
        <ScrollView className="mt-1" showsVerticalScrollIndicator={false}>
          <View className="h-full justify-center">
            <View className="h-4/5 mt-1 justify-center">
              <Text className="text-zinc-50 text-2xl font-bold mt-1">
                Examen Ignaciano
              </Text>
              <View className="ml-2">
                <TextoExamen
                  texto="1. Presencia: Pide a Dios su gracias y ayuda en este momento de
                oración."
                />
                <TextoExamen texto="2. Gratitud: Evoca los momentos que te sucedieron hoy de los cuales estoy especialmente agradecido y disfruta de ellos. Agradece a Dios por estos regalos. " />
                <TextoExamen texto="3. Repaso del día: Revisa tu día de principio a fin identificando donde experimentaste la presencia de Dios. " />
                <TextoExamen texto="4. Arrepentimiento: ¿Has pecado hoy o has hecho algo de lo que te arrepientes? Expresa tu pena a Dios y pídele perdón. Si el pecado es grave, ora buscando el perdón de la persona ofendida y el sacramento de la reconciliación." />
                <TextoExamen
                  texto="5. Gracias: Al finalizar la oración, pídele a Dios la gracia
                necesaria para el siguiente día."
                />
              </View>

              <Text className="text-zinc-50 text-2xl font-bold mt-3">
                Guia para una buena confesión
              </Text>
              <View className="ml-2">
                <TextoExamen
                  texto="Amarás a Dios sobre todas las cosas... - ¿Creo todo lo que Dios
                ha revelado y nos enseña la Iglesia Católica? ¿He dudado o
                negado las verdades de la fe católica? ¿Doy testimonio de mi fe
                entre mis amigos? - ¿Hago con desgana las cosas que se refieren
                a Dios? ¿Rezo con frecuencia y atención? ¿Agradezco a Dios
                tantas cosas buenas que me ha dado? - ¿Me he acercado
                indignamente a recibir algún sacramento? ¿He callado por
                vergüenza algún pecado mortal en confesiones anteriores? - ¿He
                dicho palabras irreverentes? ¿He jurado sin verdad o sin
                necesidad, sin prudencia o por cosas de poca importancia? - ¿He
                faltado a Misa, o la he vivido mal, los domingos o festivos, por
                mi culpa y sin una razón grave? ¿Vivo los días de fiesta y fines
                de semana como cristiano?"
                />
                <TextoExamen
                  texto="… y al prójimo como a ti mismo. - ¿Manifiesto respeto y cariño a
                mis padres? ¿Les obedezco con prontitud y alegría? ¿Colaboro en
                las tareas de la casa? ¿Doy buen ejemplo a mis hermanos y les
                ayudo en sus necesidades? ¿Riño con ellos o los insulto? -
                ¿Respeto a los profesores y autoridades? - ¿Respeto mi vida y la
                de los demás? ¿He agredido a personas o participado en peleas?
                ¿Difundo el cuidado de la vida, también de la de los no nacidos?
                - ¿He dañado o puesto en peligro mi vida o mi salud:
                incumpliendo las normas de tráfico, o con desorden en el horario
                de descanso nocturno? - ¿He bebido o comido en exceso, me he
                emborrachado o tomado drogas? - ¿Deseo el bien a los demás? ¿Los
                he perjudicado con engaños, trampas o amenazas? ¿Tengo envidia,
                y me molesto cuando a otros les salen las cosas bien o me alegro
                cuando les salen mal? - ¿Me tomo en serio la amistad, o por el
                contrario me conformo con un trato superficial y frívolo? ¿Soy
                leal y sincero con mis amigos? ¿Rezo por ellos y perdono sus
                defectos? - ¿Vivo la castidad? ¿He realizado actos impuros?
                ¿Solo o con otras personas? ¿He consentido pensamientos, deseos
                o sensaciones impuras? - ¿He visto vídeos, programas, revistas o
                imágenes indecentes? ¿He asistido a fiestas, diversiones o
                espectáculos que fácilmente me incitaban a pecar? ¿He incitado a
                otros a hacer el mal? - ¿He tomado cosas que no son mías? ¿Las
                he devuelto? - ¿Soy generoso, y pongo mis cosas al servicio de
                los demás, o estoy excesivamente apegado a ellas? ¿Me quejo
                cuando no tengo lo que quiero o me falta alguna comodidad? ¿He
                malgastado el dinero por capricho, vanidad o envidia? -
                ¿Colaboro de algún modo con las necesidades de la Iglesia y de
                la sociedad? ¿Pienso en tantas personas que padecen hambre,
                enfermedad o soledad y procuro ayudarles en la medida de mis
                posibilidades? - ¿Estudio con orden e intensidad y cumplo con
                mis deberes de estudiante? ¿Procuro acabar bien el trabajo? ¿He
                estorbado el estudio de los demás, interrumpiéndoles,
                dificultando que cumplan su horario o dando mal ejemplo? - ¿He
                dicho mentiras? ¿Pienso mal del prójimo y juzgo sin fundamento o
                sin necesidad? ¿Hablo mal de los demás: inventando falsedades
                sobre su comportamiento, revelando sin necesidad sus defectos
                graves o haciendo eco a chismes? ¿He reparado el daño que he
                causado con esas conversaciones?"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default ExamenConciencia;
