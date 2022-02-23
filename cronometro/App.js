import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [numero, setNumero] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState(0);
  const intervalRef = useRef(null);

  const addMiliSecond = () => {
    setNumero((oldValue) => (oldValue += 0.1));
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        addMiliSecond();
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/cronometro.png")}
        style={styles.cronometro}
      />

      <Text style={styles.timer}>
        {" "}
        {numero.toFixed(1)}{" "}
      </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            !isRunning
              ? setIsRunning(true)
              : setIsRunning(false);
          }}
        >
          <Text style={styles.btnTexto}>
            {!isRunning ? "COMEÇAR" : "PARAR"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setLastSavedTime(numero.toFixed(1));
            setNumero(0);
            setIsRunning(false);
          }}
        >
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.lastTime}>
        {!lastSavedTime
          ? ""
          : "Último tempo marcado: " + lastSavedTime + "s"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },

  cronometro: {},

  timer: {
    marginTop: -160,
    color: "#fff",
    fontSize: 65,
    fontWeight: "bold",
  },

  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },

  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },

  lastTime: {
    marginTop: 50,
    color: "#fff",
    fontSize: 20,
    fontStyle: "italic",
  },
});
