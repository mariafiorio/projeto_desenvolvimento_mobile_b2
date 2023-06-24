import { SafeAreaView, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import Cartoes from '../../components/CardFilme';

export default function MoviesPage() {

  let [filmes,setFilme] = useState([]);
  const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseUrl) 
    .then(data => data.json())
    .then(objeto => setFilme(objeto.data)) 
  },[]);

  return (
    <SafeAreaView style={styles.container}>{
      filmes.length > 0 ? 
      <ScrollView horizontal={true} style={styles.scroll}>
        {filmes.map(filme => <Cartoes key={filme.id} filme={filme.attributes}/>)}
      </ScrollView>: <ActivityIndicator size={'large'}/>
    }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
