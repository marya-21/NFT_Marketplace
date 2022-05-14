import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusedStatusBar } from "../component";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
