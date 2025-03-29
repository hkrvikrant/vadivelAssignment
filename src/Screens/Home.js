import React, {useEffect, useState} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {windowHeight} from '../Themes/CommonStyle';
import Colors from '../Themes/Colors';
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';
import {GET_USER_Email} from '../Services/services';

const Home = ({navigation}) => {
  const [currentLoc, setCurrentLoc] = useState();
  const [userEmail, setUserEmail] = useState(null);

  const merchantsList = [
    {
      id: 1,
      first_name: 'Ellswerth',
      last_name: 'Flewitt',
      email: 'eflewitt0@cam.ac.uk',
      gender: 'Male',
    },
    {
      id: 2,
      first_name: 'Kalli',
      last_name: 'Tofful',
      email: 'ktofful1@reference.com',
      gender: 'Female',
    },
    {
      id: 3,
      first_name: 'Eyde',
      last_name: "D'Elia",
      email: 'edelia2@4shared.com',
      gender: 'Female',
    },
    {
      id: 4,
      first_name: 'Lonny',
      last_name: "O'Grady",
      email: 'logrady3@soundcloud.com',
      gender: 'Polygender',
    },
    {
      id: 5,
      first_name: 'Lindi',
      last_name: 'Lockton',
      email: 'llockton4@cisco.com',
      gender: 'Agender',
    },
    {
      id: 6,
      first_name: 'Stephenie',
      last_name: 'Silverlock',
      email: 'ssilverlock5@cdbaby.com',
      gender: 'Bigender',
    },
    {
      id: 7,
      first_name: 'Willamina',
      last_name: 'Leap',
      email: 'wleap6@businessinsider.com',
      gender: 'Female',
    },
    {
      id: 8,
      first_name: 'Janice',
      last_name: 'Demangeon',
      email: 'jdemangeon7@1und1.de',
      gender: 'Female',
    },
    {
      id: 9,
      first_name: 'Spencer',
      last_name: 'Josiah',
      email: 'sjosiah8@issuu.com',
      gender: 'Male',
    },
    {
      id: 10,
      first_name: 'Abie',
      last_name: 'Doll',
      email: 'adoll9@ted.com',
      gender: 'Male',
    },
    {
      id: 11,
      first_name: 'Gus',
      last_name: 'McAneny',
      email: 'gmcanenya@epa.gov',
      gender: 'Male',
    },
    {
      id: 12,
      first_name: 'Hannis',
      last_name: "O'Sesnane",
      email: 'hosesnaneb@ibm.com',
      gender: 'Non-binary',
    },
    {
      id: 13,
      first_name: 'Auberon',
      last_name: 'Terney',
      email: 'aterneyc@hugedomains.com',
      gender: 'Male',
    },
    {
      id: 14,
      first_name: 'Ashleigh',
      last_name: 'Handaside',
      email: 'ahandasided@spotify.com',
      gender: 'Female',
    },
    {
      id: 15,
      first_name: 'Fletch',
      last_name: 'Hullyer',
      email: 'fhullyere@google.co.uk',
      gender: 'Male',
    },
    {
      id: 16,
      first_name: 'Gerri',
      last_name: 'MacGillreich',
      email: 'gmacgillreichf@quantcast.com',
      gender: 'Female',
    },
    {
      id: 17,
      first_name: 'Tedi',
      last_name: 'Atyea',
      email: 'tatyeag@irs.gov',
      gender: 'Female',
    },
    {
      id: 18,
      first_name: 'Baldwin',
      last_name: 'Hiscocks',
      email: 'bhiscocksh@wikispaces.com',
      gender: 'Male',
    },
    {
      id: 19,
      first_name: 'Biddy',
      last_name: 'Johanning',
      email: 'bjohanningi@lycos.com',
      gender: 'Female',
    },
    {
      id: 20,
      first_name: 'Stefania',
      last_name: 'Waldie',
      email: 'swaldiej@admin.ch',
      gender: 'Female',
    },
    {
      id: 21,
      first_name: 'Fern',
      last_name: 'Yurin',
      email: 'fyurink@miitbeian.gov.cn',
      gender: 'Female',
    },
    {
      id: 22,
      first_name: 'Eimile',
      last_name: 'Frazer',
      email: 'efrazerl@posterous.com',
      gender: 'Female',
    },
    {
      id: 23,
      first_name: 'Valerye',
      last_name: 'Toll',
      email: 'vtollm@upenn.edu',
      gender: 'Female',
    },
    {
      id: 24,
      first_name: 'Richy',
      last_name: 'State',
      email: 'rstaten@yelp.com',
      gender: 'Male',
    },
    {
      id: 25,
      first_name: 'Merv',
      last_name: 'Offell',
      email: 'moffello@google.de',
      gender: 'Male',
    },
    {
      id: 26,
      first_name: 'Sheila-kathryn',
      last_name: 'Field',
      email: 'sfieldp@tripod.com',
      gender: 'Female',
    },
    {
      id: 27,
      first_name: 'Barnett',
      last_name: 'Haselwood',
      email: 'bhaselwoodq@studiopress.com',
      gender: 'Male',
    },
    {
      id: 28,
      first_name: 'Ximenes',
      last_name: 'Huke',
      email: 'xhuker@yelp.com',
      gender: 'Male',
    },
    {
      id: 29,
      first_name: 'Paulita',
      last_name: 'Lambdin',
      email: 'plambdins@alibaba.com',
      gender: 'Bigender',
    },
    {
      id: 30,
      first_name: 'Daloris',
      last_name: 'Spini',
      email: 'dspinit@topsy.com',
      gender: 'Female',
    },
    {
      id: 31,
      first_name: 'Sarine',
      last_name: 'Haggett',
      email: 'shaggettu@rakuten.co.jp',
      gender: 'Female',
    },
    {
      id: 32,
      first_name: 'Benedicto',
      last_name: 'Purvey',
      email: 'bpurveyv@arizona.edu',
      gender: 'Male',
    },
    {
      id: 33,
      first_name: 'Adele',
      last_name: 'Radsdale',
      email: 'aradsdalew@prweb.com',
      gender: 'Female',
    },
    {
      id: 34,
      first_name: 'Kurt',
      last_name: 'Rogez',
      email: 'krogezx@army.mil',
      gender: 'Male',
    },
    {
      id: 35,
      first_name: 'Jordon',
      last_name: 'Hindenberger',
      email: 'jhindenbergery@liveinternet.ru',
      gender: 'Male',
    },
    {
      id: 36,
      first_name: 'Elyssa',
      last_name: 'Marchi',
      email: 'emarchiz@cbsnews.com',
      gender: 'Female',
    },
    {
      id: 37,
      first_name: 'Brannon',
      last_name: 'Woolen',
      email: 'bwoolen10@cbsnews.com',
      gender: 'Male',
    },
    {
      id: 38,
      first_name: 'Martguerita',
      last_name: 'Jacobsson',
      email: 'mjacobsson11@w3.org',
      gender: 'Female',
    },
    {
      id: 39,
      first_name: 'Rebecca',
      last_name: 'April',
      email: 'rapril12@nasa.gov',
      gender: 'Female',
    },
    {
      id: 40,
      first_name: 'Zulema',
      last_name: 'Willoughway',
      email: 'zwilloughway13@nba.com',
      gender: 'Female',
    },
    {
      id: 41,
      first_name: 'Forbes',
      last_name: 'Vannuccinii',
      email: 'fvannuccinii14@slideshare.net',
      gender: 'Male',
    },
    {
      id: 42,
      first_name: 'Valenka',
      last_name: 'Mindenhall',
      email: 'vmindenhall15@studiopress.com',
      gender: 'Female',
    },
    {
      id: 43,
      first_name: 'Heddi',
      last_name: 'Lias',
      email: 'hlias16@nps.gov',
      gender: 'Female',
    },
    {
      id: 44,
      first_name: 'Deirdre',
      last_name: 'Churchman',
      email: 'dchurchman17@mysql.com',
      gender: 'Female',
    },
    {
      id: 45,
      first_name: 'Hans',
      last_name: 'Filipson',
      email: 'hfilipson18@storify.com',
      gender: 'Male',
    },
    {
      id: 46,
      first_name: 'Chester',
      last_name: 'Ibbs',
      email: 'cibbs19@yellowbook.com',
      gender: 'Male',
    },
    {
      id: 47,
      first_name: 'Erinn',
      last_name: 'Kealey',
      email: 'ekealey1a@washingtonpost.com',
      gender: 'Female',
    },
    {
      id: 48,
      first_name: 'Piotr',
      last_name: 'Breed',
      email: 'pbreed1b@sourceforge.net',
      gender: 'Male',
    },
    {
      id: 49,
      first_name: 'Shirlene',
      last_name: 'Maun',
      email: 'smaun1c@cdbaby.com',
      gender: 'Female',
    },
    {
      id: 50,
      first_name: 'Gary',
      last_name: 'Zorro',
      email: 'gzorro1d@cdbaby.com',
      gender: 'Male',
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
    <Text
      style={styles.text}
      onPress={() =>
        navigation.navigate('marchentDetails', {
          firstName: item?.first_name,
          lastName: item?.last_name,
        })
      }>
      {item?.first_name} {item?.last_name}
    </Text>
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
});

export default Home;
