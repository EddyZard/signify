import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

export default function Biblioteca() {
  const sinais = [
    {id: 1, nome: '"a"'},
    {id: 2, nome: '"b"'},
    {id: 3, nome: '"c"'},
    {id: 4, nome: '"d"'}
  ];

  return(
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-between', backgroundColor: 'white'}}>
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '15px', backgroundColor: 'white'}}>
        <TouchableOpacity>
          <Image 
                    source={require('./assets/logo.jpeg')}
                    style={{width: 50, height: 50, borderRadius: 60}}
                  />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Abril'}}>Biblioteca de Sinais</Text>
        <TouchableOpacity>
          <Text>(Menu)</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sinais}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) =>(
          <View style={{ flex: 1, justifyContent: 'column', alignItems: 'center', padding: 10, margin: 10}}>
            <View style={{ flex: 1, borderWidth: 2, borderColor: 'pink', padding: 20, borderRadius: 5, width: '75%'}}></View>
            <Text>{item.nome}</Text>  
          </View>
          
        )}
      />

    </View>
  );
}
