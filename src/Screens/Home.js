import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {windowHeight, windowWidth} from '../Themes/CommonStyle';
import Colors from '../Themes/Colors';
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';
import {GET_USER_Email} from '../Services/services';

const Home = ({navigation}) => {
  const [currentLoc, setCurrentLoc] = useState();
  const [userEmail, setUserEmail] = useState(null);

  const merchantsList = [
    {
      id: 1,
      first_name: 'Thelma',
      last_name: 'Laidlow',
      email: 'tlaidlow0@cnn.com',
      gender: 'Female',
      phoneNumber: '6617033132',
      profile: 'https://picsum.photos/200/200?random=1',
    },
    {
      id: 2,
      first_name: 'Ruperto',
      last_name: 'Warmisham',
      email: 'rwarmisham1@twitter.com',
      gender: 'Male',
      phoneNumber: '3524009980',
      profile: 'https://picsum.photos/200/200?random=2',
    },
    {
      id: 3,
      first_name: 'Shurwood',
      last_name: 'Purseglove',
      email: 'spurseglove2@wisc.edu',
      gender: 'Male',
      phoneNumber: '6965918381',
      profile: 'https://picsum.photos/200/200?random=3',
    },
    {
      id: 4,
      first_name: 'Chandal',
      last_name: 'Willgoss',
      email: 'cwillgoss3@usa.gov',
      gender: 'Female',
      phoneNumber: '3702085416',
      profile: 'https://picsum.photos/200/200?random=4',
    },
    {
      id: 5,
      first_name: 'Hali',
      last_name: 'Chesson',
      email: 'hchesson4@ft.com',
      gender: 'Female',
      phoneNumber: '5747881221',
      profile: 'https://picsum.photos/200/200?random=5',
    },
    {
      id: 6,
      first_name: 'Lamar',
      last_name: 'Godon',
      email: 'lgodon5@blogs.com',
      gender: 'Male',
      phoneNumber: '0926601865',
      profile: 'https://picsum.photos/200/200?random=6',
    },
    {
      id: 7,
      first_name: 'Benedikta',
      last_name: 'Scarse',
      email: 'bscarse6@shinystat.com',
      gender: 'Female',
      phoneNumber: '2707069817',
      profile: 'https://picsum.photos/200/200?random=7',
    },
    {
      id: 8,
      first_name: 'Eugine',
      last_name: 'Rosenbaum',
      email: 'erosenbaum7@flickr.com',
      gender: 'Female',
      phoneNumber: '0845904027',
      profile: 'https://picsum.photos/200/200?random=8',
    },
    {
      id: 9,
      first_name: 'Mina',
      last_name: 'Barajas',
      email: 'mbarajas8@chicagotribune.com',
      gender: 'Agender',
      phoneNumber: '4305609142',
      profile: 'https://picsum.photos/200/200?random=9',
    },
    {
      id: 10,
      first_name: 'Edeline',
      last_name: 'Grantham',
      email: 'egrantham9@surveymonkey.com',
      gender: 'Female',
      phoneNumber: '3517287768',
      profile: 'https://picsum.photos/200/200?random=10',
    },
    {
      id: 11,
      first_name: 'Virge',
      last_name: 'Spreadbury',
      email: 'vspreadburya@paypal.com',
      gender: 'Male',
      phoneNumber: '9181617305',
      profile: 'https://picsum.photos/200/200?random=11',
    },
    {
      id: 12,
      first_name: 'Andrea',
      last_name: 'Blevin',
      email: 'ablevinb@geocities.jp',
      gender: 'Female',
      phoneNumber: '8890335610',
      profile: 'https://picsum.photos/200/200?random=12',
    },
    {
      id: 13,
      first_name: 'Caitrin',
      last_name: 'Coleby',
      email: 'ccolebyc@flickr.com',
      gender: 'Female',
      phoneNumber: '8794091277',
      profile: 'https://picsum.photos/200/200?random=13',
    },
    {
      id: 14,
      first_name: 'Chandler',
      last_name: 'Sandy',
      email: 'csandyd@tripadvisor.com',
      gender: 'Genderqueer',
      phoneNumber: '6541765766',
      profile: 'https://picsum.photos/200/200?random=14',
    },
    {
      id: 15,
      first_name: 'Orrin',
      last_name: 'Iannetti',
      email: 'oiannettie@sphinn.com',
      gender: 'Male',
      phoneNumber: '2717679146',
      profile: 'https://picsum.photos/200/200?random=15',
    },
    {
      id: 16,
      first_name: 'Lloyd',
      last_name: 'Boshard',
      email: 'lboshardf@digg.com',
      gender: 'Male',
      phoneNumber: '1830356739',
      profile: 'https://picsum.photos/200/200?random=16',
    },
    {
      id: 17,
      first_name: 'Lindsay',
      last_name: 'Jays',
      email: 'ljaysg@walmart.com',
      gender: 'Female',
      phoneNumber: '6088108584',
      profile: 'https://picsum.photos/200/200?random=17',
    },
    {
      id: 18,
      first_name: 'Reade',
      last_name: 'Laming',
      email: 'rlamingh@4shared.com',
      gender: 'Male',
      phoneNumber: '1548914703',
      profile: 'https://picsum.photos/200/200?random=18',
    },
    {
      id: 19,
      first_name: 'Elicia',
      last_name: 'Oxx',
      email: 'eoxxi@wp.com',
      gender: 'Female',
      phoneNumber: '0164759697',
      profile: 'https://picsum.photos/200/200?random=19',
    },
    {
      id: 20,
      first_name: 'Erik',
      last_name: 'Woodrooffe',
      email: 'ewoodrooffej@slashdot.org',
      gender: 'Male',
      phoneNumber: '8431090634',
      profile: 'https://picsum.photos/200/200?random=20',
    },
    {
      id: 21,
      first_name: 'Lexie',
      last_name: 'Kilminster',
      email: 'lkilminsterk@weather.com',
      gender: 'Female',
      phoneNumber: '8057291206',
      profile: 'https://picsum.photos/200/200?random=21',
    },
    {
      id: 22,
      first_name: 'Margret',
      last_name: 'Butland',
      email: 'mbutlandl@globo.com',
      gender: 'Female',
      phoneNumber: '0034024743',
      profile: 'https://picsum.photos/200/200?random=22',
    },
    {
      id: 23,
      first_name: 'Barty',
      last_name: 'McKeggie',
      email: 'bmckeggiem@sun.com',
      gender: 'Male',
      phoneNumber: '0773246940',
      profile: 'https://picsum.photos/200/200?random=23',
    },
    {
      id: 24,
      first_name: 'Wylma',
      last_name: 'Gonet',
      email: 'wgonetn@craigslist.org',
      gender: 'Female',
      phoneNumber: '5109464707',
      profile: 'https://picsum.photos/200/200?random=24',
    },
    {
      id: 25,
      first_name: 'Aguie',
      last_name: 'MacVagh',
      email: 'amacvagho@deviantart.com',
      gender: 'Male',
      phoneNumber: '9215012532',
      profile: 'https://picsum.photos/200/200?random=25',
    },
    {
      id: 26,
      first_name: 'Natalee',
      last_name: 'Bowles',
      email: 'nbowlesp@pagesperso-orange.fr',
      gender: 'Female',
      phoneNumber: '5443383574',
      profile: 'https://picsum.photos/200/200?random=26',
    },
    {
      id: 27,
      first_name: 'Der',
      last_name: 'Simmings',
      email: 'dsimmingsq@dell.com',
      gender: 'Male',
      phoneNumber: '5271282163',
      profile: 'https://picsum.photos/200/200?random=27',
    },
    {
      id: 28,
      first_name: 'Clifford',
      last_name: 'Polendine',
      email: 'cpolendiner@amazon.co.uk',
      gender: 'Male',
      phoneNumber: '6447932301',
      profile: 'https://picsum.photos/200/200?random=28',
    },
    {
      id: 29,
      first_name: 'Collette',
      last_name: 'Weildish',
      email: 'cweildishs@homestead.com',
      gender: 'Agender',
      phoneNumber: '2136432621',
      profile: 'https://picsum.photos/200/200?random=29',
    },
    {
      id: 30,
      first_name: 'Nikolia',
      last_name: 'Studdal',
      email: 'nstuddalt@dailymotion.com',
      gender: 'Female',
      phoneNumber: '1116829142',
      profile: 'https://picsum.photos/200/200?random=30',
    },
    {
      id: 31,
      first_name: 'Fey',
      last_name: 'Mellish',
      email: 'fmellishu@cnbc.com',
      gender: 'Female',
      phoneNumber: '4135417884',
      profile: 'https://picsum.photos/200/200?random=31',
    },
    {
      id: 32,
      first_name: 'Cort',
      last_name: 'Barby',
      email: 'cbarbyv@reuters.com',
      gender: 'Male',
      phoneNumber: '9634677347',
      profile: 'https://picsum.photos/200/200?random=32',
    },
    {
      id: 33,
      first_name: 'Grantham',
      last_name: 'Bennedsen',
      email: 'gbennedsenw@ifeng.com',
      gender: 'Male',
      phoneNumber: '9903538766',
      profile: 'https://picsum.photos/200/200?random=33',
    },
    {
      id: 34,
      first_name: 'Mendy',
      last_name: 'de Merida',
      email: 'mdemeridax@cbsnews.com',
      gender: 'Male',
      phoneNumber: '5405409073',
      profile: 'https://picsum.photos/200/200?random=34',
    },
    {
      id: 35,
      first_name: 'Dena',
      last_name: 'Shewry',
      email: 'dshewryy@wunderground.com',
      gender: 'Female',
      phoneNumber: '6209012469',
      profile: 'https://picsum.photos/200/200?random=35',
    },
    {
      id: 36,
      first_name: 'Mechelle',
      last_name: 'Millgate',
      email: 'mmillgatez@nps.gov',
      gender: 'Female',
      phoneNumber: '0676345778',
      profile: 'https://picsum.photos/200/200?random=36',
    },
    {
      id: 37,
      first_name: 'Geoff',
      last_name: 'Seydlitz',
      email: 'gseydlitz10@geocities.jp',
      gender: 'Polygender',
      phoneNumber: '9015258643',
      profile: 'https://picsum.photos/200/200?random=37',
    },
    {
      id: 38,
      first_name: 'Lishe',
      last_name: 'Liddy',
      email: 'lliddy11@woothemes.com',
      gender: 'Female',
      phoneNumber: '0036217190',
      profile: 'https://picsum.photos/200/200?random=38',
    },
    {
      id: 39,
      first_name: 'Valeria',
      last_name: 'Larkworthy',
      email: 'vlarkworthy12@merriam-webster.com',
      gender: 'Female',
      phoneNumber: '6055411601',
      profile: 'https://picsum.photos/200/200?random=39',
    },
    {
      id: 40,
      first_name: 'Sergeant',
      last_name: 'Whyborn',
      email: 'swhyborn13@spotify.com',
      gender: 'Male',
      phoneNumber: '2860731474',
      profile: 'https://picsum.photos/200/200?random=40',
    },
  ];

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    getLocation();
  }, [currentLoc]);

  const getUserDetails = async () => {
    let uEmail = await GET_USER_Email();
    setUserEmail(uEmail);
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setCurrentLoc(position);
          },
          error => {
            setCurrentLoc(false);
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
          },
        );
      }
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.merchantCardContainer}
      onPress={() => navigation.navigate('marchentDetails', item)}>
      <Image source={{uri: item?.profile}} style={styles.profileImg} />
      <View style={styles.merchantCardDetailsContainer}>
        <Text style={styles.text}>
          {item?.first_name} {item?.last_name}
        </Text>
        <Text style={styles.text}>{item?.gender}</Text>
        <Text style={styles.text}>{item?.phoneNumber}</Text>
        <Text style={styles.text}>{item?.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome Back</Text>
      <Text style={styles.userEmailText}>{userEmail}</Text>

      <Text style={styles.title}>My Location</Text>
      {currentLoc ? (
        <>
          <Text style={styles.text}>Lat: {currentLoc?.coords?.latitude}</Text>
          <Text style={styles.text}>Long: {currentLoc?.coords?.longitude}</Text>
        </>
      ) : (
        <Text style={styles.text}>We don't have Location Permission</Text>
      )}
      <Text style={styles.title}>Merchants Name</Text>
      <FlatList data={merchantsList} renderItem={renderItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: windowHeight,
    backgroundColor: Colors.white,
  },
  welcomeTitle: {
    color: Colors.blue,
    fontSize: FontSize.fontSize24,
    fontWeight: FontsWeights.FW700,
    fontFamily: FontsFamilies.serif,
    marginTop: 15,
  },
  userEmailText: {
    color: Colors.black,
    fontFamily: FontsFamilies.serif,
    letterSpacing: 0.5,
  },
  title: {
    color: Colors.blue,
    fontSize: FontSize.fontSize18,
    fontWeight: FontsWeights.FW700,
    fontFamily: FontsFamilies.serif,
    marginTop: 15,
  },
  text: {
    color: Colors.black,
    fontFamily: FontsFamilies.serif,
    letterSpacing: 0.5,
    paddingVertical: 3,
  },
  merchantCardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.whiteSmoke,
    marginTop: 15,
    padding: 5,
    borderRadius: 10,
    elevation: 3,
  },
  profileImg: {
    backgroundColor: Colors.error,
    height: windowWidth * 0.25,
    width: windowWidth * 0.25,
    borderRadius: 10,
  },
  merchantCardDetailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default Home;
