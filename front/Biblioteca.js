import { View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function Biblioteca() {
  const sinais = [
    {id: 1, nome: '"a"'},
    {id: 2, nome: '"b"'},
    {id: 3, nome: '"c"'},
    {id: 4, nome: '"d"'},
    {id: 5, nome: '"e"'},
    {id: 6, nome: '"f"'},
    {id: 7, nome: '"g"'},
    {id: 8, nome: '"h"'},
    {id: 9, nome: '"i"'},
    {id: 10, nome: '"j"'},
    {id: 11, nome: '"k"'},
    {id: 12, nome: '"l"'},
    {id: 13, nome: '"m"'},
    {id: 14, nome: '"n"'},
    {id: 15, nome: '"o"'},
    {id: 16, nome: '"p"'},
    {id: 17, nome: '"q"'},
    {id: 18, nome: '"r"'}
  ];

  return(
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'space-between', backgroundColor: 'white'}}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', padding: '15px', backgroundColor: 'pink'}}>
        <TouchableOpacity>
          <Text>(Logo)</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Abril'}}>Biblioteca de Sinais</Text>
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