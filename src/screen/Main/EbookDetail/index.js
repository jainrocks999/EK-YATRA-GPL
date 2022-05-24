import React,{useState} from 'react';
import { View,Text ,Image,TouchableOpacity,PermissionsAndroid,Platform, Alert,TextInput,Keyboard} from 'react-native';
import styles from './styles';
import StatusBar from '../../../component/StatusBar';
import Pdf from 'react-native-pdf';
import colors from '../../../component/colors';
import { useNavigation } from '@react-navigation/native';
import RNFetchBlob from "rn-fetch-blob";
const EbookDetail = ({route}) => {
          const data1=route.params
          console.log('this is route.params',route.params);
          const navigation=useNavigation('')
          const [page,setPage]=useState('')
          const [total,setTotal]=useState('')
          const [value,setValue]=useState(pageNo)
          const [pageNo,setPageNo]=useState(1)
          const source = Platform.OS === 'android' ? { uri: route.params.pdf } : { uri: "bundle-assets://terapanth_ka_itihaas_part_1.pdf" }
         const actualDownload = () => {
          const { dirs } = RNFetchBlob.fs;
          const configOptions = Platform.select({
              ios: {
                  fileCache:true,
                  title: `terapanth_ka_itihaas.pdf`,
                  path: `${dirs.DocumentDir}/terapanth_ka_itihaas.pdf`,
                  appendExt: 'pdf',
              },
              android: {
                fileCache: true,
                addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                mediaScannable: true,
                title: `${route.params.title}.pdf`,
                path: `${dirs.DownloadDir}/${route.params.title}.pdf`,
                },
              },
          });
      
          RNFetchBlob.config(configOptions)
              .fetch('GET', route.params.pdf, {})
              .then((res) => {
               
              })
              .catch((e) => {
                  console.log('The file saved to ERROR', e.message)
              });
      }
         
        const downloadFile = async() => {
          if (Platform.OS=='ios') {
            actualDownload();
          } else {
            try {
              const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              actualDownload();
              } else {
                Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
              }
            } catch (err) {
              console.warn(err);
            } 
          }
       }
       const findPage=()=>{
         if(value<=0){
          Alert.alert('Not Found!');
         }
        else if(value>total){
          Alert.alert('Not Found!');
         }
         else{
          setPageNo(parseInt(value))
          Keyboard.dismiss()
          setValue('')
         }
       }
          return (

            <View style={styles.container}>
              <View style={[styles.main, { backgroundColor: colors.red, }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image style={styles.image}
                    source={require('../../../assets/Images/arrow1.png')} />
                </TouchableOpacity>
                <View >
                  <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'Poppins-SemiBold',
                  }}>{route.params.title}</Text>
                </View>
              {Platform.OS=='android'?<TouchableOpacity onPress={()=>downloadFile()}>
                <Image source={require('../../../assets/Images/download.png')}/>
                </TouchableOpacity>:<View/>}
              </View>
              <View style={styles.second}>
                <View style={styles.main1}>
                  <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages, filePath) => {
                      console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                     setPage(page)

                     setTotal(numberOfPages)
                    }}
                    onError={(error) => {
                      console.log(error);
                    }}
                    style={styles.pdf}
                    enablePaging={true}
                     page={pageNo}
                    horizontal={true}
                  />
                </View>
              </View>
         
              <View 
              style={styles.bottom}>
                
                <Text style={{color:'#fff',fontSize:14}}>{`${page} / ${total}`}</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:40,height:30,backgroundColor:'#fff',justifyContent:'center',borderRadius:5}}>
                <TextInput
                 value={value}
                 style={{height:40,color:colors.red}}
                 onChangeText={(text)=>setValue(text)}
                 keyboardType={'numeric'}
                 maxLength={4}
                />
                </View>
                <TouchableOpacity 
                style={{paddingVertical:2,marginLeft:10,paddingHorizontal:7,backgroundColor:'#fff',borderRadius:5,alignItems:'center',justifyContent:'center'}} onPress={()=> downloadFile()}>
                <Text  onPress={()=>findPage()} style={{color:colors.red,fontSize:16,fontFamily:'Poppins-Medium'}}>Go</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>page==1?Alert.alert('Sorry! No Previous Page'): setPageNo(pageNo-1)}>
                <Image style={{width:30,height:30,marginRight:20}} source={require('../../../assets/Images/left-icon-arrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>page==total?Alert.alert('Sorry! Page Complete'):setPageNo(pageNo+1)}>
                <Image style={{width:30,height:30}} source={require('../../../assets/Images/right-icon-arrow.png')}/>
                </TouchableOpacity>
                </View>
              </View>
              <StatusBar />
            </View>
  )
}
export default EbookDetail;