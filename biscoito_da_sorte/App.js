import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [imgBiscoito, setImgBiscoito] = useState(
    require("./assets/biscoito.png")
  );
  const [frase, setFrase] = useState("");

  const frases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  const quebraBiscoito = () => {
    const randomNumber = Math.floor(Math.random() * frases.length);

    setFrase('"' + frases[randomNumber] + '"');
    setImgBiscoito(require("./assets/biscoitoAberto.png"));
  };

  return (
    <View style={styles.container}>
      <Image source={imgBiscoito} style={styles.img} />

      <Text style={styles.textoFrase}>{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 250,
    height: 250,
  },

  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 20,
    fontStyle: "italic",
    textAlign: "center",
  },

  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },

  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btnTexto: {
    color: "#dd7b22",
    fontSize: 18,
    fontWeight: "bold",
  },
});
