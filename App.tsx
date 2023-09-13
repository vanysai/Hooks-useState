import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const App = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');
  const [dados, setDados] = useState(null);

  const handleCadastro = () => {
    const dadosCadastro = {
      nome,
      genero,
      dataNascimento,
      usuario,
      senha,
      email,
      confirmarEmail,
      cpf,
      idioma,
    };
    setDados(dadosCadastro);
    console.log(dadosCadastro);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Nome Completo'
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
        <br>
        </br>
        <TextInput
          placeholder='Gênero'
          style={styles.input}
          onChangeText={(text) => setGenero(text)}
          value={genero}
        />
        <br>
        </br>
        <TextInput
          placeholder='Data de Nascimento'
          style={styles.input}
          onChangeText={(text) => setDataNascimento(text)}
          value={dataNascimento}
        />
        <br>
        </br>
        <TextInput
        placeholder='Usuário'
          style={styles.input}
          onChangeText={(text) => setUsuario(text)}
          value={usuario}
        />
        <br>
        </br>
        <TextInput
          placeholder='Senha'
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry={true}
        />
        <br>
        </br>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <br>
        </br>
        <TextInput
          placeholder='Confirme seu email'
          style={styles.input}
          onChangeText={(text) => setConfirmarEmail(text)}
          value={confirmarEmail}
          keyboardType="email-address"
        />
        <br>
        </br>
        <TextInput
          placeholder='CPF'
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
          value={cpf}
          keyboardType="numeric"
        />
        <br>
        </br>
        <TextInput
        placeholder='Idioma do currículo'
          style={styles.input}
          onChangeText={(text) => setIdioma(text)}
          value={idioma}
        />

        <Button title="CADASTRAR" onPress={handleCadastro} />
      </View>

      {dados && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dados informados:</Text>
          <Text>{`Nome: ${dados.nome}`}</Text>
          <Text>{`Gênero: ${dados.genero}`}</Text>
          <Text>{`Data de Nascimento: ${dados.dataNascimento}`}</Text>
          <Text>{`Usuário: ${dados.usuario}`}</Text>
          <Text>{`E-mail: ${dados.email}`}</Text>
          <Text>{`CPF: ${dados.cpf}`}</Text>
          <Text>{`Idioma do Currículo: ${dados.idioma}`}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  input: {
    height: 40,
    textAlign: 'left',
    color: 'gray',
    borderColor: 'gray',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grayc0c0c0',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o TextInput
  },
});

export default App;
