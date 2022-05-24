import React from "react";
import { View, Text, Alert, Image, ScrollView, BackHandler, Animated } from "react-native";
import { Button, ButtonContainer } from "../../../component/quizComponent/Button";
import styles from './style';
import StatusBar from '../../../component/StatusBar';
import { connect } from 'react-redux';
import colors from '../../../component/colors';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import AsyncStorage from "@react-native-community/async-storage";
import Storage from '../../../component/AsyncStorage';
import Sound from "react-native-sound";

let whoosh 

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correctCount: 0,
      totalCount: 0,
      firstbtn: 2,
      Secondbtn: 2,
      thirdbtn: 2,
      forthbtn: 2,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
      choose_answer: '',
      index: 0,
      disable: false,
      color: '',
      timer: null,
      counter: this.props.GetListById.quiz.time * 60,
      questionList: [],
      list: [],
      time: 0,
      key: 0,
      roundname: '',
      count: 1,
      id:this.props.route.params.quiz_id,
      visible: false,
      answerArray: [],
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
 
  
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        }

  handleBackButtonClick() {
    if(this.state.index==0){
      this.props.navigation.goBack(null);
      // whoosh.stop();
    }else{
      Alert.alert(
        "Are you sure want to quit the quiz ?",
        "",
        [
          {
            text: "Cancel",
            onPress: () => {
                cancelable: false;
            },
            style: "cancel",
        },
            { text: "Yes", onPress: () =>this.alertFunction() },
        ],
        { cancelable: false }
    )
    }
      return true;
         }
  //  playBack=()=>{
  //     whoosh = new Sound('https://ekyatraterapanth.com/adminpanel/assets/music/music.mp3',
  //       Sound.MAIN_BUNDLE, (error) => {
  //         if (error) {
  //           console.log('failed to load the sound', error);
  //           return;
  //         }
  //         whoosh.play((success) => {
  //           if (success) {
  //             console.log('successfully finished playing');
  //             this.playBack()
  //           } else {
  //             console.log('playback failed due to audio decoding errors');
  //           }
  //         });
  //       });
  //       whoosh.release(); 
  //  }
 async componentDidMount() {
  
    const { counter } = this.state
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  

    const commonQuizId=await AsyncStorage.getItem(Storage.commonQuizId)
    if(commonQuizId==null){
      // this.playBack()
    }
     else{
      let correctCount=await AsyncStorage.getItem(Storage.correctCount)
      let total_attempts=await AsyncStorage.getItem(Storage.total_attempts)
      let attempArrat=await AsyncStorage.getItem(Storage.attempArrat)
      let taken_time=await AsyncStorage.getItem(Storage.taken_time)
    const quizData = this.props.GetListById
    this.props.navigation.navigate('Summery', {
      correctCount: correctCount,
      totalQuestion:quizData.question.length,
      quiz_id: commonQuizId,
      taken_time: taken_time,
      quiz_name: quizData.quiz.name,
      total_attempts:total_attempts,
      attempArrat:JSON.parse(attempArrat)
       }
     )
    
  }
  
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  tick = () => {
    const { counter, count } = this.state
    this.setState({ count: count + 1 })
    if (counter == 0) {
      clearInterval(this.state.timer);
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }


  answer = (correct, question_id, choose_answer, noans) => {
    AsyncStorage.setItem(Storage.commonQuizId,this.state.id)
    this.state.counter==0? Alert.alert(
      "Sorry your time has been finished",
      "",
      [
        
          { text: "ok", onPress: () =>this.alertFunction() },

      ],
      { cancelable: false }
  ):
   this.manageAnswer(correct, question_id, choose_answer, noans)
  };

  manageAnswer=async(correct, question_id, choose_answer, noans)=>{
    switch (noans) {
      case '1':
        this.setState({ firstbtn: correct })
        break;

      case '2':
        this.setState({ Secondbtn: correct })
        break;

      case '3':
        this.setState({ thirdbtn: correct })
        break;

      case '4':
        this.setState({ forthbtn: correct })
        break;

      default:
    }
    this.state.answerArray.push({
      question_id: question_id,
      choose_answer: choose_answer,
      is_correct: correct
    })


    if (correct == 1) {
      this.setState(
        state => {
          const nextState = { answered: 1 };
          state.disable = true;
          if (correct) {
            nextState.correctCount = state.correctCount + 1;
            nextState.answerCorrect = true;
          } else {
            nextState.answerCorrect = false;
          }
          return nextState;
        },
        () => {
          setTimeout(() => {
            this.nextQuestion()
          }, 500);
        }
      );
    }
    else {
      this.setState(
        state => {
          const nextState = { answered: true };
          state.disable = true;
          if (correct == 1) {
            nextState.correctCount = state.correctCount + 1;
            nextState.answerCorrect = true;
           
          } else {
            nextState.answerCorrect = false;
          }
          return nextState;
          
        },
        () => {
          setTimeout(() => {
            this.nextQuestion()
          }, 500);
           
        }
      );
    }
  }

  alertFunction = () => {
   // whoosh.stop();
    const quizData = this.props.GetListById
    this.props.navigation.navigate('Summery', {
      correctCount: this.state.correctCount,
      totalQuestion: quizData.question.length,
      quiz_id: this.state.id,
      taken_time:  this.props.GetListById.quiz.time * 60 - this.state.counter,
      quiz_name: quizData.quiz.name,
      total_attempts:this.state.index+1,
      attempArrat: this.state.answerArray
    }
    )
   
    this.setState(state => {
      state.correctCount = 0,
        state.totalCount = 0,
        state.activeQuestionIndex = 0,
        state.answered = false,
        state.answerCorrect = false,
        state.index = 0,
        state.timer = null,
        state.counter = 0,
        state.disable = false,
        state.key = state.key + 1


    })
    clearInterval(this.state.timer);
  }

  nextQuestion = () => {
    AsyncStorage.setItem(Storage.correctCount,JSON.stringify(this.state.correctCount))
    AsyncStorage.setItem(Storage.total_attempts,JSON.stringify(this.state.index+1))
    AsyncStorage.setItem(Storage.attempArrat,JSON.stringify(this.state.answerArray))
    AsyncStorage.setItem(Storage.taken_time,JSON.stringify(this.props.GetListById.quiz.time * 60 - this.state.counter))
   
    this.setState({
      firstbtn: 2,
      Secondbtn: 2,
      thirdbtn: 2,
      forthbtn: 2,

    })
    const question = this.props.GetListById.question
    try {
      this.setState(state => {
        const nextIndex = state.activeQuestionIndex + 1;
        if (nextIndex >= question.length + 1) {
          return this.props.navigation.popToTop();
        }
        return {
          activeQuestionIndex: nextIndex,
          answered: false
        }
      },
        () => { setTimeout(() => this.next(), 500) }
      );
    } catch (error) {
      console.log(error);
    }
  };

  next = () => {
    this.setState({ visible: false })
    const question = this.props.GetListById.question
    if (this.state.index <= question.length - 2) {
      this.setState(state => {
        const index = state.index + 1;
        state.disable = false
        return {
          index: index,
        };
      });
    }
    else {
      this.alertFunction()
    }
  };

  renderData = (item, id) => {
    return (
      <View style={styles.buttonContainer}>

        {item.option_a == null ? null :
          <View style={styles.main2}>
            {this.state.firstbtn == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_a}
                onPress={() => this.answer(item.option_a_correct, id, item.option_a, '1')}
              />

              : null}
            {this.state.firstbtn == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_a}
                onPress={() => this.answer(item.option_a_correct, id, item.option_a, '1')}
              />

              : null}
            {this.state.firstbtn == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_a}
                onPress={() => this.answer(item.option_a_correct, id, item.option_a, '1')}
              />

              : null}
          </View>
        }
        {item.option_b == null ? null :

          <View style={styles.main2}>
            {this.state.Secondbtn == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_b}
                onPress={() => this.answer(item.option_b_correct, id, item.option_b, '2')}
              />

              : null}
            {this.state.Secondbtn == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_b}
                onPress={() => this.answer(item.option_b_correct, id, item.option_b, '2')}
              />

              : null}
            {this.state.Secondbtn == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_b}
                onPress={() => this.answer(item.option_b_correct, id, item.option_b, '2')}
              />

              : null}
          </View>
        }
        {item.option_c == null ? null :
          <View style={styles.main2}>
            {this.state.thirdbtn == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_c}
                onPress={() => this.answer(item.option_c_correct, id, item.option_c, '3')}
              />

              : null}
            {this.state.thirdbtn == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_c}
                onPress={() => this.answer(item.option_c_correct, id, item.option_c, '3')}
              />

              : null}
            {this.state.thirdbtn == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_c}
                onPress={() => this.answer(item.option_c_correct, id, item.option_c, '3')}
              />

              : null}
          </View>
        }
        {item.option_d == null ? null :
          <View style={styles.main2}>
            {this.state.forthbtn == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_d}
                onPress={() => this.answer(item.option_d_correct, id, item.option_d, '4')}
              />

              : null}
            {this.state.forthbtn == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_d}
                onPress={() => this.answer(item.option_d_correct, id, item.option_d, '4')}
              />

              : null}
            {this.state.forthbtn == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_d}
                onPress={() => this.answer(item.option_d_correct, id, item.option_d, '4')}
              />

              : null}
          </View>
        }
        {item.option_e == null ? null :

          <View style={styles.main2}>
            {this.state.correctValue == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_e}
                onPress={() => this.answer(item.option_e_correct, id, item.option_e, '5')}
              />

              : null}
            {this.state.correctValue == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_e}
                onPress={() => this.answer(item.option_e_correct, id, item.option_e)}
              />

              : null}
            {this.state.correctValue == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_e}
                onPress={() => this.answer(item.option_e_correct, id, item.option_e)}
              />

              : null}
          </View>
        }
        {item.option_f == null ? null :

          <View style={styles.main2}>
            {this.state.correctValue == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_f}
                onPress={() => this.answer(item.option_f_correct, id, item.option_f)}
              />

              : null}
            {this.state.correctValue == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_a}
                onPress={() => this.answer(item.option_a_correct, id, item.option_a)}
              />

              : null}
            {this.state.correctValue == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_a}
                onPress={() => this.answer(item.option_a_correct, id, item.option_a)}
              />
              : null}
          </View>
        }
        {item.option_g == null ? null :
          <View style={styles.main2}>
            {this.state.correctValue == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_g}
                onPress={() => this.answer(item.option_g_correct, id, item.option_g)}
              />
              : null}
            {this.state.correctValue == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_g}
                onPress={() => this.answer(item.option_g_correct, id, item.option_g)}
              />

              : null}
            {this.state.correctValue == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_a}
                onPress={() => this.answer(item.option_a_correct, id, item.option_a)}
              />

              : null}
          </View>
        }
        {item.option_h == null ? null :
          <View style={styles.main2}>
            {this.state.correctValue == 1 ?

              <Button
                disable={this.state.disable}
                color={'green'}
                text={item.option_h}
                onPress={() => this.answer(item.option_h_correct, id, item.option_h)}
              />

              : null}
            {this.state.correctValue == 0 ?
              <Button
                disable={this.state.disable}
                color={'red'}
                text={item.option_h}
                onPress={() => this.answer(item.option_h_correct, id, item.option_h)}
              />

              : null}
            {this.state.correctValue == 2 ?
              <Button
                disable={this.state.disable}
                color={'white'}
                text={item.option_h}
                onPress={() => this.answer(item.option_h_correct, id, item.option_h)}
              />

              : null}
          </View>
        }
      </View>
    )
  }

  render() {
    const { GetListById } = this.props;
    let question = null;
    let TotalQuestion = 0;
    if (GetListById == null) {
    } else {
      question = GetListById.question
      TotalQuestion = question.length;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={[styles.main, { backgroundColor: colors.red, }]}>
            <View style={{ alignItems:'center',justifyContent:'center',width:'100%' }}>
              <Text style={styles.title1}>Quiz</Text>
            </View>
          </View>
          {GetListById !== null && (
            <ScrollView>
              <View style={styles.view}>
                <View style={styles.view1}>
                  <View style={styles.main1}>
                    <Text style={[styles.round]}>
                      {`Ques ${this.state.index + 1} of ${question.length}`} </Text>
                  </View>
                  <View style={styles.main1}>
                    <Text style={styles.round}> {GetListById.quiz.name}</Text>

                  </View>
                </View>
                <View style={styles.timerProgress}>
                  <CountdownCircleTimer
                    key={this.state.key}
                    size={90}
                    isPlaying
                    duration={this.state.counter}
                    colors={[
                      ['#ed2225', 1.0],

                    ]}
                  >
                    {({ remainingTime, animatedColor }) => (
                      <Animated.Text style={{ color: animatedColor }}>
                        {`${Math.floor(remainingTime / 60)}:${remainingTime % 60}`}
                      </Animated.Text>
                    )}
                  </CountdownCircleTimer>
                </View>
                <View style={styles.ques}>
                  <Text style={styles.index}>{question[this.state.index].question}</Text>
                </View>
              </View>

              <ButtonContainer>
                {question[this.state.index].answers.map((item) => (
                  <View style={styles.buttonContainer}>
                    {this.renderData(item, question[this.state.index].question_id)}
                  </View>
                ))}
              </ButtonContainer>

            </ScrollView>
          )}
        </View>
        <StatusBar />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    GetListById: state.GetListById,
  }
};

export default connect(mapStateToProps)(Quiz);



