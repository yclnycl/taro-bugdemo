import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components";

export default class Test extends Component{
  componentDidMount() {
    console.log(123);
  }

  render() {
    return (
      <View>this is swan app</View>
    )
  }
}
