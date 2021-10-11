import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles/styles";

import Icon from "react-native-vector-icons/Feather";

interface resultProps {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function App() {
  const [cep, setCep] = useState("");

  const [result, setResult] = useState<resultProps>();

  const searchCep = async () => {
    try {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((result) => result.json())
        .then((data) => setResult(data));

      Keyboard.dismiss();
    } catch (erro) {
      alert("O cep digitado é inválido ou inexistente, revise o cep digitado");
    }
  };

  if (!result) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>BuscaCep</Text>
            <Icon name="map" size={18} color="#f1573b" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o cep"
              keyboardType="numeric"
              onChangeText={(text) => setCep(text)}
            />

            <TouchableOpacity style={styles.button}>
              <Icon onPress={searchCep} name="search" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttonMap}>
            <Text style={styles.buttonMapText}>Buscar no mapa</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>BuscaCep</Text>
            <Icon name="map" size={18} color="#f1573b" />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o cep"
              keyboardType="numeric"
              onChangeText={(text) => setCep(text)}
            />

            <TouchableOpacity style={styles.button} onPress={searchCep}>
              <Icon name="search" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttonMap}
            onPress={() =>
              Linking.openURL(`https://www.google.com.br/maps/place/${cep}/`)
            }
          >
            <Text style={styles.buttonMapText}>Buscar no mapa</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.resultContainer}>
          <View style={styles.result}>
            <View style={styles.resultCard}>
              <Icon name="map" size={20} color="#fff" />
              <Text style={styles.resultTitle}>Rua</Text>
              <Text style={styles.resultText}>{result.logradouro}</Text>
            </View>

            <View style={styles.resultCard}>
              <Icon name="map" size={20} color="#fff" />
              <Text style={styles.resultTitle}>Bairro</Text>
              <Text style={styles.resultText}>{result.bairro}</Text>
            </View>
          </View>

          <View style={styles.result}>
            <View style={styles.resultCard}>
              <Icon name="map" size={20} color="#fff" />

              <Text style={styles.resultTitle}>Cidade</Text>
              <Text style={styles.resultText}>{result.localidade} </Text>
            </View>

            <View style={styles.resultCard}>
              <Icon name="map" size={20} color="#fff" />

              <Text style={styles.resultTitle}>Estado</Text>
              <Text style={styles.resultText}>{result.uf} </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
