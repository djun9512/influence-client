import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyPosts = [
  { id: '1', user: 'CatLover', imageUrl: 'https://placekitten.com/400/400', likes: 1023, caption: '귀여운 고양이!' },
  { id: '2', user: 'DogPerson', imageUrl: 'https://placedog.net/400/400', likes: 832, caption: '충성스러운 강아지' },
  { id: '3', user: 'BirdWatcher', imageUrl: 'https://picsum.photos/400/400?image=1024', likes: 654, caption: '아름다운 새' },
  { id: '4', user: 'FoxFan', imageUrl: 'https://picsum.photos/400/400?image=1025', likes: 1204, caption: '영리한 여우' },
  { id: '5', user: 'PandaPal', imageUrl: 'https://picsum.photos/400/400?image=1020', likes: 2045, caption: '귀여운 팬더' },
];

const Post = ({ user, imageUrl, likes, caption }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: 'https://picsum.photos/50/50' }} style={styles.profilePic} />
        <Text style={styles.userName}>{user}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Ionicons name={isLiked ? "heart" : "heart-outline"} size={28} color={isLiked ? "red" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.likes}>{likes} likes</Text>
      <Text style={styles.caption}><Text style={styles.userName}>{user}</Text> {caption}</Text>
    </View>
  );
};

const InstagramHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
      </View>
      <FlatList
        data={dummyPosts}
        renderItem={({ item }) => <Post {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  post: {
    marginBottom: 15,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    padding: 10,
  },
  actionIcon: {
    marginLeft: 15,
  },
  likes: {
    fontWeight: 'bold',
    padding: 10,
  },
  caption: {
    padding: 10,
  },
});

export default InstagramHomeScreen;
