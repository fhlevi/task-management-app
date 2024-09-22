import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Wrapper from '@/components/molecules/Wrapper';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

const {width} = Dimensions.get('window');

const FirstRoute = () => <Text>Content</Text>;

const _renderScene = SceneMap({
  inprogress: FirstRoute,
  weekly: FirstRoute,
  daily: FirstRoute,
  team: FirstRoute,
});

const HomeScreen = ({navigation}: any) => {
  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();

  const [routes] = React.useState([
    {key: 'inprogress', title: 'In Progress'},
    {key: 'weekly', title: 'Weekly Task'},
    {key: 'daily', title: 'Daily Task'},
    {key: 'team', title: 'Team Task'},
  ]);

  const _renderTabBar = (tabProps: any) => {
    return (
      <TabBar
        {...tabProps}
        indicatorStyle={{backgroundColor: '#437AF8'}}
        style={{backgroundColor: '#fff', width: 'auto'}}
        renderLabel={({route: tabRoute, focused}) => (
          <Text
            style={{
              color: focused ? '#437AF8' : '#000000',
              opacity: focused ? 1 : 0.5,
            }}>
            {tabRoute.title}
          </Text>
        )}
      />
    );
  };

  return (
    <Wrapper>
      <View style={[styles.header, styles.row]}>
        <Image
          style={styles.avatar}
          source={require('@/src/assets/images/avatar.jpeg')}
        />
        <View style={{left: 30}}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>John Doe</Text>
        </View>

        <TouchableOpacity style={styles.buttonSearch}>
          <Image source={require('@/src/assets/icons/search.png')} />
        </TouchableOpacity>
      </View>

      <TabView
        renderTabBar={_renderTabBar}
        navigationState={{index, routes}}
        renderScene={_renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  avatar: {
    height: 62,
    width: 62,
    borderRadius: 35,
    left: 16,
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 19,
    fontFamily: 'Kurale-Regular',
    color: '#000',
  },
  welcome: {
    fontSize: 16,
    fontFamily: 'Kurale-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSearch: {
    borderWidth: 1,
    borderColor: '#C3D4FC',
    borderRadius: 36,
    right: 16,
    position: 'absolute',
    padding: 10,
  },
  header: {
    height: 98,
    width: width,
    alignItems: 'center',
    position: 'relative',
  },
});
