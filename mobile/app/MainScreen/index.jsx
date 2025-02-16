import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [musicList, setMusicList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const storedMusicList = JSON.parse(localStorage.getItem('musicList')) || [];
    setMusicList(storedMusicList);
  }, []);

  const addMusic = (title, artist, genre, duration, link) => {
    const music = { title, artist, genre, duration, link };
    const updatedMusicList = [...musicList, music];
    setMusicList(updatedMusicList);
    localStorage.setItem('musicList', JSON.stringify(updatedMusicList));
  };

  const removeMusic = (index) => {
    const updatedMusicList = musicList.filter((_, i) => i !== index);
    setMusicList(updatedMusicList);
    localStorage.setItem('musicList', JSON.stringify(updatedMusicList));
  };

  const playMusic = (title, artist, link) => {
    setCurrentMusic({ title, artist, link });
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image source={require('../../assets/images/cinza.png')} style={styles.profileImage} />
          <Text style={styles.profileButtonText}>Meu Perfil</Text>
        </TouchableOpacity>

        
        <Text style={styles.header}>ARTISTAS MAIS ESCUTADOS</Text>

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.albumContainer}>
          <Pressable onPress={() => navigation.navigate('Album')}>
            <Image source={require('../../assets/images/album1.jpg')} style={styles.image} />
            <Text style={styles.albumName}>MC Ryan SP</Text>
          </Pressable>
          <View style={styles.albumItem}>
            <Image source={require('../../assets/images/album2.jpg')} style={styles.image} />
            <Text style={styles.albumName}>MC Livinho</Text>
          </View>
          <View style={styles.albumItem}>
            <Image source={require('../../assets/images/album3.jpg')} style={styles.image} />
            <Text style={styles.albumName}>MC Kevin</Text>
          </View>
          <View style={styles.albumItem}>
            <Image source={require('../../assets/images/tuto.png')} style={styles.image} />
            <Text style={styles.albumName}>MC Tuto</Text>
          </View>
        </ScrollView>

        
        <Text style={styles.header}>PRODUTORAS MAIS CONHECIDAS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.producersContainer}>
          <View style={styles.producerItem}>
            <Image source={require('../../assets/images/lovefunk.png')} style={styles.producerImage} />
            <Text style={[styles.producerText, styles.producerUnderline]}>Love Funk</Text>
          </View>
          <View style={styles.producerItem}>
            <Image source={require('../../assets/images/24por48.png')} style={styles.producerImage} />
            <Text style={[styles.producerText, styles.producerUnderline]}>24 por 48</Text>
          </View>
          <View style={styles.producerItem}>
            <Image source={require('../../assets/images/gr6.png')} style={styles.producerImage} />
            <Text style={[styles.producerText, styles.producerUnderline]}>GR6</Text>
          </View>
          <View style={styles.producerItem}>
            <Image source={require('../../assets/images/kond.png')} style={styles.producerImage} />
            <Text style={[styles.producerText, styles.producerUnderline]}>KondZilla</Text>
          </View>
          <View style={styles.producerItem}>
            <Image source={require('../../assets/images/main.png')} style={styles.producerImage} />
            <Text style={[styles.producerText, styles.producerUnderline]}>MainStreet</Text>
          </View>
        </ScrollView>

        
        <Text style={styles.suggestedHeader}>VOCÊ TAMBÉM PODE GOSTAR</Text>

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.suggestedAlbums}>
          <Pressable onPress={() => navigation.navigate('Podcast')}>
            <View style={styles.albumItem}>
              <Image source={require('../../assets/images/podpah.png')} style={styles.suggestedImage} />
              <Text style={styles.albumText}>Podcast</Text>
            </View>
          </Pressable>
          <View style={styles.albumItem}>
            <Image source={require('../../assets/images/sertanejo.png')} style={styles.suggestedImage} />
            <Text style={styles.albumText}>Sertanejo</Text>
          </View>
          <View style={styles.albumItem}>
            <Image source={require('../../assets/images/rap.png')} style={styles.suggestedImage} />
            <Text style={styles.albumText}>Rap</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderRadius: 10,
  },
  profileButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 10,
    marginTop: 40,
  },
  albumContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  image: {
    width: 90,  
    height: 90, 
    marginRight: 15,
    borderRadius: 8,
  },
  albumName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#1E90FF',
    paddingBottom: 3,
  },
  producersContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  producerItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  producerImage: {
    width: 80,  
    height: 80, 
    marginBottom: 5,
  },
  producerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  producerUnderline: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E90FF',
    paddingBottom: 5,
  },
  suggestedHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 10,
  },
  suggestedAlbums: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  albumItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  suggestedImage: {
    width: 80,  
    height: 80, 
    marginBottom: 10,
    borderRadius: 8,
  },
  albumText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E90FF',
    paddingBottom: 5,
  },
});

export default Home;
