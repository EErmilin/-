import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import ExhibitTitle from '../../navigation/components/ExhibitTitle';
import CustomHeader from '../../navigation/components/CustomHeader';

const quizArray = [
  {
    question: 'Год основания Русскинского музея Природы и Человека имени Ядрошникова Александра Павловича',
    answers: [{ value: '1993', isCorrect: false }, { value: '1988', isCorrect: true }, { value: '2016', isCorrect: false }]
  },
  {
    question: 'Река Тром-Аган (Тромъеган) в переводе с хантыйского языка означает',
    answers: [{ value: 'Великая река', isCorrect: false }, { value: 'Божья река', isCorrect: true }, { value: 'Северная река', isCorrect: false }]
  },
  {
    question: 'Согласно хантыйской легенде эта птица участвовала в сотворении мира',
    answers: [{ value: 'Журавль', isCorrect: false }, { value: 'Гагара', isCorrect: true }, { value: 'Филин', isCorrect: false }]
  },
  {
    question: 'В каком году создатель музея Александр Павлович Ядрошников награжден Почетной грамотой Президента Российской Федерации?',
    answers: [{ value: '2014', isCorrect: true }, { value: 'Гагара', isCorrect: false }, { value: '2022', isCorrect: false }]
  },
  {
    question: 'Обские угры – это',
    answers: [{ value: 'Ханты и ненцы', isCorrect: false }, { value: 'Ханты и манси', isCorrect: true }, { value: 'Ханты и остяки', isCorrect: false }]
  },
  {
    question: 'Животное, сто лет назад истребленное из-за струи и ценного меха, а в наши дни охраняемое в заповедниках Югры',
    answers: [{ value: 'Росомаха', isCorrect: false }, { value: 'Норка', isCorrect: false }, { value: 'Бобр', isCorrect: true }]
  },
  {
    question: 'Животные – мифологические предки обских угров',
    answers: [{ value: 'Медведь и рысь', isCorrect: false }, { value: 'Лось и медведь', isCorrect: true }, { value: 'Волк и медведь', isCorrect: false }]
  },
  {
    question: 'Ханты называют «тор сапль юх» - «журавль»',
    answers: [{ value: 'Колодец', isCorrect: false }, { value: 'Музыкальный инструмент', isCorrect: true }, { value: 'Инструмент для выделки шкуры', isCorrect: false }]
  },
  {
    question: 'Широкие лыжи, скользящая поверхность которых обклеена шкурой животных',
    answers: [{ value: 'Подволоки', isCorrect: true }, { value: 'Снегоступы', isCorrect: false }, { value: 'Голицы', isCorrect: false }]
  },
  {
    question: 'Хантыйская лодка-долбленка называется',
    answers: [{ value: 'Облас', isCorrect: true }, { value: 'Обянка', isCorrect: false }, { value: 'Морда', isCorrect: false }]
  },
  {
    question: 'Что такое ясак',
    answers: [{ value: 'Национальная одежда', isCorrect: false }, { value: 'Амбар', isCorrect: false }, { value: 'Налог', isCorrect: true }]
  },
  {
    question: 'Как называется межродовый гибрид боровых птиц - глухаря и тетерева',
    answers: [{ value: 'Межняк', isCorrect: true }, { value: 'Косач', isCorrect: false }, { value: 'Турпан', isCorrect: false }]
  },
]

const Quiz = (props) => {
  const [carrentQuestion, setcarrentQuestion] = useState(quizArray[0])
  const [counter, setCouter] = useState(0)
  const [answerArray, setanswerArray]: any = useState([])


  const toggleAnswer = (answer: any) => {
    if (!answerArray.find((item: any) => item === answer)) {
      setanswerArray([...answerArray, answer])
    }
  }

  useEffect(()=>{
    setanswerArray([])
    setCouter(0)
  },[props])

  const next = () =>{
    if(!(counter+1 === quizArray.length)){
      setanswerArray([])
      setCouter(counter+1)
    } else{
      setanswerArray([])
      setCouter(0)
    }
  }

  useEffect(()=>{
    setcarrentQuestion(quizArray[counter])
  },[counter])



  return (
    <>
      <CustomHeader title="Викторина о музее" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>

          {/* INFO */}
          <View style={styles.infoContainer}>
            <ExhibitTitle>Викторина о музее</ExhibitTitle>
            <Text style={styles.infoText}>
              {carrentQuestion.question}
            </Text>
            {carrentQuestion.answers.map((answer) => <TouchableOpacity
              style={answerArray.find((item: any) => item === answer) ?
                answer.isCorrect ?
                  styles.correctAnswer :
                  styles.unCorrectAnswer :
                styles.answer} onPress={() => toggleAnswer(answer)}>
              <Text style={styles.btnText}>{answer.value}</Text>
            </TouchableOpacity>)}
          </View>
        { answerArray.find((item)=>!!item.isCorrect) && <TouchableOpacity style={styles.next} onPress={next}><Text>{counter+1 === quizArray.length ? 'Спасибо за участие в векторине :) \n Нажмите что бы начать сначала' : 'К следующему вопросу'}</Text></TouchableOpacity>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.white,
  },
  scroll: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 22,
  },
  infoContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 30,
  },
  answer: {
    width: "100%",
    backgroundColor: colors.blue_light,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  correctAnswer: {
    width: "100%",
    backgroundColor: '#19e619',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  unCorrectAnswer: {
    width: "100%",
    backgroundColor: '#e34234',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },

  btnText: {
    color: colors.white,
    fontSize: 18,
  },
  next: {
marginTop:25,
  }

});
