
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";

import { Link } from "expo-router";
import { useEffect, useState } from "react";
interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  name: string;
  image: string | null;
  backImage: string | null;
  types: PokemonType[];
}

export default function Index() {
  const [pokemondata, setpokemondata] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchpokemon();
  }, []);

  async function fetchpokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
      }

      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(
          async (pokemon: { name: string; url: string }) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();

            return {
              name: pokemon.name,
              image: details.sprites.front_default,
              backImage: details.sprites.back_default,
              types: details.types,
            };
          }
        )
      );

      setpokemondata(detailedPokemons);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }

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

  function formatName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.list}
    >
      <Text style={styles.heading}>Pokédex</Text>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#333333" />
          <Text style={styles.message}>Loading Pokémon...</Text>
        </View>
      )}

      {!loading && pokemondata.length === 0 && (
        <Text style={styles.message}>
          Could not load Pokémon. Please try again.
        </Text>
      )}

{pokemondata.map((pokemon) => {
  const mainType = pokemon.types[0]?.type.name ?? "normal";
  const cardColor = getTypeColor(mainType);

  return (
    <Link
      key={pokemon.name}
      href={{
        pathname: "/details",
        params: { name: pokemon.name },
      }}
      style={[
        styles.container,
        { backgroundColor: cardColor },
      ]}
    >
      
      
<Text style={styles.name}>
  {formatName(pokemon.name)}
</Text>

<View style={styles.imagesRow}>
  {pokemon.image ? (
    <Image
      source={{ uri: pokemon.image }}
      style={styles.pokemonImage}
      resizeMode="contain"
    />
  ) : (
    <View style={styles.imagePlaceholder} />
  )}

  {pokemon.backImage ? (
    <Image
      source={{ uri: pokemon.backImage }}
      style={styles.pokemonImage}
      resizeMode="contain"
    />
  ) : (
    <View style={styles.imagePlaceholder} />
  )}
</View>

<Text style={styles.type}>
  {mainType.toUpperCase()}
</Text>
    </Link>
  );
})}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  list: {
    padding: 16,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#222222",
  },

  container: {
  width: "100%",
  borderRadius: 12,
  padding: 16,
  marginBottom: 14,
  alignItems: "center",
},

 name: {
  width: "100%",
  fontSize: 22,
  fontWeight: "bold",
  textAlign: "center",
  color: "#222222",
  alignSelf: "center",
},

  type: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginTop: 4,
    marginBottom: 10,
  },

  imagesRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },

  pokemonImage: {
    width: 120,
    height: 120,
  },

  imagePlaceholder: {
    width: 120,
    height: 120,
  },

  loading: {
    alignItems: "center",
    marginTop: 30,
  },

  message: {
    textAlign: "center",
    marginTop: 12,
    marginBottom: 20,
    color: "#555555",
  },
});

