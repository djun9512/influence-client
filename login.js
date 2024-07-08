import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InstagramLoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // 여기에 로그인 로직을 구현합니다
    console.log('Login attempt with:', username, password);
    // 로그인 성공 가정 후 홈 화면으로 이동
    navigation.navigate('Home');
    console.log('testssssss')
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' }}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>비밀번호를 잊으셨나요?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#0095F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#00376B',
  },
});

export default InstagramLoginScreen;
