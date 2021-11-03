import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  const items: string[] = [
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
  ];
  const [arr, setArr] = useState<{left: number; top: number}[]>([]);

  //const [rotation, setrotation] = useState(0)

  const count = 10;
  const radius = 500 / 2;
  const itemRadius = 20 / 2;
  const spacing = 360 / count;
  let rotation = 0;

  useEffect(() => {
    try {
      const test: {left: number; top: number}[] = [];
      for (let i = 0; i < items.length; i++) {
        const l = Math.cos((rotation * Math.PI) / 180) * radius - itemRadius;
        const t = Math.sin((rotation * Math.PI) / 180) * radius - itemRadius;
        const left = l + radius;
        const top = t + radius;
        rotation += spacing;
        test.push({left, top});
      }
      setArr(test);
    } catch (error) {
      console.warn(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text>Circle</Text>
      </View>
      <View>
        {arr?.length &&
          items.map((item, index) => (
            <Text
              style={[
                styles.item,
                {
                  left: arr[index].left,
                  top: arr[index].top,
                },
              ]}
              key={index}>
              {item || '?'}
            </Text>
          ))}
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 500,
    height: 500,
    top: 20,
    left: 100,
  },
  circle: {
    backgroundColor: 'gray',
    borderWidth: 1,
    position: 'absolute',
    borderColor: 'green',
    borderRadius: 1000,
    width: 500,
    height: 500,
  },
  item: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'cyan',
  },
});
