import { ExternalPathString, Link, RelativePathString } from "expo-router";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";

type CardProps = {
  title: string;
  description?: string;
  image: ImageSourcePropType;
  link: {
    href: RelativePathString | ExternalPathString;
  };
};

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description || "Descripción de la oración"}
        </Text>
        <Link href={link.href} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>ORAR</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 96,
    maxHeight: 500,
    maxWidth: 350,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    maxHeight: '100%',
    maxWidth: '100%',
  },
  cardContent: {
    height: '100%',
    backgroundColor: '#395E80',
    padding: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    gap: 12,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  description: {
    color: 'white',
  },
  button: {
    width: 64,
    padding: 8,
    backgroundColor: '#003553',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});