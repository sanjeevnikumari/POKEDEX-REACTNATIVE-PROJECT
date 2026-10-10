
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { name } = useLocalSearchParams();

  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      const data = await response.json();
      setPokemon(data);
    }

    getPokemon();
  }, [name]);

  function getTypeColor(type: string) {
    switch (type) {
      case "grass":
        return "#CDE8C1";
      case "fire":
        return "#FFD0C7";
      case "water":
        return "#C7E5FA";
      case "electric":
        return "#FFF0A8";
      case "bug":
        return "#E1EAA8";
      case "poison":
        return "#E4C8F5";
      case "normal":
        return "#E8E5DC";
      case "ground":
        return "#F0D6B3";
      case "fairy":
        return "#F8D7E8";
      case "fighting":
        return "#F0B9A8";
      case "psychic":
        return "#F7C3D7";
      case "rock":
        return "#D8D0B5";
      case "ghost":
        return "#D2CCF0";
      case "ice":
        return "#C8F3F3";
      case "dragon":
        return "#C8C7FA";
      case "dark":
        return "#C5C0C0";
      case "steel":
        return "#D5DFE8";
      case "flying":
        return "#D8D9FA";
      default:
        return "#E8E8E8";
    }
  }

  if (!pokemon) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#333333" />
        <Text>Loading Pokémon...</Text>
      </View>
    );
  }

  const mainType = pokemon.types[0].type.name;
  const cardColor = getTypeColor(mainType);

  return (
    <ScrollView style={styles.screen}>
<Text style={styles.heading}>
  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
</Text>
      <View
        style={[
          styles.card,
          { backgroundColor: cardColor },
        ]}
      >
        <Text style={styles.number}>
          #{String(pokemon.id).padStart(3, "0")}
        </Text>

        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.name}>
          {pokemon.name.charAt(0).toUpperCase() +
            pokemon.name.slice(1)}
        </Text>

        <View style={styles.typeBadge}>
          <Text style={styles.type}>
            {pokemon.types
              .map((item: any) => item.type.name)
              .join(" / ")
              .toUpperCase()}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>
              {pokemon.height / 10} m
            </Text>
            <Text style={styles.infoLabel}>Height</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>
              {pokemon.weight / 10} kg
            </Text>
            <Text style={styles.infoLabel}>Weight</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#252A34",
  },

  card: {
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 24,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  number: {
    alignSelf: "flex-end",
    fontSize: 15,
    color: "#555555",
    fontWeight: "bold",
  },

  image: {
    width: 200,
    height: 200,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#252A34",
    marginTop: 5,
  },

  typeBadge: {
    backgroundColor: "rgba(255,255,255,0.65)",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
  },

  type: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333",
  },

  infoRow: {
    flexDirection: "row",
    width: "100%",
    marginTop: 28,
    gap: 12,
  },

  infoBox: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.65)",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
  },

  infoValue: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#252A34",
  },

  infoLabel: {
    fontSize: 14,
    color: "#555555",
    marginTop: 6,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});