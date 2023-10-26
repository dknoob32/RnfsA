import { View, Text, StyleSheet, ScrollView ,RefreshControl} from "react-native";
import React, { useContext, useState, useCallback,useEffect} from "react";
import FooterMenu from "../../components/menus/FooterMenu";
import { PostContext } from "../../context/postContext";
import PostCard from "../../components/PostCard";

const Home = () => {
  //gloabal state
  const [posts, getAllPosts] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {}, [getAllPosts]);
  //refresh controll
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllPosts;
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <PostCard posts={posts} />
        {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
      </ScrollView>
      <View style={{ backgroundColor: "white", borderRadius: 10 }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 20,
  },
});

export default Home;
